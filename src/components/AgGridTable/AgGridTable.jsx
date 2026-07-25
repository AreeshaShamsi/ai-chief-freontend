import { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";
import "../../config/agGridCommunity";
import { C } from "../utils";

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

export default function AgGridTable({
  rowData,
  columnDefs,
  defaultColDef,
  quickFilterText,
  rowSelection,
  selectionColumnDef,
  suppressCellFocus,
  context,
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

  const isStaff = context?.workspaceId === "staff" || context?.workspaceId === "mystaff";
  const effectiveAutoSizeStrategy = rest.autoSizeStrategy || (isStaff ? { type: "fitGridWidth" } : undefined);

  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      theme={agGridTheme}
      rowHeight={36}
      headerHeight={34}
      quickFilterText={quickFilterText}
      rowSelection={rowSelection}
      selectionColumnDef={selectionColumnDef}
      suppressCellFocus={suppressCellFocus}
      autoSizeStrategy={effectiveAutoSizeStrategy}
      context={context}
      onGridReady={onGridReady}
      {...rest}
    />
  );
}

AgGridTable.propTypes = {
  rowData: PropTypes.array,
  columnDefs: PropTypes.array,
  defaultColDef: PropTypes.object,
  quickFilterText: PropTypes.string,
  rowSelection: PropTypes.object,
  selectionColumnDef: PropTypes.object,
  suppressCellFocus: PropTypes.bool,
  context: PropTypes.object,
};
