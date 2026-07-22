import React, { useState } from "react";
import { FiLock, FiUser, FiUsers } from "react-icons/fi";
import { AppButton, AppCard, C, T, TextField } from "../../../components/utils";
import { Workspace } from "./Workspace";

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

function SettingsSection() {
  const [activeTab, setActiveTab] = useState("staff");
  const isProfile = activeTab === "profile";

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
        /* Reusing the exact Workspace AG Grid & Sidebar Component without duplicating code */
        <Workspace workspaceId="staff" />
      )}
    </div>
  );
}

export default SettingsSection;
