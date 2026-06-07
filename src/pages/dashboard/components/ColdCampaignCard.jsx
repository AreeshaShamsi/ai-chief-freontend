import React, { useState } from "react";
import { initCampaigns, scriptLabel } from "../utils";
import { Card, Btn, C } from "../../../components/utils";

function ColdCampaignCard({ cp, stat = {} }) {
  const pct =
    cp.total > 0
      ? Math.round((stat.total_calls || 0) / cp.total * 100)
      : 0;

  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <div
        style={{
          padding: "14px 18px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background:
            cp.status === "completed" ? "#F8FAFC" : "#FAFBFF"
        }}
      >
        <span style={{ fontSize: 15 }}>📊</span>

        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>
            {cp.name}
          </div>

          <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>
            {cp.total} leads uploaded
          </div>
        </div>

        <span
          style={{
            padding: "3px 10px",
            borderRadius: 10,
            fontSize: 10,
            fontWeight: 600,
            background:
              cp.status === "active" ? C.accentLt : C.bg,
            color:
              cp.status === "active" ? C.accent : C.muted,
            border: `1px solid ${cp.status === "active"
                ? C.accent
                : C.border
              }`
          }}
        >
          {cp.status === "active" ? "● Running" : "✓ Completed"}
        </span>
      </div>

      <div style={{ padding: "14px 18px" }}>
        <div
          style={{
            fontSize: 10,
            color: C.muted,
            marginBottom: 8
          }}
        >
          Script: {cp.script_type}
        </div>

        {/* Progress */}
        <div style={{ marginBottom: 12 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 10,
              color: C.muted,
              marginBottom: 5
            }}
          >
            <span>
              {stat.total_calls || 0} calls made
            </span>
            <span style={{ fontWeight: 600 }}>
              {pct}% progress
            </span>
          </div>

          <div
            style={{
              background: C.bg,
              borderRadius: 4,
              height: 5,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                height: "100%",
                background:
                  cp.status === "active"
                    ? C.accent
                    : "#94A3B8",
                width: `${pct}%`,
                borderRadius: 4
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 8
          }}
        >
          {[
            ["Calls", stat.total_calls || 0, "📞", C.accent],
            ["Hot", stat.hot || 0, "🔥", C.hot],
            ["Warm", stat.warm || 0, "⚡", C.warm]
          ].map(([l, v, ic, c]) => (
            <div
              key={l}
              style={{
                background: C.bg,
                borderRadius: 8,
                padding: "8px",
                textAlign: "center"
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: c
                }}
              >
                {v}
              </div>

              <div
                style={{ fontSize: 9, color: C.muted }}
              >
                {ic} {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ColdCampaignCard