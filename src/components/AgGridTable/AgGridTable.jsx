import { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";
import "../../config/agGridCommunity";
import { C, Text } from "../utils";

const agGridTheme = themeQuartz.withParams({
  accentColor: C.accent,
  backgroundColor: C.card,
  borderColor: C.border,
  browserColorScheme: "light",
  cellHorizontalPadding: 12,
  columnBorder: true,
  foregroundColor: C.text,
  headerBackgroundColor: C.surface,
  headerTextColor: C.muted,
  oddRowBackgroundColor: C.card,
  rowBorder: true,
  rowHoverColor: C.surface,
  selectedRowBackgroundColor: C.accentLt,
  spacing: 6,
  wrapperBorder: false,
  wrapperBorderRadius: 0,
});

function DefaultNoRowsOverlay() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Text variant="subtitle">No rows to show</Text>
    </div>
  );
}

export default function AgGridTable({
  workspaceId,
  rowData,
  columnDefs,
  defaultColDef,
  quickFilterText,
  rowSelection,
  selectionColumnDef,
  suppressCellFocus,
  isEditable,
  context,
  getRowId,
  noRowsOverlayComponent,
  ...rest
}) {
  const gridApiRef = useRef(null);

  const onGridReady = useCallback(
    (params) => {
      gridApiRef.current = params.api;
      if (quickFilterText) {
        if (params.api.setGridOption) {
          params.api.setGridOption("quickFilterText", quickFilterText);
        } else if (params.api.setQuickFilter) {
          params.api.setQuickFilter(quickFilterText);
        }
      }
      if (rest.onGridReady) {
        rest.onGridReady(params);
      }
    },
    [quickFilterText, rest.onGridReady]
  );

  useEffect(() => {
    if (gridApiRef.current) {
      if (gridApiRef.current.setGridOption) {
        gridApiRef.current.setGridOption("quickFilterText", quickFilterText || "");
      } else if (gridApiRef.current.setQuickFilter) {
        gridApiRef.current.setQuickFilter(quickFilterText || "");
      }
    }
  }, [quickFilterText]);

  const defaultGetRowId = useCallback((params) => {
    return String(params.data?.id || params.data?._id || params.data?.uuid || "");
  }, []);

  const effectiveGetRowId = getRowId || defaultGetRowId;
  const isStaff = context?.workspaceId === "staff" || context?.workspaceId === "mystaff";
  const effectiveAutoSizeStrategy = rest.autoSizeStrategy || (isStaff ? { type: "fitGridWidth" } : undefined);
  const effectiveRowSelection = rowSelection || { mode: "multiRow", checkboxes: true, headerCheckbox: true, selectAll: "all", enableClickSelection: false };
  const effectiveSelectionColumnDef = selectionColumnDef || { width: 44, headerClass: "ag-selection-header" };
  const effectiveNoRowsOverlayComponent = noRowsOverlayComponent || DefaultNoRowsOverlay;

  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      getRowId={effectiveGetRowId}
      suppressClickEdit={(workspaceId === "staff" || workspaceId === "mystaff" || (!isEditable && workspaceId === "deals"))}
      suppressRowClickSelection={true}
      theme={agGridTheme}
      rowHeight={36}
      headerHeight={34}
      quickFilterText={quickFilterText}
      rowSelection={effectiveRowSelection}
      selectionColumnDef={effectiveSelectionColumnDef}
      suppressCellFocus={suppressCellFocus}
      autoSizeStrategy={effectiveAutoSizeStrategy}
      context={context}
      onGridReady={onGridReady}
      noRowsOverlayComponent={effectiveNoRowsOverlayComponent}
      {...rest}
    />
  );
}

AgGridTable.propTypes = {
  workspaceId: PropTypes.string,
  rowData: PropTypes.array,
  columnDefs: PropTypes.array,
  defaultColDef: PropTypes.object,
  quickFilterText: PropTypes.string,
  rowSelection: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  selectionColumnDef: PropTypes.object,
  suppressCellFocus: PropTypes.bool,
  context: PropTypes.object,
  getRowId: PropTypes.func,
  noRowsOverlayComponent: PropTypes.any,
};
