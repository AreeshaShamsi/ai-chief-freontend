import React from "react";
import {
  FiActivity,
  FiArrowUpRight,
  FiCheck,
  FiMic,
  FiPhoneCall,
  FiX,
  FiZap,
} from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { LeadFollowUpCard } from "../../../components/cards";
import { Card, C } from "../../../components/utils";

const topMetrics = [
  {
    key: "minutes",
    label: "347 min remaining",
    subtitle: "853 min used, 71% remaining of 1,200 purchased",
    icon: <FiMic size={14} />,
    progress: 58,
  },
  {
    key: "rate",
    label: "base rate",
    icon: <span style={{ fontSize: 14, fontWeight: 800 }}>₹</span>,
    valueNode: (
      <>
        <span style={{ fontSize: 24, fontWeight: 800 }}>₹7</span>
        <span style={{ fontSize: 10, fontWeight: 700 }}>/min</span>
      </>
    ),
  },
  {
    key: "balance",
    label: "Balance value",
    value: "₹16.4K",
    icon: <span style={{ fontSize: 14, fontWeight: 800, color: "#5B45F4" }}>₹</span>,
    featured: true,
  },
];

const middleMetrics = [
  {
    label: "call today",
    value: "94",
    icon: <FiPhoneCall size={14} />,
    badge: "23%",
    badgeTone: "green",
  },
  {
    label: "Hot leads",
    subtitle: "action needed",
    value: "8%",
    icon: <FaFire size={13} />,
    iconColor: "#EF4444",
    badge: "2",
    badgeTone: "green",
  },
];

const bottomMetrics = [
  {
    label: "Qualified",
    subtitle: "ready for sales",
    value: "4",
    icon: <FiCheck size={15} />,
    iconColor: "#16A34A",
  },
  {
    label: "Warm leads",
    subtitle: "needs follow up",
    value: "2",
    icon: <FiZap size={15} />,
    iconColor: "#F59E0B",
    badge: "2",
    badgeTone: "red",
  },
  {
    label: "Junk",
    subtitle: "not interested",
    value: "2",
    icon: <FiX size={15} />,
    iconColor: "#64748B",
    background: "#F3F4F6",
  },
];

const hotLeads = [
  {
    name: "Arjun Mehta",
    initials: "AM",
    nextAction: "Confirm site visit",
    nextTime: "Saturday 11AM",
    tags: ["Property Enquiry", "12 cr", "33bhk", "2 months"],
    timeAgo: "6 min ago",
    message: "Budget ₹1-1.3 Cr confirmed. Site visit Saturday 11AM arranged Sarjapur preferred.",
  },
  {
    name: "Sunita Pillai",
    initials: "SP",
    nextAction: "Confirm site visit",
    nextTime: "Saturday 11AM",
    tags: ["Property Enquiry", "1.2 cr", "4bhk", "3 months"],
    timeAgo: "6 min ago",
    message: "high-budget buyer . open to spacious 4bhk. spouse saturday call",
  },
];

const campaigns = [
  { title: "Hot leads act now", status: "live", hot: 2, qualified: 4 },
  { title: "prestige decbatch", status: "running", hot: 8, qualified: 32, progress: 68 },
];

const pageStyle = {
  width: "100%",
  maxWidth: "none",
  margin: 0,
  padding: 24,
  boxSizing: "border-box",
  background: "#F7F8FC",
  color: C.text,
};

const topCardStyle = {
  borderRadius: 16,
  border: "1px solid rgba(226,232,240,0.8)",
  boxShadow: "none",
  background: "#EEF2FF",
  minHeight: 96,
  padding: 14,
};

const sectionCardStyle = {
  borderRadius: 18,
  border: `1px solid ${C.borderLt}`,
  boxShadow: "none",
};

function ActiveCallsPill() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        height: 24,
        borderRadius: 999,
        border: `1px solid ${C.border}`,
        background: C.card,
        color: C.text,
        fontSize: 9,
        fontWeight: 700,
        padding: "0 10px",
        whiteSpace: "nowrap",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#22C55E",
        }}
      />
      3 calls active now
    </span>
  );
}

function IconCircle({ children, color = "#5B45F4" }) {
  return (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.card,
        color,
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

function MetricBadge({ children, tone = "green" }) {
  const isGreen = tone === "green";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 18,
        borderRadius: 999,
        padding: "0 8px",
        background: isGreen ? "#DCFCE7" : "#FEE2E2",
        color: isGreen ? "#16A34A" : "#EF4444",
        fontSize: 8,
        fontWeight: 800,
      }}
    >
      {children}
    </span>
  );
}

function MetricCard({
  label,
  subtitle,
  value,
  valueNode,
  icon,
  iconColor,
  badge,
  badgeTone,
  progress,
  featured = false,
  background,
}) {
  const isFeatured = featured;
  const labelColor = isFeatured ? C.card : C.text;
  const subtitleColor = isFeatured ? "rgba(255,255,255,.76)" : C.muted;

  return (
    <Card
      style={{
        ...topCardStyle,
        position: "relative",
        background: isFeatured ? "#5B45F4" : background || "#EEF2FF",
        color: isFeatured ? C.card : C.text,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: progress ? 14 : 12,
              fontWeight: progress ? 700 : 600,
              color: labelColor,
              lineHeight: 1.2,
            }}
          >
            {label}
          </div>
          {subtitle ? (
            <div style={{ marginTop: 4, fontSize: 9, color: subtitleColor, lineHeight: 1.25 }}>
              {subtitle}
            </div>
          ) : null}
        </div>
        <IconCircle color={iconColor || (isFeatured ? "#5B45F4" : "#5B45F4")}>{icon}</IconCircle>
      </div>

      {progress ? (
        <div
          style={{
            width: "100%",
            height: 20,
            marginTop: 24,
            borderRadius: 5,
            overflow: "hidden",
            background: "#C7D2FE",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              borderRadius: 5,
              background: "#5B45F4",
            }}
          />
        </div>
      ) : (
        <div style={{ marginTop: 24, fontSize: 28, fontWeight: 800, lineHeight: 1, color: labelColor }}>
          {valueNode || value}
        </div>
      )}

      {badge ? (
        <div style={{ position: "absolute", right: 14, bottom: 14 }}>
          <MetricBadge tone={badgeTone}>{badge}</MetricBadge>
        </div>
      ) : null}
    </Card>
  );
}

function CampaignMetric({ label, value, tone }) {
  const isHot = tone === "hot";

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        height: 95,
        borderRadius: 12,
        background: isHot ? C.hotBg : C.accentLt,
        border: `1px solid ${isHot ? C.hotBdr : "#DDD6FE"}`,
        padding: "18px 12px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 850,
          lineHeight: 1,
          color: isHot ? C.hot : "#5B45F4",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 10,
          fontSize: 10,
          fontWeight: 700,
          color: isHot ? C.hot : "#5B45F4",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CampaignCard({ campaign }) {
  return (
    <div
      style={{
        borderRadius: 16,
        border: `1px solid ${C.borderLt}`,
        background: C.card,
        padding: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: C.text, textTransform: "lowercase" }}>
          {campaign.title}
        </div>
        <span
          style={{
            borderRadius: 999,
            background: C.greenBg,
            color: C.green,
            border: `1px solid ${C.greenBdr}`,
            padding: "3px 9px",
            fontSize: 10,
            fontWeight: 800,
            textTransform: "lowercase",
          }}
        >
          {campaign.status}
        </span>
      </div>

      {campaign.progress ? (
        <div
          style={{
            height: 5,
            marginTop: 12,
            marginBottom: 2,
            borderRadius: 999,
            overflow: "hidden",
            background: "#E8ECF7",
          }}
        >
          <div
            style={{
              width: `${campaign.progress}%`,
              height: "100%",
              borderRadius: 999,
              background: "#5B45F4",
            }}
          />
        </div>
      ) : null}

      <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
        <CampaignMetric label="Hot" value={campaign.hot} tone="hot" />
        <CampaignMetric label="Qualified" value={campaign.qualified} tone="qualified" />
      </div>
    </div>
  );
}

function DashboardSection({ onLeadClick, openCampaign }) {
  return (
    <div style={{ minHeight: "100%", width: "100%", minWidth: 0, background: "#F7F8FC" }}>
      <div style={pageStyle}>
        <header
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: 1.15,
                fontWeight: 700,
                color: C.text,
              }}
            >
              Good morning, Himanshu
            </h1>
            <div style={{ marginTop: 4, fontSize: 9, fontWeight: 500, color: C.muted }}>
              Wednesday, 20 Dec 2024&nbsp;&nbsp; 2 campaigns active
            </div>
          </div>

          <ActiveCallsPill />
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "2.2fr .95fr .95fr",
            columnGap: 10,
            rowGap: 10,
            marginTop: 24,
            minWidth: 0,
          }}
        >
          {topMetrics.map((metric) => (
            <MetricCard key={metric.key} {...metric} />
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            columnGap: 10,
            rowGap: 10,
            marginTop: 10,
            minWidth: 0,
          }}
        >
          {middleMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            columnGap: 10,
            rowGap: 10,
            marginTop: 10,
            marginBottom: 16,
            minWidth: 0,
          }}
        >
          {bottomMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 16,
            alignItems: "start",
            minWidth: 0,
          }}
        >
          <Card
            style={{
              ...sectionCardStyle,
              padding: 16,
              background: C.accentLt,
              minWidth: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: C.card,
                    color: "#5B45F4",
                  }}
                >
                  <FiZap size={14} />
                </span>
                <h2 style={{ margin: 0, fontSize: 14, fontWeight: 850, color: C.text }}>
                  Hot leads act now
                </h2>
              </div>
              <span
                style={{
                  borderRadius: 999,
                  background: C.card,
                  color: "#5B45F4",
                  border: `1px solid ${C.border}`,
                  padding: "5px 9px",
                  fontSize: 10,
                  fontWeight: 800,
                }}
              >
                2 leads
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {hotLeads.map((lead) => (
                <div
                  key={lead.name}
                  onClick={() => onLeadClick?.(lead)}
                  style={{ cursor: onLeadClick ? "pointer" : "default", width: "100%" }}
                >
                  <LeadFollowUpCard {...lead} compact />
                </div>
              ))}
            </div>
          </Card>

          <Card
            style={{
              ...sectionCardStyle,
              padding: 16,
              background: C.accentLt,
              minWidth: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: C.card,
                    color: "#5B45F4",
                  }}
                >
                  <FiActivity size={14} />
                </span>
                <h2 style={{ margin: 0, fontSize: 14, fontWeight: 850, color: C.text }}>
                  active campaigns
                </h2>
              </div>
              <button
                type="button"
                onClick={openCampaign}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  borderRadius: 999,
                  border: `1px solid ${C.border}`,
                  background: C.card,
                  color: "#5B45F4",
                  padding: "5px 9px",
                  fontSize: 10,
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                view all <FiArrowUpRight size={11} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {campaigns.map((campaign) => (
                <CampaignCard key={campaign.title} campaign={campaign} />
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default DashboardSection;
