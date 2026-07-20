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
      context={context}
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
