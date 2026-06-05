import React, { useState } from "react";
import { initCampaigns, scriptLabel } from "../utils";
import { Card, Btn, C } from "../../../components/utils";

function CrmCampaignCard({ cp }) {
  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: "#F0FDF4" }}>
        <span style={{ fontSize: 15 }}>🔗</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{cp.name}</div>
          <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>Connected to <span style={{ fontWeight: 600, color: C.green }}>{cp.crm}</span> · Live since {cp.since}</div>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: C.greenBg, color: C.green, border: `1px solid ${C.greenBdr}` }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, display: "inline-block", animation: "pulse2 2s ease-in-out infinite" }} />Live
        </span>
      </div>
      <div style={{ padding: "14px 18px" }}>
        <div style={{ fontSize: 10, color: C.muted, marginBottom: 10 }}>Script: <span style={{ fontWeight: 600, color: C.text }}>{scriptLabel[cp.script]}</span> · Leads ingested in real-time from CRM</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
          {[["Calls Made", cp.called, "📞", C.accent], ["Qualified", cp.qualified, "✓", C.green], ["Hot", cp.hot, "🔥", C.hot]].map(([l, v, ic, c]) => (
            <div key={l} style={{ background: C.bg, borderRadius: 8, padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: c, letterSpacing: "-.5px" }}>{v}</div>
              <div style={{ fontSize: 9, color: C.muted, marginTop: 2 }}>{ic} {l}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default CrmCampaignCard
