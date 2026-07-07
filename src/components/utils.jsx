import React from "react";
import { appTheme as T } from "./design-tokens";

const C = {
  bg: T.colors.appBg,
  pageBg: T.colors.pageBg,
  card: T.colors.cardBg,
  surface: T.colors.surface,
  sectionBg: T.colors.sectionBg,
  sidebar: T.colors.sidebar,
  sideActive: T.colors.sidebarActive,
  accent: T.colors.primary,
  accentHov: T.colors.primaryHover,
  accentStrong: T.colors.primaryStrong,
  accentLt: T.colors.primaryBg,
  accentTrack: T.colors.primaryTrack,
  text: T.colors.text,
  muted: T.colors.mutedText,
  subtle: T.colors.subtleText,
  border: T.colors.border,
  borderLt: T.colors.borderSubtle,
  borderMuted: T.colors.borderMuted,
  hot: T.colors.danger,
  hotBg: T.colors.dangerBg,
  hotSoft: T.colors.dangerSoft,
  hotBdr: T.colors.dangerBorder,
  warm: T.colors.warning,
  warmBg: T.colors.warningBg,
  warmBdr: T.colors.warningBorder,
  green: T.colors.success,
  greenText: T.colors.successText,
  greenBg: T.colors.successBg,
  greenSoft: T.colors.successSoft,
  greenBdr: T.colors.successBorder,
  purple: T.colors.primaryStrong,
};

const cardVariants = {
  default: {
    background: C.card,
    borderRadius: 12,
    border: `1px solid ${C.border}`,
    padding: 20,
  },
  compact: {
    background: C.card,
    borderRadius: T.radius.card,
    border: `1px solid ${C.border}`,
    padding: T.spacing.card,
    boxShadow: T.shadow.none,
  },
  metric: {
    background: C.accentLt,
    borderRadius: T.radius.cardLg,
    border: "1px solid rgba(226,232,240,0.8)",
    minHeight: 96,
    padding: T.spacing.cardCompact,
    boxShadow: T.shadow.none,
  },
  section: {
    background: C.sectionBg,
    borderRadius: T.radius.section,
    border: T.border.none,
    padding: T.spacing.card,
    boxShadow: T.shadow.none,
  },
};

const pillVariants = {
  neutral: {
    background: C.card,
    color: C.text,
    border: `1px solid ${C.border}`,
  },
  success: {
    background: C.card,
    color: C.greenText,
    border: `1px solid ${C.greenBdr}`,
    dot: C.green,
  },
  primary: {
    background: C.card,
    color: C.accent,
    border: `1px solid ${C.accent}`,
    dot: C.accent,
  },
  dark: {
    background: C.card,
    color: "#334155",
    border: `1px solid ${C.muted}`,
    dot: "#334155",
  },
  danger: {
    background: C.hotSoft,
    color: C.hot,
    border: `1px solid ${C.hotBdr}`,
  },
};

const metricVariants = {
  neutral: {
    background: C.surface,
    border: `1px solid ${C.borderLt}`,
    label: C.muted,
    value: C.text,
  },
  qualified: {
    background: C.accentLt,
    border: `1px solid ${T.colors.qualifiedBorder}`,
    label: C.muted,
    value: C.accent,
  },
  hot: {
    background: C.hotBg,
    border: `1px solid ${C.hotBdr}`,
    label: C.muted,
    value: C.hot,
  },
};

function Avatar({ name, size = 30, color }) {
  const i = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const p = ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#6366F1"];
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: T.radius.circle,
        background: color || p[name.charCodeAt(0) % p.length],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: C.card,
        fontSize: size * 0.36,
        fontWeight: T.font.weight.bold,
        flexShrink: 0,
      }}
    >
      {i}
    </div>
  );
}

function AppCard({ children, variant = "default", style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...cardVariants[variant],
        boxSizing: "border-box",
        ...style,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {children}
    </div>
  );
}

function Card(props) {
  return <AppCard {...props} />;
}

function AppButton({
  children,
  variant = "secondary",
  compact = false,
  pill = false,
  style,
  onClick,
  disabled,
  type = "button",
}) {
  const primary = variant === "primary";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        background: primary ? C.accent : "transparent",
        color: primary ? C.card : C.muted,
        border: `1px solid ${primary ? C.accent : C.border}`,
        borderRadius: pill ? T.radius.pill : 7,
        padding: compact ? "5px 12px" : "8px 18px",
        fontSize: compact ? 11 : 13,
        fontWeight: T.font.weight.semibold,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: T.font.family,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function Btn({ primary, sm, ...props }) {
  return <AppButton variant={primary ? "primary" : "secondary"} compact={sm} {...props} />;
}

function AppPill({
  children,
  variant = "neutral",
  dot = false,
  dotColor,
  size = "sm",
  style,
}) {
  const tone = pillVariants[variant] || pillVariants.neutral;
  const compact = size === "xs";
  return (
    <span
      style={{
        height: compact ? 21 : 25,
        padding: compact ? "0 9px" : "0 10px",
        borderRadius: T.radius.pill,
        background: tone.background,
        color: tone.color,
        border: tone.border,
        fontSize: compact ? 8 : 9,
        fontWeight: T.font.weight.bold,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot ? (
        <span
          aria-hidden="true"
          style={{
            width: compact ? 5 : 6,
            height: compact ? 5 : 6,
            borderRadius: T.radius.circle,
            background: dotColor || tone.dot || tone.color,
            flexShrink: 0,
          }}
        />
      ) : null}
      {children}
    </span>
  );
}

function AppIconCircle({
  children,
  size = 28,
  color = C.accentStrong,
  background = C.card,
  style,
}) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: T.radius.circle,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        color,
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function ProgressBar({
  value = 0,
  height = 18,
  track = C.accentLt,
  fill = C.accent,
  radius = T.radius.pill,
  style,
}) {
  const width = Math.max(0, Math.min(100, value));
  return (
    <div
      style={{
        height,
        borderRadius: radius,
        background: track,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: "100%",
          borderRadius: radius,
          background: fill,
        }}
      />
    </div>
  );
}

function MetricCard({
  label,
  value,
  variant = "neutral",
  height = 62,
  style,
  labelStyle,
  valueStyle,
}) {
  const tone = metricVariants[variant] || metricVariants.neutral;
  return (
    <div
      style={{
        height,
        borderRadius: T.radius.md,
        padding: 12,
        background: tone.background,
        border: tone.border,
        boxSizing: "border-box",
        textAlign: "left",
        ...style,
      }}
    >
      <div
        style={{
          fontSize: T.font.size.caption,
          color: tone.label,
          lineHeight: "11px",
          ...labelStyle,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: T.font.size.metric,
          fontWeight: T.font.weight.bold,
          color: tone.value,
          lineHeight: "26px",
          marginTop: 4,
          ...valueStyle,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function SectionHeader({ title, helper, action, style }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: T.spacing.headerGap,
        marginBottom: T.spacing.headerGap,
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
        <span
          aria-hidden="true"
          style={{
            width: 2,
            height: 18,
            borderRadius: T.radius.pill,
            background: C.accent,
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 13, fontWeight: T.font.weight.bold, color: C.text }}>
          {title}
        </span>
        {helper ? (
          <span
            style={{
              fontSize: 8,
              color: C.muted,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {helper}
          </span>
        ) : null}
      </div>
      {action}
    </div>
  );
}

function Waveform({ playing }) {
  const b = [
    0.3, 0.6, 0.9, 0.5, 0.7, 1, 0.4, 0.8, 0.6, 0.3, 0.7, 0.5, 0.9, 0.4,
    0.6, 0.8, 0.3, 1, 0.5, 0.7, 0.4, 0.9, 0.6, 0.3, 0.8, 0.5, 0.7, 0.4,
    0.6, 0.9, 0.3, 0.5, 0.8, 0.4, 0.6,
  ];
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center", height: 24, flex: 1 }}>
      {b.map((h, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: `${Math.round(h * 100)}%`,
            background: playing ? C.accent : "#CBD5E1",
            borderRadius: 2,
            transition: "background .2s",
          }}
        />
      ))}
    </div>
  );
}

export {
  Avatar,
  Waveform,
  Card,
  Btn,
  C,
  T,
  AppCard,
  AppPill,
  AppButton,
  AppIconCircle,
  ProgressBar,
  MetricCard,
  SectionHeader,
};
