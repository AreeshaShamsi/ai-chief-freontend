import React from "react";
import { FiX } from "react-icons/fi";
import { AppButton, C, IconButton, Modal, T } from "../../../components/utils";
import StaffMemberForm from "./StaffMemberForm";

const initialAddForm = {
  firstName: "Filled",
  lastName: "Filled",
  email: "Filled",
  phone: "Filled",
  role: "admin",
  access: "access to edit deals",
  newPassword: "password",
  confirmPassword: "password",
};

function AddStaffMemberModal({ open, onClose, onSave }) {
  const [form, setForm] = React.useState(initialAddForm);

  if (!open) return null;

  const handleClose = () => {
    setForm(initialAddForm);
    onClose();
  };

  const handleSave = () => {
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) return;
    onSave(form);
    setForm(initialAddForm);
  };

  return (
    <Modal
      width={570}
      onClose={handleClose}
      style={{
        borderRadius: 20,
        boxShadow: T.shadow.none,
        border: `1px solid ${C.border}`,
        maxHeight: "calc(100vh - 24px)",
        overflowY: "auto",
      }}
    >
      <div style={{ padding: "22px 24px", borderBottom: `1px solid ${C.borderMuted}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0, color: C.text, fontSize: T.font.size.pageTitle, fontWeight: T.font.weight.bold, lineHeight: "26px" }}>
          Add Staff Member
        </h2>
        <IconButton aria-label="Close add staff member modal" onClick={handleClose} style={{ width: 32, height: 32, color: C.muted }}>
          <FiX size={20} strokeWidth={1.8} />
        </IconButton>
      </div>

      <div style={{ padding: 24 }}>
        <StaffMemberForm form={form} setForm={setForm} />
      </div>

      <div style={{ padding: "16px 24px", borderTop: `1px solid ${C.borderMuted}`, display: "flex", justifyContent: "flex-end", gap: 10, background: C.card }}>
        <AppButton compact onClick={handleClose} style={{ height: 38, minWidth: 78, borderRadius: T.radius.md, background: C.surface, color: C.text, fontSize: T.font.size.sm }}>
          cancel
        </AppButton>
        <AppButton variant="primary" compact onClick={handleSave} style={{ height: 38, minWidth: 108, borderRadius: T.radius.md, fontSize: T.font.size.sm }}>
          save changes
        </AppButton>
      </div>
    </Modal>
  );
}

export default AddStaffMemberModal;
