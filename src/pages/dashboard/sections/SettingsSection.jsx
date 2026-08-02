import React, { useState } from "react";
import { FiLock, FiUser, FiUsers } from "react-icons/fi";
import { AppButton, AppCard, C, T, TextField } from "../../../components/utils";
import { Workspace } from "./Workspace";



function SettingsField({ label, value, onChange, type = "text", readOnly = false, options = [] }) {
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
      {type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          disabled={readOnly}
          style={{
            height: 38,
            width: "100%",
            borderRadius: T.radius.sm,
            background: C.surface,
            border: `1px solid ${C.border}`,
            color: C.text,
            fontSize: T.font.size.bodySmall,
            padding: "0 12px",
            outline: "none",
            appearance: "none",
          }}
        >
          <option value="" disabled>Select {label}</option>
          {options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      ) : (
        <TextField
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          readOnly={readOnly}
          style={{
            height: 38,
            borderRadius: T.radius.sm,
            background: C.surface,
            fontSize: T.font.size.bodySmall,
          }}
        />
      )}
    </label>
  );
}

function SettingsTab({ active, icon: Icon, children, onClick }) {
  const [hovered, setHovered] = useState(false);
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

function SettingsSection({ data }) {
  if (!data) return null;
  console.log(data);
  const [activeTab, setActiveTab] = useState("staff");
  const isProfile = activeTab === "profile";
  const is_admin = localStorage.getItem("role") === "admin";
  const user_id = localStorage.getItem("user_id");

  const profileData = data.data.find(
    (item) => item.id == user_id
  );

  const staffData = data.data.map((user) => ({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    username: user.user_name,
    email: user.email,
    phone: user.phone,
    role: user.role.charAt(0).toUpperCase() + user.role.slice(1),
    access: user.access,
    currentPassword: user.password,
  }));

  const fieldIds = {
    firstName: crypto.randomUUID(),
    lastName: crypto.randomUUID(),
    username: crypto.randomUUID(),
    email: crypto.randomUUID(),
    phone: crypto.randomUUID(),
    role: crypto.randomUUID(),
    access: crypto.randomUUID(),
    currentPassword: crypto.randomUUID(),
  };

  const workspaceData = {
    id: crypto.randomUUID(),
    name: "Staff",
    tables: [
      {
        id: crypto.randomUUID(),
        name: "Staff",
        fields: [
          {
            id: fieldIds.firstName,
            name: "First Name",
            type: "Single Line Text",
            value: "",
            options: [],
            editorKind: null,
          },
          {
            id: fieldIds.lastName,
            name: "Last Name",
            type: "Single Line Text",
            value: "",
            options: [],
            editorKind: null,
          },
          {
            id: fieldIds.username,
            name: "Username",
            type: "Single Line Text",
            value: "",
            options: [],
            editorKind: null,
          },
          {
            id: fieldIds.email,
            name: "Email",
            type: "Email",
            value: "",
            options: [],
            editorKind: null,
          },
          {
            id: fieldIds.phone,
            name: "Phone",
            type: "Phone",
            value: "",
            options: [],
            editorKind: null,
          },
          {
            id: fieldIds.role,
            name: "Role",
            type: "Single Select",
            value: "",
            options: ["Admin", "Manager", "Staff"],
            editorKind: null,
          },
          {
            id: fieldIds.access,
            name: "Access",
            type: "Single Line Text",
            value: "",
            options: [],
            editorKind: null,
          },
        ],
        rows: staffData.map((staff) => ({
          id: staff.id,
          [fieldIds.firstName]: staff.firstName,
          [fieldIds.lastName]: staff.lastName,
          [fieldIds.username]: staff.username,
          [fieldIds.email]: staff.email,
          [fieldIds.phone]: staff.phone,
          [fieldIds.role]: staff.role,
          [fieldIds.access]: staff.access,
          "currentPassword": staff.currentPassword,

        })),
      },
    ],
  };

  const [firstName, setFirstName] = useState(profileData?.first_name || "");
  const [lastName, setLastName] = useState(profileData?.last_name || "");
  const [email, setEmail] = useState(profileData?.email || "");
  const [phone, setPhone] = useState(profileData?.phone || "");
  const [role, setRole] = useState(profileData?.role || "");

  const [currentPassword, setCurrentPassword] = useState(profileData?.password || "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const profileFields = [
    { label: "First Name", value: firstName, onChange: setFirstName, half: true },
    { label: "Last Name", value: lastName, onChange: setLastName, half: true },
    { label: "Email Address", value: email, onChange: setEmail },
    { label: "Phone Number", value: phone, onChange: setPhone },
    { label: "Role", value: role, onChange: setRole, type: "select", options: ["Admin", "User"] },
  ];

  const securityFields = [
    {
      label: "Current Password",
      value: currentPassword,
      onChange: setCurrentPassword,
      type: "password",
    },
    {
      label: "New Password",
      value: newPassword,
      onChange: setNewPassword,
      type: "password",
    },
    {
      label: "Confirm New Password",
      value: confirmPassword,
      onChange: setConfirmPassword,
      type: "password",
    },
  ];

  const handleSaveProfile = () => {
    localStorage.setItem("first_name", firstName);
    localStorage.setItem("last_name", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("role", role);
    alert("Profile changes saved successfully!");
  };

  const handleChangePassword = () => {
    if (newPassword && newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setNewPassword("");
    setConfirmPassword("");
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
        {is_admin && <SettingsTab active={!isProfile} icon={FiUsers} onClick={() => setActiveTab("staff")}>
          My Staff
        </SettingsTab>}
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
                  <SettingsField 
                    label={field.label} 
                    value={field.value} 
                    onChange={field.onChange} 
                    type={field.type} 
                    options={field.options} 
                  />
                </div>
              ))}
            </div>

            <AppButton
              variant="primary"
              compact
              onClick={handleSaveProfile}
              style={{
                width: "100%",
                height: 38,
                marginTop: 16,
                borderRadius: T.radius.sm,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.semibold,
              }}
            >
              Save Changes
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
                <SettingsField key={field.label} label={field.label} value={field.value} type={field.type} onChange={field.onChange} />
              ))}
            </div>

            <AppButton
              variant="primary"
              compact
              onClick={handleChangePassword}
              style={{
                height: 38,
                marginTop: 16,
                borderRadius: T.radius.sm,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.semibold,
              }}
            >
              Change Password
            </AppButton>
          </AppCard>
        </div>
      ) : (
        /* Reusing the exact Workspace AG Grid & Sidebar Component without duplicating code */
        <Workspace workspaceId="staff" workspaceData={workspaceData} />
      )}
    </div>
  );
}

export default SettingsSection;
