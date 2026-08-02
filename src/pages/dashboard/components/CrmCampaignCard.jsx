import React, { useState } from "react";
import { FiFileText, FiPause, FiPlay, FiSquare } from "react-icons/fi";
import { scriptLabel } from "../utils";
import { AppCard, AppPill, C, MetricCard, T } from "../../../components/utils";

function StatusPill({ status }) {
  let label = "Live";
  let variant = "success";

  if (status === "paused") {
    label = "Paused";
    variant = "danger";
  } else if (status === "stopped") {
    label = "Stopped";
    variant = "dark";
  }

  return (
    <AppPill variant={variant} size="xs" dot>
      {label}
    </AppPill>
  );
}

function ScriptInfoStrip({ children }) {
  return (
    <div
      style={{
        height: 30,
        borderRadius: T.radius.sm,
        background: C.surface,
        color: C.muted,
        fontSize: T.font.size.caption,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 12px",
        marginTop: 12,
        overflow: "hidden"
      }}
    >
      <FiFileText size={12} color={C.accent} style={{ flexShrink: 0 }} />
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {children}
      </span>
    </div>
  );
}

function CrmCampaignCard({ cp, stat = {} }) {
  const [status, setStatus] = useState("active");
  const isRunning = status === "active";
  const isPaused = status === "paused";
  const isStopped = status === "stopped";

  const scriptName =
    scriptLabel[cp.script_type] ||
    (cp.script_type === "real_estate_enquiry"
      ? "Property Enquiry Call"
      : "Property Requirement Gathering");
  const sourceName = cp.crm_name || cp.crm || cp.source || "LeadSquared";
  const liveSince = cp.live_since || cp.started_at || cp.created_at || "Dec 15";
  const subtitle = `Connected to ${sourceName}  Live since ${liveSince}`;

  const metrics = [
    {
      label: "Calls Made",
      value: stat.total_calls || cp.total_calls || 0,
      variant: "neutral"
    },
    {
      label: "Qualified",
      value: stat.qualified || cp.qualified || 0,
      variant: "qualified"
    },
    {
      label: "Hot",
      value: stat.hot || cp.hot || 0,
      variant: "hot"
    }
  ];

  return (
    <AppCard
      variant="compact"
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: T.font.size.cardTitle,
              fontWeight: T.font.weight.bold,
              color: C.text,
              lineHeight: "17px"
            }}
          >
            {cp.campaign_name}
          </div>
          <div
            style={{
              fontSize: T.font.size.caption,
              color: C.muted,
              marginTop: 2,
              lineHeight: "11px"
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {!isStopped && (
            <div style={{ display: "flex", gap: 6 }}>
              {isRunning ? (
                <button
                  onClick={() => setStatus("paused")}
                  title="Pause Campaign"
                  style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 4, display: "flex", alignItems: "center" }}
                >
                  <FiPause size={14} />
                </button>
              ) : (
                <button
                  onClick={() => setStatus("active")}
                  title="Resume Campaign"
                  style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 4, display: "flex", alignItems: "center" }}
                >
                  <FiPlay size={14} />
                </button>
              )}
              <button
                onClick={() => setStatus("stopped")}
                title="Stop Campaign"
                style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 4, display: "flex", alignItems: "center" }}
              >
                <FiSquare size={14} />
              </button>
            </div>
          )}
          <StatusPill status={status} />
        </div>
      </div>

      <ScriptInfoStrip>
        Script: {scriptName}  Leads ingested in real-time from CRM.
      </ScriptInfoStrip>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 10,
          marginTop: 12
        }}
      >
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </AppCard>
  );
}

export default CrmCampaignCard;
