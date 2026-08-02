import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  LuCalendar,
  LuCircleCheck,
  LuClock3,
  LuMessageSquare,
  LuPhone,
  LuPlus,
  LuUser,
} from "react-icons/lu";
import { AppButton, AppCard, AppIconCircle, C, T, Text } from "../../../components/utils";
import { CallCard } from "../../../components/cards";
import SegmentedControl from "../../../components/design-system/SegmentedControl";

// ==========================
// Statistics Card Component
// ==========================
function CallStatisticCard({ title, value, icon: Icon }) {
  return (
    <AppCard
      variant="compact"
      style={{
        height: 104,
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: T.radius.section,
        padding: "18px 20px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: T.shadow.none,
      }}
    >
      <div style={{ color: C.muted, fontSize: T.font.size.sm, fontWeight: T.font.weight.bold, lineHeight: 1 }}>
        {title}
      </div>
      <div style={{ color: C.text, fontSize: 32, fontWeight: T.font.weight.extraBold, lineHeight: 1, marginTop: 12 }}>
        {value}
      </div>
      {Icon && (
        <AppIconCircle
          size={32}
          background={C.accentLt}
          color={C.accent}
          style={{ position: "absolute", right: 18, top: 18 }}
        >
          <Icon size={16} />
        </AppIconCircle>
      )}
    </AppCard>
  );
}

CallStatisticCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType,
};

// ==========================
// Transcript Bubble Component
// ==========================
function TranscriptBubble({ message }) {
  const sUpper = (message.sender || "").toUpperCase();
  const isAI = sUpper.includes("AI") || sUpper === "ASSISTANT" || sUpper === "BOT";
  const displayTag = isAI ? "AI" : "USER";

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <AppIconCircle
        size={28}
        background={isAI ? C.accentLt : C.borderMuted}
        color={isAI ? C.accent : C.muted}
      >
        {isAI ? <LuMessageSquare size={13} /> : <LuUser size={13} />}
      </AppIconCircle>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{ color: C.text, fontSize: T.font.size.xs, fontWeight: T.font.weight.bold }}>
            {displayTag}
          </span>
          <span style={{ color: C.muted, fontSize: T.font.size.caption }}>
            {message.time}
          </span>
        </div>
        <div
          style={{
            background: isAI ? C.card : C.surface,
            border: `1px solid ${C.borderLt}`,
            borderRadius: T.radius.md,
            padding: "10px 12px",
            color: C.text,
            fontSize: T.font.size.bodySmall,
            lineHeight: 1.45,
          }}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
}

TranscriptBubble.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

// ==========================
// Mock Data
// ==========================
const completedCallDetails = {
  outcome: "Connected And Had A Productive Conversation. Decision Maker Identified.",
  nextAction: {
    title: "Confirm Site Visit",
    subtitle: "Dec 23th, Saturday 11 AM",
  },
  aiSummary:
    "The prospect is interested in expanding their operations in Europe and is looking for a scalable solution. They have a budget of $50k-$100k and are evaluating two other competitors. Main pain point is integration with existing legacy systems.",
  transcript: [
    {
      sender: "AI Agent",
      time: "10:15 AM",
      text: "Hi Arjun, this is Alex from AI Chief. I noticed you recently downloaded our guide on AI-driven sales. Did you find it helpful?",
    },
    {
      sender: "Arjun",
      time: "10:16 AM",
      text: "Yes, it was actually quite interesting. We are currently looking into automating some of our SDR workflows.",
    },
    {
      sender: "AI Agent",
      time: "10:17 AM",
      text: "That's exactly what we specialize in. Are you currently facing challenges with your team's outreach volume?",
    },
    {
      sender: "Arjun",
      time: "10:18 AM",
      text: "Mainly it's about consistency and getting enough coverage on our Tier 2 accounts.",
    },
  ],
};

const noAnswerCallDetails = {
  outcome: "Call went to voicemail.",
  nextAction: {
    title: "Try again tomorrow",
  },
  aiSummary:
    "No answer. AI Agent left a personalized voicemail mentioning the recent whitepaper download.",
  transcript: [],
};

const fallbackCalls = [
  {
    id: "call-1",
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    callType: "Cold Call",
    filterTab: "initial",
    time: "Today 10:15 AM",
    score: "hot",
    duration: "3:42",
    status: "completed",
    details: completedCallDetails,
  },
  {
    id: "call-2",
    name: "Ananya Rao",
    phone: "+91 87654 32109",
    callType: "Discovery Call",
    filterTab: "discovery",
    time: "Today 10:52 AM",
    score: "qualified",
    duration: "2:18",
    status: "completed",
    details: completedCallDetails,
  },
  {
    id: "call-3",
    name: "Rohan Mehta",
    phone: "+91 76543 21098",
    callType: "Follow-Up",
    filterTab: "followup",
    time: "Today 11:07 AM",
    score: "cold",
    duration: "0:42",
    status: "no answer",
    details: noAnswerCallDetails,
  },
  {
    id: "call-4",
    name: "Kavya Nair",
    phone: "+91 65432 10987",
    callType: "Initial Call",
    filterTab: "initial",
    time: "Today 11:35 AM",
    score: "hot",
    duration: "4:08",
    status: "completed",
    details: completedCallDetails,
  },
  {
    id: "call-5",
    name: "Vikram Singh",
    phone: "+91 54321 09876",
    callType: "Discovery Call",
    filterTab: "discovery",
    time: "Today 12:12 PM",
    score: "qualified",
    duration: "2:54",
    status: "completed",
    details: completedCallDetails,
  },
];

function formatDuration(seconds = 0) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function PageSection({ children, style }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

PageSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

function CallsSection({ data }) {
  const [activeFilterTab, setActiveFilterTab] = useState("initial");
  const [selectedCallId, setSelectedCallId] = useState(fallbackCalls[0].id);

  const metrics = data?.metrics || {};
  const calls = fallbackCalls;

  const filteredCalls = calls.filter((c) => c.filterTab === activeFilterTab);
  const selectedCall = calls.find((c) => c.id === selectedCallId) || filteredCalls[0] || calls[0];

  const statistics = [
    { title: "Call Today", value: metrics.total_calls_today || 94, icon: LuPhone },
    { title: "Pick Up Rate", value: `${metrics.pickup_rate_percent || 74}%`, icon: LuPhone },
    {
      title: "Avg Duration",
      value: metrics.avg_call_duration_seconds
        ? formatDuration(metrics.avg_call_duration_seconds)
        : "2:34",
      icon: LuPhone,
    },
  ];

  const filterTabs = [
    { id: "initial", label: "Initial Call" },
    { id: "discovery", label: "Discovery Call" },
    { id: "followup", label: "Follow-Up" },
  ];

  const details = selectedCall?.details || {};
  const isNoAnswer = selectedCall?.status === "no answer";

  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        minWidth: 0,
        background: C.backgroundPrimary,
        padding: T.spacing.page,
        boxSizing: "border-box",
        color: C.text,
      }}
    >
      <PageSection>
        {/* Header */}
        <header style={{ marginBottom: 18 }}>
          <Text as="h1" variant="pageTitle" style={{ margin: 0 }}>
            Call Log
          </Text>
          <Text as="div" variant="subtitle" style={{ marginTop: 5 }}>
            All Calls With AI Summaries, Outcomes, And Next Actions
          </Text>
        </header>

        {/* 3 Equal-Width Statistics Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginBottom: 18,
          }}
        >
          {statistics.map((stat) => (
            <CallStatisticCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Segmented Control Stage Selector */}
        <div style={{ marginBottom: 18 }}>
          <SegmentedControl
            options={filterTabs}
            value={activeFilterTab}
            onChange={setActiveFilterTab}
            ariaLabel="Call stage filter"
          />
        </div>

        {/* Three Column Content Layout: Left (30%), Middle (30%), Right (40%) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30% 30% 40%",
            gap: 18,
            alignItems: "start",
          }}
        >
          {/* Left Column — Conversation Cards (Scrollable) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxHeight: 560,
              overflowY: "auto",
              paddingRight: 4,
            }}
          >
            {(filteredCalls.length ? filteredCalls : calls).map((call) => (
              <CallCard
                key={call.id}
                call={call}
                isSelected={selectedCall?.id === call.id}
                onSelect={() => setSelectedCallId(call.id)}
              />
            ))}
          </div>

          {/* Middle Column — Three Stacked Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
            {/* Section 1: Call Outcome */}
            <div>
              <Text variant="label" style={{ fontSize: T.font.size.xs, fontWeight: T.font.weight.bold, color: C.muted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8, display: "block" }}>
                Call Outcome
              </Text>
              <AppCard
                variant="compact"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: T.radius.card,
                  padding: "16px",
                  boxShadow: T.shadow.none,
                }}
              >
                <p style={{ margin: 0, color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.medium, lineHeight: 1.55 }}>
                  {details.outcome || "Connected And Had A Productive Conversation. Decision Maker Identified."}
                </p>
              </AppCard>
            </div>

            {/* Section 2: Next Action */}
            <div>
              <Text variant="label" style={{ fontSize: T.font.size.xs, fontWeight: T.font.weight.bold, color: C.muted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8, display: "block" }}>
                Next Action
              </Text>
              {isNoAnswer ? (
                <AppButton
                  compact
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: C.warmText,
                    border: `1px solid ${C.warmBdr}`,
                    background: C.warmBg,
                    height: 40,
                    padding: "0 16px",
                    borderRadius: T.radius.sm,
                    fontSize: T.font.size.bodySmall,
                    fontWeight: T.font.weight.medium,
                    boxShadow: T.shadow.none,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <LuPlus size={16} color={C.warmText} />
                  Try again tomorrow
                </AppButton>
              ) : (
                <AppCard
                  variant="compact"
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: T.radius.card,
                    padding: "16px",
                    boxShadow: T.shadow.none,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <AppIconCircle size={34} background={C.accentLt} color={C.accent}>
                      <LuCalendar size={16} />
                    </AppIconCircle>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: C.text, fontSize: T.font.size.sm, fontWeight: T.font.weight.bold }}>
                        {details.nextAction?.title || "Confirm Site Visit"}
                      </div>
                      <div style={{ marginTop: 3, color: C.muted, fontSize: T.font.size.xs }}>
                        {details.nextAction?.subtitle || "Dec 23th, Saturday 11 AM"}
                      </div>
                    </div>
                  </div>
                </AppCard>
              )}
            </div>

            {/* Section 3: AI Summary */}
            <div style={{ flex: 1 }}>
              <Text variant="label" style={{ fontSize: T.font.size.xs, fontWeight: T.font.weight.bold, color: C.muted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8, display: "block" }}>
                AI Summary
              </Text>
              <AppCard
                variant="compact"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: T.radius.card,
                  padding: "16px",
                  boxShadow: T.shadow.none,
                }}
              >
                <p style={{ margin: 0, color: C.text, fontSize: T.font.size.bodySmall, lineHeight: 1.6 }}>
                  {details.aiSummary || "No AI summary available."}
                </p>
              </AppCard>
            </div>
          </div>

          {/* Right Column — Transcript (Scrollable) */}
          <AppCard
            variant="compact"
            style={{
              height: 560,
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: T.radius.card,
              padding: 18,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              boxShadow: T.shadow.none,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, borderBottom: `1px solid ${C.borderLt}`, paddingBottom: 12 }}>
              <LuMessageSquare size={16} color={C.accent} />
              <Text variant="cardTitle" style={{ margin: 0, fontSize: T.font.size.sm, fontWeight: T.font.weight.bold, color: C.text }}>
                Transcript
              </Text>
            </div>

            <div style={{ flex: 1, minHeight: 0, overflowY: "auto", display: "flex", flexDirection: "column", gap: 14, paddingRight: 4 }}>
              {selectedCall?.details?.transcript?.length ? (
                selectedCall.details.transcript.map((message, index) => (
                  <TranscriptBubble key={`${message.sender}-${index}`} message={message} />
                ))
              ) : (
                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: C.muted, fontSize: T.font.size.bodySmall }}>
                  No transcript available
                </div>
              )}
            </div>
          </AppCard>
        </div>
      </PageSection>
    </div>
  );
}

CallsSection.propTypes = {
  data: PropTypes.object,
};

export default CallsSection;
