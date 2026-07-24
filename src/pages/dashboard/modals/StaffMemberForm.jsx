import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AppCard, C, T, TextField } from "../../../components/utils";

const roleOptions = ["admin", "user"];
const accessOptions = [
  { value: "Access To Edit Deals", label: "Access To Edit Deals" },
  { value: "Access To Edit Knowledge Base", label: "Access To Edit Knowledge Base" },
];

function FieldLabel({ children }) {
  return (
    <span
      style={{
        display: "block",
        marginBottom: 7,
        color: C.muted,
        fontSize: T.font.size.bodySmall,
        fontWeight: 400,
      }}
    >
      {children}
    </span>
  );
}

function FormField({ label, value, onChange, placeholder = "Filled", type = "text" }) {
  return (
    <label style={{ display: "block" }}>
      <FieldLabel>{label}</FieldLabel>
      <TextField
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
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

function RoleSelect({ value, onChange }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ position: "relative" }}>
      <FieldLabel>Role</FieldLabel>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        style={{
          width: "100%",
          height: 38,
          border: `1px solid ${C.border}`,
          borderRadius: T.radius.sm,
          background: C.surface,
          color: value ? C.text : C.muted,
          fontFamily: T.font.family,
          fontSize: T.font.size.bodySmall,
          textAlign: "left",
          padding: "0 34px 0 12px",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        {value || "Filled"}
      </button>
      {open ? (
        <FiChevronUp
          size={14}
          style={{ position: "absolute", right: 12, top: 34, color: C.muted, pointerEvents: "none" }}
        />
      ) : (
        <FiChevronDown
          size={14}
          style={{ position: "absolute", right: 12, top: 34, color: C.muted, pointerEvents: "none" }}
        />
      )}
      {open ? (
        <div
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 3,
            top: 64,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {roleOptions.map((role) => (
            <button
              key={role}
              type="button"
              role="option"
              aria-selected={value === role}
              onClick={() => {
                onChange(role);
                setOpen(false);
              }}
              style={{
                height: 34,
                border: `1px solid ${C.border}`,
                borderRadius: T.radius.sm,
                background: C.surface,
                color: C.text,
                fontFamily: T.font.family,
                fontSize: T.font.size.bodySmall,
                textAlign: "left",
                padding: "0 12px",
                cursor: "pointer",
              }}
            >
              {role}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function RadioMark({ selected }) {
  return (
    <span
      style={{
        width: 13,
        height: 13,
        borderRadius: T.radius.circle,
        border: `1.5px solid ${selected ? C.accent : C.muted}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      {selected ? (
        <span style={{ width: 6, height: 6, borderRadius: T.radius.circle, background: C.accent }} />
      ) : null}
    </span>
  );
}

function AccessCard({ value, onChange }) {
  return (
    <AppCard
      variant="compact"
      style={{
        padding: 12,
        borderRadius: T.radius.card,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.none,
        background: C.card,
      }}
    >
      <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold, marginBottom: 9 }}>
        Access
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {accessOptions.map((option) => {
          const selected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              style={{
                minHeight: 34,
                border: `1px solid ${selected ? C.accentTrack : C.border}`,
                borderRadius: T.radius.sm,
                background: selected ? C.accentLt : C.card,
                color: C.text,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 9px",
                fontFamily: T.font.family,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.medium,
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <RadioMark selected={selected} />
              {option.label}
            </button>
          );
        })}
      </div>
    </AppCard>
  );
}

function StaffMemberForm({ form, setForm }) {
  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  return (
    <div style={{ display: "grid", gap: 15 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13 }}>
        <FormField label="First Name" value={form.firstName} onChange={(value) => updateField("firstName", value)} />
        <FormField label="Last Name" value={form.lastName} onChange={(value) => updateField("lastName", value)} />
      </div>
      <FormField label="Username" value={form.username} onChange={(value) => updateField("username", value)} placeholder="username" />
      <FormField label="Email Address" value={form.email} onChange={(value) => updateField("email", value)} />
      <FormField label="Phone Number" value={form.phone} onChange={(value) => updateField("phone", value)} />

      <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 14, alignItems: "start" }}>
        <RoleSelect value={form.role} onChange={(value) => updateField("role", value)} />
        <AccessCard value={form.access} onChange={(value) => updateField("access", value)} />
      </div>

      <FormField
        label="New Password"
        type="password"
        value={form.newPassword}
        onChange={(value) => updateField("newPassword", value)}
        placeholder=""
      />
      <FormField
        label="Confirm New Password"
        type="password"
        value={form.confirmPassword}
        onChange={(value) => updateField("confirmPassword", value)}
        placeholder=""
      />
    </div>
  );
}

export default StaffMemberForm;
