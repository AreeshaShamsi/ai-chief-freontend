import React from "react";
import { FiLock, FiPlus, FiSearch, FiTrash2, FiUser, FiUsers } from "react-icons/fi";
import { LuSquarePen } from "react-icons/lu";
import EditColumnsPopover from "../../../components/design-system/EditColumnsPopover";
import { AppButton, AppCard, C, T, TextField } from "../../../components/utils";
import AddStaffMemberModal from "../modals/AddStaffMemberModal";
import EditStaffMemberModal from "../modals/EditStaffMemberModal";

const profileFields = [
  { label: "First Name", value: "Ramesh", half: true },
  { label: "last name", value: "yadav", half: true },
  { label: "Email Address", value: "delhi , noida" },
  { label: "Phone Number", value: "987654321" },
  { label: "role", value: "senior broker" },
];

const securityFields = [
  { label: "Current Password", value: "currentpassword", type: "password" },
  { label: "New Password", value: "set new password" },
  { label: "Confirm New Password", value: "rewrite the new password" },
];

const initialStaffRows = [
  { id: "staff-1", name: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "admin", access: "access to edit deals" },
  { id: "staff-2", name: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "admin", access: "access to knowledge base" },
  { id: "staff-3", name: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "admin", access: "access to edit deals" },
  { id: "staff-4", name: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "admin", access: "access to knowledge base" },
  { id: "staff-5", name: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "admin", access: "access to edit deals" },
  { id: "staff-6", name: "Rahul Sharma", phone: "+91 98765 43210", email: "Rahulsharma@14gmail.Com", role: "admin", access: "access to knowledge base" },
];

const initialStaffColumns = [
  { id: "member", label: "Staff Member", visible: true },
  { id: "email", label: "Email", visible: true },
  { id: "role", label: "Role", visible: true },
  { id: "access", label: "Access", visible: true },
  { id: "nextAction", label: "Next Action", visible: true },
];

function SettingsField({ label, value, type = "text" }) {
  return (
    <label style={{ display: "block" }}>
      <span
        style={{
          display: "block",
          marginBottom: 7,
          color: C.muted,
          fontSize: T.font.size.bodySmall,
          fontWeight: 400,
        }}
      >
        {label}
      </span>
      <TextField
        type={type}
        value={value}
        readOnly
        style={{
          height: 38,
          borderRadius: T.radius.sm,
          background: C.surface,
          fontSize: T.font.size.bodySmall,
        }}
      />
    </label>
  );
}

function IconAction({ label, children, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      style={{
        width: 26,
        height: 26,
        border: T.border.none,
        background: "transparent",
        color: C.text,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function SettingsTab({ active, icon: Icon, children, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  const showIndicator = active || hovered;

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: 35,
        border: T.border.none,
        borderRadius: 0,
        background: "transparent",
        boxShadow: T.shadow.none,
        outline: "none",
        appearance: "none",
        color: active ? C.accent : C.muted,
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "0 12px",
        fontFamily: T.font.family,
        fontSize: T.font.size.bodySmall,
        fontWeight: T.font.weight.semibold,
        cursor: "pointer",
      }}
    >
      <Icon size={14} color={active ? C.accent : C.muted} />
      {children}
      {showIndicator ? (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -1,
            height: 2,
            background: active ? C.accent : C.border,
            borderRadius: 0,
          }}
        />
      ) : null}
    </button>
  );
}

function SettingsSection() {
  const [activeTab, setActiveTab] = React.useState("profile");
  const [staffRows, setStaffRows] = React.useState(initialStaffRows);
  const [staffTableColumns, setStaffTableColumns] = React.useState(initialStaffColumns);
  const [isEditColumnsOpen, setIsEditColumnsOpen] = React.useState(false);
  const [isAddStaffOpen, setIsAddStaffOpen] = React.useState(false);
  const [selectedStaffMember, setSelectedStaffMember] = React.useState(null);
  const editColumnsRef = React.useRef(null);
  const isProfile = activeTab === "profile";

  React.useEffect(() => {
    if (!isEditColumnsOpen) return undefined;

    const handlePointerDown = (event) => {
      if (editColumnsRef.current && !editColumnsRef.current.contains(event.target)) {
        setIsEditColumnsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isEditColumnsOpen]);

  const handleDeleteColumn = (columnId) => {
    setStaffTableColumns((current) => (current.length > 1 ? current.filter((column) => column.id !== columnId) : current));
  };

  const handleAddColumn = ({ name }) => {
    const label = name.trim();
    if (!label) return;

    const id = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setStaffTableColumns((current) => {
      if (current.some((column) => column.id === id)) return current;
      return [...current, { id, label, visible: true }];
    });
  };

  const handleAddStaff = (form) => {
    setStaffRows((current) => [
      {
        id: `staff-${Date.now()}`,
        name: `${form.firstName} ${form.lastName}`.trim(),
        phone: form.phone,
        email: form.email,
        role: form.role,
        access: form.access,
      },
      ...current,
    ]);
    setIsAddStaffOpen(false);
  };

  const handleUpdateStaff = (form) => {
    setStaffRows((current) =>
      current.map((staff) =>
        staff.id === selectedStaffMember?.id
          ? {
              ...staff,
              name: `${form.firstName} ${form.lastName}`.trim(),
              phone: form.phone,
              email: form.email,
              role: form.role,
              access: form.access,
            }
          : staff
      )
    );
    setSelectedStaffMember(null);
  };

  const renderStaffActions = (staff) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <IconAction label={`Edit ${staff.name}`} onClick={() => setSelectedStaffMember(staff)}>
        <LuSquarePen size={15} />
      </IconAction>
      <IconAction label={`Delete ${staff.name}`}>
        <FiTrash2 size={14} />
      </IconAction>
    </div>
  );

  const renderStaffCell = (staff, column) => {
    if (column.id === "member") {
      return (
        <>
          <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold }}>
            {staff.name}
          </div>
          <div style={{ marginTop: 3, color: C.muted, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
            {staff.phone}
          </div>
        </>
      );
    }
    if (column.id === "nextAction") return renderStaffActions(staff);
    return staff[column.id] || "—";
  };

  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        minWidth: 0,
        background: C.card,
        padding: T.spacing.page,
        boxSizing: "border-box",
        color: C.text,
      }}
    >
      <header style={{ marginBottom: 18 }}>
        <h1
          style={{
            margin: 0,
            color: C.text,
            fontSize: T.font.size.pageTitle,
            fontWeight: T.font.weight.extraBold,
            lineHeight: 1.1,
          }}
        >
          Settings
        </h1>
        <div style={{ marginTop: 4, color: C.muted, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
          Manage your account and team preferences
        </div>
      </header>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: `1px solid ${C.border}`,
          marginBottom: 18,
        }}
      >
        <SettingsTab active={isProfile} icon={FiUser} onClick={() => setActiveTab("profile")}>
          My Profile
        </SettingsTab>
        <SettingsTab active={!isProfile} icon={FiUsers} onClick={() => setActiveTab("staff")}>
          My Staff
        </SettingsTab>
      </div>

      {isProfile ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 0.82fr) minmax(360px, 1.18fr)",
            gap: 18,
            alignItems: "start",
          }}
        >
        <AppCard
          variant="compact"
          style={{
            padding: 18,
            borderRadius: T.radius.card,
            border: `1px solid ${C.border}`,
            boxShadow: T.shadow.none,
            background: C.card,
          }}
        >
          <h2
            style={{
              margin: 0,
              color: C.text,
              fontSize: T.font.size.cardTitle,
              fontWeight: T.font.weight.bold,
              lineHeight: "18px",
            }}
          >
            Profile Information
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13, marginTop: 18 }}>
            {profileFields.map((field) => (
              <div key={field.label} style={{ gridColumn: field.half ? "auto" : "1 / -1" }}>
                <SettingsField label={field.label} value={field.value} />
              </div>
            ))}
          </div>

          <AppButton
            variant="primary"
            compact
            style={{
              width: "100%",
              height: 38,
              marginTop: 16,
              borderRadius: T.radius.sm,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              textTransform: "lowercase",
            }}
          >
            save changes
          </AppButton>
        </AppCard>

        <AppCard
          variant="compact"
          style={{
            padding: 18,
            borderRadius: T.radius.card,
            border: `1px solid ${C.border}`,
            boxShadow: T.shadow.none,
            background: C.card,
          }}
        >
          <h2
            style={{
              margin: 0,
              color: C.text,
              fontSize: T.font.size.cardTitle,
              fontWeight: T.font.weight.bold,
              lineHeight: "18px",
            }}
          >
            Security
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 18, color: C.text }}>
            <FiLock size={14} />
            <span style={{ fontSize: T.font.size.sm, fontWeight: T.font.weight.bold }}>
              Change Password
            </span>
          </div>

          <div style={{ display: "grid", gap: 13, marginTop: 14 }}>
            {securityFields.map((field) => (
              <SettingsField key={field.label} label={field.label} value={field.value} type={field.type} />
            ))}
          </div>

          <AppButton
            variant="primary"
            compact
            style={{
              height: 38,
              marginTop: 16,
              borderRadius: T.radius.sm,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              textTransform: "lowercase",
            }}
          >
            change password
          </AppButton>
        </AppCard>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 300,
                flex: "0 0 300px",
                height: 34,
                border: `1px solid ${C.border}`,
                borderRadius: T.radius.sm,
                background: C.card,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "0 11px",
                boxSizing: "border-box",
              }}
            >
              <FiSearch size={14} color={C.muted} />
              <input
                aria-label="Search staff members"
                placeholder="Search in all staff members"
                style={{
                  flex: 1,
                  minWidth: 0,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: C.text,
                  fontFamily: T.font.family,
                  fontSize: T.font.size.bodySmall,
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <AppButton
                variant="primary"
                compact
                onClick={() => setIsAddStaffOpen(true)}
                style={{
                  height: 34,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  borderRadius: T.radius.sm,
                  fontSize: T.font.size.bodySmall,
                  fontWeight: T.font.weight.semibold,
                }}
              >
                <FiPlus size={14} />
                staff member
              </AppButton>
              <div ref={editColumnsRef} style={{ position: "relative" }}>
                <AppButton
                  compact
                  onClick={() => setIsEditColumnsOpen((current) => !current)}
                  style={{
                    height: 34,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    borderRadius: T.radius.sm,
                    background: C.card,
                    color: C.text,
                    fontSize: T.font.size.bodySmall,
                  }}
                >
                  <LuSquarePen size={15} />
                  edit column
                </AppButton>
                <EditColumnsPopover
                  open={isEditColumnsOpen}
                  columns={staffTableColumns}
                  onReorder={setStaffTableColumns}
                  onDelete={handleDeleteColumn}
                  onAdd={handleAddColumn}
                />
              </div>
            </div>
          </div>

          <AppCard
            variant="compact"
            style={{
              padding: 0,
              overflow: "hidden",
              borderRadius: T.radius.card,
              border: `1px solid ${C.border}`,
              boxShadow: T.shadow.none,
              background: C.card,
            }}
          >
            <div style={{ overflowX: "auto", width: "100%" }}>
              <table
                style={{
                  width: "100%",
                  minWidth: 860,
                  borderCollapse: "separate",
                  borderSpacing: 0,
                }}
              >
                <thead>
                  <tr style={{ background: C.accentLt }}>
                    {staffTableColumns.filter((column) => column.visible).map((column) => (
                      <th
                        key={column.id}
                        scope="col"
                        style={{
                          padding: "12px 16px",
                          color: C.muted,
                          fontSize: T.font.size.xs,
                          fontWeight: T.font.weight.bold,
                          textAlign: column.id === "nextAction" ? "center" : "left",
                          borderBottom: `1px solid ${C.border}`,
                        }}
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {staffRows.map((staff, index) => (
                    <tr key={`${staff.email}-${index}`}>
                      {staffTableColumns.filter((column) => column.visible).map((column) => (
                        <td
                          key={column.id}
                          style={{
                            padding: column.id === "member" ? "11px 16px" : column.id === "nextAction" ? "9px 16px" : "13px 16px",
                            borderBottom: `1px solid ${C.borderLt}`,
                            color: C.text,
                            fontSize: T.font.size.bodySmall,
                            textAlign: column.id === "nextAction" ? "center" : "left",
                            textTransform: column.id === "role" || column.id === "access" ? "lowercase" : "none",
                          }}
                        >
                          {renderStaffCell(staff, column)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AppCard>
        </>
      )}
      <AddStaffMemberModal
        open={isAddStaffOpen}
        onClose={() => setIsAddStaffOpen(false)}
        onSave={handleAddStaff}
      />
      <EditStaffMemberModal
        open={Boolean(selectedStaffMember)}
        staff={selectedStaffMember}
        onClose={() => setSelectedStaffMember(null)}
        onSave={handleUpdateStaff}
      />
    </div>
  );
}

export default SettingsSection;
