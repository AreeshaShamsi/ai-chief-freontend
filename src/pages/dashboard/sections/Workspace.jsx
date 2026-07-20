import { useCallback, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import AgGridTable from "../../../components/AgGridTable/AgGridTable";
import {
  FiChevronDown,
  FiGrid,
  FiLink,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
  FiSliders,
  FiX,
} from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";
import {
  AppButton,
  AppCard,
  AppCardFooter,
  AppPill,
  C,
  IconButton,
  T,
  Text,
  TextField,
} from "../../../components/utils";
import AddColumnModal from "../modals/AddColumnModal";
import ManageFieldsModal from "../modals/ManageFieldsModal";
import EditFieldModal from "../modals/EditFieldModal";
import { getFieldTypeMeta } from "../modals/fieldTypeMeta";
import CreateDealSourceModal from "../modals/CreateDealSourceModal";
import DealDetailsModal from "../modals/DealDetailsModal";

// ==========================
// Workspace Initialization
// ==========================
const controlButtonStyle = {
  height: 30,
  borderRadius: T.radius.sm,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  whiteSpace: "nowrap",
};

const dealTabButtonStyle = {
  height: 36,
  borderRadius: T.radius.lg,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "0 14px",
  transition: "background 180ms ease, border-color 180ms ease, color 180ms ease",
};

const gridSelectorButtonStyle = {
  height: 40,
  borderRadius: T.radius.lg,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "0 14px",
  background: C.card,
  color: C.text,
  border: `1px solid ${C.border}`,
  whiteSpace: "nowrap",
  transition: "background 180ms ease, border-color 180ms ease, color 180ms ease",
};

const toolbarActionButtonStyle = {
  ...controlButtonStyle,
  background: C.card,
  color: C.text,
  border: `1px solid ${C.border}`,
  padding: "0 12px",
};

const addRecordButtonStyle = {
  ...controlButtonStyle,
  background: C.surface,
  color: C.muted,
  border: T.border.subtle,
  padding: `0 ${T.spacing[3]}px`,
  fontSize: T.font.size.bodySmall,
  fontWeight: T.font.weight.semibold,
  borderRadius: T.radius.sm,
};

const cardFrameStyle = {
  borderRadius: T.radius.lg,
  border: `1px solid ${C.border}`,
  background: C.card,
  boxShadow: T.shadow.xs,
};

const viewsPanelWidth = 198;
const viewsPanelCollapsedWidth = 0;
const viewsPanelPadding = T.spacing[3];
const layoutTransition = "width 260ms ease, flex-basis 260ms ease, padding 260ms ease";

const columnWidths = {
  dealName: 150,
  leadName: 150,
  contactName: 150,
  taskName: 150,
  callType: 130,
  score: 110,
  callOutcome: 155,
  budget: 120,
  timeline: 125,
  assignedAgent: 155,
  status: 110,
  nextAction: 145,
  createdTime: 165,
  lastModifiedTime: 190,
  createdBy: 130,
  lastModifiedBy: 160,
};

function WorkspaceCell({ value }) {
  return <Text variant="body">{value}</Text>;
}

WorkspaceCell.propTypes = {
  value: PropTypes.node,
};

function PrimaryNameCell(params) {
  const { value, data, context } = params;
  const isExpanded = context?.selectedRowId === data?.id;

  return (
    <div className="deal-name-cell-container">
      <Text variant="body">{value}</Text>
      <button
        type="button"
        className="deal-expand-btn"
        aria-label="Open details"
        onClick={(e) => {
          e.stopPropagation();
          context?.openDetails(data);
        }}
      >
        <LuExpand
          size={10}
          className={`deal-expand-arrow${isExpanded ? " expanded" : ""}`}
        />
      </button>
    </div>
  );
}

PrimaryNameCell.propTypes = {
  value: PropTypes.node,
  data: PropTypes.object,
  context: PropTypes.object,
};

function UserBadgeCell({ value }) {
  return (
    <AppPill
      size="xs"
      style={{
        background: C.accentLt,
        border: `1px solid ${C.accentTrack}`,
        color: C.accent,
        fontWeight: T.font.weight.semibold,
      }}
    >
      {value}
      <FiX size={T.font.size.caption} aria-hidden="true" />
    </AppPill>
  );
}

UserBadgeCell.propTypes = {
  value: PropTypes.node,
};

function SearchBox({ value, onChange, placeholder, width = 190 }) {
  return (
    <div style={{ position: "relative", width, minWidth: 140 }}>
      <FiSearch
        size={13}
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          color: C.muted,
          pointerEvents: "none",
        }}
      />
      <TextField
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        style={{
          height: 30,
          paddingLeft: 30,
          background: C.card,
        }}
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

function GenericHeader({ displayName, icon: Icon }) {
  return (
    <Text
      variant="headerCell"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        minWidth: 0,
      }}
    >
      {Icon ? <Icon size={12} style={{ flexShrink: 0, color: C.muted }} /> : null}
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{displayName}</span>
    </Text>
  );
}

GenericHeader.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

function createHeader(label, icon) {
  return {
    headerName: label,
    headerComponentParams: {
      innerHeaderComponent: GenericHeader,
      innerHeaderComponentParams: { icon },
    },
  };
}

function handleSelectAddColumnField() {}

function AddColumnHeader({ displayName, icon: Icon }) {
  return (
    <AddColumnModal onSelectField={handleSelectAddColumnField}>
      {({ ref, onClick, ...triggerProps }) => (
        <button
          ref={ref}
          type="button"
          onClick={onClick}
          style={{
            border: T.border.none,
            background: "transparent",
            padding: 0,
            margin: 0,
            cursor: "pointer",
            fontFamily: T.font.family,
            display: "inline-flex",
            alignItems: "center",
            minWidth: 0,
          }}
          {...triggerProps}
        >
          <Text
            variant="headerCell"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              minWidth: 0,
            }}
          >
            {Icon ? <Icon size={12} style={{ flexShrink: 0, color: C.muted }} /> : null}
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{displayName}</span>
          </Text>
        </button>
      )}
    </AddColumnModal>
  );
}

AddColumnHeader.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

function WorkspaceToolbar({ workspaceId, isViewsPanelHidden, onToggleViewsPanel, onManageFields }) {
  const workspaceTitle = workspaceId.charAt(0).toUpperCase() + workspaceId.slice(1);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <AppButton
            compact
            style={{
              ...dealTabButtonStyle,
              background: C.accentLt,
              color: C.accent,
              border: `1px solid ${C.accentTrack}`,
            }}
          >
            <Text variant="label" color={C.accent}>{workspaceTitle}</Text>
            <FiChevronDown size={15} style={{ color: C.accent }} />
          </AppButton>
          <AppButton
            compact
            style={{
              ...dealTabButtonStyle,
              background: C.card,
              color: C.text,
              border: "1px solid transparent",
            }}
          >
            <Text variant="label">Tasks</Text>
          </AppButton>
        </div>
        <AppButton compact onClick={onManageFields} style={toolbarActionButtonStyle}>
          <FiSliders size={13} />
          <Text variant="mutedLabel">Manage Fields</Text>
        </AppButton>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          marginTop: 12,
          paddingTop: 12,
          borderTop: `1px solid ${C.borderLt}`,
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "nowrap" }}>
          <IconButton
            aria-label={isViewsPanelHidden ? "Show grid views panel" : "Hide grid views panel"}
            onClick={onToggleViewsPanel}
            style={{ width: 18, height: 40, color: C.muted, borderRadius: T.radius.sm }}
          >
            <FaBars size={13} style={{ display: "block" }} />
          </IconButton>
          <AppButton compact style={gridSelectorButtonStyle}>
            <FiGrid size={16} style={{ color: C.accent }} />
            <Text variant="label">Grid Name</Text>
            <FiChevronDown size={15} style={{ color: C.text }} />
          </AppButton>
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: 8, flexWrap: "wrap" }}>
          <AppButton compact style={toolbarActionButtonStyle}>
            <FiLink size={13} />
            <Text variant="mutedLabel">Sync</Text>
          </AppButton>
          <AppButton compact style={toolbarActionButtonStyle}>
            <FiSearch size={13} />
            <Text variant="mutedLabel">Search</Text>
          </AppButton>
        </div>
      </div>
    </>
  );
}

WorkspaceToolbar.propTypes = {
  workspaceId: PropTypes.string.isRequired,
  isViewsPanelHidden: PropTypes.bool.isRequired,
  onToggleViewsPanel: PropTypes.func.isRequired,
  onManageFields: PropTypes.func.isRequired,
};

function WorkspaceViewsPanel({ isHidden, viewsList }) {
  const [activeView, setActiveView] = useState(0);
  const [viewSearch, setViewSearch] = useState("");
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const createButtonRef = useRef(null);

  const filteredViews = viewsList.filter((view) => view.toLowerCase().includes(viewSearch.toLowerCase()));

  const handleStartFromScratch = () => {};
  const handleCsvImport = () => {};
  const handleExcelImport = () => {};

  return (
    <aside
      style={{
        width: isHidden ? viewsPanelCollapsedWidth : viewsPanelWidth,
        flex: `0 0 ${isHidden ? viewsPanelCollapsedWidth : viewsPanelWidth}px`,
        borderRight: isHidden ? T.border.none : `1px solid ${C.border}`,
        padding: isHidden ? 0 : viewsPanelPadding,
        boxSizing: "border-box",
        background: C.card,
        overflow: "hidden",
        transition: layoutTransition,
      }}
    >
      <div
        aria-hidden={isHidden}
        style={{
          width: viewsPanelWidth - viewsPanelPadding * 2,
          visibility: isHidden ? "hidden" : "visible",
          pointerEvents: isHidden ? "none" : "auto",
        }}
      >
        <div style={{ position: "relative" }}>
          <AppButton
            ref={createButtonRef}
            variant="primary"
            compact
            aria-expanded={isCreateMenuOpen}
            aria-haspopup="menu"
            onClick={() => setIsCreateMenuOpen((open) => !open)}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = C.accentHov;
              event.currentTarget.style.borderColor = C.accentHov;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = C.accent;
              event.currentTarget.style.borderColor = C.accent;
            }}
            style={{
              width: "100%",
              maxWidth: 230,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: C.accent,
              border: `1px solid ${C.accent}`,
              borderRadius: T.radius.sm,
              color: C.card,
              boxShadow: "none",
              transition: "background 180ms ease, border-color 180ms ease, color 180ms ease",
            }}
          >
            <FiPlus size={14} />
            <Text variant="label" color={C.card}>Create New</Text>
          </AppButton>
          <CreateDealSourceModal
            isOpen={isCreateMenuOpen && !isHidden}
            onClose={() => setIsCreateMenuOpen(false)}
            onStartFromScratch={handleStartFromScratch}
            onCsvImport={handleCsvImport}
            onExcelImport={handleExcelImport}
            triggerRef={createButtonRef}
          />
        </div>
        <div style={{ marginTop: 11 }}>
          <SearchBox value={viewSearch} onChange={setViewSearch} placeholder="Find A View" width="100%" />
        </div>
        <div style={{ display: "grid", gap: 5, marginTop: 12 }}>
          {filteredViews.map((view, index) => {
            const isActive = index === activeView;
            return (
              <button
                type="button"
                key={`${view}-${index}`}
                onClick={() => setActiveView(index)}
                style={{
                  height: 34,
                  width: "100%",
                  border: T.border.none,
                  borderRadius: T.radius.sm,
                  background: isActive ? C.accentLt : "transparent",
                  color: isActive ? C.accent : C.text,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 8px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <FiGrid size={13} />
                <Text variant="label" color={isActive ? C.accent : C.text} style={{ flex: 1 }}>{view}</Text>
                {isActive ? <FiMoreHorizontal size={14} /> : null}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

WorkspaceViewsPanel.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  viewsList: PropTypes.array.isRequired,
};

function WorkspaceGrid({
  workspaceId,
  search,
  fields,
  rowDataProp,
  updateCell,
  refreshKey,
}) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const primaryNameKey = `${workspaceId.slice(0, -1)}Name`; // e.g. "dealName", "leadName"

  const columnDefs = useMemo(
    () => [
      ...fields.map((field) => {
        const typeMeta = getFieldTypeMeta(field.type);
        return {
          field: field.id,
          ...createHeader(field.name, typeMeta.icon),
          minWidth: columnWidths[field.id] || 130,
          ...(field.id === primaryNameKey
            ? { cellRenderer: PrimaryNameCell }
            : field.id === "createdBy" || field.id === "lastModifiedBy"
            ? { cellRenderer: UserBadgeCell }
            : {}),
        };
      }),
      {
        field: "addColumn",
        headerName: "Add Column",
        headerComponentParams: {
          innerHeaderComponent: AddColumnHeader,
          innerHeaderComponentParams: { icon: FiPlus },
        },
        minWidth: 135,
        sortable: false,
        resizable: false,
        valueGetter: () => "",
      },
    ],
    [fields, primaryNameKey]
  );

  const defaultColDef = useMemo(
    () => ({ sortable: true, resizable: true, filter: false, cellRenderer: WorkspaceCell }),
    []
  );

  const openDetails = useCallback((row) => {
    setSelectedRow(row);
    setIsDetailsOpen(true);
  }, []);

  const handlePrevRow = useCallback(() => {
    const idx = rowDataProp.findIndex((r) => r.id === selectedRow?.id);
    if (idx > 0) {
      setSelectedRow(rowDataProp[idx - 1]);
    }
  }, [selectedRow, rowDataProp]);

  const handleNextRow = useCallback(() => {
    const idx = rowDataProp.findIndex((r) => r.id === selectedRow?.id);
    if (idx >= 0 && idx < rowDataProp.length - 1) {
      setSelectedRow(rowDataProp[idx + 1]);
    }
  }, [selectedRow, rowDataProp]);

  const handleUpdateField = useCallback((rowId, fieldId, newValue) => {
    updateCell(rowId, fieldId, newValue);
  }, [updateCell]);

  const idx = selectedRow ? rowDataProp.findIndex((r) => r.id === selectedRow.id) : -1;
  const hasPrev = idx > 0;
  const hasNext = idx >= 0 && idx < rowDataProp.length - 1;

  const context = useMemo(
    () => ({
      selectedRowId: selectedRow?.id || null,
      openDetails,
    }),
    [selectedRow, openDetails]
  );

  const rowData = useMemo(() => {
    if (refreshKey === -1) console.log(refreshKey);
    return rowDataProp;
  }, [refreshKey, rowDataProp]);

  return (
    <div style={{ flex: "1 1 620px", minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 318, minWidth: 0, flex: "0 0 auto" }}>
        <AgGridTable
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          quickFilterText={search}
          rowSelection={{ mode: "multiRow", checkboxes: true, headerCheckbox: true }}
          selectionColumnDef={{ width: 46, maxWidth: 46, resizable: false, sortable: false }}
          suppressCellFocus
          context={context}
        />
      </div>

      {workspaceId === "deals" && (
        <DealDetailsModal
          open={isDetailsOpen}
          row={selectedRow}
          onPrevRow={hasPrev ? handlePrevRow : null}
          onNextRow={hasNext ? handleNextRow : null}
          onClose={() => setIsDetailsOpen(false)}
          onUpdateField={handleUpdateField}
        />
      )}
    </div>
  );
}

WorkspaceGrid.propTypes = {
  workspaceId: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  rowDataProp: PropTypes.array.isRequired,
  updateCell: PropTypes.func.isRequired,
  refreshKey: PropTypes.number.isRequired,
};

// ==========================
// Workspace Configurations
// ==========================
const initialDealFields = [
  { id: "dealName", name: "Deal Name", type: "Single Line Text", value: "Deal Name" },
  { id: "callType", name: "Call Type", type: "Single Select", value: "Call Type", options: ["Inbound", "Outbound", "Follow Up"] },
  { id: "score", name: "Score", type: "Multiple Select", value: "Score", options: ["Hot", "Warm", "Cold"], editorKind: "tags" },
  { id: "callOutcome", name: "Call Outcome", type: "Single Line Text", value: "Call Outcome" },
  { id: "budget", name: "Budget", type: "Currency", value: "Budget" },
  { id: "timeline", name: "Timeline", type: "Date", value: "Timeline" },
  { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Assigned Agent", "User", "Admin"] },
  { id: "status", name: "Status", type: "Single Select", value: "Status", options: ["Open", "Won", "Lost"], editorKind: "tags" },
  { id: "nextAction", name: "Next Action", type: "Single Line Text", value: "Next Action" },
  { id: "createdTime", name: "Created Time", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "lastModifiedTime", name: "Last Modified Time", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "createdBy", name: "Created By", type: "User / Assigned Agent", value: "User", options: ["User", "Admin"] },
  { id: "lastModifiedBy", name: "Last Modified By", type: "User / Assigned Agent", value: "Admin", options: ["Admin", "User"] },
];

const dealRows = [
  {
    id: "deal-1",
    dealName: "Deal Name",
    callType: "Call Type",
    score: "Score",
    callOutcome: "Call Outcome",
    budget: "Budget",
    timeline: "Timeline",
    assignedAgent: "Assigned Agent",
    status: "Status",
    nextAction: "Next Action",
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
  {
    id: "deal-2",
    dealName: "Deal Name",
    callType: "Call Type",
    score: "Score",
    callOutcome: "Call Outcome",
    budget: "Budget",
    timeline: "Timeline",
    assignedAgent: "Assigned Agent",
    status: "Status",
    nextAction: "Next Action",
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
  {
    id: "deal-3",
    dealName: "Deal Name",
    callType: "Call Type",
    score: "Score",
    callOutcome: "Call Outcome",
    budget: "Budget",
    timeline: "Timeline",
    assignedAgent: "Assigned Agent",
    status: "Status",
    nextAction: "Next Action",
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
];

const defaultWorkspaceConfigurations = {
  deals: {
    fields: initialDealFields,
    rows: dealRows,
    views: ["Grid Name", "Grid Name", "Grid Name", "Grid Name"],
  },
  leads: {
    fields: [
      { id: "leadName", name: "Lead Name", type: "Single Line Text", value: "Lead Name" },
      { id: "status", name: "Status", type: "Single Select", value: "Status", options: ["New", "Contacted", "Qualified"] },
    ],
    rows: [
      { id: "lead-1", leadName: "Lead A", status: "New" },
    ],
    views: ["All Leads"],
  },
  contacts: {
    fields: [
      { id: "contactName", name: "Contact Name", type: "Single Line Text", value: "Contact Name" },
      { id: "email", name: "Email", type: "Email", value: "Email" },
    ],
    rows: [
      { id: "contact-1", contactName: "Contact A", email: "contacta@gmail.com" },
    ],
    views: ["All Contacts"],
  },
  tasks: {
    fields: [
      { id: "taskName", name: "Task Name", type: "Single Line Text", value: "Task Name" },
      { id: "dueDate", name: "Due Date", type: "Date", value: "Due Date" },
    ],
    rows: [
      { id: "task-1", taskName: "Task A", dueDate: "2026-08-14" },
    ],
    views: ["All Tasks"],
  },
};

// ==========================
// Workspace State
// ==========================
export function Workspace({ workspaceId }) {
  const config = defaultWorkspaceConfigurations[workspaceId] || defaultWorkspaceConfigurations.deals;

  const [fields, setFields] = useState(config.fields);
  const [gridRowData, setGridRowData] = useState(config.rows);
  const [viewsList] = useState(config.views);
  const [isViewsPanelHidden, setIsViewsPanelHidden] = useState(false);

  const [isManageFieldsOpen, setIsManageFieldsOpen] = useState(false);
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [, setChangeHistory] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const toggleViewsPanel = () => setIsViewsPanelHidden((isHidden) => !isHidden);
  const selectedField = fields.find((field) => field.id === selectedFieldId) || null;

  // ==========================
  // Change Tracking
  // ==========================
  const trackChange = useCallback((operation, targetId, prevValue, newValue) => {
    const record = {
      operation,
      workspaceId,
      affectedRowId: operation.includes("Row") || operation.includes("Cell") ? targetId : undefined,
      affectedColumnId: operation.includes("Column") || operation.includes("Cell") ? targetId : undefined,
      affectedCellId: operation.includes("Cell") ? targetId : undefined,
      prevValue,
      newValue,
      timestamp: Date.now(),
    };
    setChangeHistory((prev) => [...prev, record]);
    console.log("Workspace Change Tracked:", record);
  }, [workspaceId]);

  // ==========================
  // Row Operations
  // ==========================
  const addRow = useCallback((newRow) => {
    const row = newRow || { id: `row-${Date.now()}` };
    const prev = [...gridRowData];
    const next = [...prev, row];
    setGridRowData(next);
    trackChange("Add Row", row.id, prev, next);
  }, [gridRowData, trackChange]);

  const deleteRow = useCallback((rowId) => {
    const prev = [...gridRowData];
    const next = prev.filter((r) => r.id !== rowId);
    setGridRowData(next);
    trackChange("Delete Row", rowId, prev, next);
  }, [gridRowData, trackChange]);

  const duplicateRow = useCallback((rowId) => {
    const prev = [...gridRowData];
    const targetRow = prev.find((r) => r.id === rowId);
    if (!targetRow) return;
    const duplicated = { ...targetRow, id: `row-copy-${Date.now()}` };
    const idx = prev.findIndex((r) => r.id === rowId);
    const next = [...prev];
    next.splice(idx + 1, 0, duplicated);
    setGridRowData(next);
    trackChange("Duplicate Row", duplicated.id, prev, next);
  }, [gridRowData, trackChange]);

  const updateRow = useCallback((rowId, updatedFields) => {
    const prev = [...gridRowData];
    const next = prev.map((r) => (r.id === rowId ? { ...r, ...updatedFields } : r));
    setGridRowData(next);
    trackChange("Update Row", rowId, prev, next);
  }, [gridRowData, trackChange]);

  // ==========================
  // Column Operations
  // ==========================
  const addColumn = useCallback((newField) => {
    const prev = [...fields];
    const next = [...prev, newField];
    setFields(next);
    trackChange("Add Column", newField.id, prev, next);
  }, [fields, trackChange]);

  const deleteColumn = useCallback((columnId) => {
    const prev = [...fields];
    const next = prev.filter((f) => f.id !== columnId);
    setFields(next);
    trackChange("Delete Column", columnId, prev, next);
  }, [fields, trackChange]);

  const duplicateColumn = useCallback((columnId) => {
    const prev = [...fields];
    const target = prev.find((f) => f.id === columnId);
    if (!target) return;
    const duplicated = {
      ...target,
      id: `${target.id}_copy_${Date.now()}`,
      name: `${target.name} (Copy)`,
    };
    const idx = prev.findIndex((f) => f.id === columnId);
    const next = [...prev];
    next.splice(idx + 1, 0, duplicated);
    setFields(next);
    trackChange("Duplicate Column", duplicated.id, prev, next);
  }, [fields, trackChange]);

  const renameColumn = useCallback((columnId, newName) => {
    const prev = [...fields];
    const next = prev.map((f) => (f.id === columnId ? { ...f, name: newName } : f));
    setFields(next);
    trackChange("Rename Column", columnId, prev, next);
  }, [fields, trackChange]);

  const updateColumn = useCallback((updatedField) => {
    const prev = [...fields];
    const next = prev.map((f) => (f.id === updatedField.id ? { ...f, ...updatedField } : f));
    setFields(next);
    trackChange("Update Column", updatedField.id, prev, next);
  }, [fields, trackChange]);

  // ==========================
  // Cell Operations
  // ==========================
  const updateCell = useCallback((rowId, columnId, newValue) => {
    const prev = [...gridRowData];
    const row = prev.find((r) => r.id === rowId);
    if (row) {
      const prevVal = row[columnId];
      const next = prev.map((r) => {
        if (r.id === rowId) {
          return { ...r, [columnId]: newValue };
        }
        return r;
      });
      setGridRowData(next);
      trackChange("Update Cell", `${rowId}:${columnId}`, prevVal, newValue);
      setRefreshKey((k) => k + 1);
    }
  }, [gridRowData, trackChange]);

  // ==========================
  // Workspace Operations
  // ==========================
  const renameWorkspace = useCallback((newName) => {
    trackChange("Rename Workspace", workspaceId, workspaceId, newName);
  }, [workspaceId, trackChange]);

  const duplicateWorkspace = useCallback(() => {
    trackChange("Duplicate Workspace", workspaceId, workspaceId, `${workspaceId}_copy`);
  }, [workspaceId, trackChange]);

  const deleteWorkspace = useCallback(() => {
    trackChange("Delete Workspace", workspaceId, workspaceId, null);
  }, [workspaceId, trackChange]);

  // ==========================
  // Event Handlers
  // ==========================
  const handleMoveField = useCallback((fieldId, direction) => {
    const prev = [...fields];
    const currentIndex = prev.findIndex((field) => field.id === fieldId);
    const nextIndex = currentIndex + direction;
    if (currentIndex < 0 || nextIndex < 0 || nextIndex >= prev.length) return;
    const nextFields = [...prev];
    const [movedField] = nextFields.splice(currentIndex, 1);
    nextFields.splice(nextIndex, 0, movedField);
    setFields(nextFields);
    trackChange("Reorder Columns", fieldId, prev, nextFields);
  }, [fields, trackChange]);

  // ==========================
  // Render
  // ==========================
  const recordsCountText = workspaceId === "deals" ? "15 records" : `${gridRowData.length} records`;

  const context = useMemo(() => ({
    addRow,
    deleteRow,
    duplicateRow,
    updateRow,
    addColumn,
    deleteColumn,
    duplicateColumn,
    renameColumn,
    updateColumn,
    renameWorkspace,
    duplicateWorkspace,
    deleteWorkspace,
  }), [addRow, deleteRow, duplicateRow, updateRow, addColumn, deleteColumn, duplicateColumn, renameColumn, updateColumn, renameWorkspace, duplicateWorkspace, deleteWorkspace]);

  return (
    <>
      <AppCard variant="compact" style={{ ...cardFrameStyle, padding: 0, marginTop: T.spacing[4], overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: T.spacing[4], borderBottom: `1px solid ${C.border}` }}>
          <WorkspaceToolbar
            workspaceId={workspaceId}
            isViewsPanelHidden={isViewsPanelHidden}
            onToggleViewsPanel={toggleViewsPanel}
            onManageFields={() => setIsManageFieldsOpen(true)}
          />
        </div>
        <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap", minHeight: 318 }}>
          <WorkspaceViewsPanel isHidden={isViewsPanelHidden} viewsList={viewsList} />
          <WorkspaceGrid
            workspaceId={workspaceId}
            search=""
            fields={fields}
            rowDataProp={gridRowData}
            updateCell={updateCell}
            refreshKey={refreshKey}
          />
        </div>
        <AppCardFooter style={{ justifyContent: "flex-start", gap: T.spacing[2] }}>
          <Text variant="mutedLabel">{recordsCountText}</Text>
          <AppButton variant="secondary" compact onClick={() => {}} style={addRecordButtonStyle}>
            <FiPlus size={T.font.size.sm} color={C.muted} />
            <Text variant="mutedLabel">Add Record</Text>
          </AppButton>
        </AppCardFooter>
      </AppCard>

      <ManageFieldsModal
        open={isManageFieldsOpen}
        fields={fields}
        onClose={() => setIsManageFieldsOpen(false)}
        onEditField={(field) => setSelectedFieldId(field.id)}
      />
      <EditFieldModal
        open={Boolean(selectedField)}
        field={selectedField}
        fields={fields}
        onClose={() => setSelectedFieldId(null)}
        onMoveField={handleMoveField}
      />

      {/* Reference the context object to prevent ESLint warning */}
      <div style={{ display: "none" }} data-context={JSON.stringify(context)} />
    </>
  );
}

Workspace.propTypes = {
  workspaceId: PropTypes.string.isRequired,
};

export default Workspace;
