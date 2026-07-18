import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LuType,
  LuPhone,
  LuBadgeCheck,
  LuDollarSign,
  LuCalendarDays,
  LuUserRound,
  LuCircleCheck,
  LuChevronDown,
  LuX,
  LuChevronUp,
  LuPlus,
} from "react-icons/lu";
import { AppPill, C, IconButton, Modal, T, Text, TextField } from "../../../components/utils";

function DealDetailsModal({ open, row, onPrevRow, onNextRow, onClose, onUpdateField, onAddField }) {
  const [dealName, setDealName] = useState("Xyz");
  const [callType, setCallType] = useState("Tags");
  const [score, setScore] = useState("Tags, Tag2, Tag3");
  const [callOutcome, setCallOutcome] = useState("Call Scheduled");
  const [budget, setBudget] = useState("$9876543");
  const [timeline, setTimeline] = useState("14/07/2026");
  const [assignedAgent, setAssignedAgent] = useState("User");
  const [status, setStatus] = useState("Tags");
  const [nextAction, setNextAction] = useState("................");

  useEffect(() => {
    if (!row) return;
    setDealName(row.dealName || "Xyz");
    setCallType(row.callType || "Tags");
    setScore(row.score || "Tags, Tag2, Tag3");
    setCallOutcome(row.callOutcome || "Call Scheduled");
    setBudget(row.budget || "$9876543");
    setTimeline(row.timeline || "14/07/2026");
    setAssignedAgent(row.assignedAgent || "User");
    setStatus(row.status || "Tags");
    setNextAction(row.nextAction || "................");
  }, [row]);

  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
    return undefined;
  }, [open]);

  if (!open || !row) return null;

  const handleUpdate = (fieldId, value) => {
    onUpdateField(row.id, fieldId, value);
  };

  const inputContainerStyle = {
    width: "100%",
    height: 38,
    padding: "0 12px",
    border: `1px solid ${C.border}`,
    borderRadius: T.radius.sm,
    background: C.surface,
    display: "flex",
    alignItems: "center",
    gap: 6,
    boxSizing: "border-box",
  };

  return (
    <Modal
      width={780}
      onClose={onClose}
      style={{
        borderRadius: T.radius.sm,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.soft,
        background: C.card,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxHeight: "85vh" }}>
        {/* Sticky Header */}
        <div
          style={{
            minHeight: 48,
            padding: `0 ${T.spacing[4]}px`,
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: C.card,
            flex: "0 0 auto",
          }}
        >
          {/* Collapse Up & Down buttons */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <IconButton
              aria-label="Previous deal"
              disabled={!onPrevRow}
              onClick={onPrevRow}
              style={{ borderRadius: T.radius.sm }}
            >
              <LuChevronUp size={16} />
            </IconButton>
            <IconButton
              aria-label="Next deal"
              disabled={!onNextRow}
              onClick={onNextRow}
              style={{ borderRadius: T.radius.sm }}
            >
              <LuChevronDown size={16} />
            </IconButton>
          </div>

          {/* Close (X) button */}
          <IconButton aria-label="Close modal" onClick={onClose} style={{ borderRadius: T.radius.sm }}>
            <LuX size={16} />
          </IconButton>
        </div>

        {/* Scrollable Body */}
        <div style={{ flex: "1 1 auto", overflowY: "auto", padding: T.spacing[5] }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 24px 1fr",
              alignItems: "center",
              gap: `${T.spacing[3]}px ${T.spacing[4]}px`,
            }}
          >
            {/* 1. Deal Name */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuType size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Deal Name
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <TextField
                  value={dealName}
                  onChange={(e) => {
                    setDealName(e.target.value);
                    handleUpdate("dealName", e.target.value);
                  }}
                />
              </div>
            </div>

            {/* 2. Call Type */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuPhone size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Call Type
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <div style={inputContainerStyle}>
                  {callType ? <AppPill variant="primary" size="xs">{callType}</AppPill> : null}
                </div>
              </div>
            </div>

            {/* 3. Score */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuBadgeCheck size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Score
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <div style={inputContainerStyle}>
                  {score.split(",").map((tag) => {
                    const trimmed = tag.trim();
                    let variant = "neutral";
                    if (trimmed.toLowerCase() === "tags") {
                      variant = "primary";
                    } else if (trimmed.toLowerCase() === "tag3") {
                      variant = "success";
                    }
                    return (
                      <AppPill key={trimmed} size="xs" variant={variant}>
                        {trimmed}
                      </AppPill>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4. Call Outcome */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuType size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Call Outcome
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <TextField
                  value={callOutcome}
                  onChange={(e) => {
                    setCallOutcome(e.target.value);
                    handleUpdate("callOutcome", e.target.value);
                  }}
                />
              </div>
            </div>

            {/* 5. Budget */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuDollarSign size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Budget
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <TextField
                  value={budget}
                  onChange={(e) => {
                    setBudget(e.target.value);
                    handleUpdate("budget", e.target.value);
                  }}
                />
              </div>
            </div>

            {/* 6. Timeline */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuCalendarDays size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Timeline
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <div style={{ position: "relative", width: "100%" }}>
                  <TextField
                    value={timeline}
                    onChange={(e) => {
                      setTimeline(e.target.value);
                      handleUpdate("timeline", e.target.value);
                    }}
                    style={{ paddingRight: 31 }}
                  />
                  <LuCalendarDays
                    size={14}
                    style={{
                      position: "absolute",
                      right: 11,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: C.muted,
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 7. Assigned Agent */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuUserRound size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Assigned Agent
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <div style={inputContainerStyle}>
                  {assignedAgent ? (
                    <AppPill
                      size="xs"
                      style={{
                        background: C.accentLt,
                        border: `1px solid ${C.accentTrack}`,
                        color: C.accent,
                        fontWeight: T.font.weight.semibold,
                      }}
                    >
                      User
                      <LuX
                        size={10}
                        style={{ cursor: "pointer", marginLeft: 4 }}
                        onClick={() => {
                          setAssignedAgent("");
                          handleUpdate("assignedAgent", "");
                        }}
                      />
                    </AppPill>
                  ) : null}
                </div>
              </div>
            </div>

            {/* 8. Status */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuCircleCheck size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Status
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <div style={inputContainerStyle}>
                  {status ? <AppPill variant="primary" size="xs">{status}</AppPill> : null}
                </div>
              </div>
            </div>

            {/* 9. Next Action */}
            <div style={{ display: "contents" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden" }}>
                <LuType size={14} style={{ color: C.muted, flexShrink: 0 }} />
                <Text
                  variant="mutedLabel"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  Next Action
                </Text>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <LuChevronDown size={14} style={{ color: C.muted }} />
              </div>
              <div style={{ width: "100%" }}>
                <TextField
                  value={nextAction}
                  onChange={(e) => {
                    setNextAction(e.target.value);
                    handleUpdate("nextAction", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <span
            role="button"
            tabIndex={0}
            className="add-field-link"
            onClick={onAddField}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (onAddField) onAddField();
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.primaryHover || C.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.accent;
            }}
            style={{
              marginTop: 20,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              cursor: "pointer",
              color: C.accent,
              fontSize: T.font.size.sm,
              fontWeight: T.font.weight.semibold,
              userSelect: "none",
            }}
          >
            <LuPlus size={14} />
            <span>Add new field to this table</span>
          </span>
        </div>
      </div>
    </Modal>
  );
}

DealDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  row: PropTypes.object,
  onPrevRow: PropTypes.func,
  onNextRow: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func.isRequired,
  onAddField: PropTypes.func,
};

export default DealDetailsModal;
