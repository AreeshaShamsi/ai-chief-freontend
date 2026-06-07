import React from "react";
import { Avatar, C } from "../../../components/utils";

function Row({ l, v }) {
  if (!v || v === "—") return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 0",
        borderBottom: `1px solid #F8FAFC`,
        fontSize: 11
      }}
    >
      <span style={{ color: C.muted }}>{l}</span>
      <span style={{ color: C.text }}>{v}</span>
    </div>
  );
}

function LeadDetailPanel({ lead, onClose }) {
  const call = lead?.calls?.[lead.calls.length - 1];

  return (
    <div
      style={{
        width: 340,
        background: C.card,
        borderLeft: `1px solid ${C.border}`,
        overflow: "auto"
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 14,
          display: "flex",
          justifyContent: "space-between",
          borderBottom: `1px solid ${C.border}`
        }}
      >
        <div style={{ fontWeight: 700 }}>Lead Detail</div>
        <button
          onClick={onClose}
          style={{ border: "none", background: "none" }}
        >
          ✕
        </button>
      </div>

      <div style={{ padding: 14 }}>
        {/* Identity */}
        <div
          style={{
            display: "flex",
            gap: 10,
            padding: 10,
            background: C.bg,
            borderRadius: 8,
            marginBottom: 12
          }}
        >
          <Avatar name={lead.name} size={38} />
          <div>
            <div style={{ fontWeight: 700 }}>
              {lead.name}
            </div>
            <div style={{ fontSize: 11, color: C.muted }}>
              {lead.phone}
            </div>
            <div
              style={{
                fontSize: 11,
                marginTop: 4,
                color:
                  lead.callType === "Hot"
                    ? C.hot
                    : lead.callType === "Warm"
                      ? C.warm
                      : C.muted,
                fontWeight: 600
              }}
            >
              {lead.callType}
            </div>
          </div>
        </div>

        {/* AI + Outcome */}
        <div
          style={{
            padding: 10,
            borderRadius: 8,
            background: C.accentLt,
            marginBottom: 12
          }}
        >
          <div style={{ fontSize: 10, color: C.muted }}>
            Outcome
          </div>
          <div style={{ fontWeight: 700 }}>
            {call?.call_outcome}
          </div>
        </div>

        {/* CORE FIELDS (always present) */}
        <Row l="Next Action" v={call?.next_action} />
        <Row
          l="Follow-up"
          v={
            call?.next_followup_date
              ? `${call.next_followup_date}`
              : "—"
          }
        />
        <Row l="Budget" v={call?.budget} />
        <Row l="Timeline" v={call?.purchase_timeline} />
        <Row l="Purpose" v={call?.purpose} />
        <Row l="Interest Level" v={call?.interest_level} />
        <Row l="Interested" v={call?.interested_in_buying} />
        <Row
          l="Loan Required"
          v={call?.loan_requirement}
        />
        <Row
          l="Property Type"
          v={call?.preferred_property_type}
        />
        <Row l="Preferred Area" v={call?.preferred_area} />
        <Row
          l="Configuration"
          v={call?.preferred_configuration}
        />
        <Row
          l="Location"
          v={call?.preferred_location}
        />
        <Row
          l="Objections"
          v={call?.objections_concerns}
        />

        {/* AI SUMMARY */}
        <div style={{ marginTop: 14 }}>
          <div
            style={{
              fontSize: 10,
              color: C.muted,
              marginBottom: 6
            }}
          >
            AI Summary
          </div>
          <div
            style={{
              padding: 10,
              borderRadius: 8,
              background: C.bg,
              borderLeft: `3px solid ${C.accent}`,
              fontSize: 11
            }}
          >
            {call?.ai_generated_call_summary}
          </div>
        </div>


      </div>
    </div>
  );
}

export default LeadDetailPanel;