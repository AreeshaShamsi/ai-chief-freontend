import React, { useEffect } from "react";
import { FiCheck, FiPlus } from "react-icons/fi";
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
  warmText: T.colors.warningText,
  warmBg: T.colors.warningBg,
  warmBdr: T.colors.warningBorder,
  green: T.colors.success,
  greenText: T.colors.successText,
  greenBg: T.colors.successBg,
  greenSoft: T.colors.successSoft,
  greenBdr: T.colors.successBorder,
  purple: T.colors.primaryStrong,
  backgroundPrimary: T.colors.backgroundPrimary,
  backgroundSecondary: T.colors.backgroundSecondary,
  backgroundMuted: T.colors.backgroundMuted,
  primaryHover: T.colors.primaryHover,
  textPrimary: T.colors.textPrimary,
  textSecondary: T.colors.textSecondary,
  textMuted: T.colors.textMuted,
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
  modal: {
    background: C.card,
    borderRadius: T.radius.cardLg,
    border: `1px solid ${C.border}`,
    padding: 0,
    boxShadow: T.shadow.soft,
  },
  selectable: {
    background: C.surface,
    borderRadius: T.radius.md,
    border: `1.5px solid ${C.border}`,
    padding: 14,
    boxShadow: T.shadow.none,
  },
  upload: {
    background: C.surface,
    borderRadius: T.radius.card,
    border: `2px dashed ${C.border}`,
    padding: 28,
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
    color: T.colors.slate,
    border: `1px solid ${C.muted}`,
    dot: T.colors.slate,
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

function AppCard({ children, variant = "default", style, onClick, ...props }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...cardVariants[variant],
        boxSizing: "border-box",
        ...style,
        cursor: onClick ? "pointer" : "default",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function Modal({ children, width = T.layout.modalWidth, style, onClose }) {
  useEffect(() => {
    if (!onClose) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (onClose && event.target === event.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        background: "rgba(15, 23, 42, 0.58)",
      }}
    >
      <AppCard
        variant="modal"
        style={{
          width: "100%",
          maxWidth: width,
          overflow: "hidden",
          ...style,
        }}
      >
        {children}
      </AppCard>
    </div>
  );
}

function Card(props) {
  return <AppCard {...props} />;
}

function AppCardFooter({ children, action, recordsCountText, recordsCount, onAddRow, onAddRecord, style }) {
  const countText = recordsCountText || (recordsCount !== undefined ? `${recordsCount} records` : null);
  const handleAdd = onAddRow || onAddRecord;

  return (
    <footer
      style={{
        minHeight: 46,
        padding: `${T.spacing[3] - 2}px ${T.spacing[4]}px`,
        borderTop: `1px solid ${C.border}`,
        background: C.card,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 16,
        boxSizing: "border-box",
        borderBottomLeftRadius: T.radius.lg,
        borderBottomRightRadius: T.radius.lg,
        ...style,
      }}
    >
      {countText ? (
        <Text variant="mutedLabel" style={{ fontSize: T.font.size.bodySmall, color: C.muted, fontWeight: T.font.weight.medium }}>
          {countText}
        </Text>
      ) : null}

      {handleAdd ? (
        <AppButton
          compact
          onClick={handleAdd}
          style={{
            height: 30,
            padding: "0 12px",
            borderRadius: T.radius.sm,
            background: C.card,
            color: C.text,
            border: `1px solid ${C.border}`,
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.medium,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <FiPlus size={14} style={{ color: C.muted }} />
          <span>Add Record</span>
        </AppButton>
      ) : null}

      {children}
      {action}
    </footer>
  );
}

const AppButton = React.forwardRef(function AppButton({
  children,
  variant = "secondary",
  compact = false,
  pill = false,
  style,
  onClick,
  disabled,
  type = "button",
  ...props
}, ref) {
  const primary = variant === "primary";
  return (
    <button
      ref={ref}
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
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: T.spacing[2],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
});

function IconButton({ children, onClick, disabled, style, "aria-label": ariaLabel }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 28,
        height: 28,
        borderRadius: T.radius.pill,
        border: T.border.none,
        background: "transparent",
        color: C.muted,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        padding: 0,
        opacity: disabled ? 0.5 : 1,
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
          fontSize: compact ? T.font.size.caption : T.font.size.caption,
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
  variant,
  style,
}) {
  const variants = {
    neutral: { background: C.card, color: C.muted },
    primary: { background: C.accentLt, color: C.accent },
    warning: { background: C.warmBg, color: C.warm },
    success: { background: C.greenSoft, color: C.greenText },
  };
  const tone = variant ? variants[variant] : null;

  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: T.radius.circle,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: tone?.background || background,
        color: tone?.color || color,
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
          fontSize: T.font.size.xs,
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

const TextField = React.forwardRef(function TextField(
  { value, onChange, placeholder, disabled, type = "text", multiline = false, rows = 3, style, ...props },
  ref
) {
  if (multiline) {
    return (
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        style={{
          width: "100%",
          padding: "8px 12px",
          border: `1px solid ${C.border}`,
          borderRadius: T.radius.sm,
          background: C.surface,
          color: C.text,
          fontSize: T.font.size.bodySmall,
          fontFamily: T.font.family,
          outline: "none",
          boxSizing: "border-box",
          opacity: disabled ? 0.7 : 1,
          resize: "vertical",
          ...style,
        }}
        {...props}
      />
    );
  }
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        width: "100%",
        height: 38,
        padding: "0 12px",
        border: `1px solid ${C.border}`,
        borderRadius: T.radius.sm,
        background: C.surface,
        color: C.text,
        fontSize: T.font.size.bodySmall,
        fontFamily: T.font.family,
        outline: "none",
        boxSizing: "border-box",
        opacity: disabled ? 0.7 : 1,
        ...style,
      }}
      {...props}
    />
  );
});

function Alert({ children, variant = "warning", contentAlign = "start", style }) {
  const tones = {
    warning: {
      background: C.warmBg,
      color: C.warmText,
      border: `1px solid ${C.warmBdr}`,
    },
    error: {
      background: C.hotBg,
      color: C.hot,
      border: `1px solid ${C.hotBdr}`,
    },
    success: {
      background: C.greenSoft,
      color: C.greenText,
      border: `1px solid ${C.greenBdr}`,
    },
  };
  const tone = tones[variant] || tones.warning;

  return (
    <div
      style={{
        borderRadius: T.radius.sm,
        padding: "10px 12px",
        fontSize: T.font.size.bodySmall,
        lineHeight: 1.35,
        background: tone.background,
        color: tone.color,
        border: tone.border,
        display: contentAlign === "center" ? "flex" : undefined,
        alignItems: contentAlign === "center" ? "center" : undefined,
        justifyContent: contentAlign === "center" ? "center" : undefined,
        gap: contentAlign === "center" ? 6 : undefined,
        textAlign: contentAlign === "center" ? "center" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const textVariants = {
  pageTitle: {
    color: C.text,
    fontSize: T.font.size.pageTitle,
    fontWeight: T.font.weight.bold,
    lineHeight: 1.15,
  },
  subtitle: {
    color: C.muted,
    fontSize: T.font.size.bodySmall,
    fontWeight: T.font.weight.medium,
  },
  sectionTitle: {
    color: C.text,
    fontSize: T.font.size.cardTitle,
    fontWeight: T.font.weight.bold,
  },
  body: {
    color: C.text,
    fontSize: T.font.size.bodySmall,
    fontWeight: T.font.weight.medium,
    lineHeight: 1.4,
  },
  label: {
    color: C.text,
    fontSize: T.font.size.bodySmall,
    fontWeight: T.font.weight.semibold,
  },
  mutedLabel: {
    color: C.muted,
    fontSize: T.font.size.bodySmall,
    fontWeight: T.font.weight.semibold,
  },
  headerCell: {
    color: C.muted,
    fontSize: T.font.size.bodySmall,
    fontWeight: T.font.weight.semibold,
    lineHeight: 1,
  },
  iconGlyph: {
    color: C.muted,
    fontSize: T.font.size.sm,
    fontWeight: T.font.weight.bold,
    lineHeight: 1,
  },
};

function Text({ as: Component = "span", variant = "body", color, style, children, ...props }) {
  return (
    <Component
      style={{
        ...textVariants[variant],
        color: color || textVariants[variant]?.color,
        fontFamily: T.font.family,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

function AppStepper({ steps, currentStep, style }) {
  return (
    <div style={{ padding: "16px 20px 0", ...style }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {steps.map((step, index) => {
          const completed = step.id < currentStep;
          const active = step.id === currentStep;

          return (
            <React.Fragment key={step.id}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 72 }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: T.radius.circle,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: completed || active ? C.accent : C.card,
                    color: completed || active ? C.card : C.muted,
                    border: completed || active ? `1px solid ${C.accent}` : `1px solid ${C.border}`,
                    fontSize: T.font.size.caption,
                    fontWeight: T.font.weight.bold,
                    boxSizing: "border-box",
                  }}
                >
                  {completed ? <FiCheck size={12} /> : step.id}
                </span>
                <span
                  style={{
                    marginTop: 5,
                    color: completed || active ? C.text : C.muted,
                    fontSize: T.font.size.caption,
                    fontWeight: active ? T.font.weight.semibold : T.font.weight.medium,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 ? (
                <span
                  style={{
                    flex: 1,
                    height: 2,
                    margin: "0 4px 16px",
                    borderRadius: T.radius.pill,
                    background: step.id < currentStep ? C.accent : C.border,
                  }}
                />
              ) : null}
            </React.Fragment>
          );
        })}
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
        <span style={{ fontSize: T.font.size.sectionTitle, fontWeight: T.font.weight.bold, color: C.text }}>
          {title}
        </span>
        {helper ? (
          <span
            style={{
              fontSize: T.font.size.caption,
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

function ConfirmationModal({
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "danger",
  onConfirm,
  onClose,
}) {
  return (
    <Modal width={400} onClose={onClose}>
      <div style={{ padding: "18px 20px 14px", borderBottom: `1px solid ${C.border}` }}>
        <Text variant="sectionTitle" style={{ margin: 0 }}>
          {title}
        </Text>
      </div>
      <div style={{ padding: "18px 20px" }}>
        <Text variant="body" color={C.text}>
          {message}
        </Text>
      </div>
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          padding: "12px 20px",
          display: "flex",
          justifyContent: "flex-end",
          gap: 8,
        }}
      >
        <AppButton compact onClick={onClose}>
          {cancelText}
        </AppButton>
        <AppButton
          compact
          variant={variant === "danger" ? "danger" : "primary"}
          onClick={() => {
            if (onConfirm) onConfirm();
            if (onClose) onClose();
          }}
          style={
            variant === "danger"
              ? { background: C.hot, color: "#fff", border: "none" }
              : undefined
          }
        >
          {confirmText}
        </AppButton>
      </div>
    </Modal>
  );
}

function RenameModal({
  title = "Rename Item",
  initialValue = "",
  placeholder = "Enter new name...",
  onSave,
  onClose,
}) {
  const [val, setVal] = React.useState(initialValue);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select?.();
    }
  }, []);

  const handleSave = () => {
    if (val.trim() && onSave) {
      onSave(val.trim());
    }
    if (onClose) onClose();
  };

  return (
    <Modal width={400} onClose={onClose}>
      <div style={{ padding: "18px 20px 14px", borderBottom: `1px solid ${C.border}` }}>
        <Text variant="sectionTitle" style={{ margin: 0 }}>
          {title}
        </Text>
      </div>
      <div style={{ padding: "18px 20px" }}>
        <TextField
          ref={inputRef}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape" && onClose) onClose();
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
        }}
      >
        <AppButton compact onClick={onClose}>
          Cancel
        </AppButton>
        <AppButton variant="primary" compact onClick={handleSave}>
          Save
        </AppButton>
      </div>
    </Modal>
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
  AppCardFooter,
  AppPill,
  AppButton,
  AppIconCircle,
  ProgressBar,
  MetricCard,
  SectionHeader,
  Modal,
  ConfirmationModal,
  RenameModal,
  IconButton,
  TextField,
  Text,
  Alert,
  AppStepper,
};
