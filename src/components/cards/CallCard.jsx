import React from "react";
import PropTypes from "prop-types";
import { LuClock3, LuEye, LuPhone } from "react-icons/lu";
import { AppCard, AppPill, C, T, Text } from "../utils";

function CallCard({ call, isSelected, onSelect }) {
  console.log("call", call);
  const isHot = call.calls?.[0]?.output?.lead_status === "hot";
  const isCold = call.calls?.[0]?.output?.lead_status === "cold";
  const isNoAnswer = call.calls?.[0]?.output?.lead_status === "no answer";
  const getCallType = (callType) => {
    switch (callType) {
      case "real_estate_internal":
        return "Internal Call";
      case "real_estate_cold_call":
        return "Cold Call";
      default:
        return "Unknown";
    }
  };
  return (
    <AppCard
      variant="compact"
      onClick={onSelect}
      style={{
        padding: "16px",
        borderRadius: T.radius.card,
        border: `1px solid ${isSelected ? C.accent : C.border}`,
        background: isSelected ? C.accentLt : C.card,
        cursor: "pointer",
        transition: "all 150ms ease",
        boxShadow: T.shadow.none,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Row 1: Contact Name (bold) + Hot/Cold badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Text variant="cardTitle" style={{ margin: 0, color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold }}>
          {call.name}
        </Text>
        <AppPill
          dot
          size="xs"
          dotColor={isHot ? C.hot : isCold ? C.muted : C.green}
          style={{
            height: 20,
            padding: "0 8px",
            background: isHot ? C.hotBg : isCold ? C.surface : C.greenSoft,
            color: isHot ? C.hot : isCold ? C.muted : C.greenText,
            border: `1px solid ${isHot ? C.hotBdr : isCold ? C.border : C.greenBdr}`,
            fontSize: T.font.size.caption,
            fontWeight: T.font.weight.semibold,
          }}
        >
          {call.calls[0]?.output?.lead_status}
        </AppPill>
      </div>

      {/* Row 2: Phone Icon + Phone Number */}
      <div style={{ fontSize: T.font.size.xs, color: C.muted, display: "flex", alignItems: "center", gap: 6 }}>
        <LuPhone size={12} color={C.muted} />
        <span>{call.phone}</span>
      </div>

      {/* Row 3: Call Type Chip */}
      <div>
        <AppPill size="xs" variant="primary" style={{ background: C.surface, color: C.text, border: `1px solid ${C.border}` }}>
          {getCallType(call.calls[0].call_type)}
        </AppPill>
      </div>

      {/* Row 4: Clock Icon + Date & Time */}
      <div style={{ fontSize: T.font.size.caption, color: C.muted, display: "flex", alignItems: "center", gap: 5 }}>
        <LuClock3 size={11} color={C.muted} />
        <span>{call.calls[0].date_time_of_call || "Today 10:15 AM"}</span>
      </div>

      {/* Row 5: Large Duration + Small Label */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "2px 0" }}>
        <span style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.extraBold, color: C.text }}>
          {call.calls[0]?.output?.call_duration} sec
        </span>
        <span style={{ fontSize: T.font.size.caption, color: C.muted, fontWeight: T.font.weight.medium }}>
          Duration
        </span>
      </div>

      {/* Row 6: Completed/No answer Badge + Eye Icon */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8, borderTop: `1px solid ${C.borderLt}` }}>
        <AppPill
          size="xs"
          style={{
            height: 20,
            padding: "0 8px",
            background: isNoAnswer ? C.warmBg : C.accentLt,
            color: isNoAnswer ? C.warm : C.accent,
            border: `1px solid ${isNoAnswer ? C.warmBdr : C.accentTrack}`,
            fontSize: T.font.size.caption,
            fontWeight: T.font.weight.semibold,
          }}
        >
          {call.calls?.[0]?.output == null ? "No Answer" : "Completed"}        </AppPill>
        <div style={{ color: isSelected ? C.accent : C.muted }}>
          <LuEye size={14} />
        </div>
      </div>
    </AppCard>
  );
}

CallCard.propTypes = {
  call: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    callType: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    time: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default CallCard;
