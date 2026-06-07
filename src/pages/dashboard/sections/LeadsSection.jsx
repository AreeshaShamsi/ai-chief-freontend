import React, { useState } from "react";
import { Avatar, Card, C } from "../../../components/utils";
import LeadDetailPanel from "../components/LeadDetailPanel";

function getLatestCall(calls = []) {
  if (!calls?.length) return null;
  return calls[calls.length - 1];
}

function LeadsSection({ data }) {
  const [sel, setSel] = useState(null);
  const [typef, setTypef] = useState("all");

  const activity = data?.activity || [];

  const leads = activity.map((l, idx) => {
    const latest = getLatestCall(l.calls);

    return {
      id: idx,
      name: l.name,
      phone: l.phone,
      calls: l.calls,

      callType: latest?.lead_type || "Cold",
      callOutcome: latest?.call_outcome || "—",
      aiSummary: latest?.ai_generated_call_summary || "—",

      nextAction: latest?.next_action || "—",
      followUpDate: latest?.next_followup_date || "—",
      followUpTime: latest?.next_followup_time || "—"
    };
  });

  const filtered =
    typef === "all"
      ? leads
      : leads.filter((l) => l.callType === typef);

  return (
    <div style={{ display: "flex", height: "100%", background: C.bg }}>
      <div style={{ flex: 1, padding: 26, overflow: "auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>
            Leads
          </div>
          <div style={{ fontSize: 12, color: C.muted }}>
            Live lead intelligence from calls
          </div>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
          {["all", "Hot", "Warm", "Cold"].map((t) => (
            <button
              key={t}
              onClick={() => setTypef(t)}
              style={{
                padding: "5px 10px",
                borderRadius: 6,
                border: "none",
                fontSize: 11,
                cursor: "pointer",
                background:
                  typef === t ? C.accent : C.card,
                color:
                  typef === t ? "#fff" : C.muted
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Table */}
        <Card style={{ padding: 0 }}>
          <table style={{ width: "100%", fontSize: 11 }}>
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                {[
                  "Lead",
                  "Type",
                  "Outcome",
                  "Next Action",
                  "Follow-up"
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: 10,
                      color: C.muted,
                      fontSize: 9
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filtered.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => setSel(lead)}
                  style={{
                    cursor: "pointer",
                    borderBottom: `1px solid ${C.border}`
                  }}
                >
                  <td style={{ padding: 10 }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Avatar name={lead.name} size={26} />
                      <div>
                        <div style={{ fontWeight: 600 }}>
                          {lead.name}
                        </div>
                        <div style={{ fontSize: 10, color: C.muted }}>
                          {lead.phone}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: 10 }}>
                    {lead.callType}
                  </td>

                  <td style={{ padding: 10 }}>
                    {lead.callOutcome}
                  </td>

                  <td style={{ padding: 10, color: C.accent }}>
                    {lead.nextAction}
                  </td>

                  <td style={{ padding: 10, fontSize: 10 }}>
                    {lead.followUpDate !== "—"
                      ? `${lead.followUpDate}`
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {sel && (
        <LeadDetailPanel
          lead={sel}
          onClose={() => setSel(null)}
        />
      )}
    </div>
  );
}

export default LeadsSection;