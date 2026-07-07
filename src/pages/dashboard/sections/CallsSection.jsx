import React, { useState } from "react";
import {
  FiArchive,
  FiCalendar,
  FiCpu,
  FiEye,
  FiPhoneCall,
  FiPlus,
} from "react-icons/fi";
import {
  AppButton,
  AppCard,
  AppIconCircle,
  AppPill,
  C,
  Modal,
  T,
} from "../../../components/utils";

const completedCallDetails = {
  outcome: "Connected and had a productive conversation. Decision maker identified.",
  nextAction: {
    title: "Confirm site visit",
    subtitle: "Dec 23th , Saturday 11 AM",
  },
  aiSummary:
    "The prospect is interested in expanding their operations in Europe and is looking for a scalable solution. They have a budget of $50k-$100k and are evaluating two other competitors. Main pain point is integration with existing legacy systems.",
  transcript: [
    {
      sender: "AI Agent",
      time: "10:15 AM",
      text: "Hi Arjun, this is Alex from VoiceIQ. I noticed you recently downloaded our guide on AI-driven sales. Did you find it helpful?",
    },
    {
      sender: "Arun",
      time: "10:16 AM",
      text: "Yes, it was actually quite interesting. We are currently looking into automating some of our SDR workflows.",
    },
    {
      sender: "AI Agent",
      time: "10:17 AM",
      text: "That's exactly what we specialize in. Are you currently facing challenges with your team's outreach volume?",
    },
    {
      sender: "Arun",
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

const fallbackRows = [
  {
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    callType: "qualified",
    time: "today 10:15 AM",
    score: "hot",
    duration: "3:42",
    status: "completed",
    details: completedCallDetails,
  },
  {
    name: "Ananya Rao",
    phone: "+91 87654 32109",
    callType: "property enquiry",
    time: "today 10:52 AM",
    score: "qualified",
    duration: "2:18",
    status: "completed",
    details: completedCallDetails,
  },
  {
    name: "Rohan Mehta",
    phone: "+91 76543 21098",
    callType: "cold call",
    time: "today 11:07 AM",
    score: "cold",
    duration: "0:42",
    status: "no answer",
    details: noAnswerCallDetails,
  },
  {
    name: "Kavya Nair",
    phone: "+91 65432 10987",
    callType: "property enquiry",
    time: "today 11:35 AM",
    score: "hot",
    duration: "4:08",
    status: "completed",
    details: completedCallDetails,
  },
  {
    name: "Vikram Singh",
    phone: "+91 54321 09876",
    callType: "qualified",
    time: "today 12:12 PM",
    score: "qualified",
    duration: "2:54",
    status: "completed",
    details: completedCallDetails,
  },
  {
    name: "Priya Menon",
    phone: "+91 43210 98765",
    callType: "cold call",
    time: "today 01:05 PM",
    score: "cold",
    duration: "0:00",
    status: "no answer",
    details: noAnswerCallDetails,
  },
];

function formatDuration(seconds = 0) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function normalizeLabel(value = "") {
  return String(value).replace(/_/g, " ").toLowerCase();
}

function rowsFromActivity(activity = []) {
  return activity
    .map((lead) => {
      const latestCall = lead.calls?.[0];
      if (!latestCall) return null;

      return {
        name: lead.name || "Unknown lead",
        phone: lead.phone || "No phone",
        callType: normalizeLabel(latestCall.lead_type || latestCall.call_type || "property enquiry"),
        time: latestCall.date_time_of_call
          ? new Date(latestCall.date_time_of_call).toLocaleString([], {
              day: "2-digit",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            }).toLowerCase()
          : "no calls",
        score: normalizeLabel(latestCall.score || latestCall.lead_score || "qualified"),
        duration: latestCall.duration_seconds
          ? formatDuration(latestCall.duration_seconds)
          : latestCall.duration || "0:00",
        status: normalizeLabel(latestCall.status || "completed"),
        details: {
          ...(normalizeLabel(latestCall.status || "completed") === "no answer"
            ? noAnswerCallDetails
            : completedCallDetails),
          outcome:
            latestCall.call_outcome ||
            (normalizeLabel(latestCall.status || "completed") === "no answer"
              ? noAnswerCallDetails.outcome
              : completedCallDetails.outcome),
          aiSummary:
            latestCall.ai_generated_call_summary ||
            (normalizeLabel(latestCall.status || "completed") === "no answer"
              ? noAnswerCallDetails.aiSummary
              : completedCallDetails.aiSummary),
          transcript:
            latestCall.messages?.length
              ? latestCall.messages.map((message, index) => ({
                  sender: message.sender === "ai" ? "AI Agent" : "Arun",
                  time: latestCall.date_time_of_call
                    ? new Date(latestCall.date_time_of_call).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : `10:${15 + index} AM`,
                  text: message.message,
                }))
              : normalizeLabel(latestCall.status || "completed") === "no answer"
                ? []
                : completedCallDetails.transcript,
        },
      };
    })
    .filter(Boolean);
}

function DetailLabel({ children }) {
  return (
    <div
      style={{
        color: C.muted,
        fontSize: T.font.size.sm,
        fontWeight: T.font.weight.semibold,
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}

function InfoPanel({ children, style }) {
  return (
    <AppCard
      variant="compact"
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: T.radius.card,
        padding: 14,
        boxShadow: T.shadow.none,
        ...style,
      }}
    >
      {children}
    </AppCard>
  );
}

function ChatMessage({ message }) {
  const isAI = message.sender === "AI Agent";

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <AppIconCircle
        size={26}
        background={isAI ? C.accentLt : C.borderMuted}
        color={isAI ? C.accent : C.muted}
      >
        {isAI ? <FiCpu size={13} /> : <span style={{ fontSize: T.font.size.caption, fontWeight: T.font.weight.bold }}>A</span>}
      </AppIconCircle>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
          <span style={{ color: C.text, fontSize: T.font.size.xs, fontWeight: T.font.weight.bold }}>
            {message.sender}
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
            padding: "9px 11px",
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

function CallDetailsModal({ call, onClose }) {
  const isNoAnswer = call.status === "no answer";
  const details = call.details || (isNoAnswer ? noAnswerCallDetails : completedCallDetails);

  return (
    <Modal
      width={940}
      onClose={onClose}
      style={{
        borderRadius: 24,
        padding: 24,
        boxShadow: T.shadow.none,
        border: `1px solid ${C.borderLt}`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "380px minmax(0, 1fr)",
          gap: 40,
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <section>
            <DetailLabel>Call Outcome</DetailLabel>
            <p
              style={{
                margin: 0,
                color: C.text,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.medium,
                lineHeight: 1.55,
              }}
            >
              {details.outcome}
            </p>
          </section>

          <section style={{ marginTop: 14 }}>
            <DetailLabel>Next Action</DetailLabel>
            {isNoAnswer ? (
              <AppButton
                compact
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: C.warmText,
                  border: `1px solid ${C.warmBdr}`,
                  background: C.warmBg,
                  height: 40,
                  padding: "0 16px",
                  borderRadius: 9,
                  fontSize: T.font.size.cardTitle,
                  fontWeight: T.font.weight.medium,
                  boxShadow: T.shadow.none,
                }}
              >
                <FiPlus size={18} color={C.warmText} />
                Try again tomorrow
              </AppButton>
            ) : (
              <InfoPanel style={{ background: C.card }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 13 }}>
                  <AppIconCircle size={34} background={C.accentLt} color={C.accent}>
                    <FiCalendar size={16} />
                  </AppIconCircle>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: C.text, fontSize: T.font.size.sm, fontWeight: T.font.weight.bold }}>
                      {details.nextAction.title}
                    </div>
                    <div style={{ marginTop: 3, color: C.muted, fontSize: T.font.size.xs }}>
                      {details.nextAction.subtitle}
                    </div>
                  </div>
                </div>
                <AppButton variant="primary" style={{ width: "100%", height: 34, fontSize: T.font.size.bodySmall }}>
                  add to calender
                </AppButton>
              </InfoPanel>
            )}
          </section>

          <section style={{ marginTop: 18 }}>
            <DetailLabel>AI Summary</DetailLabel>
            <InfoPanel
              style={{
                borderRadius: 18,
                padding: "16px 18px",
                background: C.surface,
                border: `1px solid ${C.border}`,
              }}
            >
              <p style={{ margin: 0, color: C.text, fontSize: T.font.size.bodySmall, lineHeight: 1.55 }}>
                {details.aiSummary}
              </p>
            </InfoPanel>
          </section>
        </div>

        <section>
          <DetailLabel>Transcript</DetailLabel>
          <div
            style={{
              height: 390,
              background: C.sectionBg,
              border: `1px solid ${C.border}`,
              borderRadius: T.radius.card,
              padding: 16,
              boxSizing: "border-box",
              overflowY: "auto",
            }}
          >
            {details.transcript?.length ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {details.transcript.map((message, index) => (
                  <ChatMessage key={`${message.sender}-${index}`} message={message} />
                ))}
              </div>
            ) : (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.muted,
                  gap: 8,
                }}
              >
                <FiArchive size={28} color={C.subtle} />
                <div style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.medium }}>
                  No transcript available
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Modal>
  );
}

function StatCard({ label, value }) {
  return (
    <AppCard
      variant="compact"
      style={{
        minHeight: 112,
        background: C.sectionBg,
        border: `1px solid ${C.border}`,
        borderRadius: T.radius.section,
        padding: "18px 20px",
        position: "relative",
      }}
    >
      <div style={{ color: C.muted, fontSize: T.font.size.sm, fontWeight: T.font.weight.bold, lineHeight: 1 }}>
        {label}
      </div>
      <div style={{ color: C.text, fontSize: 34, fontWeight: T.font.weight.extraBold, lineHeight: 1, marginTop: 20 }}>
        {value}
      </div>
      <AppIconCircle
        size={30}
        background={C.card}
        color={C.text}
        style={{ position: "absolute", right: 18, top: 18 }}
      >
        <FiPhoneCall size={14} />
      </AppIconCircle>
    </AppCard>
  );
}

function CallBadge({ type, children }) {
  const variants = {
    qualified: {
      background: C.greenSoft,
      color: C.greenText,
      border: C.greenBdr,
      dot: C.green,
    },
    "property enquiry": {
      background: C.accentLt,
      color: C.accent,
      border: C.accentTrack,
      dot: C.accent,
    },
    "cold call": {
      background: C.warmBg,
      color: C.warm,
      border: C.warmBdr,
      dot: C.warm,
    },
    hot: {
      background: C.hotBg,
      color: C.hot,
      border: C.hotBdr,
      dot: C.hot,
    },
    cold: {
      background: C.surface,
      color: C.muted,
      border: C.border,
      dot: C.muted,
    },
    completed: {
      background: C.accentLt,
      color: C.accent,
      border: C.accentTrack,
      dot: C.accent,
    },
    "no answer": {
      background: C.hotBg,
      color: C.hot,
      border: C.hotBdr,
      dot: C.hot,
    },
  };
  const tone = variants[type] || variants.cold;

  return (
    <AppPill
      dot
      size="xs"
      dotColor={tone.dot}
      style={{
        height: 22,
        padding: "0 9px",
        background: tone.background,
        color: tone.color,
        border: `1px solid ${tone.border}`,
        fontSize: T.font.size.caption,
        fontWeight: T.font.weight.semibold,
        textTransform: "lowercase",
      }}
    >
      {children}
    </AppPill>
  );
}

function CallsSection({ data }) {
  const [selectedCall, setSelectedCall] = useState(null);
  const metrics = data?.metrics || {};
  const apiRows = rowsFromActivity(data?.activity || []);
  const rows = apiRows.length ? apiRows : fallbackRows;

  const stats = [
    { label: "call today", value: metrics.total_calls_today || 94 },
    { label: "pick up rate", value: `${metrics.pickup_rate_percent || 74}%` },
    {
      label: "avg duration",
      value: metrics.avg_call_duration_seconds
        ? formatDuration(metrics.avg_call_duration_seconds)
        : "2:34",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        minWidth: 0,
        background: C.pageBg,
        padding: T.spacing.page,
        boxSizing: "border-box",
        color: C.text,
      }}
    >
      <header style={{ marginBottom: 18 }}>
        <h1
          style={{
            margin: 0,
            color: C.text,
            fontSize: T.font.size.pageTitle,
            fontWeight: T.font.weight.extraBold,
            lineHeight: 1.1,
          }}
        >
          Call log
        </h1>
        <div style={{ marginTop: 4, color: C.muted, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
          all calls with AI summaries , outcomes , and next actions
        </div>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 14,
          marginBottom: 18,
        }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <AppCard
        variant="compact"
        style={{
          padding: 0,
          overflow: "hidden",
          borderRadius: T.radius.section,
          border: `1px solid ${C.border}`,
          boxShadow: T.shadow.none,
          background: C.card,
        }}
      >
        <div style={{ overflowX: "auto", width: "100%" }}>
          <table
            style={{
              width: "100%",
              minWidth: 820,
              borderCollapse: "separate",
              borderSpacing: 0,
              color: C.text,
            }}
          >
            <thead>
              <tr style={{ background: C.accentLt }}>
                {["name", "call type", "time", "score", "duration", "status", "view"].map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    style={{
                      padding: "12px 16px",
                      color: C.muted,
                      fontSize: T.font.size.xs,
                      fontWeight: T.font.weight.bold,
                      textAlign: heading === "duration" || heading === "view" ? "center" : "left",
                      textTransform: "lowercase",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.name}-${row.time}`}>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}` }}>
                    <div style={{ fontSize: T.font.size.sm, fontWeight: T.font.weight.bold, color: C.text, lineHeight: 1.2 }}>
                      {row.name}
                    </div>
                    <div style={{ marginTop: 4, fontSize: T.font.size.xs, color: C.muted, lineHeight: 1 }}>
                      {row.phone}
                    </div>
                  </td>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}` }}>
                    <CallBadge type={row.callType}>{row.callType}</CallBadge>
                  </td>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}`, color: C.muted, fontSize: T.font.size.xs, whiteSpace: "nowrap" }}>
                    {row.time}
                  </td>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}` }}>
                    <CallBadge type={row.score}>{row.score}</CallBadge>
                  </td>
                  <td style={{ padding: "11px 16px", borderBottom: `1px solid ${C.borderLt}`, textAlign: "center" }}>
                    <div style={{ color: C.text, fontSize: T.font.size.sm, fontWeight: T.font.weight.bold, lineHeight: 1.1 }}>
                      {row.duration}
                    </div>
                    <div style={{ marginTop: 3, color: C.muted, fontSize: T.font.size.caption, lineHeight: 1 }}>
                      duration
                    </div>
                  </td>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}` }}>
                    <CallBadge type={row.status}>{row.status}</CallBadge>
                  </td>
                  <td style={{ padding: "10px 16px", borderBottom: `1px solid ${C.borderLt}`, textAlign: "center" }}>
                    <button
                      type="button"
                      aria-label={`View call details for ${row.name}`}
                      onClick={() => setSelectedCall(row)}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: T.radius.circle,
                        border: `1px solid ${C.borderLt}`,
                        background: C.surface,
                        color: C.text,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <FiEye size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppCard>

      {selectedCall ? (
        <CallDetailsModal call={selectedCall} onClose={() => setSelectedCall(null)} />
      ) : null}
    </div>
  );
}

export default CallsSection;
