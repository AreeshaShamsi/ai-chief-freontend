import React, { useState } from "react";
import { Card, C, Waveform } from "../../../components/utils";
import { CALLS, CallTypeBadge, ScoreBadge } from "../utils";

function CallsSection() {
  const [exp, setExp] = useState(null);
  return (
    <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Call Log</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>All calls with AI summaries, outcomes, and next actions</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
        {[["Calls Today", "94", "Total attempted"], ["Pickup Rate", "74%", "35 of 47 answered"], ["Avg Duration", "2:34", "Per completed call"]].map(([l, v, s], i) => (
          <Card key={i} style={{ padding: "13px 16px" }}>
            <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", fontWeight: 600, marginBottom: 4 }}>{l}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: "-.8px" }}>{v}</div>
            <div style={{ fontSize: 10, color: C.muted, marginTop: 3 }}>{s}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {CALLS.map(call => (
          <Card key={call.id} style={{ padding: 0, overflow: "hidden" }}>
            <div onClick={() => setExp(exp === call.id ? null : call.id)}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 18px", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#F8FAFC"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: call.status === "completed" ? C.accentLt : C.hotBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>
                {call.status === "completed" ? "📞" : "📵"}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: C.text, marginBottom: 2 }}>{call.lead}</div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}><CallTypeBadge type={call.callType} /><span style={{ fontSize: 10, color: C.muted }}>{call.date}</span></div>
              </div>
              <ScoreBadge score={call.score} />
              <div style={{ textAlign: "center", flexShrink: 0, minWidth: 50 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{call.dur || "—"}</div>
                <div style={{ fontSize: 9, color: C.muted }}>duration</div>
              </div>
              <span style={{ padding: "2px 9px", borderRadius: 9, fontSize: 10, fontWeight: 600, background: call.status === "completed" ? C.accentLt : C.hotBg, color: call.status === "completed" ? C.accent : C.hot, flexShrink: 0, whiteSpace: "nowrap" }}>{call.status === "completed" ? "Completed" : "No Answer"}</span>
              <span style={{ color: C.muted, fontSize: 11, flexShrink: 0 }}>{exp === call.id ? "▲" : "▼"}</span>
            </div>
            {exp === call.id && (
              <div style={{ borderTop: `1px solid ${C.border}`, padding: "16px 18px", background: "#FAFBFC" }}>
                {/* Outcome */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                  <div style={{ background: C.card, borderRadius: 8, padding: "10px 13px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: 9, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 4 }}>Call Outcome</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{call.callOutcome}</div>
                  </div>
                  <div style={{ background: "#FFFBEB", borderRadius: 8, padding: "10px 13px", border: `1px solid ${C.warmBdr}` }}>
                    <div style={{ fontSize: 9, color: "#92400E", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 4 }}>➜ Next Action</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{call.nextAction}</div>
                    <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>📅 {call.followUp}</div>
                  </div>
                </div>
                {/* AI Summary */}
                <div style={{ background: C.accentLt, borderRadius: 7, padding: "10px 12px", marginBottom: call.transcript.length ? 14 : 0, fontSize: 11, color: C.text, lineHeight: 1.6, borderLeft: `3px solid ${C.accent}` }}>
                  <span style={{ fontWeight: 600, color: C.accent }}>🤖 AI Summary: </span>{call.summary}
                </div>
                {/* Transcript */}
                {call.transcript.length > 0 && (
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 8 }}>Transcript</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, maxHeight: 220, overflow: "auto" }}>
                      {call.transcript.map((line, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ fontSize: 9, color: C.muted, flexShrink: 0, marginTop: 4, width: 26 }}>{line.t}</span>
                          <div style={{ padding: "7px 10px", borderRadius: 7, fontSize: 11, lineHeight: 1.5, maxWidth: "88%", background: line.r === "AI" ? C.accentLt : C.card, color: line.r === "AI" ? C.accent : C.text, border: `1px solid ${line.r === "AI" ? C.accentLt : C.border}` }}>
                            <span style={{ fontSize: 9, fontWeight: 700, display: "block", marginBottom: 1, opacity: .7 }}>{line.r === "AI" ? "🤖 AI Agent" : "👤 Lead"}</span>
                            {line.tx}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CallsSection;