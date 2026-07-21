import { useState } from "react";
import PropTypes from "prop-types";
import { LuText, LuChevronDown } from "react-icons/lu";
import { AppButton, AppCard, C, T, Text, TextField } from "../../../components/utils";

export default function LongTextModal({
  open,
  onClose,
  onCreate,
  initialData = {},
  isEdit = false,
}) {
  const [fieldName, setFieldName] = useState(initialData.name || "");
  const [defaultValue, setDefaultValue] = useState(initialData.value || "");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCreate) {
      onCreate({
        name: fieldName || "Long Text",
        type: "Long Text",
        value: defaultValue,
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
          maxWidth: 420,
          background: C.card,
          borderRadius: T.radius.xl,
          boxShadow: T.shadow.soft,
          padding: T.spacing[5],
        }}
      >
        <Text variant="cardTitle" style={{ marginBottom: T.spacing[4] }}>
          {isEdit ? "Edit Field Configuration" : "Configure Long Text Field"}
        </Text>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: T.spacing[4] }}>
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

            <div
              style={{
                height: 38,
                borderRadius: T.radius.md,
                border: `1px solid ${C.border}`,
                background: C.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: `0 ${T.spacing[3]}px`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <LuText size={16} color={C.muted} />
                <Text variant="bodySmall" color={C.text}>
                  Long Text
                </Text>
              </div>
              <LuChevronDown size={16} color={C.muted} />
            </div>
          </div>

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
              {isEdit ? "Edit" : "Create"}
            </AppButton>
          </div>
        </form>
      </AppCard>
    </div>
  );
}

LongTextModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func,
  initialData: PropTypes.object,
  isEdit: PropTypes.bool,
};
