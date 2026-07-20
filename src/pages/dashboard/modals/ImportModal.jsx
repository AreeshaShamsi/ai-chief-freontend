import { useState } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { AppButton, C, IconButton, Modal, T, Text } from "../../../components/utils";

function RadioMark({ selected }) {
  return (
    <span
      style={{
        width: 13,
        height: 13,
        borderRadius: T.radius.circle,
        border: `1.5px solid ${selected ? C.accent : C.muted}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      {selected ? (
        <span style={{ width: 6, height: 6, borderRadius: T.radius.circle, background: C.accent }} />
      ) : null}
    </span>
  );
}

RadioMark.propTypes = {
  selected: PropTypes.bool.isRequired,
};

function ImportModal({ open, onClose, onMatchExisting, onCreateNew }) {
  const [selectedOption, setSelectedOption] = useState("existing");

  if (!open) return null;

  const handleContinue = () => {
    if (selectedOption === "existing") {
      if (onMatchExisting) onMatchExisting();
    } else {
      if (onCreateNew) onCreateNew();
    }
    onClose();
  };

  return (
    <Modal
      width={480}
      onClose={onClose}
      style={{
        borderRadius: 20,
        boxShadow: T.shadow.soft,
        border: `1px solid ${C.border}`,
        maxHeight: "calc(100vh - 24px)",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          padding: "22px 24px",
          borderBottom: `1px solid ${C.borderMuted}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: C.text,
            fontSize: T.font.size.pageTitle,
            fontWeight: T.font.weight.bold,
            lineHeight: "26px",
          }}
        >
          Import Data
        </h2>
        <IconButton
          aria-label="Close import data modal"
          onClick={onClose}
          style={{ width: 32, height: 32, color: C.muted }}
        >
          <FiX size={20} strokeWidth={1.8} />
        </IconButton>
      </div>

      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        <button
          type="button"
          onClick={() => setSelectedOption("existing")}
          style={{
            width: "100%",
            minHeight: 64,
            border: `1px solid ${selectedOption === "existing" ? C.accent : C.border}`,
            borderRadius: T.radius.sm,
            background: selectedOption === "existing" ? C.accentLt : C.card,
            color: C.text,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 16px",
            fontFamily: T.font.family,
            textAlign: "left",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
        >
          <RadioMark selected={selectedOption === "existing"} />
          <div>
            <div style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold, color: C.text }}>
              Match To Existing Grid
            </div>
            <div style={{ marginTop: 2 }}>
              <Text variant="subtitle">Align your file columns to the current table</Text>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSelectedOption("new")}
          style={{
            width: "100%",
            minHeight: 64,
            border: `1px solid ${selectedOption === "new" ? C.accent : C.border}`,
            borderRadius: T.radius.sm,
            background: selectedOption === "new" ? C.accentLt : C.card,
            color: C.text,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 16px",
            fontFamily: T.font.family,
            textAlign: "left",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
        >
          <RadioMark selected={selectedOption === "new"} />
          <div>
            <div style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold, color: C.text }}>
              Create A New Grid
            </div>
            <div style={{ marginTop: 2 }}>
              <Text variant="subtitle">Generate A Brand New Table From Your File</Text>
            </div>
          </div>
        </button>
      </div>

      <div
        style={{
          padding: "16px 24px",
          borderTop: `1px solid ${C.borderMuted}`,
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          background: C.card,
        }}
      >
        <AppButton
          compact
          onClick={onClose}
          style={{
            height: 38,
            minWidth: 78,
            borderRadius: T.radius.md,
            background: C.surface,
            color: C.text,
            fontSize: T.font.size.sm,
            fontWeight: T.font.weight.semibold,
          }}
        >
          Cancel
        </AppButton>
        <AppButton
          variant="primary"
          compact
          onClick={handleContinue}
          style={{
            height: 38,
            minWidth: 84,
            borderRadius: T.radius.md,
            fontSize: T.font.size.sm,
            fontWeight: T.font.weight.semibold,
          }}
        >
          Continue
        </AppButton>
      </div>
    </Modal>
  );
}

ImportModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onMatchExisting: PropTypes.func,
  onCreateNew: PropTypes.func,
};

export default ImportModal;
