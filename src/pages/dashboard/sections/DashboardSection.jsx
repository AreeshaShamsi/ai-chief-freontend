import React from "react";
import {
  FiBarChart2,
  FiCheck,
  FiMic,
  FiPhoneCall,
  FiX,
  FiZap,
} from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { LeadFollowUpCard } from "../../../components/cards";
import {
  AppButton,
  AppCard,
  AppIconCircle,
  AppPill,
  C,
  MetricCard as AppMetricCard,
  ProgressBar,
  T,
} from "../../../components/utils";

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
    icon: <span style={{ fontSize: 14, fontWeight: 800, color: C.accentStrong }}>₹</span>,
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
    iconColor: C.hot,
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
    iconColor: C.greenText,
  },
  {
    label: "Warm leads",
    subtitle: "needs follow up",
    value: "2",
    icon: <FiZap size={15} />,
    iconColor: C.warm,
    badge: "2",
    badgeTone: "red",
  },
  {
    label: "Junk",
    subtitle: "not interested",
    value: "2",
    icon: <FiX size={15} />,
    iconColor: C.muted,
    background: C.sectionBg,
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
  { title: "presitge decbatch", status: "running", hot: 8, qualified: 32, progress: 22 },
];

const pageStyle = {
  width: "100%",
  maxWidth: "none",
  margin: 0,
  padding: T.spacing.page,
  boxSizing: "border-box",
  background: C.pageBg,
  color: C.text,
};

const sectionCardStyle = {
  borderRadius: T.radius.section,
  border: `1px solid ${C.borderLt}`,
  boxShadow: T.shadow.none,
};

const dashboardSectionStyle = {
  width: "100%",
  height: T.layout.dashboardSectionHeight,
  minHeight: T.layout.dashboardSectionHeight,
  maxHeight: T.layout.dashboardSectionHeight,
  minWidth: 0,
  boxSizing: "border-box",
  overflow: "hidden",
  borderRadius: T.radius.section,
  padding: T.spacing.card,
  background: C.sectionBg,
  border: T.border.none,
  boxShadow: T.shadow.none,
};

const dashboardSectionHeaderStyle = {
  height: 30,
  minHeight: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
  marginBottom: 12,
};

function ActiveCallsPill() {
  return (
    <AppPill variant="neutral" dot dotColor={C.green} style={{ height: 24 }}>
      3 calls active now
    </AppPill>
  );
}

function MetricBadge({ children, tone = "green" }) {
  const isGreen = tone === "green";

  return (
    <AppPill
      variant={isGreen ? "neutral" : "danger"}
      style={{
        height: 18,
        padding: "0 8px",
        border: "none",
        background: isGreen ? C.greenBg : C.hotSoft,
        color: isGreen ? C.greenText : C.hot,
        fontSize: 8,
        fontWeight: 800,
      }}
    >
      {children}
    </AppPill>
  );
}

function DashboardMetricCard({
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
    <AppCard
      variant="metric"
      style={{
        position: "relative",
        background: isFeatured ? C.accentStrong : background || C.accentLt,
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
        <AppIconCircle color={iconColor || C.accentStrong}>{icon}</AppIconCircle>
      </div>

      {progress ? (
        <ProgressBar
          value={progress}
          height={20}
          track={C.accentTrack}
          fill={C.accentStrong}
          radius={5}
          style={{ width: "100%", marginTop: 24 }}
        />
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
    </AppCard>
  );
}

function CampaignCard({ campaign }) {
  const isLive = campaign.status === "live";

  return (
    <div
      style={{
        marginTop: 12,
        borderRadius: 16,
        background: C.card,
        padding: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.text, lineHeight: 1.2 }}>
          {campaign.title}
        </div>
        <AppPill
          variant={isLive ? "success" : "dark"}
          size="xs"
          dot
          style={{ textTransform: "lowercase", fontWeight: 600 }}
        >
          {campaign.status}
        </AppPill>
      </div>

      {campaign.progress ? (
        <ProgressBar value={campaign.progress} height={4} style={{ marginTop: 10 }} />
      ) : null}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 10,
          marginTop: 14,
        }}
      >
        <AppMetricCard
          label="Hot"
          value={campaign.hot}
          variant="hot"
          height={96}
          style={{ border: "none", borderRadius: 12, padding: 14 }}
          labelStyle={{ color: C.hot, fontSize: 10, fontWeight: 500, lineHeight: 1 }}
          valueStyle={{ color: C.hot, marginTop: 24, fontSize: 25, fontWeight: 700, lineHeight: 1 }}
        />
        <AppMetricCard
          label="Qualified"
          value={campaign.qualified}
          variant="qualified"
          height={96}
          style={{ border: "none", borderRadius: 12, padding: 14 }}
          labelStyle={{ color: C.accent, fontSize: 10, fontWeight: 500, lineHeight: 1 }}
          valueStyle={{ color: C.accent, marginTop: 24, fontSize: 25, fontWeight: 700, lineHeight: 1 }}
        />
      </div>
    </div>
  );
}

function ActiveCampaignsCard({ campaigns: campaignItems = campaigns, onViewAll }) {
  return (
    <AppCard
      variant="section"
      style={{
        ...dashboardSectionStyle,
      }}
    >
      <div style={dashboardSectionHeaderStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <AppIconCircle size={30} color={C.accent}>
            <FiBarChart2 size={14} />
          </AppIconCircle>
          <h2 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.text, lineHeight: 1.1 }}>
            active campaigns
          </h2>
        </div>
        <AppButton
          type="button"
          onClick={onViewAll}
          compact
          pill
          style={{
            height: 26,
            border: `1px solid ${C.borderMuted}`,
            background: C.card,
            color: C.text,
            padding: "0 11px",
            fontSize: 9,
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          view all
        </AppButton>
      </div>

      {campaignItems.map((campaign) => (
        <CampaignCard key={campaign.title} campaign={campaign} />
      ))}
    </AppCard>
  );
}

function DashboardSection({ onLeadClick, openCampaign }) {
  return (
    <div style={{ minHeight: "100%", width: "100%", minWidth: 0, background: C.pageBg }}>
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
            <DashboardMetricCard key={metric.key} {...metric} />
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
            <DashboardMetricCard key={metric.label} {...metric} />
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
            <DashboardMetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 16,
            alignItems: "stretch",
            minWidth: 0,
          }}
        >
          <AppCard
            variant="section"
            style={{
              ...sectionCardStyle,
              ...dashboardSectionStyle,
            }}
          >
            <div
              style={dashboardSectionHeaderStyle}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <AppIconCircle size={28} color={C.accentStrong}>
                  <FiZap size={14} />
                </AppIconCircle>
                <h2 style={{ margin: 0, fontSize: 14, fontWeight: 850, color: C.text }}>
                  Hot leads act now
                </h2>
              </div>
              <AppPill style={{ color: C.accentStrong, fontSize: 10, fontWeight: 800, height: 24 }}>
                2 leads
              </AppPill>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
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
          </AppCard>

          <ActiveCampaignsCard campaigns={campaigns} onViewAll={openCampaign} />
        </section>
      </div>
    </div>
  );
}

export default DashboardSection;
