import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  AppButton,
  C,
  ConfirmationModal,
  Modal,
  T,
  Text,
  TextField,
} from "../../../components/utils";

export default function FieldActionModal({
  isOpen,
  action,
  columnId,
  columnName,
  onClose,
  onEditField,
  onDuplicateField,
  onDeleteField,
}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const cleanName = (columnName || "").replace(/\s*\(Copy\)\s*/gi, "").trim();
  const displayName = cleanName || columnName || "this field";

  useEffect(() => {
    if (isOpen) {
      setInputValue(displayName);
    } else {
      setInputValue("");
    }
  }, [isOpen, columnName]);

  useEffect(() => {
    if (isOpen && action === "edit" && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select?.();
    }
  }, [isOpen, action]);

  if (!isOpen || !action) return null;

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSaveEdit = () => {
    const trimmed = inputValue.trim();
    if (trimmed && onEditField) {
      onEditField(columnId, trimmed);
    }
    handleClose();
  };

  let modalContent = null;

  if (action === "edit") {
    modalContent = (
      <Modal
        width={400}
        onClose={handleClose}
        style={{
          background: C.card,
          boxShadow: T.shadow.soft,
          opacity: 1,
        }}
      >
        <div style={{ padding: "18px 20px 14px", borderBottom: `1px solid ${C.border}`, background: C.card }}>
          <Text variant="sectionTitle" style={{ margin: 0 }}>
            Edit Field
          </Text>
        </div>
        <div style={{ padding: "18px 20px", background: C.card }}>
          <TextField
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter field name..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveEdit();
              if (e.key === "Escape") handleClose();
            }}
          />
        </div>
        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            padding: "12px 20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            background: C.card,
          }}
        >
          <AppButton compact onClick={handleClose}>
            Cancel
          </AppButton>
          <AppButton variant="primary" compact onClick={handleSaveEdit}>
            Save
          </AppButton>
        </div>
      </Modal>
    );
  } else if (action === "duplicate") {
    modalContent = (
      <ConfirmationModal
        title="Duplicate Field"
        message={`Are you sure you want to duplicate '${displayName}'?`}
        confirmText="Duplicate Field"
        cancelText="Cancel"
        variant="primary"
        onConfirm={() => {
          if (onDuplicateField) {
            onDuplicateField(columnId);
          }
          handleClose();
        }}
        onClose={handleClose}
      />
    );
  } else if (action === "delete") {
    modalContent = (
      <ConfirmationModal
        title="Delete Field"
        message={`Are you sure you want to delete '${displayName}'? This action cannot be undone.`}
        confirmText="Delete Field"
        cancelText="Cancel"
        variant="danger"
        onConfirm={() => {
          if (onDeleteField) {
            onDeleteField(columnId);
          }
          handleClose();
        }}
        onClose={handleClose}
      />
    );
  }

  if (!modalContent) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {modalContent}
    </div>,
    document.body
  );
}

FieldActionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  action: PropTypes.oneOf(["edit", "duplicate", "delete"]),
  columnId: PropTypes.string,
  columnName: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onEditField: PropTypes.func,
  onDuplicateField: PropTypes.func,
  onDeleteField: PropTypes.func,
};
