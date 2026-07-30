import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { AppButton, C, T, Text } from "../../../components/utils";

export default function BulkActionToolbar({
  selectedCount,
  onDelete,
  onClearSelection,
}) {
  if (!selectedCount || selectedCount <= 0) return null;

  return (
    <div
      role="toolbar"
      aria-label="Bulk actions toolbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        background: C.accentLt,
        border: `1px solid ${C.accentTrack}`,
        borderRadius: T.radius.sm,
        marginBottom: 8,
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: C.accent,
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.bold,
          }}
        >
          {selectedCount}
        </div>
        <Text variant="label" color={C.text}>
          {selectedCount === 1 ? "1 selected" : `${selectedCount} selected`}
        </Text>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <AppButton
          compact
          onClick={onDelete}
          aria-label="Delete selected rows"
          style={{
            background: C.hot,
            color: "#ffffff",
            border: "none",
            gap: 6,
          }}
        >
          <LuTrash2 size={14} color="#ffffff" />
          <Text variant="label" color="#ffffff">
            Delete {selectedCount === 1 ? "Row" : `(${selectedCount})`}
          </Text>
        </AppButton>

        <AppButton
          compact
          onClick={onClearSelection}
          aria-label="Clear selection"
          style={{
            background: "transparent",
            color: C.muted,
            border: `1px solid ${C.border}`,
            gap: 4,
          }}
        >
          <FiX size={14} color={C.muted} />
          <Text variant="mutedLabel">Cancel</Text>
        </AppButton>
      </div>
    </div>
  );
}

BulkActionToolbar.propTypes = {
  selectedCount: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClearSelection: PropTypes.func.isRequired,
};
