import React, { useState } from "react";
import { ALL_LEADS } from "../utils";
import { ScoreBadge, Avatar, Card, Btn, C } from "../../../components/utils";

function LeadsSection() {
    const [sel, setSel] = useState(null);
    const [sf, setSf] = useState("all");
    const filtered = ALL_LEADS.filter(l => sf === "all" || l.score === sf);
    return (
        <div style={{ display: "flex", height: "100%", background: C.bg }}>
            <div style={{ flex: 1, padding: 26, overflow: "auto", minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                    <div>
                        <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Leads</div>
                        <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{ALL_LEADS.length} total · {ALL_LEADS.filter(l => l.score === "hot").length} hot</div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                    {["all", "hot", "warm", "cold"].map(s => (
                        <button key={s} onClick={() => setSf(s)}
                            style={{ padding: "6px 13px", borderRadius: 7, fontSize: 11, fontWeight: 600, cursor: "pointer", border: `1px solid ${sf === s ? C.accent : C.border}`, background: sf === s ? C.accentLt : C.card, color: sf === s ? C.accent : C.muted, transition: "all .12s", textTransform: "capitalize" }}>
                            {s === "all" ? "All leads" : s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                    ))}
                </div>
                <Card style={{ padding: 0, overflow: "hidden" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                        <thead><tr style={{ background: "#F8FAFC" }}>
                            {["Lead", "Phone", "Score", "Campaign", "Budget", "Timeline", "Last Call", "Actions"].map(h => <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontSize: 9, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>)}
                        </tr></thead>
                        <tbody>{filtered.map(lead => (
                            <tr key={lead.id} style={{ borderBottom: `1px solid ${C.border}`, cursor: "pointer", transition: "background .1s", background: sel?.id === lead.id ? C.accentLt : undefined }}
                                onClick={() => setSel(lead)}
                                onMouseEnter={e => { if (sel?.id !== lead.id) e.currentTarget.style.background = "#F8FAFC"; }} onMouseLeave={e => { if (sel?.id !== lead.id) e.currentTarget.style.background = "transparent"; }}>
                                <td style={{ padding: "10px 12px" }}><div style={{ display: "flex", alignItems: "center", gap: 7 }}><Avatar name={lead.name} size={26} /><span style={{ fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>{lead.name}</span></div></td>
                                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.phone}</td>
                                <td style={{ padding: "10px 12px" }}><ScoreBadge score={lead.score} /></td>
                                <td style={{ padding: "10px 12px", color: C.muted, fontSize: 10, maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.campaign}</td>
                                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.budget}</td>
                                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.timeline}</td>
                                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.ago}</td>
                                <td style={{ padding: "10px 12px" }}><button style={{ background: C.accentLt, color: C.accent, border: "none", borderRadius: 5, padding: "4px 10px", fontSize: 10, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>📞 Call</button></td>
                            </tr>
                        ))}</tbody>
                    </table>
                </Card>
            </div>
            {sel && (
                <div style={{ width: 290, background: C.card, borderLeft: `1px solid ${C.border}`, overflow: "auto", flexShrink: 0 }}>
                    <div style={{ padding: "14px 17px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: C.card, zIndex: 1 }}>
                        <span style={{ fontWeight: 700, fontSize: 13, color: C.text }}>Lead detail</span>
                        <button onClick={() => setSel(null)} style={{ background: "none", border: "none", fontSize: 14, cursor: "pointer", color: C.muted }}>✕</button>
                    </div>
                    <div style={{ padding: 17 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 15, padding: 12, background: C.bg, borderRadius: 9 }}>
                            <Avatar name={sel.name} size={40} />
                            <div><div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 2 }}>{sel.name}</div>
                                <div style={{ fontSize: 11, color: C.muted, marginBottom: 5 }}>{sel.phone}</div>
                                <ScoreBadge score={sel.score} /></div>
                        </div>
                        {[["Campaign", sel.campaign], ["Project", sel.project], ["Budget", sel.budget], ["BHK", sel.bhk], ["Timeline", sel.timeline], ["Last call", sel.ago]].map(([k, v]) => (
                            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid #F8FAFC`, fontSize: 11 }}>
                                <span style={{ color: C.muted, fontWeight: 500 }}>{k}</span><span style={{ color: C.text, fontWeight: 500, textAlign: "right", maxWidth: 160 }}>{v}</span>
                            </div>
                        ))}
                        <div style={{ marginTop: 15, marginBottom: 14 }}>
                            <div style={{ fontSize: 11, fontWeight: 600, color: C.text, marginBottom: 7 }}>🤖 AI call summary</div>
                            <div style={{ background: C.bg, borderRadius: 7, padding: 10, fontSize: 11, color: C.text, lineHeight: 1.6 }}>{sel.summary}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                            <Btn primary style={{ width: "100%", textAlign: "center" }}>📞 Call Now</Btn>
                            <Btn style={{ width: "100%", textAlign: "center" }}>📅 Schedule Callback</Btn>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LeadsSection;