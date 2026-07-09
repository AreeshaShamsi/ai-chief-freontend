import React from "react";
import { FiX } from "react-icons/fi";
import { AppButton, C, IconButton, Modal, T } from "../../../components/utils";
import StaffMemberForm from "./StaffMemberForm";

function formFromStaff(staff) {
  const [firstName = "", ...rest] = (staff?.name || "").split(" ");
  return {
    firstName,
    lastName: rest.join(" "),
    email: staff?.email || "",
    phone: staff?.phone || "",
    role: staff?.role || "",
    access: staff?.access || "access to edit deals",
    newPassword: "",
    confirmPassword: "",
  };
}

function EditStaffMemberModal({ open, staff, onClose, onSave }) {
  const [form, setForm] = React.useState(() => formFromStaff(staff));

  React.useEffect(() => {
    if (open) setForm(formFromStaff(staff));
  }, [open, staff]);

  if (!open || !staff) return null;

  const handleSave = () => {
    if (!form.firstName.trim() || !form.email.trim()) return;
    onSave({ ...staff, ...form });
  };

  return (
    <Modal
      width={570}
      onClose={onClose}
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
          Edit Staff Member
        </h2>
        <IconButton aria-label="Close edit staff member modal" onClick={onClose} style={{ width: 32, height: 32, color: C.muted }}>
          <FiX size={20} strokeWidth={1.8} />
        </IconButton>
      </div>

      <div style={{ padding: 24 }}>
        <StaffMemberForm form={form} setForm={setForm} />
      </div>

      <div style={{ padding: "16px 24px", borderTop: `1px solid ${C.borderMuted}`, display: "flex", justifyContent: "flex-end", gap: 10, background: C.card }}>
        <AppButton compact onClick={onClose} style={{ height: 38, minWidth: 78, borderRadius: T.radius.md, background: C.surface, color: C.text, fontSize: T.font.size.sm }}>
          cancel
        </AppButton>
        <AppButton variant="primary" compact onClick={handleSave} style={{ height: 38, minWidth: 108, borderRadius: T.radius.md, fontSize: T.font.size.sm }}>
          save changes
        </AppButton>
      </div>
    </Modal>
  );
}

export default EditStaffMemberModal;
