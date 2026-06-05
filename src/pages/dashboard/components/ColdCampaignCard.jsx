import React, { useState } from "react";
import { initCampaigns, scriptLabel } from "../utils";
import { Card, Btn, C } from "../../../components/utils";

function ColdCampaignCard({ cp }) {
  const pct = Math.round((cp.called / cp.total) * 100);
  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: cp.status === "completed" ? "#F8FAFC" : "#FAFBFF" }}>
        <span style={{ fontSize: 15 }}>📊</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{cp.name}</div>
          <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>Excel upload · {cp.total} leads · Uploaded {cp.uploaded}</div>
        </div>
        <span style={{ padding: "3px 10px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: cp.status === "active" ? C.accentLt : C.bg, color: cp.status === "active" ? C.accent : C.muted, border: `1px solid ${cp.status === "active" ? C.accent : C.border}` }}>
          {cp.status === "active" ? "● Running" : "✓ Completed"}
        </span>
      </div>
      <div style={{ padding: "14px 18px" }}>
        <div style={{ fontSize: 10, color: C.muted, marginBottom: 8 }}>Script: <span style={{ fontWeight: 600, color: C.text }}>{scriptLabel[cp.script]}</span></div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.muted, marginBottom: 5 }}>
            <span>{cp.called} of {cp.total} called</span><span style={{ fontWeight: 600 }}>{pct}% complete</span>
          </div>
          <div style={{ background: C.bg, borderRadius: 4, height: 5, overflow: "hidden" }}><div style={{ height: "100%", background: cp.status === "active" ? C.accent : "#94A3B8", width: `${pct}%`, borderRadius: 4 }} /></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {[["Total", cp.total, "📋", "#64748B"], ["Called", cp.called, "📞", C.accent], ["Qualified", cp.qualified, "✓", C.green], ["Hot", cp.hot, "🔥", C.hot]].map(([l, v, ic, c]) => (
            <div key={l} style={{ background: C.bg, borderRadius: 8, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: c, letterSpacing: "-.5px" }}>{v}</div>
              <div style={{ fontSize: 9, color: C.muted, marginTop: 2 }}>{ic} {l}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ColdCampaignCard