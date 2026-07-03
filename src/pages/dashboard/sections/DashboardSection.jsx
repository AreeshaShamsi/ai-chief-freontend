import React from "react";
import { Card, C, Avatar } from "../../../components/utils";
import { HOT_LEADS, initCampaigns, CALLS, CallTypeBadge, ScoreBadge } from "../utils";

function DashboardSection({ data, onLeadClick, openCampaign }) {
  const callsToday = data?.calls?.length || 0;

  const hot = data?.globalHot || 0;
  const warm = data?.globalWarm || 0;
  const cold = data?.globalCold || 0;

  const hot_leads = (data?.hotEnriched || [])
    .slice()
    .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));

  const campaigns = data?.campaigns || [];
  const stats = data?.campaignStats || {};
  return (
    <div style={{ padding: 26, minHeight: "100vh", background: C.bg }}>
      {/* Minutes Balance Banner */}
      {(() => {
        const billing = data?.billing || {};

        const totalMins = billing.total_minutes_purchased || 0;
        const usedMins = billing.total_minutes_used || 0;
        const remaining = billing.minutes_left || 0;
        const rate = billing.price_per_minute || 0;
        const balanceValue = billing.balance_value || 0;

        const pct =
          totalMins > 0
            ? Math.round((remaining / totalMins) * 100)
            : 0;

        const low = remaining < 200;
        const barColor = remaining < 200 ? C.hot : remaining < 500 ? C.warm : C.green;
        return (
          <div style={{ background: C.card, border: `1px solid ${low ? C.hotBdr : C.border}`, borderRadius: 12, padding: "14px 20px", marginBottom: 18, display: "flex", alignItems: "center", gap: 20, boxShadow: low ? "0 0 0 3px #FEE2E2" : "none", transition: "box-shadow .3s" }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: low ? "#FEF2F2" : "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{low ? "⚠️" : "🎙️"}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: low ? C.hot : C.text, letterSpacing: "-1px", lineHeight: 1 }}>{remaining.toLocaleString()}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.muted }}>minutes remaining</span>
                {low && <span style={{ fontSize: 10, fontWeight: 700, background: C.hotBg, color: C.hot, border: `1px solid ${C.hotBdr}`, borderRadius: 8, padding: "2px 8px" }}>Low balance</span>}
              </div>
              <div style={{ background: C.bg, borderRadius: 4, height: 5, overflow: "hidden" }}>
                <div style={{ height: "100%", background: barColor, width: `${pct}%`, borderRadius: 4, transition: "width .4s" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: C.muted }}>
                <span>{usedMins.toLocaleString()} mins used</span>
                <span>{pct}% remaining of {totalMins.toLocaleString()} purchased</span>
              </div>
            </div>
            <div style={{ width: 1, height: 44, background: C.border, flexShrink: 0 }} />
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 2 }}>Rate</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.text, letterSpacing: "-.5px" }}>₹ {rate.toLocaleString()}<span style={{ fontSize: 11, fontWeight: 500, color: C.muted }}>/min</span></div>
            </div>
            <div style={{ width: 1, height: 44, background: C.border, flexShrink: 0 }} />
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 2 }}>Balance value</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.green, letterSpacing: "-.5px" }}>₹{(remaining * 7).toLocaleString()}</div>
            </div>
          </div>
        );
      })()}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Good morning, {data?.company?.name || "User"} 👋</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric"
          })}
            {" · "}
            {data?.campaigns?.length || 0} campaigns active</div>
        </div>

      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 22 }}>
        {[["Calls Today", callsToday, "real-time data", C.accent, "📞"], ["Hot Leads", hot, "Immediate action needed", C.hot, "🔥"], , ["Warm Leads", warm, "Follow-up required", C.warm, "⚡"], ["Cold", cold, "Wrong no. / not interested", "#9CA3AF", "✕"]].map(([l, v, s, c, ic], i) => (
          <Card key={i} style={{ padding: "15px 17px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", fontWeight: 600, marginBottom: 5 }}>{l}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: c, letterSpacing: "-1.2px", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>{s}</div>
              </div>
              <span style={{ fontSize: 18, opacity: .7 }}>{ic}</span>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 14, marginBottom: 14 }}>
        {/* Hot leads */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFFBFB" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 18 }}>🔥</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: C.text }}>Hot leads — act now</span>
            </div>
            <span style={{ background: C.hotBg, color: C.hot, border: `1px solid ${C.hotBdr}`, borderRadius: 10, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{hot_leads.length} leads</span>
          </div>
          {hot_leads.map((lead, i) => (
            <div
              key={i}
              onClick={() => onLeadClick(lead)}
              style={{
                padding: "14px 18px",
                borderBottom: `1px solid ${C.border}`,
                cursor: "pointer",
                transition: "background .1s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = C.hotBg)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Avatar name={lead.name} size={36} />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 3
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        color: C.text
                      }}
                    >
                      {lead.name}
                    </span>

                    <span
                      style={{
                        fontSize: 10,
                        color: C.muted,
                        flexShrink: 0,
                        marginLeft: 8
                      }}
                    >
                      {lead.timestamp
                        ? new Date(lead.timestamp).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit"
                        })
                        : ""}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      flexWrap: "wrap",
                      marginBottom: 5
                    }}
                  >
                    <CallTypeBadge type={lead.script_type} />

                    <span style={{ fontSize: 11, color: C.muted }}>
                      {lead.budget || "—"} ·{" "}
                      {lead.preferred_configuration || "—"} ·{" "}
                      {lead.purchase_timeline || "—"}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: 11,
                      color: C.text,
                      background: "#FAFBFC",
                      borderRadius: 6,
                      padding: "5px 8px",
                      lineHeight: 1.5,
                      borderLeft: `2px solid ${C.accent}`
                    }}
                  >
                    {lead.ai_summary}
                  </div>

                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 10,
                      color: C.accent,
                      fontWeight: 600
                    }}
                  >
                    ➜ Next: {lead.next_action || "No action set"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Card>

        {/* Campaigns snapshot */}
        <Card key={"campaigns"} style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: 13, color: C.text }}>Active campaigns</span>
            <span onClick={openCampaign} style={{ fontSize: 11, color: C.accent, cursor: "pointer", fontWeight: 500 }}>View all →</span>
          </div>
          {campaigns.map((cp) => {
            const stat = stats[cp.campaign_id] || {};

            const total = stat.total_calls || 0;
            const hot = stat.hot || 0;
            const warm = stat.warm || 0;
            const cold = stat.cold || 0;

            const progress =
              cp.totalLeads ? Math.round((stat.called || 0) / cp.totalLeads * 100) : 0;

            return (
              <div
                key={cp.campaign_id}
                style={{
                  padding: "13px 18px",
                  borderBottom: `1px solid ${C.border}`
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 12,
                      color: C.text,
                      lineHeight: 1.3
                    }}
                  >
                    {cp.campaign_name}
                  </div>

                  {cp.campaign_type === "crm_connected" && <div
                    style={{
                      fontWeight: 300,
                      fontSize: 10,
                      color: C.text,
                      lineHeight: 1.3
                    }}
                  >
                    {cp.script_type == "real_estate_enquiry" ? "Enquiry" : "Requirement"}
                  </div>}

                  <span
                    style={{
                      background:
                        cp.campaign_type === "crm_connected" ? C.greenBg : C.accentLt,
                      color: cp.campaign_type === "crm_connected" ? C.green : C.accent,
                      borderRadius: 8,
                      padding: "1px 7px",
                      fontSize: 9,
                      fontWeight: 600,
                      flexShrink: 0
                    }}
                  >
                    {cp.type === "crm" ? "Live" : "Running"}
                  </span>
                </div>

                {/* Progress */}
                {cp.totalLeads && (
                  <div
                    style={{
                      background: C.bg,
                      borderRadius: 3,
                      height: 4,
                      overflow: "hidden",
                      marginBottom: 8
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        background: C.accent,
                        width: `${progress}%`,
                        borderRadius: 3
                      }}
                    />
                  </div>
                )}

                {/* Stats */}
                <div style={{ display: "flex", gap: 8 }}>
                  <div
                    style={{
                      background: C.hotBg,
                      borderRadius: 5,
                      padding: "4px 8px",
                      flex: 1,
                      textAlign: "center"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: C.hot
                      }}
                    >
                      {hot}
                    </div>
                    <div style={{ fontSize: 9, color: C.hot }}>Hot</div>
                  </div>

                  <div
                    style={{
                      background: C.accentLt,
                      borderRadius: 5,
                      padding: "4px 8px",
                      flex: 1,
                      textAlign: "center"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: C.accent
                      }}
                    >
                      {warm}
                    </div>
                    <div style={{ fontSize: 9, color: C.accent }}>
                      Warm
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#F3F4F6",
                      borderRadius: 5,
                      padding: "4px 8px",
                      flex: 1,
                      textAlign: "center"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#6B7280"
                      }}
                    >
                      {cold}
                    </div>
                    <div style={{ fontSize: 9, color: "#6B7280" }}>
                      Cold
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}

export default DashboardSection;