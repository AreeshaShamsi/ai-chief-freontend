import React, { useState } from "react";
import { initCampaigns, CALL_TYPE_META, ScoreBadge, CallTypeBadge } from "../utils";
import { Avatar, Card, Btn, C } from "../../../components/utils";

function LeadDetailPanel({ lead, onClose }) {
  const tm = CALL_TYPE_META[lead.callType] || {};
  const Row = ({ l, v }) => v && v !== "—" ? (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid #F8FAFC`, fontSize: 11 }}>
      <span style={{ color: C.muted, fontWeight: 500, flexShrink: 0, marginRight: 12 }}>{l}</span>
      <span style={{ color: C.text, fontWeight: 500, textAlign: "right" }}>{v}</span>
    </div>
  ) : null;
  return (
    <div style={{ width: 300, background: C.card, borderLeft: `1px solid ${C.border}`, overflow: "auto", flexShrink: 0 }}>
      <div style={{ padding: "14px 17px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: C.card, zIndex: 1 }}>
        <span style={{ fontWeight: 700, fontSize: 13, color: C.text }}>Lead Detail</span>
        <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 14, cursor: "pointer", color: C.muted }}>✕</button>
      </div>
      <div style={{ padding: 17 }}>
        {/* Identity */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, padding: 12, background: C.bg, borderRadius: 9 }}>
          <Avatar name={lead.name} size={40} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 3 }}>{lead.name}</div>
            <div style={{ fontSize: 11, color: C.muted, marginBottom: 5 }}>{lead.phone}</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}><ScoreBadge score={lead.score} /><CallTypeBadge type={lead.callType} /></div>
          </div>
        </div>

        {/* Call outcome */}
        <div style={{ background: lead.score === "hot" ? C.hotBg : lead.score === "qualified" ? C.greenBg : C.accentLt, border: `1px solid ${lead.score === "hot" ? C.hotBdr : lead.score === "qualified" ? C.greenBdr : C.accentLt}`, borderRadius: 8, padding: "8px 12px", marginBottom: 14, fontSize: 11 }}>
          <div style={{ fontWeight: 600, color: C.muted, marginBottom: 2, fontSize: 10, textTransform: "uppercase", letterSpacing: ".4px" }}>Call Outcome</div>
          <div style={{ fontWeight: 700, color: lead.score === "hot" ? C.hot : lead.score === "qualified" ? C.green : C.accent, fontSize: 13 }}>{lead.callOutcome}</div>
        </div>

        {/* Type-specific fields */}
        {lead.callType === "property_enquiry" && <>
          <Row l="Property Enquired" v={lead.propertyEnquired} />
          <Row l="Configuration" v={lead.config} />
          <Row l="Budget" v={lead.budget} />
          <Row l="Preferred Location" v={lead.location} />
          <Row l="Purpose" v={lead.purpose} />
          <Row l="Purchase Timeline" v={lead.timeline} />
          <Row l="Objections" v={lead.objections} />
        </>}
        {lead.callType === "requirement_gathering" && <>
          <Row l="Preferred Area" v={lead.preferredArea} />
          <Row l="Property Type" v={lead.propertyType} />
          <Row l="Configuration" v={lead.config} />
          <Row l="Budget" v={lead.budget} />
          <Row l="Purpose" v={lead.purpose} />
          <Row l="Purchase Timeline" v={lead.timeline} />
          <Row l="Loan Required" v={lead.loanRequired} />
          <Row l="Property Match" v={lead.propertyMatchStatus} />
        </>}
        {lead.callType === "cold_call" && <>
          <Row l="Interested in Buying" v={lead.interestedInBuying} />
          <Row l="Purpose" v={lead.purpose} />
          <Row l="Preferred Area" v={lead.preferredArea} />
          <Row l="Property Type" v={lead.propertyType} />
          <Row l="Configuration" v={lead.config} />
          <Row l="Budget" v={lead.budget} />
          <Row l="Purchase Timeline" v={lead.timeline} />
          <Row l="Interest Level" v={lead.interestLevel} />
        </>}

        {/* AI Summary */}
        <div style={{ marginTop: 14, marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 6 }}>🤖 AI Call Summary</div>
          <div style={{ background: C.bg, borderRadius: 7, padding: 10, fontSize: 11, color: C.text, lineHeight: 1.6, borderLeft: `3px solid ${C.accent}` }}>{lead.aiSummary}</div>
        </div>

        {/* Next action */}
        <div style={{ background: "#FFFBEB", border: `1px solid ${C.warmBdr}`, borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#92400E", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".4px" }}>➜ Next Action</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 4 }}>{lead.nextAction}</div>
          {lead.followUpDate !== "—" && <div style={{ fontSize: 11, color: C.muted }}>📅 {lead.followUpDate} at {lead.followUpTime}</div>}
        </div>
      </div>
    </div>
  );
}

export default LeadDetailPanel