import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { LuType, LuChevronDown, LuGripVertical, LuCheck, LuTrash2, LuPlus } from "react-icons/lu";
import { AppButton, C, IconButton, Modal, T, Text, TextField } from "../../../components/utils";
import { getFieldTypeMeta } from "./fieldTypeMeta";
import AddColumnModal from "./AddColumnModal";

export function SelectFieldWithIcon({ value, options, onChange, icon: Icon, style, readOnly }) {
  return (
    <div style={{ position: "relative", ...style }}>
      {Icon && (
        <Icon
          size={14}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: C.muted,
            pointerEvents: "none",
          }}
        />
      )}
      <select
        value={value}
        onChange={(event) => !readOnly && onChange(event.target.value)}
        disabled={readOnly}
        style={{
          width: "100%",
          height: 38,
          padding: `0 34px 0 ${Icon ? 32 : 12}px`,
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
          pointerEvents: readOnly ? "none" : "auto",
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <LuChevronDown
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

SelectFieldWithIcon.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  style: PropTypes.object,
  readOnly: PropTypes.bool,
};

function EditFieldModal({ open, field, onClose, onSave }) {
  const [draftName, setDraftName] = useState("");
  const [draftValue, setDraftValue] = useState("");
  const [draftType, setDraftType] = useState("");
  const [draftDefault, setDraftDefault] = useState("");
  const [draftOptions, setDraftOptions] = useState([]);

  const isCreate = field ? !field.id : true;
  const typeMeta = getFieldTypeMeta(field?.type || "Single Line Text");

  useEffect(() => {
    if (!field) return;
    setDraftName(field.name || "");
    setDraftValue(field.value || "");
    setDraftType(field.type || "Single Line Text");
    setDraftDefault(field.default || field.defaultValue || "");
    setDraftOptions(field.options || []);
  }, [field]);

  const typeOptions = [
    "Single Line Text",
    "Long Text",
    "Attachment",
    "Checkbox",
    "Multiple Select",
    "Single Select",
    "User / Assigned Agent",
    "Date",
    "Email",
    "Phone Number",
    "URL",
    "Number",
    "Currency",
    "Rating"
  ];

  if (!open || !field) return null;

  const Icon = typeMeta.icon || LuType;

  const handleAddOption = () => {
    setDraftOptions((prev) => [...prev, ""]);
  };

  const handleUpdateOption = (index, newValue) => {
    setDraftOptions((prev) => {
      const next = [...prev];
      next[index] = newValue;
      return next;
    });
  };

  const handleRemoveOption = (index) => {
    const removedValue = draftOptions[index];
    setDraftOptions((prev) => prev.filter((_, i) => i !== index));
    if (draftType === "Multiple Select") {
      const currentDefaults = draftDefault.split(",").filter(Boolean);
      const newDefaults = currentDefaults.filter((d) => d !== removedValue);
      setDraftDefault(newDefaults.join(","));
    } else if (draftDefault === removedValue) {
      setDraftDefault("");
    }
  };

  return (
    <Modal
      width={360}
      onClose={onClose}
      style={{
        borderRadius: T.radius.lg,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.soft,
        background: C.card,
        padding: "24px 20px 20px",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <IconButton
        aria-label="Close"
        onClick={onClose}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          borderRadius: T.radius.sm,
          color: C.muted,
        }}
      >
        <FiX size={16} />
      </IconButton>

      <div style={{ display: "grid", gap: 16, marginTop: 8 }}>
        <TextField
          value={draftName}
          onChange={(e) => setDraftName(e.target.value)}
          placeholder="Field Name (Optional)"
          style={{
            width: "100%",
            height: 38,
            boxSizing: "border-box",
          }}
        />

        <AddColumnModal onSelectField={setDraftType}>
          {({ ref, onClick, ...triggerProps }) => (
            <div
              ref={ref}
              onClick={onClick}
              style={{ width: "100%" }}
              {...triggerProps}
            >
              <SelectFieldWithIcon
                value={draftType}
                options={typeOptions}
                onChange={setDraftType}
                icon={Icon}
                readOnly
              />
            </div>
          )}
        </AddColumnModal>

        {draftType === "Checkbox" && (
          <>
            <Text variant="mutedLabel" style={{ textAlign: "left", fontStyle: "italic", color: C.muted }}>
              Check Or Uncheck To Indicate Status
            </Text>
            <div style={{ display: "grid", gap: 6 }}>
              <Text variant="mutedLabel" style={{ textAlign: "left" }}>
                Default
              </Text>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="checkbox"
                  checked={draftDefault === "true" || draftDefault === true}
                  onChange={(e) => setDraftDefault(e.target.checked ? "true" : "false")}
                  style={{
                    width: 18,
                    height: 18,
                    cursor: "pointer",
                    accentColor: C.accent,
                  }}
                />
                <Text variant="body" color={C.text}>
                  {(draftDefault === "true" || draftDefault === true) ? "Checked" : "Unchecked"}
                </Text>
              </div>
            </div>
          </>
        )}

        {(draftType === "Single Select" || draftType === "Multiple Select") && (
          <>
            <Text variant="mutedLabel" style={{ textAlign: "left", fontStyle: "italic", color: C.muted }}>
              Select One Or More Predefined Options In A List.
            </Text>

            <div style={{ display: "grid", gap: 8 }}>
              <Text variant="mutedLabel" style={{ textAlign: "left" }}>
                Options
              </Text>
              <div
                style={{
                  maxHeight: 180,
                  overflowY: "auto",
                  padding: 4,
                  border: `1px solid ${C.borderLt}`,
                  borderRadius: T.radius.sm,
                  background: C.surface,
                  display: "grid",
                  gap: 6,
                }}
              >
                {draftOptions.length === 0 ? (
                  <div style={{ padding: "12px 8px", textAlign: "center" }}>
                    <Text variant="mutedLabel" color={C.muted}>
                      No Option Defined
                    </Text>
                  </div>
                ) : (
                  draftOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        background: C.card,
                        padding: "4px 8px",
                        borderRadius: T.radius.sm,
                        border: `1px solid ${C.borderMuted}`,
                      }}
                    >
                      <LuGripVertical size={14} color={C.muted} style={{ cursor: "grab" }} />
                      <LuCheck size={14} color={C.accent} style={{ opacity: opt ? 1 : 0.2 }} />
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleUpdateOption(idx, e.target.value)}
                        placeholder={`Option ${idx + 1}`}
                        autoFocus={idx === draftOptions.length - 1}
                        style={{
                          flex: 1,
                          border: "none",
                          outline: "none",
                          background: "transparent",
                          color: C.text,
                          fontSize: T.font.size.bodySmall,
                          fontFamily: T.font.family,
                        }}
                      />
                      <IconButton
                        onClick={() => handleRemoveOption(idx)}
                        style={{ padding: 4, color: C.muted }}
                      >
                        <LuTrash2 size={13} />
                      </IconButton>
                    </div>
                  ))
                )}
              </div>
              <AppButton
                variant="secondary"
                compact
                onClick={handleAddOption}
                style={{
                  alignSelf: "flex-start",
                  height: 30,
                  fontSize: T.font.size.xs,
                  padding: "0 10px",
                }}
              >
                <LuPlus size={12} style={{ marginRight: 4 }} /> Add Option
              </AppButton>
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <Text variant="mutedLabel" style={{ textAlign: "left" }}>
                Default
              </Text>
              {draftType === "Multiple Select" ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      flexWrap: "wrap",
                      minHeight: 30,
                      padding: 4,
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      borderRadius: T.radius.sm,
                      alignItems: "center",
                    }}
                  >
                    {!draftDefault || draftDefault.split(",").filter(Boolean).length === 0 ? (
                      <Text variant="mutedLabel" color={C.muted} style={{ padding: "4px 8px" }}>
                        Select Options
                      </Text>
                    ) : (
                      draftDefault.split(",").filter(Boolean).map((val) => (
                        <span
                          key={val}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            background: C.accentLt,
                            color: C.accent,
                            border: `1px solid ${C.accentTrack}`,
                            borderRadius: T.radius.sm,
                            padding: "2px 6px",
                            fontSize: T.font.size.xs,
                            fontWeight: T.font.weight.medium,
                          }}
                        >
                          {val}
                          <span
                            onClick={() => {
                              const currentDefaults = draftDefault.split(",").filter(Boolean);
                              const newDefaults = currentDefaults.filter((d) => d !== val);
                              setDraftDefault(newDefaults.join(","));
                            }}
                            style={{ cursor: "pointer", fontWeight: "bold" }}
                          >
                            ×
                          </span>
                        </span>
                      ))
                    )}
                  </div>
                  <div style={{ position: "relative" }}>
                    <select
                      value=""
                      onChange={(e) => {
                        const val = e.target.value;
                        if (!val) return;
                        const currentDefaults = draftDefault.split(",").filter(Boolean);
                        if (currentDefaults.includes(val)) {
                          const newDefaults = currentDefaults.filter((d) => d !== val);
                          setDraftDefault(newDefaults.join(","));
                        } else {
                          const newDefaults = [...currentDefaults, val];
                          setDraftDefault(newDefaults.join(","));
                        }
                      }}
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
                      <option value="">Select Options</option>
                      {draftOptions.filter(Boolean).map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <LuChevronDown
                      size={14}
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
                </>
              ) : (
                <div style={{ position: "relative" }}>
                  <select
                    value={draftDefault}
                    onChange={(e) => setDraftDefault(e.target.value)}
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
                    <option value="">Select One</option>
                    {draftOptions.filter(Boolean).map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <LuChevronDown
                    size={14}
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
              )}
            </div>
          </>
        )}

        {draftType !== "Checkbox" && draftType !== "Single Select" && draftType !== "Multiple Select" && (
          <div style={{ display: "grid", gap: 6 }}>
            <Text variant="mutedLabel" style={{ textAlign: "left" }}>
              Default
            </Text>
            <TextField
              value={draftDefault}
              onChange={(e) => setDraftDefault(e.target.value)}
              placeholder="Enter Default Value (Optional)"
              style={{
                width: "100%",
                height: 38,
                boxSizing: "border-box",
              }}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 4,
          }}
        >
          <AppButton
            compact
            onClick={onClose}
            style={{
              height: 34,
              minWidth: 70,
              borderRadius: T.radius.md,
              background: C.surface,
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
            }}
          >
            Cancel
          </AppButton>
          <AppButton
            variant="primary"
            compact
            onClick={() => {
              if (onSave) {
                onSave({
                  id: field.id || draftName.toLowerCase().replace(/[^a-z0-9]/g, ""),
                  name: draftName,
                  type: draftType,
                  defaultValue: draftDefault,
                  options: (draftType === "Single Select" || draftType === "Multiple Select") ? draftOptions.filter(Boolean) : undefined,
                  value: draftValue || draftDefault || ""
                });
              }
              onClose();
            }}
            style={{
              height: 34,
              minWidth: 70,
              borderRadius: T.radius.md,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
            }}
          >
            {isCreate ? "Create" : "Edit"}
          </AppButton>
        </div>
      </div>
    </Modal>
  );
}

EditFieldModal.propTypes = {
  open: PropTypes.bool.isRequired,
  field: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
};

export default EditFieldModal;
