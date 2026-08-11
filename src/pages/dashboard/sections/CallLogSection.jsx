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

// ==========================================
// Reusable CallLogDetailPanel Component
// ==========================================
export function CallLogDetailPanel({
  callOutcome = "-",
  nextAction = {
    title: "-",
    date: "-",
  },
  aiSummary = "-",
  transcript = [],
  isNoAnswer = false,
}) {
  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        background: C.card,
        padding: 20,
        boxShadow: T.shadow.none,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "35% 65%",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {/* Left Column (35%): Heading & content stacked vertically with spacing only */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          {/* Call Outcome */}


          {/* Next Action */}
          <div>
            <div
              style={{
                color: C.muted,
                fontSize: T.font.size.xs,
                fontWeight: T.font.weight.bold,
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Next Action
            </div>
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
                  height: 38,
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
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <AppIconCircle size={34} background={C.accentLt} color={C.accent}>
                  <LuCalendar size={16} />
                </AppIconCircle>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: C.text, fontSize: T.font.size.sm, fontWeight: T.font.weight.bold }}>
                    {nextAction.title}
                  </div>
                  {(nextAction.date || nextAction.subtitle) && (
                    <div style={{ marginTop: 2, color: C.muted, fontSize: T.font.size.xs }}>
                      {nextAction.date || nextAction.subtitle}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* AI Summary */}
          <div>
            <div
              style={{
                color: C.muted,
                fontSize: T.font.size.xs,
                fontWeight: T.font.weight.bold,
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              AI Summary
            </div>
            <p style={{ margin: 0, color: C.text, fontSize: T.font.size.bodySmall, lineHeight: 1.6 }}>
              {aiSummary}
            </p>
          </div>
        </div>

        {/* Right Column (65%): Inner rounded bordered transcript container */}
        <div
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: 16,
            background: C.surface,
            boxShadow: T.shadow.none,
            height: 480,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, borderBottom: `1px solid ${C.borderLt}`, paddingBottom: 12 }}>
            <LuMessageSquare size={16} color={C.accent} />
            <span style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#374151" }}>
              Transcript
            </span>
          </div>

          <div style={{ flex: 1, minHeight: 0, overflowY: "auto", display: "flex", flexDirection: "column", gap: 14, paddingRight: 4 }}>
            {transcript?.length ? (
              transcript.map((message, index) => {
                const sUpper = (message.sender || "").toUpperCase();
                const isAI = sUpper.includes("AI") || sUpper === "ASSISTANT" || sUpper === "BOT";
                const displayTag = isAI ? "AI" : "USER";

                return (
                  <div key={`${message.sender}-${index}`} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
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
                          background: C.card,
                          border: `1px solid ${C.borderLt}`,
                          borderRadius: T.radius.md,
                          padding: "10px 12px",
                          color: C.text,
                          fontSize: T.font.size.bodySmall,
                          lineHeight: 1.45,
                        }}
                      >
                        {message.message}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: C.muted, fontSize: T.font.size.bodySmall }}>
                No transcript available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

CallLogDetailPanel.propTypes = {
  callOutcome: PropTypes.string,
  nextAction: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  aiSummary: PropTypes.string,
  transcript: PropTypes.array,
  isNoAnswer: PropTypes.bool,
};

// ==========================================
// Full CallLogSection Page Component
// ==========================================
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

const completedCallDetails = {
  outcome: "Connected And Had A Productive Conversation. Decision Maker Identified.",
  nextAction: {
    title: "Confirm Site Visit",
    date: "Dec 23th, Saturday 11 AM",
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
      sender: "Customer",
      time: "10:16 AM",
      text: "Yes, it was actually quite interesting. We are currently looking into automating some of our SDR workflows.",
    },
    {
      sender: "AI Agent",
      time: "10:17 AM",
      text: "That's exactly what we specialize in. Are you currently facing challenges with your team's outreach volume?",
    },
    {
      sender: "Customer",
      time: "10:18 AM",
      text: "Mainly it's about consistency and getting enough coverage on our Tier 2 accounts.",
    },
  ],
};

const noAnswerCallDetails = {
  outcome: "Call went to voicemail.",
  nextAction: {
    title: "Try again tomorrow",
    date: "",
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

function CallLogSection({
  callOutcome,
  nextAction,
  aiSummary,
  transcript,
  data,
}) {
  if (!data) return null;
  const [activeFilterTab, setActiveFilterTab] = useState("initial");
  const [selectedCallId, setSelectedCallId] = useState(fallbackCalls[0].id);

  // If props are passed directly for a standalone detail panel view
  if (callOutcome !== undefined) {
    return (
      <CallLogDetailPanel
        callOutcome={callOutcome}
        nextAction={nextAction}
        aiSummary={aiSummary}
        transcript={transcript}
      />
    );
  }

  const metrics = data?.metrics || {};
  const calls = data?.activity;
  console.log(calls);
  const filteredCalls = calls;
  const selectedCall = calls.find((c) =>
    c.calls?.some(
      (call) => String(call.retry_id) === String(selectedCallId)
    )
  ) || filteredCalls[0] || calls[0];

  console.log(metrics);
  const statistics = [
    { title: "Calls", value: metrics.total_calls_today || 94, icon: LuPhone },
    { title: "Pick Up Rate", value: `${metrics.pickup_rate_percent}%`, icon: LuPhone },
    {
      title: "Avg Duration",
      value: formatDuration(metrics.avg_call_duration_seconds),
      icon: LuPhone,
    },
  ];

  const filterTabs = [
    { id: "initial", label: "Initial Call" },
    //{ id: "discovery", label: "Discovery Call" },
    //{ id: "followup", label: "Follow-Up" },
  ];

  const details = selectedCall?.calls[0].output || {};
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

        {/* Main Content Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30% 70%",
            gap: 18,
            alignItems: "start",
          }}
        >
          {/* Left Column: Call Cards List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxHeight: 520,
              overflowY: "auto",
              paddingRight: 4,
            }}
          >
            {(filteredCalls.length ? filteredCalls : calls).map((call) => (
              <CallCard
                key={call.calls[0].retry_id}
                call={call}
                isSelected={selectedCall?.calls[0].retry_id === call.calls[0].retry_id}
                onSelect={() => setSelectedCallId(call.calls[0].retry_id)}
              />
            ))}
          </div>

          {/* Right Area: Single Outer Rounded Parent Container enclosing Left Panel & Transcript Panel */}
          <CallLogDetailPanel
            callOutcome={details.outcome}
            nextAction={{ title: details.next_action, date: details.follow_up_date || "" }}
            aiSummary={details.ai_generated_call_summary}
            transcript={details.messages}
            isNoAnswer={isNoAnswer}
          />
        </div>
      </PageSection>
    </div>
  );
}

CallLogSection.propTypes = {
  callOutcome: PropTypes.string,
  nextAction: PropTypes.object,
  aiSummary: PropTypes.string,
  transcript: PropTypes.array,
  data: PropTypes.object,
};

export default CallLogSection;
