import React, { useState } from "react";
import { initCampaigns } from "../utils";
import { Card, Btn, C } from "../../../components/utils";

function CampaignsSection({ onShowCreate }) {
    const [camps, setCamps] = useState(initCampaigns);
    const toggle = id => setCamps(c => c.map(cp => cp.id === id && cp.status !== "completed" ? { ...cp, status: cp.status === "active" ? "paused" : "active" } : cp));
    return (
        <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
                <div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Campaigns</div>
                    <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{camps.filter(c => c.status === "active").length} active · {camps.length} total</div>
                </div>
                <button onClick={onShowCreate} style={{ display: "flex", alignItems: "center", gap: 7, background: C.accent, color: "#fff", border: "none", borderRadius: 9, padding: "10px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                    <span style={{ fontSize: 16 }}>+</span> New Campaign
                </button>
            </div>

            {/* Upload hint banner */}
            <div style={{ background: "linear-gradient(135deg,#EEF2FF,#E0E7FF)", border: `1px solid #C7D2FE`, borderRadius: 10, padding: "14px 18px", marginBottom: 18, display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 24 }}>📊</span>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: "#3730A3" }}>Upload an Excel file to start calling</div>
                    <div style={{ fontSize: 11, color: "#6366F1", marginTop: 2 }}>Any .xlsx or .csv with a phone column. We auto-detect and map fields.</div>
                </div>
                <button onClick={onShowCreate} style={{ background: C.accent, color: "#fff", border: "none", borderRadius: 7, padding: "7px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Upload & Launch →</button>
            </div>

            {/* Campaign cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {camps.map(cp => {
                    const pct = Math.round((cp.called / cp.total) * 100);
                    return (
                        <Card key={cp.id} style={{ padding: 0, overflow: "hidden" }}>
                            <div style={{ padding: "16px 20px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                                    <div style={{ flex: 1, paddingRight: 16 }}>
                                        <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 3 }}>{cp.name}</div>
                                        <div style={{ fontSize: 11, color: C.muted }}>Script: {cp.script} · Uploaded {cp.uploaded}</div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                                        <span style={{ padding: "3px 10px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: cp.status === "active" ? C.greenBg : cp.status === "paused" ? C.warmBg : "#F8FAFC", color: cp.status === "active" ? C.green : cp.status === "paused" ? C.warm : C.muted }}>
                                            {cp.status === "active" ? "● Active" : cp.status === "paused" ? "⏸ Paused" : "✓ Completed"}
                                        </span>
                                        {cp.status !== "completed" && <Btn sm onClick={() => toggle(cp.id)}>{cp.status === "active" ? "Pause" : "Resume"}</Btn>}
                                    </div>
                                </div>

                                {/* Progress */}
                                <div style={{ marginBottom: 14 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.muted, marginBottom: 5 }}>
                                        <span>{cp.called} of {cp.total} called</span>
                                        <span style={{ fontWeight: 600 }}>{pct}% complete</span>
                                    </div>
                                    <div style={{ background: C.bg, borderRadius: 4, height: 5, overflow: "hidden" }}>
                                        <div style={{ height: "100%", background: cp.status === "active" ? C.accent : C.muted, width: `${pct}%`, borderRadius: 4, transition: "width .3s" }} />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                                    {[["Total", cp.total, "📋"], ["Called", cp.called, "📞"], ["Qualified", cp.qualified, "✓"], ["Hot", cp.hot, "🔥"]].map(([l, v, ic]) => (
                                        <div key={l} style={{ background: C.bg, borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
                                            <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>{v}</div>
                                            <div style={{ fontSize: 9, color: C.muted, marginTop: 2 }}>{ic} {l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default CampaignsSection;
