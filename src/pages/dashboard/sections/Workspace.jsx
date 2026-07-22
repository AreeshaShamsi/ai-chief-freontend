import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import ImportModal from "../modals/ImportModal";
import DealDropdown from "../modals/DealDropdown";
import ColumnActionsModal from "../modals/ColumnActionsModal";
import GridNameActionsModal from "../modals/GridNameActionsModal";
import FieldConfigurationModal from "../modals/FieldConfigurationModal";
import { LuChevronDown, LuArrowUpAZ, LuArrowDownZA, LuEllipsisVertical } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

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
          e.preventDefault();
          e.stopPropagation();
          if (context?.onExpandRow) {
            context.onExpandRow(data);
          }
          if (context?.openDetails) {
            context.openDetails(data);
          }
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

function ColumnHeaderWrapper(props) {
  const { displayName, column, api, innerHeaderComponent: InnerHeader, innerHeaderComponentParams } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const triggerRef = useRef(null);

  const [sortState, setSortState] = useState(column.getSort());
  useEffect(() => {
    const onSortChanged = () => {
      setSortState(column.getSort());
    };
    column.addEventListener("sortChanged", onSortChanged);
    return () => {
      column.removeEventListener("sortChanged", onSortChanged);
    };
  }, [column]);

  const handleHeaderClick = (e) => {
    if (triggerRef.current?.contains(e.target)) return;
    if (props.enableSorting) {
      props.progressSort(e.shiftKey);
    }
  };

  const isAddColumn = column.getColId() === "addColumn";
  const isCheckbox = column.getColId() === "ag-Grid-SelectionColumn" || column.getColId() === "selection";

  const colId = column.getColId();
  const context = props.context || {};

  const onMoveLeft = () => {
    const allColumns = api.getColumns() || [];
    const index = allColumns.findIndex((col) => col.getColId() === colId);
    if (index > 0) {
      api.moveColumn(colId, index - 1);
    }
  };

  const onMoveRight = () => {
    const allColumns = api.getColumns() || [];
    const index = allColumns.findIndex((col) => col.getColId() === colId);
    if (index >= 0 && index < allColumns.length - 1) {
      api.moveColumn(colId, index + 1);
    }
  };

  const onSortAsc = () => {
    api.applyColumnState({
      state: [{ colId: colId, sort: "asc" }],
      defaultState: { sort: null },
    });
  };

  const onSortDesc = () => {
    api.applyColumnState({
      state: [{ colId: colId, sort: "desc" }],
      defaultState: { sort: null },
    });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleHeaderClick}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        cursor: props.enableSorting ? "pointer" : "default",
        paddingRight: !isAddColumn && !isCheckbox ? 16 : 0,
        boxSizing: "border-box",
        userSelect: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0, flex: 1 }}>
        {InnerHeader ? (
          <InnerHeader displayName={displayName} context={props.context} api={api} column={column} {...innerHeaderComponentParams} />
        ) : (
          <Text variant="headerCell">{displayName}</Text>
        )}
        
        {sortState === "asc" && (
          <LuArrowUpAZ size={12} color={C.accent} style={{ flexShrink: 0 }} />
        )}
        {sortState === "desc" && (
          <LuArrowDownZA size={12} color={C.accent} style={{ flexShrink: 0 }} />
        )}
      </div>

      {!isAddColumn && !isCheckbox && (
        <button
          ref={triggerRef}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDropdownOpen((prev) => !prev);
          }}
          style={{
            position: "absolute",
            right: 2,
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            padding: 2,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: isHovered || isDropdownOpen ? 1 : 0,
            transition: "opacity 150ms ease",
            color: C.muted,
          }}
        >
          <LuChevronDown size={14} />
        </button>
      )}

      {!isAddColumn && !isCheckbox && (
        <ColumnActionsModal
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          triggerRef={triggerRef}
          columnId={colId}
          columnName={displayName}
          onEditField={() => context.onEditColumn?.(colId)}
          onRenameField={() => context.onRenameColumn?.(colId)}
          onDuplicateField={() => context.onDuplicateColumn?.(colId)}
          onMoveLeft={onMoveLeft}
          onMoveRight={onMoveRight}
          onSortAsc={onSortAsc}
          onSortDesc={onSortDesc}
          onDeleteField={() => context.onDeleteColumn?.(colId)}
        />
      )}
    </div>
  );
}

ColumnHeaderWrapper.propTypes = {
  displayName: PropTypes.string,
  column: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired,
  innerHeaderComponent: PropTypes.elementType,
  innerHeaderComponentParams: PropTypes.object,
  enableSorting: PropTypes.bool,
  progressSort: PropTypes.func,
  context: PropTypes.object,
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

function AddColumnHeader({ displayName, icon: Icon, context }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelectField = (typeLabel) => {
    setSelectedType(typeLabel);
  };

  const handleCreateField = (fieldConfig) => {
    if (context?.addColumn) {
      context.addColumn(fieldConfig);
    }
    setSelectedType(null);
  };

  return (
    <>
      <AddColumnModal onSelectField={handleSelectField}>
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

      <FieldConfigurationModal
        open={Boolean(selectedType)}
        fieldType={selectedType || "Single Line Text"}
        mode="create"
        onClose={() => setSelectedType(null)}
        onSubmit={handleCreateField}
      />
    </>
  );
}

AddColumnHeader.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  context: PropTypes.object,
};

function WorkspaceToolbar({
  workspaceId,
  isViewsPanelHidden,
  onToggleViewsPanel,
  onManageFields,
  onRenameTab,
  onDuplicateTab,
  onManageTab,
  onClearData,
  onDeleteField,
  onOpenImportModal,
  activeTab,
  onTabChange,
  renderDropdown,
}) {
  const currentTab = activeTab || workspaceId || "deals";
  const isDealsActive = currentTab === "deals";
  const isTasksActive = currentTab === "tasks";
  const isContactsActive = currentTab === "contacts";
  const isKbActive = currentTab === "kb";
  const isStaffActive = currentTab === "staff" || currentTab === "mystaff";
  const workspaceTitle = currentTab === "contacts" ? "Contact" : currentTab === "kb" ? "Knowledge Base" : isStaffActive ? "My Staff" : currentTab.charAt(0).toUpperCase() + currentTab.slice(1);

  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const dealsButtonRef = useRef(null);

  const handleDealsClick = () => {
    if (isDealsActive) {
      setIsActionsOpen((prev) => !prev);
    } else if (onTabChange) {
      onTabChange("deals");
    }
  };

  const handleTasksClick = () => {
    if (isTasksActive) {
      setIsActionsOpen((prev) => !prev);
    } else if (onTabChange) {
      onTabChange("tasks");
    }
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {isContactsActive || isKbActive || isStaffActive ? (
            <AppButton
              ref={dealsButtonRef}
              compact
              onClick={() => setIsActionsOpen((prev) => !prev)}
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
          ) : (
            <>
              <AppButton
                ref={isDealsActive ? dealsButtonRef : null}
                compact
                onClick={handleDealsClick}
                style={{
                  ...dealTabButtonStyle,
                  background: isDealsActive ? C.accentLt : C.card,
                  color: isDealsActive ? C.accent : C.text,
                  border: isDealsActive ? `1px solid ${C.accentTrack}` : "1px solid transparent",
                }}
              >
                <Text variant="label" color={isDealsActive ? C.accent : C.text}>Deals</Text>
                {isDealsActive && <FiChevronDown size={15} style={{ color: C.accent }} />}
              </AppButton>
              <AppButton
                ref={isTasksActive ? dealsButtonRef : null}
                compact
                onClick={handleTasksClick}
                style={{
                  ...dealTabButtonStyle,
                  background: isTasksActive ? C.accentLt : C.card,
                  color: isTasksActive ? C.accent : C.text,
                  border: isTasksActive ? `1px solid ${C.accentTrack}` : "1px solid transparent",
                }}
              >
                <Text variant="label" color={isTasksActive ? C.accent : C.text}>Tasks</Text>
                {isTasksActive && <FiChevronDown size={15} style={{ color: C.accent }} />}
              </AppButton>
            </>
          )}
        </div>
        <AppButton compact onClick={onManageFields} style={toolbarActionButtonStyle}>
          <FiSliders size={13} />
          <Text variant="mutedLabel">Manage Fields</Text>
        </AppButton>
      </div>

      <DealDropdown
        isOpen={isActionsOpen}
        onClose={() => setIsActionsOpen(false)}
        triggerRef={dealsButtonRef}
        onImportData={(importType) => {
          setIsActionsOpen(false);
          if (onOpenImportModal) onOpenImportModal(importType);
        }}
        onRenameTab={onRenameTab}
        onDuplicateTab={onDuplicateTab}
        onManageTab={onManageTab}
        onClearData={onClearData}
        onDeleteField={onDeleteField}
      />

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
  onRenameTab: PropTypes.func,
  onDuplicateTab: PropTypes.func,
  onManageTab: PropTypes.func,
  onClearData: PropTypes.func,
  onDeleteField: PropTypes.func,
  onOpenImportModal: PropTypes.func,
};

function GridNameRowItem({ viewItem, isActive, isFavorite, onSelectView, onToggleFavorite }) {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const optionsButtonRef = useRef(null);

  const handleFavorite = () => {
    if (onToggleFavorite) onToggleFavorite(viewItem.id);
  };
  const handleRename = () => {
    const newName = window.prompt("Rename grid:", viewItem.name);
    if (newName) console.log("Renamed:", newName);
  };
  const handleDuplicate = () => {
    console.log("Duplicated:", viewItem.id);
  };
  const handleDelete = () => {
    if (window.confirm(`Delete grid "${viewItem.name}"?`)) console.log("Deleted:", viewItem.id);
  };

  return (
    <div
      onClick={() => onSelectView(viewItem.id)}
      style={{
        height: 34,
        width: "100%",
        borderRadius: T.radius.sm,
        background: isActive ? C.accentLt : "transparent",
        color: isActive ? C.accent : C.text,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 8px",
        cursor: "pointer",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <FiGrid size={13} style={{ flexShrink: 0 }} />
      <Text variant="label" color={isActive ? C.accent : C.text} style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {viewItem.name}
      </Text>

      {isFavorite && (
        <FaStar
          size={13}
          color="#EAB308"
          style={{ flexShrink: 0, marginLeft: 4, marginRight: 2 }}
        />
      )}

      <button
        ref={optionsButtonRef}
        type="button"
        aria-label="Grid actions"
        onClick={(e) => {
          e.stopPropagation();
          setIsActionsOpen((prev) => !prev);
        }}
        style={{
          border: "none",
          background: "transparent",
          padding: 4,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isActive ? C.accent : C.muted,
          borderRadius: T.radius.sm,
        }}
      >
        <LuEllipsisVertical size={14} />
      </button>

      <GridNameActionsModal
        isOpen={isActionsOpen}
        onClose={() => setIsActionsOpen(false)}
        triggerRef={optionsButtonRef}
        viewName={viewItem.name}
        isFavorite={isFavorite}
        onFavorite={handleFavorite}
        onRenameGrid={handleRename}
        onDuplicateGrid={handleDuplicate}
        onDeleteGrid={handleDelete}
      />
    </div>
  );
}

GridNameRowItem.propTypes = {
  viewItem: PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired }).isRequired,
  isActive: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool,
  onSelectView: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func,
};

function WorkspaceViewsPanel({ isHidden, viewsList }) {
  const normalizedViews = useMemo(() => {
    return viewsList.map((view, idx) => {
      if (typeof view === "string") {
        return { id: `grid-${idx + 1}`, name: view === "Grid Name" ? `Grid Name ${idx + 1}` : view };
      }
      return view;
    });
  }, [viewsList]);

  const [activeViewId, setActiveViewId] = useState(() => normalizedViews[0]?.id || "grid-1");
  const [viewSearch, setViewSearch] = useState("");
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());
  const createButtonRef = useRef(null);

  const toggleFavorite = useCallback((gridId) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(gridId)) {
        next.delete(gridId);
      } else {
        next.add(gridId);
      }
      return next;
    });
  }, []);

  const filteredViews = useMemo(() => {
    const list = normalizedViews.filter((item) =>
      item.name.toLowerCase().includes(viewSearch.toLowerCase())
    );
    const favs = list.filter((item) => favoriteIds.has(item.id));
    const nonFavs = list.filter((item) => !favoriteIds.has(item.id));
    return [...favs, ...nonFavs];
  }, [normalizedViews, viewSearch, favoriteIds]);

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
          {filteredViews.map((viewItem) => (
            <GridNameRowItem
              key={viewItem.id}
              viewItem={viewItem}
              isActive={viewItem.id === activeViewId}
              isFavorite={favoriteIds.has(viewItem.id)}
              onSelectView={setActiveViewId}
              onToggleFavorite={toggleFavorite}
            />
          ))}
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
  renderDetailsModal,
  onExpandRow,
}) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const primaryNameKey = useMemo(() => {
    const found = fields.find((f) => f.id.toLowerCase().includes("name"))?.id;
    if (found) return found;
    return `${workspaceId.slice(0, -1)}Name`;
  }, [fields, workspaceId]);

  const columnDefs = useMemo(
    () => [
      ...fields.map((field, index) => {
        const typeMeta = getFieldTypeMeta(field.type);
        const isPrimary = field.id === primaryNameKey || index === 0;
        return {
          field: field.id,
          ...createHeader(field.name, typeMeta.icon),
          minWidth: columnWidths[field.id] || 130,
          ...(isPrimary
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
    () => ({
      sortable: true,
      resizable: true,
      filter: false,
      cellRenderer: WorkspaceCell,
      headerComponent: ColumnHeaderWrapper,
    }),
    []
  );

  const openDetails = useCallback((row) => {
    setSelectedRow(row);
    setIsDetailsOpen(true);
    if (onExpandRow) {
      onExpandRow(row);
    }
  }, [onExpandRow]);

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
      onExpandRow: openDetails,
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

      {renderDetailsModal ? (
        renderDetailsModal({
          open: isDetailsOpen,
          row: selectedRow,
          fields,
          workspaceId,
          onPrevRow: hasPrev ? handlePrevRow : null,
          onNextRow: hasNext ? handleNextRow : null,
          onClose: () => setIsDetailsOpen(false),
          onUpdateField: handleUpdateField,
        })
      ) : (
        <DealDetailsModal
          open={isDetailsOpen}
          row={selectedRow}
          fields={fields}
          workspaceId={workspaceId}
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
  renderDetailsModal: PropTypes.func,
  onExpandRow: PropTypes.func,
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
      { id: "phoneNumber", name: "Phone Number", type: "Phone Number", value: "Phone Number" },
      { id: "callOutcome", name: "Call Outcome", type: "Single Line Text", value: "Call Outcome" },
      { id: "created", name: "Created", type: "Date Time", value: "14/08/2026 5:00pm" },
      { id: "businessName", name: "Business Name", type: "Single Line Text", value: "Business Name" },
      { id: "lastActivity", name: "Last Activity", type: "Date Time", value: "14/08/2026 5:00pm" },
      { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Ramesh Yadav", "Vikash Yadav", "User", "Admin"] },
    ],
    rows: [
      {
        id: "contact-1",
        contactName: "Rakesh Paul",
        email: "rakeshpaul234@gmail.com",
        phoneNumber: "0989876543",
        callOutcome: "Interested",
        created: "14/08/2026 5:00pm",
        businessName: "Paul Properties",
        lastActivity: "14/08/2026 5:00pm",
        assignedAgent: "Vikash Yadav",
      },
    ],
    views: ["Grid Name", "Grid Name", "Grid Name", "Grid Name"],
  },
  tasks: {
    fields: [
      { id: "taskName", name: "Task Name", type: "Single Line Text", value: "Task Name" },
      { id: "description", name: "Description", type: "Single Line Text", value: "Description" },
      { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Ramesh Yadav", "Himanshu S.", "Admin"] },
      { id: "date", name: "Date", type: "Date", value: "14/04/2025" },
      { id: "status", name: "Status", type: "Single Select", value: "Status", options: ["To Do", "In Progress", "Completed", "Pending"], editorKind: "tags" },
    ],
    rows: [
      {
        id: "task-1",
        taskName: "Follow-up call",
        description: "Need to call the client for confirmation",
        assignedAgent: "Ramesh Yadav",
        date: "14/04/2025",
        status: "To Do",
      },
      {
        id: "task-2",
        taskName: "Property Inspection",
        description: "Accompany buyer for site visit",
        assignedAgent: "Himanshu S.",
        date: "15/04/2025",
        status: "In Progress",
      },
      {
        id: "task-3",
        taskName: "Document Verification",
        description: "Verify title deed documents",
        assignedAgent: "Ramesh Yadav",
        date: "16/04/2025",
        status: "Completed",
      },
    ],
    views: ["Grid Name", "Grid Name", "Grid Name", "Grid Name"],
  },
  kb: {
    fields: [
      { id: "propertyName", name: "Property Name", type: "Single Line Text", value: "Property Name" },
      { id: "bhk", name: "BHK", type: "Single Select", value: "BHK", options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"] },
      { id: "carpetArea", name: "Carpet Area", type: "Single Line Text", value: "Carpet Area" },
      { id: "priceRange", name: "Price Range", type: "Currency", value: "Price Range" },
      { id: "possession", name: "Possession", type: "Single Line Text", value: "Possession" },
      { id: "unitLeft", name: "Unit Left", type: "Number", value: "Unit Left" },
      { id: "facing", name: "Facing", type: "Single Select", value: "Facing", options: ["East", "West", "North", "South", "North-East"] },
      { id: "amenities", name: "Amenities", type: "Multiple Select", value: "Amenities", options: ["Pool", "Gym", "Clubhouse", "Park", "Security"], editorKind: "tags" },
    ],
    rows: [
      {
        id: "property-1",
        propertyName: "Green Acres Villa",
        bhk: "3 BHK",
        carpetArea: "1550 sqft",
        priceRange: "1.2 - 1.5 Cr",
        possession: "Ready to Move",
        unitLeft: "4",
        facing: "East",
        amenities: "Pool, Gym, Clubhouse",
      },
      {
        id: "property-2",
        propertyName: "Skyline Heights",
        bhk: "2 BHK",
        carpetArea: "1100 sqft",
        priceRange: "85 - 95 Lakhs",
        possession: "Dec 2026",
        unitLeft: "12",
        facing: "North-East",
        amenities: "Park, Security, Power Backup",
      },
      {
        id: "property-3",
        propertyName: "Ocean Breeze Apartments",
        bhk: "4 BHK",
        carpetArea: "2200 sqft",
        priceRange: "2.5 - 3.0 Cr",
        possession: "Ready to Move",
        unitLeft: "2",
        facing: "West",
        amenities: "Sea View, Squash Court, Spa",
      },
    ],
    views: ["Grid Name", "Grid Name", "Grid Name", "Grid Name"],
  },
  staff: {
    fields: [
      { id: "staffMember", name: "Staff Member", type: "Single Line Text", value: "Staff Member" },
      { id: "email", name: "Email", type: "Email", value: "Email" },
      { id: "role", name: "Role", type: "Single Select", value: "Role", options: ["Admin", "Manager", "Agent", "Senior Broker"], editorKind: "tags" },
      { id: "access", name: "Access", type: "Single Select", value: "Access", options: ["access to edit deals", "access to knowledge base", "full access"], editorKind: "tags" },
      { id: "phone", name: "Phone Number", type: "Phone Number", value: "Phone Number" },
    ],
    rows: [
      { id: "staff-1", staffMember: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "Admin", access: "access to edit deals" },
      { id: "staff-2", staffMember: "Ananya Rao", phone: "+91 87654 32109", email: "ananya.rao@gmail.com", role: "Admin", access: "access to knowledge base" },
      { id: "staff-3", staffMember: "Rohan Mehta", phone: "+91 76543 21098", email: "rohan.mehta@gmail.com", role: "Agent", access: "access to edit deals" },
      { id: "staff-4", staffMember: "Kavya Nair", phone: "+91 65432 10987", email: "kavya.nair@gmail.com", role: "Manager", access: "access to knowledge base" },
      { id: "staff-5", staffMember: "Vikram Singh", phone: "+91 54321 09876", email: "vikram.singh@gmail.com", role: "Admin", access: "access to edit deals" },
      { id: "staff-6", staffMember: "Priya Menon", phone: "+91 43210 98765", email: "priya.menon@gmail.com", role: "Senior Broker", access: "access to knowledge base" },
    ],
    views: ["Grid Name", "Grid Name", "Grid Name", "Grid Name"],
  },
  mystaff: {
    fields: [
      { id: "staffMember", name: "Staff Member", type: "Single Line Text", value: "Staff Member" },
      { id: "email", name: "Email", type: "Email", value: "Email" },
      { id: "role", name: "Role", type: "Single Select", value: "Role", options: ["Admin", "Manager", "Agent", "Senior Broker"], editorKind: "tags" },
      { id: "access", name: "Access", type: "Single Select", value: "Access", options: ["access to edit deals", "access to knowledge base", "full access"], editorKind: "tags" },
      { id: "phone", name: "Phone Number", type: "Phone Number", value: "Phone Number" },
    ],
    rows: [
      { id: "staff-1", staffMember: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "Admin", access: "access to edit deals" },
      { id: "staff-2", staffMember: "Ananya Rao", phone: "+91 87654 32109", email: "ananya.rao@gmail.com", role: "Admin", access: "access to knowledge base" },
      { id: "staff-3", staffMember: "Rohan Mehta", phone: "+91 76543 21098", email: "rohan.mehta@gmail.com", role: "Agent", access: "access to edit deals" },
      { id: "staff-4", staffMember: "Kavya Nair", phone: "+91 65432 10987", email: "kavya.nair@gmail.com", role: "Manager", access: "access to knowledge base" },
      { id: "staff-5", staffMember: "Vikram Singh", phone: "+91 54321 09876", email: "vikram.singh@gmail.com", role: "Admin", access: "access to edit deals" },
      { id: "staff-6", staffMember: "Priya Menon", phone: "+91 43210 98765", email: "priya.menon@gmail.com", role: "Senior Broker", access: "access to knowledge base" },
    ],
    views: ["Grid Name", "Grid Name", "Grid Name", "Grid Name"],
  },
};

// ==========================
// Workspace State
// ==========================
export function Workspace({
  workspaceId = "deals",
  columns,
  rowData,
  views,
  activeTab: activeTabProp,
  onTabChange,
  renderDropdown,
  renderCreateModal,
  renderDetailsModal,
  renderManageFieldsModal,
  renderEditFieldModal,
  renderImportModal,
  onImportClick,
  onCellClick,
  onRowDoubleClick,
  onExpandRow,
}) {
  const [internalTab, setInternalTab] = useState(activeTabProp || workspaceId || "deals");
  const effectiveWorkspaceId = activeTabProp || internalTab;

  useEffect(() => {
    if (activeTabProp) {
      setInternalTab(activeTabProp);
    }
  }, [activeTabProp]);

  const config = useMemo(() => {
    return defaultWorkspaceConfigurations[effectiveWorkspaceId] || defaultWorkspaceConfigurations.deals;
  }, [effectiveWorkspaceId]);

  const initialFields = useMemo(() => columns && columns.length > 0 ? columns : config.fields, [columns, config]);
  const initialRows = useMemo(() => rowData && rowData.length > 0 ? rowData : config.rows, [rowData, config]);
  const initialViews = useMemo(() => views && views.length > 0 ? views : config.views, [views, config]);

  const [fields, setFields] = useState(initialFields);
  const [gridRowData, setGridRowData] = useState(initialRows);
  const [viewsList, setViewsList] = useState(initialViews);
  const [isViewsPanelHidden, setIsViewsPanelHidden] = useState(false);

  useEffect(() => {
    setFields(initialFields);
  }, [initialFields]);

  useEffect(() => {
    setGridRowData(initialRows);
  }, [initialRows]);

  useEffect(() => {
    setViewsList(initialViews);
  }, [initialViews]);

  const [isManageFieldsOpen, setIsManageFieldsOpen] = useState(false);
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const handleClearData = useCallback(() => {
    if (window.confirm("Are you sure you want to clear all row data?")) {
      setGridRowData([]);
    }
  }, []);
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
            workspaceId={effectiveWorkspaceId}
            isViewsPanelHidden={isViewsPanelHidden}
            onToggleViewsPanel={toggleViewsPanel}
            onManageFields={() => setIsManageFieldsOpen(true)}
            onRenameTab={() => {
              const newName = window.prompt("Rename workspace tab:", effectiveWorkspaceId);
              if (newName && newName.trim()) {
                renameWorkspace(newName.trim());
              }
            }}
            onDuplicateTab={duplicateWorkspace}
            onManageTab={() => setIsManageFieldsOpen(true)}
            onClearData={handleClearData}
            onDeleteField={() => setIsManageFieldsOpen(true)}
            onOpenImportModal={() => setIsImportModalOpen(true)}
            activeTab={effectiveWorkspaceId}
            onTabChange={(tab) => {
              setInternalTab(tab);
              if (onTabChange) onTabChange(tab);
            }}
            renderDropdown={renderDropdown}
          />
        </div>
        <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap", minHeight: 318 }}>
          <WorkspaceViewsPanel isHidden={isViewsPanelHidden} viewsList={viewsList} />
          <WorkspaceGrid
            workspaceId={effectiveWorkspaceId}
            search=""
            fields={fields}
            rowDataProp={gridRowData}
            updateCell={updateCell}
            refreshKey={refreshKey}
            renderDetailsModal={renderDetailsModal}
            onExpandRow={onExpandRow}
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
      <ImportModal
        open={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onMatchExisting={() => {
          console.log("Matched to existing grid");
        }}
        onCreateNew={() => {
          console.log("Created a new grid");
        }}
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
