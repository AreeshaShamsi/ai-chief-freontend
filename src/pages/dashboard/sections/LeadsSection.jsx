import { useCallback, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import AgGridTable from "../../../components/AgGridTable/AgGridTable";
import {
  FiChevronDown,
  FiChevronUp,
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
  AppIconCircle,
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

const categoryDefinitions = [
  {
    label: "Hot",
    variant: "danger",
    background: C.hotBg,
    border: C.hotBdr,
    description: "Site Visit Scheduled Or Very High Buying Intent. Needs Immediate Follow-Up.",
  },
  {
    label: "Warm",
    variant: "neutral",
    background: C.warmBg,
    border: C.warmBdr,
    pillStyle: { color: C.warmText, borderColor: C.warmBdr, background: C.card },
    description: "Interested But Needs Nurturing. Medium Intent. Follow-Up Required.",
  },
  {
    label: "Cold",
    variant: "neutral",
    background: C.surface,
    border: C.border,
    description: "Low Intent Or Long Timeline (6 Months+). Future Prospect Only.",
  },
];

const views = ["Grid Name", "Grid Name", "Grid Name", "Grid Name"];

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

function PageSection({ children, style }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: T.layout.pageMaxWidth,
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

PageSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};



function DealsHeader({ displayName, icon: Icon }) {
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

DealsHeader.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

function createHeader(label, icon) {
  return {
    headerName: label,
    headerComponentParams: {
      innerHeaderComponent: DealsHeader,
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

function DealsCell({ value }) {
  return <Text variant="body">{value}</Text>;
}

DealsCell.propTypes = {
  value: PropTypes.node,
};

function DealNameCell(params) {
  const { value, data, context } = params;
  const isExpanded = context?.selectedDealId === data?.id;

  return (
    <div className="deal-name-cell-container">
      <Text variant="body">{value}</Text>
      <button
        type="button"
        className="deal-expand-btn"
        aria-label="Open deal details"
        onClick={(e) => {
          e.stopPropagation();
          context?.openDealDetails(data);
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

DealNameCell.propTypes = {
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

function SmallControl({ children, icon: Icon, onClick }) {
  return (
    <AppButton compact onClick={onClick} style={controlButtonStyle}>
      {Icon ? <Icon size={13} /> : null}
      {children}
    </AppButton>
  );
}

SmallControl.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
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

function LeadCategoryCard({ category }) {
  return (
    <div
      style={{
        minHeight: 92,
        borderRadius: T.radius.lg,
        border: `1px solid ${category.border}`,
        background: category.background,
        padding: T.spacing[3],
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: T.spacing[2],
        textAlign: "center",
      }}
    >
      <AppPill variant={category.variant} size="xs" style={category.pillStyle}>
        {category.label}
      </AppPill>
      <Text as="div" variant="body">
        {category.description}
      </Text>
    </div>
  );
}

LeadCategoryCard.propTypes = {
  category: PropTypes.shape({
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pillStyle: PropTypes.object,
  }).isRequired,
};

function LeadCategorySection() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AppCard variant="compact" style={{ ...cardFrameStyle, padding: T.spacing[4], marginTop: T.spacing[4] }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <AppIconCircle size={26} variant="primary" style={{ borderRadius: T.radius.sm }}>
            <FiSliders size={14} />
          </AppIconCircle>
          <Text as="div" variant="sectionTitle">
            Lead Category Definition
          </Text>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          style={{
            border: T.border.none,
            background: "transparent",
            color: C.muted,
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
          }}
        >
          <Text variant="mutedLabel">{collapsed ? "Show" : "Hide"}</Text>
          {collapsed ? <FiChevronDown size={14} /> : <FiChevronUp size={14} />}
        </button>
      </div>

      {!collapsed ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: T.spacing[3],
            marginTop: T.spacing[4],
          }}
        >
          {categoryDefinitions.map((category) => (
            <LeadCategoryCard key={category.label} category={category} />
          ))}
        </div>
      ) : null}
    </AppCard>
  );
}

function DealsToolbar({ isViewsPanelHidden, onToggleViewsPanel, onManageFields }) {
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
            <Text variant="label" color={C.accent}>Deals</Text>
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

DealsToolbar.propTypes = {
  isViewsPanelHidden: PropTypes.bool.isRequired,
  onToggleViewsPanel: PropTypes.func.isRequired,
  onManageFields: PropTypes.func.isRequired,
};

function DealsViewsPanel({ isHidden }) {
  const [activeView, setActiveView] = useState(0);
  const [viewSearch, setViewSearch] = useState("");
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const createButtonRef = useRef(null);
  const filteredViews = views.filter((view) => view.toLowerCase().includes(viewSearch.toLowerCase()));
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

DealsViewsPanel.propTypes = {
  isHidden: PropTypes.bool.isRequired,
};

const columnWidths = {
  dealName: 150,
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

function DealsGrid({ search, fields }) {
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  const columnDefs = useMemo(
    () => [
      ...fields.map((field) => {
        const typeMeta = getFieldTypeMeta(field.type);
        return {
          field: field.id,
          ...createHeader(field.name, typeMeta.icon),
          minWidth: columnWidths[field.id] || 130,
          ...(field.id === "dealName"
            ? { cellRenderer: DealNameCell }
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
    [fields]
  );

  const defaultColDef = useMemo(
    () => ({ sortable: true, resizable: true, filter: false, cellRenderer: DealsCell }),
    []
  );

  const openDealDetails = useCallback((row) => {
    setSelectedDeal(row);
    setIsDetailsOpen(true);
  }, []);

  const handlePrevRow = useCallback(() => {
    const idx = dealRows.findIndex((r) => r.id === selectedDeal?.id);
    if (idx > 0) {
      setSelectedDeal(dealRows[idx - 1]);
    }
  }, [selectedDeal]);

  const handleNextRow = useCallback(() => {
    const idx = dealRows.findIndex((r) => r.id === selectedDeal?.id);
    if (idx >= 0 && idx < dealRows.length - 1) {
      setSelectedDeal(dealRows[idx + 1]);
    }
  }, [selectedDeal]);

  const handleUpdateField = useCallback((rowId, fieldId, newValue) => {
    const row = dealRows.find((r) => r.id === rowId);
    if (row) {
      row[fieldId] = newValue;
      triggerRefresh();
    }
  }, [triggerRefresh]);

  const idx = selectedDeal ? dealRows.findIndex((r) => r.id === selectedDeal.id) : -1;
  const hasPrev = idx > 0;
  const hasNext = idx >= 0 && idx < dealRows.length - 1;

  const context = useMemo(
    () => ({
      selectedDealId: selectedDeal?.id || null,
      openDealDetails,
    }),
    [selectedDeal, openDealDetails]
  );

  const rowData = useMemo(() => {
    if (refreshKey === -1) console.log(refreshKey);
    return dealRows;
  }, [refreshKey]);

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

      <DealDetailsModal
        open={isDetailsOpen}
        row={selectedDeal}
        onPrevRow={hasPrev ? handlePrevRow : null}
        onNextRow={hasNext ? handleNextRow : null}
        onClose={() => setIsDetailsOpen(false)}
        onUpdateField={handleUpdateField}
      />
    </div>
  );
}

DealsGrid.propTypes = {
  search: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
};

function DealsWorkspace() {
  const search = "";
  const [isViewsPanelHidden, setIsViewsPanelHidden] = useState(false);
  const [fields, setFields] = useState(initialDealFields);
  const [isManageFieldsOpen, setIsManageFieldsOpen] = useState(false);
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const toggleViewsPanel = () => setIsViewsPanelHidden((isHidden) => !isHidden);
  const selectedField = fields.find((field) => field.id === selectedFieldId) || null;
  const handleMoveField = (fieldId, direction) => {
    setFields((currentFields) => {
      const currentIndex = currentFields.findIndex((field) => field.id === fieldId);
      const nextIndex = currentIndex + direction;
      if (currentIndex < 0 || nextIndex < 0 || nextIndex >= currentFields.length) return currentFields;
      const nextFields = [...currentFields];
      const [movedField] = nextFields.splice(currentIndex, 1);
      nextFields.splice(nextIndex, 0, movedField);
      return nextFields;
    });
  };

  return (
    <>
      <AppCard variant="compact" style={{ ...cardFrameStyle, padding: 0, marginTop: T.spacing[4], overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: T.spacing[4], borderBottom: `1px solid ${C.border}` }}>
          <DealsToolbar
            isViewsPanelHidden={isViewsPanelHidden}
            onToggleViewsPanel={toggleViewsPanel}
            onManageFields={() => setIsManageFieldsOpen(true)}
          />
        </div>
        <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap", minHeight: 318 }}>
          <DealsViewsPanel isHidden={isViewsPanelHidden} />
          <DealsGrid search={search} fields={fields} />
        </div>
        <AppCardFooter style={{ justifyContent: "flex-start", gap: T.spacing[2] }}>
          <Text variant="mutedLabel">15 records</Text>
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
    </>
  );
}

function LeadsSection() {
  return (
    <div style={{ minHeight: "100%", width: "100%", background: C.backgroundPrimary, padding: T.spacing.page, boxSizing: "border-box" }}>
      <PageSection>
      <header>
        <Text as="h1" variant="pageTitle" style={{ margin: 0 }}>
          Deals
        </Text>
        <Text as="div" variant="subtitle" style={{ marginTop: 5 }}>
          Track And Manage Your Property Deals From Lead To Closure.
        </Text>
      </header>
      <LeadCategorySection />
      <DealsWorkspace />
      </PageSection>
    </div>
  );
}

export default LeadsSection;
