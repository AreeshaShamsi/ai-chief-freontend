import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LuChevronDown, LuPlus, LuX } from "react-icons/lu";
import { AppButton, AppCard, C, T, Text, TextField } from "../../../components/utils";
import AddColumnModal from "./AddColumnModal";
import { getFieldTypeMeta } from "./fieldTypeMeta";

export default function FieldConfigurationModal({
  open,
  onClose,
  onSubmit,
  fieldType = "Single Line Text",
  initialData = {},
  mode = "create",
}) {
  const [currentType, setCurrentType] = useState(fieldType);
  const [fieldName, setFieldName] = useState(initialData.name || "");
  const [defaultValue, setDefaultValue] = useState(initialData.value || "");
  const [options, setOptions] = useState(initialData.options || []);
  const [newOption, setNewOption] = useState("");

  useEffect(() => {
    if (open) {
      setCurrentType(fieldType || initialData.type || "Single Line Text");
      setFieldName(initialData.name || "");
      setDefaultValue(initialData.value || "");
      setOptions(initialData.options || []);
      setNewOption("");
    }
  }, [open, fieldType, initialData]);

  if (!open) return null;

  const typeMeta = getFieldTypeMeta(currentType);
  const TypeIcon = typeMeta.icon;
  const isSelectType = currentType === "Single Select" || currentType === "Multiple Select";
  const isCheckbox = currentType === "Checkbox";

  const handleAddOption = () => {
    if (newOption.trim()) {
      setOptions((prev) => [...prev, newOption.trim()]);
      setNewOption("");
    }
  };

  const handleRemoveOption = (index) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        id: initialData.id,
        name: fieldName || currentType,
        type: currentType,
        value: defaultValue,
        ...(isSelectType ? { options } : {}),
      });
    }
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        background: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: T.spacing[4],
      }}
      onClick={onClose}
    >
      <AppCard
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 440,
          background: C.card,
          borderRadius: T.radius.xl,
          boxShadow: T.shadow.soft,
          padding: T.spacing[5],
        }}
      >
        <Text variant="cardTitle" style={{ marginBottom: T.spacing[4] }}>
          {mode === "edit" ? "Edit Field Configuration" : `Configure ${currentType} Field`}
        </Text>

        <form onSubmit={handleSubmitForm} style={{ display: "grid", gap: T.spacing[4] }}>
          <div>
            <Text variant="label" style={{ marginBottom: T.spacing[1], display: "block" }}>
              Field Name
            </Text>
            <TextField
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              placeholder="Field Name (Optional)"
              style={{
                height: 38,
                borderRadius: T.radius.md,
                fontSize: T.font.size.bodySmall,
              }}
            />
          </div>

          <div>
            <Text variant="label" style={{ marginBottom: T.spacing[1], display: "block" }}>
              Field Type
            </Text>

            <AddColumnModal onSelectField={(selectedLabel) => setCurrentType(selectedLabel)}>
              {({ ref, onClick, ...triggerProps }) => (
                <button
                  ref={ref}
                  type="button"
                  onClick={onClick}
                  style={{
                    width: "100%",
                    height: 38,
                    borderRadius: T.radius.md,
                    border: `1px solid ${C.border}`,
                    background: C.surface,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: `0 ${T.spacing[3]}px`,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  {...triggerProps}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {TypeIcon ? <TypeIcon size={16} color={C.muted} /> : null}
                    <Text variant="label" color={C.text}>
                      {currentType}
                    </Text>
                  </div>
                  <LuChevronDown size={16} color={C.muted} />
                </button>
              )}
            </AddColumnModal>
          </div>

          {isSelectType && (
            <div>
              <Text variant="label" style={{ marginBottom: T.spacing[1], display: "block" }}>
                Options
              </Text>
              <div style={{ display: "flex", gap: 8, marginBottom: T.spacing[2] }}>
                <TextField
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  placeholder="Add Option"
                  style={{
                    flex: 1,
                    height: 34,
                    borderRadius: T.radius.md,
                    fontSize: T.font.size.bodySmall,
                  }}
                />
                <AppButton type="button" compact onClick={handleAddOption} variant="secondary">
                  <LuPlus size={14} />
                  Add
                </AppButton>
              </div>

              {options.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {options.map((opt, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "2px 8px",
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: T.radius.sm,
                        fontSize: T.font.size.bodySmall,
                        color: C.text,
                      }}
                    >
                      {opt}
                      <LuX
                        size={12}
                        color={C.muted}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRemoveOption(idx)}
                      />
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {!isCheckbox && (
            <div>
              <Text variant="label" style={{ marginBottom: T.spacing[1], display: "block" }}>
                Default
              </Text>
              <TextField
                value={defaultValue}
                onChange={(e) => setDefaultValue(e.target.value)}
                placeholder="Enter Default Value (Optional)"
                style={{
                  height: 38,
                  borderRadius: T.radius.md,
                  fontSize: T.font.size.bodySmall,
                }}
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: T.spacing[3],
              marginTop: T.spacing[2],
            }}
          >
            <AppButton type="button" variant="secondary" onClick={onClose} compact>
              Cancel
            </AppButton>
            <AppButton type="submit" variant="primary" compact>
              {mode === "edit" ? "Edit" : "Create"}
            </AppButton>
          </div>
        </form>
      </AppCard>
    </div>
  );
}

FieldConfigurationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  fieldType: PropTypes.string,
  initialData: PropTypes.object,
  mode: PropTypes.oneOf(["create", "edit"]),
};
