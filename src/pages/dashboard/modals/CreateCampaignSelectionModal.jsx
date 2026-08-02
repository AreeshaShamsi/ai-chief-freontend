import { useState } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import {
  AppButton,
  C,
  IconButton,
  Modal,
  T,
  TextField,
  Text,
} from "../../../components/utils";

function ModalHeader({ title, onClose }) {
  return (
    <div
      style={{
        padding: "14px 20px 12px",
        borderBottom: `1px solid ${C.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text
        as="div"
        style={{
          color: C.text,
          fontSize: T.font.size.cardTitle,
          fontWeight: T.font.weight.bold,
          fontFamily: T.font.family,
        }}
      >
        {title}
      </Text>
      <IconButton aria-label="Close modal" onClick={onClose}>
        <FiX size={15} />
      </IconButton>
    </div>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

function SelectRecordOption({ label, selected, onSelect, disabled }) {
  return (
    <div
      onClick={disabled ? undefined : onSelect}
      style={{
        display: "flex",
        alignItems: "center",
        gap: T.spacing[3],
        padding: `${T.spacing[3]}px ${T.spacing[4]}px`,
        borderRadius: T.radius.md,
        border: selected ? `1.5px solid ${C.accent}` : `1px solid ${C.border}`,
        background: selected ? C.accentLt : C.surface,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "all 180ms ease",
        boxSizing: "border-box",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 18,
          height: 18,
          borderRadius: T.radius.circle,
          border: `2px solid ${selected ? C.accent : C.muted}`,
          background: selected ? C.accent : "transparent",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {selected ? (
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: T.radius.circle,
              background: C.card,
            }}
          />
        ) : null}
      </span>
      <Text
        variant="body"
        style={{
          color: selected ? C.accent : C.text,
          fontWeight: T.font.weight.semibold,
          fontSize: T.font.size.bodySmall,
        }}
      >
        {label}
      </Text>
    </div>
  );
}

SelectRecordOption.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default function CreateCampaignSelectionModal({ onClose, onContinue, selectedCount = 0 }) {
  const [recordType, setRecordType] = useState("all");
  const [startRow, setStartRow] = useState("1");
  const [endRow, setEndRow] = useState("100");
  const [campaignName, setCampaignName] = useState("");
  const [callType, setCallType] = useState("real_estate_cold_call");

  const handleContinue = () => {
    if (onContinue) {
      onContinue({
        campaignName: campaignName.trim(),
        recordType,
        startRow,
        endRow,
        callType,
      });
    }
    onClose?.();
  };

  return (
    <Modal width={T.layout.modalWidth}>
      <ModalHeader title="Select Records" onClose={() => onClose?.()} />
      <div
        style={{
          padding: "18px 20px",
          display: "flex",
          flexDirection: "column",
          gap: T.spacing[4],
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              marginBottom: 6,
              fontFamily: T.font.family,
            }}
          >
            Campaign Name
          </label>
          <TextField
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            placeholder="Enter campaign name"
            style={{ height: 36 }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: T.spacing[3] }}>
          <SelectRecordOption
            label="All Records In View (4,500 Total)"
            selected={recordType === "all"}
            onSelect={() => setRecordType("all")}
          />

          <SelectRecordOption
            label={`Selected Rows (${selectedCount} Total)`}
            selected={recordType === "selected"}
            onSelect={() => setRecordType("selected")}
            disabled={selectedCount === 0}
          />

          <SelectRecordOption
            label="Custom Row Range"
            selected={recordType === "custom"}
            onSelect={() => setRecordType("custom")}
          />

          {recordType === "custom" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: T.spacing[3],
                marginTop: T.spacing[1],
                padding: T.spacing[3],
                background: C.surface,
                borderRadius: T.radius.md,
                border: `1px solid ${C.borderLt}`,
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    color: C.text,
                    fontSize: T.font.size.bodySmall,
                    fontWeight: T.font.weight.semibold,
                    marginBottom: 6,
                    fontFamily: T.font.family,
                  }}
                >
                  Start Row
                </label>
                <TextField
                  value={startRow}
                  onChange={(e) => setStartRow(e.target.value)}
                  placeholder="1"
                  style={{ height: 36 }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: C.text,
                    fontSize: T.font.size.bodySmall,
                    fontWeight: T.font.weight.semibold,
                    marginBottom: 6,
                    fontFamily: T.font.family,
                  }}
                >
                  End Row
                </label>
                <TextField
                  value={endRow}
                  onChange={(e) => setEndRow(e.target.value)}
                  placeholder="100"
                  style={{ height: 36 }}
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <label
            style={{
              display: "block",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              marginBottom: 6,
              fontFamily: T.font.family,
            }}
          >
            Call Type
          </label>
          <select
            value={callType}
            onChange={(e) => setCallType(e.target.value)}
            style={{
              width: "100%",
              height: 36,
              padding: "0 12px",
              border: `1px solid ${C.border}`,
              borderRadius: T.radius.sm,
              background: C.surface,
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontFamily: T.font.family,
              outline: "none",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <option value="real_estate_cold_call">Cold Call</option>
            <option value="requirement_gathering">Requirement Gathering</option>
          </select>
        </div>
      </div>
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          padding: "12px 20px",
          display: "flex",
          justifyContent: "flex-end",
          gap: T.spacing[2],
        }}
      >
        <AppButton onClick={() => onClose?.()} compact>
          Cancel
        </AppButton>
        <AppButton disabled={!campaignName.trim()} variant="primary" compact onClick={handleContinue}>
          Continue
        </AppButton>
      </div>
    </Modal>
  );
}

CreateCampaignSelectionModal.propTypes = {
  onClose: PropTypes.func,
  onContinue: PropTypes.func,
  selectedCount: PropTypes.number,
};
