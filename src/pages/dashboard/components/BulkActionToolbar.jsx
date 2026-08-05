import { useState } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { LuTrash2, LuPhoneOff } from "react-icons/lu";
import { AppButton, C, ConfirmationModal, T, Text } from "../../../components/utils";

export default function BulkActionToolbar({
  selectedCount,
  onDelete,
  onClearSelection,
  showStopCalls,
  onStopCalls,
  showScheduleMeeting,
  onScheduleMeeting,
}) {
  const [showStopConfirm, setShowStopConfirm] = useState(false);

  if (!selectedCount || selectedCount <= 0) return null;

  const personLabel = selectedCount === 1 ? "this person" : `these ${selectedCount} people`;

  return (
    <>
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
          {showStopCalls && (
            <AppButton
              compact
              onClick={() => setShowStopConfirm(true)}
              aria-label="Stop further calls for selected"
              style={{
                background: "#ef4444",
                color: "#ffffff",
                border: "none",
                gap: 6,
              }}
            >
              <FiX size={14} color="#ffffff" />
              <Text variant="label" color="#ffffff">
                Stop Further Calls
              </Text>
            </AppButton>
          )}

          {showScheduleMeeting && selectedCount === 1 && (
            <AppButton
              compact
              onClick={onScheduleMeeting}
              aria-label="Schedule Meeting with selected"
              style={{
                background: C.accent,
                color: "#ffffff",
                border: "none",
                gap: 6,
              }}
            >
              <Text variant="label" color="#ffffff">
                Schedule Meeting
              </Text>
            </AppButton>
          )}

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

      {showStopConfirm && (
        <ConfirmationModal
          title="Stop Further Calls?"
          message={`Are you sure you want to stop all further calls for ${personLabel}? The AI calling flow will be permanently halted and cannot be resumed automatically.`}
          confirmText="Yes, Stop Calls"
          cancelText="Go Back"
          variant="danger"
          onConfirm={() => {
            if (onStopCalls) onStopCalls();
          }}
          onClose={() => setShowStopConfirm(false)}
        />
      )}
    </>
  );
}

BulkActionToolbar.propTypes = {
  selectedCount: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClearSelection: PropTypes.func.isRequired,
  showStopCalls: PropTypes.bool,
  onStopCalls: PropTypes.func,
  showScheduleMeeting: PropTypes.bool,
  onScheduleMeeting: PropTypes.func,
};
