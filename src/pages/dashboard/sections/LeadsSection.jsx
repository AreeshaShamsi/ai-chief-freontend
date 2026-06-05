import React, { useState } from "react";
import { ALL_LEADS, SCORE_META, CallTypeBadge, ScoreBadge } from "../utils";
import { Avatar, Card, Btn, C } from "../../../components/utils";
import LeadDetailPanel from "../components/LeadDetailPanel";

function LeadsSection() {
  const [sel, setSel] = useState(null);
  const [scoref, setScoref] = useState("all");
  const [typef, setTypef] = useState("all");
  const [showLegend, setShowLegend] = useState(true);

  const filtered = ALL_LEADS.filter(l => (scoref === "all" || l.score === scoref) && (typef === "all" || l.callType === typef));

  return (
    <div style={{ display: "flex", height: "100%", background: C.bg }}>
      <div style={{ flex: 1, padding: 26, overflow: "auto", minWidth: 0 }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Leads</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{ALL_LEADS.length} total · {ALL_LEADS.filter(l => l.score === "hot").length} hot · {ALL_LEADS.filter(l => l.score === "qualified").length} qualified · {ALL_LEADS.filter(l => l.score === "junk").length} junk</div>
        </div>

        {/* Lead categories legend */}
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, marginBottom: 16, overflow: "hidden" }}>
          <div onClick={() => setShowLegend(s => !s)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", cursor: "pointer" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: ".5px" }}>📖 Lead Category Definitions</span>
            <span style={{ fontSize: 11, color: C.muted }}>{showLegend ? "▲ Hide" : "▼ Show"}</span>
          </div>
          {showLegend && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0, borderTop: `1px solid ${C.border}` }}>
              {Object.entries(SCORE_META).map(([key, m], i, arr) => (
                <div key={key} style={{ padding: "12px 14px", borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : "none", background: m.bg }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
                    <ScoreBadge score={key} />
                  </div>
                  <div style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>{m.def}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 3, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: 3 }}>
            {["all", "hot", "qualified", "warm", "cold", "junk"].map(s => (
              <button key={s} onClick={() => setScoref(s)}
                style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "none", background: scoref === s ? C.accent : "transparent", color: scoref === s ? "#fff" : C.muted, transition: "all .12s", textTransform: "capitalize" }}>{s === "all" ? "All scores" : s.charAt(0).toUpperCase() + s.slice(1)}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 3, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: 3 }}>
            {[["all", "All types"], ["property_enquiry", "Enquiry"], ["requirement_gathering", "Requirement"], ["cold_call", "Cold Call"]].map(([id, l]) => (
              <button key={id} onClick={() => setTypef(id)}
                style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "none", background: typef === id ? C.accent : "transparent", color: typef === id ? "#fff" : C.muted, transition: "all .12s" }}>{l}</button>
            ))}
          </div>
        </div>

        {/* Table */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead><tr style={{ background: "#F8FAFC" }}>
              {["Lead", "Call Type", "Score", "Call Outcome", "Budget", "Timeline", "Next Action", "Follow-up"].map(h => (
                <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontSize: 9, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>{filtered.map(lead => (
              <tr key={lead.id} style={{ borderBottom: `1px solid ${C.border}`, cursor: "pointer", background: sel?.id === lead.id ? C.accentLt : undefined }}
                onClick={() => setSel(lead)}
                onMouseEnter={e => { if (sel?.id !== lead.id) e.currentTarget.style.background = "#F8FAFC"; }}
                onMouseLeave={e => { if (sel?.id !== lead.id) e.currentTarget.style.background = "transparent"; }}>
                <td style={{ padding: "10px 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <Avatar name={lead.name} size={26} />
                    <div>
                      <div style={{ fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>{lead.name}</div>
                      <div style={{ fontSize: 10, color: C.muted }}>{lead.phone}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: "10px 12px" }}><CallTypeBadge type={lead.callType} /></td>
                <td style={{ padding: "10px 12px" }}><ScoreBadge score={lead.score} /></td>
                <td style={{ padding: "10px 12px", color: C.text, fontSize: 11, maxWidth: 130, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.callOutcome}</td>
                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.budget || "—"}</td>
                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.timeline || "—"}</td>
                <td style={{ padding: "10px 12px", color: C.accent, fontSize: 10, fontWeight: 500, maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.nextAction}</td>
                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap", fontSize: 10 }}>{lead.followUpDate !== "—" ? `${lead.followUpDate}, ${lead.followUpTime}` : "—"}</td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
      </div>
      {sel && <LeadDetailPanel lead={sel} onClose={() => setSel(null)} />}
    </div>
  );
}

export default LeadsSection;