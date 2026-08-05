import { useState } from "react";
import PropTypes from "prop-types";
import {
  FiX,
  FiFileText,
  FiMessageSquare,
  FiClock,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { LuUser, LuBot } from "react-icons/lu";
import { AppButton, AppIconCircle, C, Modal, T, Text } from "../../../components/utils";

// ─────────────────────────────────────────
// Small tab bar component
// ─────────────────────────────────────────
function TabBar({ tabs, active, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: `1px solid ${C.border}`,
        background: C.card,
        padding: "0 20px",
        gap: 4,
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px 14px",
              fontSize: T.font.size.bodySmall,
              fontWeight: isActive ? T.font.weight.bold : T.font.weight.medium,
              color: isActive ? C.accent : C.muted,
              borderBottom: isActive ? `2px solid ${C.accent}` : "2px solid transparent",
              marginBottom: -1,
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.15s ease",
              whiteSpace: "nowrap",
            }}
          >
            <tab.Icon size={13} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      Icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// ─────────────────────────────────────────
// Call Summary Tab
// ─────────────────────────────────────────
function CallSummaryTab({ summary }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {
      // silently ignore
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Copy button row */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "12px 20px 0",
        }}
      >
        {summary && (
          <AppButton
            compact
            variant="outline"
            onClick={handleCopy}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: T.font.size.caption,
            }}
          >
            {copied ? (
              <>
                <FiCheck size={12} style={{ color: C.green || "#10B981" }} />
                <span style={{ color: C.green || "#10B981" }}>Copied!</span>
              </>
            ) : (
              <>
                <FiCopy size={12} />
                Copy
              </>
            )}
          </AppButton>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "12px 20px 20px",
        }}
      >
        {summary ? (
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: T.radius.md,
              padding: "16px 18px",
              fontSize: T.font.size.body,
              lineHeight: 1.7,
              color: C.text,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {summary}
          </div>
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: C.muted,
              fontSize: T.font.size.bodySmall,
              fontStyle: "italic",
            }}
          >
            No AI call summary available for this record.
          </div>
        )}
      </div>
    </div>
  );
}

CallSummaryTab.propTypes = {
  summary: PropTypes.string,
};

// ─────────────────────────────────────────
// AI Transcript Tab
// ─────────────────────────────────────────
function TranscriptMessage({ sender, time, message }) {
  const isAI =
    (sender || "").toUpperCase().includes("AI") ||
    (sender || "").toUpperCase() === "BOT" ||
    (sender || "").toUpperCase() === "ASSISTANT";

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <AppIconCircle
        size={30}
        background={isAI ? C.accentLt : C.borderMuted || C.border}
        color={isAI ? C.accent : C.muted}
      >
        {isAI ? <LuBot size={14} /> : <LuUser size={14} />}
      </AppIconCircle>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span
            style={{
              color: C.text,
              fontSize: T.font.size.xs,
              fontWeight: T.font.weight.bold,
            }}
          >
            {isAI ? "AI Agent" : "Contact"}
          </span>
          {time && (
            <span style={{ color: C.muted, fontSize: T.font.size.caption }}>
              {time}
            </span>
          )}
        </div>
        <div
          style={{
            background: isAI ? C.accentLt : C.surface,
            border: `1px solid ${isAI ? C.accent + "33" : C.border}`,
            borderRadius: T.radius.md,
            padding: "10px 13px",
            color: C.text,
            fontSize: T.font.size.bodySmall,
            lineHeight: 1.5,
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}

TranscriptMessage.propTypes = {
  sender: PropTypes.string,
  time: PropTypes.string,
  message: PropTypes.string,
};

function AiTranscriptTab({ transcript }) {
  if (!transcript || transcript.length === 0) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.muted,
          fontSize: T.font.size.bodySmall,
          fontStyle: "italic",
          padding: 20,
        }}
      >
        No transcript available for this call.
      </div>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {transcript.map((msg, idx) => (
        <TranscriptMessage
          key={idx}
          sender={msg.sender}
          time={msg.time}
          message={msg.message}
        />
      ))}
    </div>
  );
}

AiTranscriptTab.propTypes = {
  transcript: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      time: PropTypes.string,
      message: PropTypes.string,
    })
  ),
};

// ─────────────────────────────────────────
// Call History Tab
// ─────────────────────────────────────────
const CALL_OUTCOME_COLORS = {
  hot: { bg: "#FEF3C7", text: "#D97706", border: "#FDE68A" },
  qualified: { bg: "#DBEAFE", text: "#1D4ED8", border: "#BFDBFE" },
  warm: { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
  cold: { bg: "#F1F5F9", text: "#64748B", border: "#E2E8F0" },
  junk: { bg: "#F1F5F9", text: "#94A3B8", border: "#E2E8F0" },
};

function HistoryCallCard({ call, index }) {
  const scoreColors = CALL_OUTCOME_COLORS[call.score] || CALL_OUTCOME_COLORS.cold;

  console.log(call);
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: T.radius.md,
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* Row 1: Call # | Date | Score pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              background: C.accentLt,
              color: C.accent,
              borderRadius: 99,
              padding: "2px 9px",
              fontSize: T.font.size.caption,
              fontWeight: T.font.weight.bold,
            }}
          >
            Call #{index + 1}
          </span>
          {call.date_time_of_call && (
            <span
              style={{
                color: C.muted,
                fontSize: T.font.size.caption,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FiClock size={11} />
              {new Date(call.date_time_of_call).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          )}
        </div>
        {call.score && (
          <span
            style={{
              background: scoreColors.bg,
              color: scoreColors.text,
              border: `1px solid ${scoreColors.border}`,
              borderRadius: 99,
              padding: "2px 10px",
              fontSize: T.font.size.caption,
              fontWeight: T.font.weight.bold,
              textTransform: "capitalize",
            }}
          >
            {call.lead_status}
          </span>
        )}
      </div>

      {/* Row 2: Outcome */}
      {call.callOutcome && (
        <div>
          <span
            style={{
              color: C.muted,
              fontSize: T.font.size.xs,
              fontWeight: T.font.weight.bold,
              textTransform: "uppercase",
              letterSpacing: 0.4,
            }}
          >
            Outcome
          </span>
          <p
            style={{
              margin: "4px 0 0",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              lineHeight: 1.5,
            }}
          >
            {call.callOutcome}
          </p>
        </div>
      )}

      {/* Row 3: AI Summary */}
      {call.ai_generated_call_summary && (
        <div>
          <span
            style={{
              color: C.muted,
              fontSize: T.font.size.xs,
              fontWeight: T.font.weight.bold,
              textTransform: "uppercase",
              letterSpacing: 0.4,
            }}
          >
            AI Summary
          </span>
          <p
            style={{
              margin: "4px 0 0",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              lineHeight: 1.5,
            }}
          >
            {call.ai_generated_call_summary}
          </p>
        </div>
      )}

      {/* Row 4: Next Action */}
      {call.next_action && (
        <div>
          <span
            style={{
              color: C.muted,
              fontSize: T.font.size.xs,
              fontWeight: T.font.weight.bold,
              textTransform: "uppercase",
              letterSpacing: 0.4,
            }}
          >
            Next Action
          </span>
          <p
            style={{
              margin: "4px 0 0",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              lineHeight: 1.5,
            }}
          >
            {call.next_action}
          </p>
        </div>
      )}
    </div>
  );
}

HistoryCallCard.propTypes = {
  call: PropTypes.shape({
    date: PropTypes.string,
    score: PropTypes.string,
    callOutcome: PropTypes.string,
    aiSummary: PropTypes.string,
    nextAction: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function CallHistoryTab({ callHistory, dealName }) {
  console.log(callHistory);
  if (!callHistory || callHistory.length === 0) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.muted,
          fontSize: T.font.size.bodySmall,
          fontStyle: "italic",
          padding: 20,
        }}
      >
        No call history found{dealName ? ` for ${dealName}` : ""}.
      </div>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Summary badge */}
      <div
        style={{
          fontSize: T.font.size.caption,
          color: C.muted,
          fontWeight: T.font.weight.medium,
          marginBottom: 4,
        }}
      >
        {callHistory.length} call{callHistory.length !== 1 ? "s" : ""} on record
      </div>
      {callHistory.map((call, idx) => (
        <HistoryCallCard key={idx} call={call} index={idx} />
      ))}
    </div>
  );
}

CallHistoryTab.propTypes = {
  callHistory: PropTypes.array,
  dealName: PropTypes.string,
};

// ─────────────────────────────────────────
// Main Modal
// ─────────────────────────────────────────
const TABS = [
  { id: "summary", label: "Call Summary", Icon: FiFileText },
  { id: "transcript", label: "AI Transcript", Icon: FiMessageSquare },
  { id: "history", label: "Call History", Icon: FiClock },
];

export default function AiCallSummaryModal({
  isOpen,
  dealName,
  summary,
  transcript,
  callHistory,
  onClose,
}) {
  const [activeTab, setActiveTab] = useState("summary");
  console.log("callHistory", callHistory);
  if (!isOpen) return null;

  return (
    <Modal width={720} onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", maxHeight: "85vh" }}>
        {/* ── Header ─────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px 14px",
            borderBottom: `1px solid ${C.border}`,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <AppIconCircle
              size={34}
              variant="primary"
              style={{ borderRadius: T.radius.md }}
            >
              <FiFileText size={16} />
            </AppIconCircle>
            <div>
              <Text
                variant="sectionTitle"
                style={{ margin: 0, fontWeight: T.font.weight.bold }}
              >
                AI Generated Call Summary
              </Text>
              {dealName && (
                <Text
                  variant="caption"
                  style={{ color: C.muted, marginTop: 2 }}
                >
                  {dealName}
                </Text>
              )}
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent",
              border: "none",
              color: C.muted,
              cursor: "pointer",
              padding: 6,
              borderRadius: T.radius.sm,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.text;
              e.currentTarget.style.background = C.surface;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.muted;
              e.currentTarget.style.background = "transparent";
            }}
          >
            <FiX size={18} />
          </button>
        </div>

        {/* ── Tab bar ────────────────────────────────── */}
        <div style={{ flexShrink: 0 }}>
          <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />
        </div>

        {/* ── Tab content ────────────────────────────── */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {activeTab === "summary" && <CallSummaryTab summary={summary} />}
          {activeTab === "transcript" && <AiTranscriptTab transcript={transcript} />}
          {activeTab === "history" && (
            <CallHistoryTab callHistory={callHistory} dealName={dealName} />
          )}
        </div>

        {/* ── Footer ─────────────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            padding: "12px 20px",
            display: "flex",
            justifyContent: "flex-end",
            background: C.card,
            flexShrink: 0,
          }}
        >
          <AppButton compact variant="primary" onClick={onClose}>
            Close
          </AppButton>
        </div>
      </div>
    </Modal>
  );
}

AiCallSummaryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dealName: PropTypes.string,
  summary: PropTypes.string,
  transcript: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      time: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  callHistory: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      score: PropTypes.string,
      callOutcome: PropTypes.string,
      aiSummary: PropTypes.string,
      nextAction: PropTypes.string,
    })
  ),
  onClose: PropTypes.func.isRequired,
};
