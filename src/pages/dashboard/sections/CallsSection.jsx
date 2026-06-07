import React, { useState } from "react";
import { Card, C } from "../../../components/utils";

function formatDuration(seconds = 0) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function CallsSection({ data }) {
  const [exp, setExp] = useState(null);

  const metrics = data?.metrics || {};
  const activity = data?.activity || [];

  return (
    <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: C.text }}>
          Call Log
        </div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>
          All calls with AI summaries, outcomes, and next actions
        </div>
      </div>

      {/* Metrics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 12,
          marginBottom: 20
        }}
      >
        {[
          [
            "Calls Today",
            metrics.total_calls_today || 0,
            "Total attempted"
          ],
          [
            "Pickup Rate",
            `${metrics.pickup_rate_percent || 0}%`,
            "Answered vs total"
          ],
          [
            "Avg Duration",
            formatDuration(
              metrics.avg_call_duration_seconds || 0
            ),
            "Per call"
          ]
        ].map(([l, v, s], i) => (
          <Card key={i} style={{ padding: "13px 16px" }}>
            <div
              style={{
                fontSize: 9,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: ".5px",
                fontWeight: 600,
                marginBottom: 4
              }}
            >
              {l}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: C.text
              }}
            >
              {v}
            </div>
            <div style={{ fontSize: 10, color: C.muted, marginTop: 3 }}>
              {s}
            </div>
          </Card>
        ))}
      </div>

      {/* Calls List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {activity.map((lead, idx) => {
          const latestCall = lead.calls?.[0]; // newest first from backend

          return (
            <Card
              key={idx}
              style={{ padding: 0, overflow: "hidden" }}
            >
              {/* Row */}
              <div
                onClick={() =>
                  setExp(exp === idx ? null : idx)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "13px 18px",
                  cursor: "pointer"
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: latestCall
                      ? C.accentLt
                      : C.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    flexShrink: 0
                  }}
                >
                  📞
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 13,
                      color: C.text
                    }}
                  >
                    {lead.name}
                  </div>

                  <div
                    style={{
                      fontSize: 10,
                      color: C.muted
                    }}
                  >
                    {lead.phone || "No phone"}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    flexShrink: 0
                  }}
                >
                  {latestCall?.date_time_of_call
                    ? new Date(
                      latestCall.date_time_of_call
                    ).toLocaleString()
                    : "No calls"}
                </div>

                <span style={{ color: C.muted, fontSize: 12 }}>
                  {exp === idx ? "▲" : "▼"}
                </span>
              </div>

              {/* Expanded */}
              {exp === idx && latestCall && (
                <div
                  style={{
                    borderTop: `1px solid ${C.border}`,
                    padding: "16px 18px",
                    background: "#FAFBFC"
                  }}
                >
                  {/* Outcome + Next Action */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                      marginBottom: 14
                    }}
                  >
                    <div
                      style={{
                        background: C.card,
                        borderRadius: 8,
                        padding: "10px 13px",
                        border: `1px solid ${C.border}`
                      }}
                    >
                      <div
                        style={{
                          fontSize: 9,
                          color: C.muted,
                          textTransform: "uppercase",
                          marginBottom: 4
                        }}
                      >
                        Call Outcome
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 700 }}>
                        {latestCall.call_outcome || latestCall.lead_type || "—"}
                      </div>
                    </div>

                    <div
                      style={{
                        background: "#FFFBEB",
                        borderRadius: 8,
                        padding: "10px 13px",
                        border: `1px solid ${C.warmBdr}`
                      }}
                    >
                      <div
                        style={{
                          fontSize: 9,
                          color: "#92400E",
                          textTransform: "uppercase",
                          marginBottom: 4
                        }}
                      >
                        Next Action
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 700 }}>
                        {latestCall.next_action || "—"}
                      </div>
                    </div>
                  </div>

                  {/* AI Summary */}
                  <div
                    style={{
                      background: C.accentLt,
                      borderRadius: 7,
                      padding: "10px 12px",
                      fontSize: 11,
                      lineHeight: 1.6,
                      borderLeft: `3px solid ${C.accent}`,
                      marginBottom: 14
                    }}
                  >
                    <span style={{ fontWeight: 600, color: C.accent }}>
                      🤖 AI Summary:
                    </span>{" "}
                    {latestCall.ai_generated_call_summary || "No summary"}
                  </div>

                  {/* TRANSCRIPT (REAL MESSAGES) */}
                  {latestCall.messages?.length > 0 && (
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          color: C.muted,
                          textTransform: "uppercase",
                          letterSpacing: ".5px",
                          marginBottom: 8
                        }}
                      >
                        Transcript
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          maxHeight: 240,
                          overflow: "auto"
                        }}
                      >
                        {latestCall.messages.map((msg, i) => {
                          const isAI = msg.sender === "ai";

                          return (
                            <div
                              key={i}
                              style={{
                                display: "flex",
                                justifyContent: isAI
                                  ? "flex-start"
                                  : "flex-end"
                              }}
                            >
                              <div
                                style={{
                                  maxWidth: "85%",
                                  padding: "8px 10px",
                                  borderRadius: 8,
                                  fontSize: 11,
                                  lineHeight: 1.5,
                                  background: isAI
                                    ? C.accentLt
                                    : C.card,
                                  color: isAI ? C.accent : C.text,
                                  border: `1px solid ${isAI ? C.accentLt : C.border
                                    }`
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 9,
                                    fontWeight: 700,
                                    opacity: 0.7,
                                    marginBottom: 2
                                  }}
                                >
                                  {isAI ? "🤖 AI Agent" : "👤 Lead"}
                                </div>

                                {msg.message}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default CallsSection;