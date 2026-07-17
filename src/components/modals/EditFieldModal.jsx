import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  FiChevronDown,
  FiChevronUp,
  FiDollarSign,
  FiTag,
  FiX,
} from "react-icons/fi";
import { AppPill, C, IconButton, Modal, T, Text, TextField } from "../utils";
import { getFieldTypeMeta } from "./fieldTypeMeta";

const chipTones = [
  { variant: "primary" },
  { variant: "success" },
  { variant: "neutral", style: { color: C.accentStrong, borderColor: C.accentTrack, background: C.accentLt } },
];

function FieldRow({ icon: Icon, label, children }) {
  return (
    <label
      style={{
        display: "grid",
        gridTemplateColumns: "24px minmax(120px, 0.42fr) minmax(0, 1fr)",
        alignItems: "center",
        gap: T.spacing[3],
      }}
    >
      <span
        style={{
          width: 24,
          height: 24,
          borderRadius: T.radius.sm,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.muted,
          background: C.surface,
          border: `1px solid ${C.borderLt}`,
        }}
      >
        <Icon size={13} />
      </span>
      <Text variant="mutedLabel">{label}</Text>
      {children}
    </label>
  );
}

FieldRow.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function SelectField({ value, options, onChange }) {
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{
          width: "100%",
          height: 38,
          padding: "0 34px 0 12px",
          border: `1px solid ${C.border}`,
          borderRadius: T.radius.sm,
          background: C.surface,
          color: C.text,
          fontSize: T.font.size.bodySmall,
          fontFamily: T.font.family,
          fontWeight: T.font.weight.medium,
          outline: "none",
          boxSizing: "border-box",
          appearance: "none",
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FiChevronDown
        size={14}
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          color: C.muted,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

SelectField.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

function TagsField({ values }) {
  return (
    <div
      style={{
        minHeight: 38,
        padding: "6px 8px",
        border: `1px solid ${C.border}`,
        borderRadius: T.radius.sm,
        background: C.surface,
        display: "flex",
        alignItems: "center",
        gap: 6,
        flexWrap: "wrap",
        boxSizing: "border-box",
      }}
    >
      {values.map((value, index) => {
        const tone = chipTones[index % chipTones.length];
        return (
          <AppPill key={value} size="xs" variant={tone.variant} style={tone.style}>
            {value}
          </AppPill>
        );
      })}
    </div>
  );
}

TagsField.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function CurrencyField({ value, onChange }) {
  return (
    <div style={{ position: "relative" }}>
      <FiDollarSign
        size={14}
        style={{
          position: "absolute",
          left: 11,
          top: "50%",
          transform: "translateY(-50%)",
          color: C.muted,
          pointerEvents: "none",
        }}
      />
      <TextField
        value={value}
        onChange={(event) => onChange(event.target.value)}
        inputMode="decimal"
        style={{ paddingLeft: 31 }}
      />
    </div>
  );
}

CurrencyField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function EditFieldModal({ open, field, fields, onClose, onMoveField }) {
  const [draftValue, setDraftValue] = useState("");
  const [draftType, setDraftType] = useState("");
  const fieldIndex = fields.findIndex((item) => item.id === field?.id);
  const typeMeta = getFieldTypeMeta(field?.type);
  const isFirst = fieldIndex <= 0;
  const isLast = fieldIndex === fields.length - 1;

  useEffect(() => {
    if (!field) return;
    setDraftValue(field.value || "");
    setDraftType(field.type || "");
  }, [field]);

  const typeOptions = useMemo(
    () => Array.from(new Set(fields.map((item) => item.type))),
    [fields]
  );

  if (!open || !field) return null;

  const CurrentIcon = typeMeta.icon;
  const options = field.options?.length ? field.options : [field.value].filter(Boolean);
  const showTags = typeMeta.editorKind === "multiSelect" || field.editorKind === "tags";
  const inputType = typeMeta.editorKind === "date" ? "date" : typeMeta.editorKind === "datetime" ? "datetime-local" : "text";

  return (
    <Modal
      width={560}
      onClose={onClose}
      style={{
        borderRadius: 20,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.soft,
        transform: "scale(1)",
        transition: "transform 180ms ease, opacity 180ms ease",
      }}
    >
      <div
        style={{
          minHeight: 48,
          padding: `0 ${T.spacing[4]}px`,
          borderBottom: `1px solid ${C.borderMuted}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: T.spacing[3],
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <IconButton
            aria-label="Move field up"
            disabled={isFirst}
            onClick={() => onMoveField(field.id, -1)}
            style={{ borderRadius: T.radius.sm }}
          >
            <FiChevronUp size={16} />
          </IconButton>
          <IconButton
            aria-label="Move field down"
            disabled={isLast}
            onClick={() => onMoveField(field.id, 1)}
            style={{ borderRadius: T.radius.sm }}
          >
            <FiChevronDown size={16} />
          </IconButton>
        </div>

        <IconButton aria-label="Close edit field" onClick={onClose} style={{ borderRadius: T.radius.sm }}>
          <FiX size={16} />
        </IconButton>
      </div>

      <div style={{ padding: T.spacing[5], display: "grid", gap: T.spacing[4] }}>
        <FieldRow icon={CurrentIcon} label="Name">
          <TextField value={field.name} readOnly />
        </FieldRow>

        <FieldRow icon={CurrentIcon} label="Field Type">
          <SelectField value={draftType} options={typeOptions} onChange={setDraftType} />
        </FieldRow>

        <FieldRow icon={showTags ? FiTag : CurrentIcon} label={showTags ? "Tags" : "Current Value"}>
          {showTags ? (
            <TagsField values={options} />
          ) : typeMeta.editorKind === "singleSelect" || typeMeta.editorKind === "user" ? (
            <SelectField value={draftValue} options={options} onChange={setDraftValue} />
          ) : typeMeta.editorKind === "currency" ? (
            <CurrencyField value={draftValue} onChange={setDraftValue} />
          ) : (
            <TextField
              value={draftValue}
              type={inputType}
              onChange={(event) => setDraftValue(event.target.value)}
            />
          )}
        </FieldRow>
      </div>
    </Modal>
  );
}

EditFieldModal.propTypes = {
  open: PropTypes.bool.isRequired,
  field: PropTypes.object,
  fields: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onMoveField: PropTypes.func.isRequired,
};

export default EditFieldModal;
