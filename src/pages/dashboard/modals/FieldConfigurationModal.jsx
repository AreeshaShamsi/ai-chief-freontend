import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [formData, setFormData] = useState({
    currentType: fieldType,
    fieldName: initialData.name || "",
    defaultValue: initialData.value || "",
    options: initialData.options || [],
    newOption: "",
    description: initialData.description || "",
  });

  useEffect(() => {
    if (open) {
      const type = fieldType || initialData.type || "Single Line Text";
      setFormData({
        currentType: type,
        fieldName: initialData.name || "",
        defaultValue: initialData.value || "",
        options: Array.isArray(initialData.options) ? [...initialData.options] : [],
        newOption: "",
        description: initialData.description || "",
      });
    }
  }, [open, fieldType, initialData]);

  if (!open) return null;

  const typeMeta = getFieldTypeMeta(formData.currentType);
  const TypeIcon = typeMeta.icon;
  const isSelectType = formData.currentType === "Single Select" || formData.currentType === "Multiple Select";
  const isCheckbox = formData.currentType === "Checkbox";
  const isLongText = formData.currentType === "Long Text";
  const isNumberType = formData.currentType === "Number" || formData.currentType === "Currency" || formData.currentType === "Percentage" || formData.currentType === "Rating";
  const isDateType = formData.currentType === "Date" || formData.currentType === "Date Time";

  const updateFormField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddOption = () => {
    if (formData.newOption.trim()) {
      setFormData((prev) => ({
        ...prev,
        options: [...prev.options, prev.newOption.trim()],
        newOption: "",
      }));
    }
  };

  const handleRemoveOption = (index) => {
    setFormData((prev) => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index),
    }));
  };

  const handleSubmitForm = (e) => {
    if (e) e.preventDefault();
    if (onSubmit) {
      onSubmit({
        id: initialData.id || `field_${Date.now()}`,
        name: formData.fieldName.trim() || formData.currentType,
        type: formData.currentType,
        value: formData.defaultValue,
        description: formData.description.trim(),
        ...(isSelectType ? { options: formData.options } : {}),
      });
    }
    onClose();
  };

  const handleTypeSelect = (selectedLabel) => {
    setFormData((prev) => ({
      ...prev,
      currentType: selectedLabel,
      fieldName: !prev.fieldName || prev.fieldName === prev.currentType ? selectedLabel : prev.fieldName,
    }));
  };

  const modalContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: T.spacing[4],
      }}
      onClick={onClose}
      onMouseDown={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <AppCard
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
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
          {mode === "edit" ? "Edit Field Configuration" : `Configure ${formData.currentType} Field`}
        </Text>

        <form onSubmit={handleSubmitForm} style={{ display: "grid", gap: T.spacing[4] }}>
          <div>
            <Text variant="label" style={{ marginBottom: T.spacing[1], display: "block" }}>
              Field Name
            </Text>
            <TextField
              autoFocus
              value={formData.fieldName}
              onChange={(e) => updateFormField("fieldName", e.target.value)}
              placeholder="Field Name (e.g. Client Name)"
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

            <AddColumnModal onSelectField={handleTypeSelect}>
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
                      {formData.currentType}
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
                  value={formData.newOption}
                  onChange={(e) => updateFormField("newOption", e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddOption();
                    }
                  }}
                  placeholder="Add Option (e.g. High Priority)"
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

              {formData.options.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {formData.options.map((opt, idx) => (
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
                Default Value
              </Text>
              <TextField
                value={formData.defaultValue}
                onChange={(e) => updateFormField("defaultValue", e.target.value)}
                multiline={isLongText}
                rows={3}
                type={isNumberType ? "number" : isDateType ? "date" : "text"}
                placeholder="Enter Default Value (Optional)"
                style={{
                  height: isLongText ? "auto" : 38,
                  borderRadius: T.radius.md,
                  fontSize: T.font.size.bodySmall,
                }}
              />
            </div>
          )}

          {isCheckbox && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="checkbox"
                id="defaultCheckboxVal"
                checked={Boolean(formData.defaultValue)}
                onChange={(e) => updateFormField("defaultValue", e.target.checked ? "Checked" : "")}
                style={{ width: 16, height: 16, cursor: "pointer" }}
              />
              <label htmlFor="defaultCheckboxVal" style={{ color: C.text, fontSize: T.font.size.bodySmall, cursor: "pointer" }}>
                Default to Checked
              </label>
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
              {mode === "edit" ? "Save Changes" : "Create Field"}
            </AppButton>
          </div>
        </form>
      </AppCard>
    </div>
  );

  return createPortal(modalContent, document.body);
}

FieldConfigurationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  fieldType: PropTypes.string,
  initialData: PropTypes.object,
  mode: PropTypes.oneOf(["create", "edit"]),
};
