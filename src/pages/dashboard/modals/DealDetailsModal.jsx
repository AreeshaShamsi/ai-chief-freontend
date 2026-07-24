import { useEffect, useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import {
  LuChevronDown,
  LuX,
  LuChevronUp,
  LuPlus,
  LuPencilLine,
  LuCopy,
  LuTrash2,
  LuCalendarDays,
  LuEye,
  LuEyeOff,
} from "react-icons/lu";
import { AppButton, AppPill, C, IconButton, Modal, T, Text, TextField } from "../../../components/utils";
import AddColumnModal from "./AddColumnModal";
import { getFieldTypeMeta } from "./fieldTypeMeta";

function ConfirmationDialog({ open, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <Modal
      width={400}
      onClose={onCancel}
      style={{
        borderRadius: T.radius.sm,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.soft,
        background: C.card,
        padding: 24,
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Text variant="pageTitle" style={{ fontSize: 18, fontWeight: T.font.weight.bold, color: C.text }}>
          Delete this row?
        </Text>
        <Text style={{ fontSize: T.font.size.sm, color: C.muted }}>
          This action cannot be undone.
        </Text>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 8 }}>
          <AppButton onClick={onCancel} variant="secondary">
            Cancel
          </AppButton>
          <AppButton onClick={onConfirm} style={{ background: C.danger, color: "#fff" }}>
            Delete
          </AppButton>
        </div>
      </div>
    </Modal>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default function DealDetailsModal({
  open,
  row,
  fields,
  columns,
  workspaceId,
  variant,
  type,
  editable = true,
  onPrevRow,
  onNextRow,
  onClose,
  onUpdateField,
  onAddField,
  onDuplicateRow,
  onDeleteRow,
}) {
  const [fieldValues, setFieldValues] = useState({});
  const [isEditing, setIsEditing] = useState(editable);
  const [openDropdownFieldId, setOpenDropdownFieldId] = useState(null);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [showPasswords, setShowPasswords] = useState({});

  const actionsMenuRef = useRef(null);
  const itemRefs = useRef([]);
  const fieldRefs = useRef({});

  const togglePasswordVisibility = (fieldId) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldId]: !prev[fieldId],
    }));
  };

  const effectiveFields = useMemo(() => {
    const rawList = fields || columns;
    let list = [];
    if (rawList && rawList.length > 0) {
      list = rawList.filter((f) => f.id !== "addColumn");
    } else if (row) {
      list = Object.keys(row)
        .filter((key) => key !== "id")
        .map((key) => ({
          id: key,
          name: key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()),
          type: "Single Line Text",
        }));
    }

    const isStaff =
      workspaceId === "staff" ||
      workspaceId === "mystaff" ||
      variant === "staff" ||
      type === "staff";

    if (isStaff) {
      const hasSecurity = list.some((f) => f.id === "currentPassword");
      if (!hasSecurity) {
        list = [
          ...list,
          { id: "currentPassword", name: "Current Password", type: "Single Line Text" },
          { id: "newPassword", name: "New Password", type: "Single Line Text" },
          { id: "confirmPassword", name: "Confirm Password", type: "Single Line Text" },
        ];
      }
    }

    return list;
  }, [fields, columns, row, workspaceId, variant, type]);

  useEffect(() => {
    if (!row) return;
    const initial = {};
    effectiveFields.forEach((field) => {
      initial[field.id] = row[field.id] !== undefined ? row[field.id] : row[field.name] !== undefined ? row[field.name] : "";
    });
    setFieldValues(initial);
    setIsEditing(editable);
    setOpenDropdownFieldId(null);
    setShowPasswords({});
  }, [row, effectiveFields, editable]);

  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (openDropdownFieldId) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
    }
  }, [openDropdownFieldId]);

  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  useEffect(() => {
    if (!openDropdownFieldId) return undefined;
    const handlePointerDown = (event) => {
      if (actionsMenuRef.current && !actionsMenuRef.current.contains(event.target)) {
        setOpenDropdownFieldId(null);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openDropdownFieldId]);

  if (!open || !row) return null;

  const handleUpdate = (fieldId, value) => {
    setFieldValues((prev) => ({ ...prev, [fieldId]: value }));
    if (onUpdateField) {
      onUpdateField(row.id, fieldId, value);
    }
  };

  const handleEditRow = (fieldId) => {
    setOpenDropdownFieldId(null);
    setIsEditing(true);
    setTimeout(() => {
      fieldRefs.current[fieldId]?.focus();
    }, 50);
  };

  const handleConfirmDelete = () => {
    setIsConfirmDeleteOpen(false);
    if (onDeleteRow) onDeleteRow(row.id);
    onClose();
  };

  const handleChevronClick = (fieldId) => {
    setOpenDropdownFieldId((prev) => (prev === fieldId ? null : fieldId));
  };

  const handleKeyDownMenu = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % 3);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + 3) % 3);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpenDropdownFieldId(null);
    }
  };

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    border: "none",
    background: "transparent",
    padding: "8px 12px",
    borderRadius: T.radius.sm,
    cursor: "pointer",
    textAlign: "left",
    color: C.text,
    fontSize: T.font.size.sm,
    fontWeight: T.font.weight.medium,
    fontFamily: T.font.family,
  };

  const renderChevronColumn = (fieldId, fieldLabel) => {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", position: "relative" }}>
        <IconButton
          aria-label={`Field actions for ${fieldLabel}`}
          onClick={(e) => {
            e.stopPropagation();
            handleChevronClick(fieldId);
          }}
          style={{
            borderRadius: T.radius.sm,
            padding: 4,
            background: openDropdownFieldId === fieldId ? C.surface : "transparent",
          }}
        >
          <LuChevronDown size={14} style={{ color: C.muted }} />
        </IconButton>

        {openDropdownFieldId === fieldId && (
          <div
            ref={actionsMenuRef}
            role="menu"
            aria-label="Row actions"
            onKeyDown={handleKeyDownMenu}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 28,
              zIndex: 100,
              minWidth: 160,
              borderRadius: T.radius.sm,
              border: `1px solid ${C.border}`,
              background: C.card,
              boxShadow: T.shadow.soft,
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <button
              ref={(el) => (itemRefs.current[0] = el)}
              role="menuitem"
              type="button"
              onClick={() => handleEditRow(fieldId)}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              style={menuItemStyle}
            >
              <LuPencilLine size={14} color={C.muted} />
              <span>Edit Row</span>
            </button>

            <button
              ref={(el) => (itemRefs.current[1] = el)}
              role="menuitem"
              type="button"
              onClick={() => {
                setOpenDropdownFieldId(null);
                if (onDuplicateRow) onDuplicateRow(row.id);
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              style={menuItemStyle}
            >
              <LuCopy size={14} color={C.muted} />
              <span>Duplicate Row</span>
            </button>

            <button
              ref={(el) => (itemRefs.current[2] = el)}
              role="menuitem"
              type="button"
              onClick={() => {
                setOpenDropdownFieldId(null);
                setIsConfirmDeleteOpen(true);
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              style={{
                ...menuItemStyle,
                color: C.hot,
              }}
            >
              <LuTrash2 size={14} color={C.hot} />
              <span style={{ color: C.hot }}>Delete Row</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderFieldValueInput = (field) => {
    const val = fieldValues[field.id] !== undefined ? fieldValues[field.id] : "";
    const meta = getFieldTypeMeta(field.type);
    const fieldLower = field.id.toLowerCase();
    const isTimestamp =
      fieldLower.includes("created") ||
      fieldLower.includes("lastmodified") ||
      fieldLower.includes("updatedat");

    if (isTimestamp) {
      return (
        <TextField
          ref={(el) => (fieldRefs.current[field.id] = el)}
          value={String(val)}
          readOnly={true}
          style={{ background: C.surface, color: C.muted, cursor: "not-allowed" }}
        />
      );
    }

    const isPassword = fieldLower.includes("password");

    if (isPassword) {
      const isVisible = Boolean(showPasswords[field.id]);
      const PasswordIcon = isVisible ? LuEyeOff : LuEye;

      return (
        <div style={{ position: "relative", width: "100%" }}>
          <TextField
            ref={(el) => (fieldRefs.current[field.id] = el)}
            type={isVisible ? "text" : "password"}
            value={String(val)}
            readOnly={!isEditing}
            onChange={(e) => handleUpdate(field.id, e.target.value)}
            style={{ paddingRight: 34 }}
          />
          <IconButton
            type="button"
            aria-label={isVisible ? "Hide password" : "Show password"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              togglePasswordVisibility(field.id);
            }}
            style={{
              position: "absolute",
              right: 6,
              top: "50%",
              transform: "translateY(-50%)",
              padding: 4,
              color: C.muted,
              background: "transparent",
              border: "none",
              borderRadius: T.radius.sm,
              cursor: "pointer",
            }}
          >
            <PasswordIcon size={14} />
          </IconButton>
        </div>
      );
    }

    if (meta.editorKind === "date" || meta.editorKind === "datetime") {
      return (
        <div style={{ position: "relative", width: "100%" }}>
          <TextField
            ref={(el) => (fieldRefs.current[field.id] = el)}
            value={String(val)}
            readOnly={!isEditing}
            onChange={(e) => handleUpdate(field.id, e.target.value)}
            style={{ paddingRight: 31 }}
          />
          <LuCalendarDays
            size={14}
            style={{
              position: "absolute",
              right: 11,
              top: "50%",
              transform: "translateY(-50%)",
              color: C.muted,
              pointerEvents: "none",
            }}
          />
        </div>
      );
    }

    return (
      <TextField
        ref={(el) => (fieldRefs.current[field.id] = el)}
        value={String(val)}
        readOnly={!isEditing}
        onChange={(e) => handleUpdate(field.id, e.target.value)}
      />
    );
  };

  return (
    <>
      <Modal
        width={780}
        onClose={onClose}
        style={{
          borderRadius: T.radius.sm,
          border: `1px solid ${C.border}`,
          boxShadow: T.shadow.soft,
          background: C.card,
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxHeight: "85vh" }}>
          {/* Sticky Header */}
          <div
            style={{
              minHeight: 48,
              padding: `0 ${T.spacing[4]}px`,
              borderBottom: `1px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: C.card,
              flex: "0 0 auto",
            }}
          >
            {/* Collapse Up & Down buttons */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <IconButton
                aria-label="Previous row"
                disabled={!onPrevRow}
                onClick={onPrevRow}
                style={{ borderRadius: T.radius.sm }}
              >
                <LuChevronUp size={16} />
              </IconButton>
              <IconButton
                aria-label="Next row"
                disabled={!onNextRow}
                onClick={onNextRow}
                style={{ borderRadius: T.radius.sm }}
              >
                <LuChevronDown size={16} />
              </IconButton>
            </div>

            {/* Close button */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <IconButton aria-label="Close modal" onClick={onClose} style={{ borderRadius: T.radius.sm }}>
                <LuX size={16} />
              </IconButton>
            </div>
          </div>

          {/* Scrollable Body */}
          <div style={{ flex: "1 1 auto", overflowY: "auto", padding: T.spacing[5] }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "220px 24px 1fr",
                alignItems: "center",
                gap: `${T.spacing[3]}px ${T.spacing[4]}px`,
              }}
            >
              {effectiveFields.map((field) => {
                const IconComponent = getFieldTypeMeta(field.type).icon;
                return (
                  <div key={field.id} style={{ display: "contents" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                      <IconComponent size={14} style={{ color: C.muted, flexShrink: 0 }} />
                      <Text
                        variant="mutedLabel"
                        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                      >
                        {field.name}
                      </Text>
                    </div>
                    {renderChevronColumn(field.id, field.name)}
                    <div style={{ width: "100%" }}>{renderFieldValueInput(field)}</div>
                  </div>
                );
              })}
            </div>

            <AddColumnModal onSelectField={(typeLabel) => {
              if (onAddField) onAddField(typeLabel);
            }}>
              {({ ref, onClick }) => (
                <span
                  ref={ref}
                  role="button"
                  tabIndex={0}
                  className="add-field-link"
                  onClick={onClick}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onClick(e);
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = C.primaryHover || C.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = C.accent;
                  }}
                  style={{
                    marginTop: 20,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                    color: C.accent,
                    fontSize: T.font.size.sm,
                    fontWeight: T.font.weight.semibold,
                    userSelect: "none",
                  }}
                >
                  <LuPlus size={14} />
                  <span>Add new field to this table</span>
                </span>
              )}
            </AddColumnModal>
          </div>
        </div>
      </Modal>

      <ConfirmationDialog
        open={isConfirmDeleteOpen}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmDeleteOpen(false)}
      />
    </>
  );
}

DealDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  row: PropTypes.object,
  fields: PropTypes.array,
  columns: PropTypes.array,
  workspaceId: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  editable: PropTypes.bool,
  onPrevRow: PropTypes.func,
  onNextRow: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func,
  onAddField: PropTypes.func,
  onDuplicateRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export const RowDetailsModal = DealDetailsModal;
export const RecordDetailsModal = DealDetailsModal;
