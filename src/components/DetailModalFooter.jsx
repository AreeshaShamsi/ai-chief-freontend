import PropTypes from "prop-types";
import { LuCopy, LuTrash2 } from "react-icons/lu";
import { AppButton, C, T } from "./utils";

export default function DetailModalFooter({
  onDuplicate,
  onDelete,
  hasUnsavedChanges = false,
  onSaveChanges,
}) {
  return (
    <div
      style={{
        padding: `${T.spacing[3]}px ${T.spacing[5]}px`,
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: C.card,
        flex: "0 0 auto",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      {/* Bottom-left: Duplicate Row, Delete Row */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <AppButton
          compact
          onClick={onDuplicate}
          style={{
            background: C.card,
            color: C.text,
            border: `1px solid ${C.border}`,
          }}
        >
          <LuCopy size={14} />
          <span>Duplicate Row</span>
        </AppButton>
        <AppButton
          compact
          onClick={onDelete}
          style={{
            background: C.card,
            color: C.danger || "#DC2626",
            border: `1px solid ${C.border}`,
          }}
        >
          <LuTrash2 size={14} />
          <span>Delete Row</span>
        </AppButton>
      </div>

      {/* Bottom-right: Save Changes (only visible when unsaved changes exist) */}
      {hasUnsavedChanges && (
        <AppButton
          compact
          onClick={onSaveChanges}
          style={{
            background: C.accent,
            color: "#FFFFFF",
            fontWeight: T.font.weight.semibold,
            padding: "0 16px",
            height: 34,
          }}
        >
          Save Changes
        </AppButton>
      )}
    </div>
  );
}

DetailModalFooter.propTypes = {
  onDuplicate: PropTypes.func,
  onDelete: PropTypes.func,
  hasUnsavedChanges: PropTypes.bool,
  onSaveChanges: PropTypes.func,
};
