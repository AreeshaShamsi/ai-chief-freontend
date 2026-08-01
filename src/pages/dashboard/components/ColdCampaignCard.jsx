import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import {
  AppCard,
  AppIconCircle,
  AppPill,
  C,
  MetricCard,
  ProgressBar,
  T,
} from "../../../components/utils";

function StatusPill({ status }) {
  const running = status === "active" || status === "running";

  return (
    <AppPill variant={running ? "primary" : "neutral"} size="xs" dot>
      {running ? "Running" : "Completed"}
    </AppPill>
  );
}

function ColdCampaignCard({ cp, stat = {} }) {
  console.log(cp);
  const called = cp.total_calls || cp.total_calls || 0;
  const total = cp.total_leads_to_calls || 0;
  const pct = total > 0 ? Math.round((called / total) * 100) : 0;
  const completed = called === total;
  const progress = completed ? 100 : pct;
  const remaining = Math.max(total - called, 0);
  const title = cp.name || cp.campaign_name;
  const subtitle = completed
    ? `Campaign finished${cp.completed_on ? ` on ${cp.completed_on}` : ""}  ${progress}% records processed`
    : `${remaining} records remaining `;

  const metrics = [
    { label: "Total", value: total, variant: "neutral" },
    { label: "Called", value: called, variant: "neutral" },
    { label: "Hot", value: cp.hot || 0, variant: "hot" }
    ,
    {
      label: "Warm",
      value: cp.warm || 0,
      variant: "warm"
    },
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
            {title}
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

        <StatusPill status={completed ? "completed" : "active"} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 12
        }}
      >
        <AppIconCircle size={26} background={C.accentLt} color={C.accent}>
          <FiBarChart2 size={13} />
        </AppIconCircle>
        <ProgressBar value={progress} style={{ flex: 1 }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 10,
          marginTop: 10
        }}
      >
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </AppCard>
  );
}

export default ColdCampaignCard;
