import { useEffect, useState, useRef } from "react";
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
  LuPencilLine,
  LuCopy,
  LuTrash2,
} from "react-icons/lu";
import { AppButton, AppPill, C, IconButton, Modal, T, Text, TextField } from "../../../components/utils";
import AddColumnModal from "./AddColumnModal";

function ConfirmationDialog({ open, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <Modal
      width={400}
      onClose={onCancel}
      style={{
        borderRadius: T.radius.sm,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.soft,
        background: C.card,
        padding: 24,
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Text variant="pageTitle" style={{ fontSize: 18, fontWeight: T.font.weight.bold, color: C.text }}>
          Delete this row?
        </Text>
        <Text style={{ fontSize: T.font.size.sm, color: C.muted }}>
          This action cannot be undone.
        </Text>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 8 }}>
          <AppButton onClick={onCancel} variant="secondary">
            Cancel
          </AppButton>
          <AppButton onClick={onConfirm} style={{ background: C.danger, color: "#fff" }}>
            Delete
          </AppButton>
        </div>
      </div>
    </Modal>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

function DealDetailsModal({ open, row, onPrevRow, onNextRow, onClose, onUpdateField, onAddField, onDuplicateRow, onDeleteRow }) {
  const [dealName, setDealName] = useState("Xyz");
  const [callType, setCallType] = useState("Tags");
  const [score, setScore] = useState("Tags, Tag2, Tag3");
  const [callOutcome, setCallOutcome] = useState("Call Scheduled");
  const [budget, setBudget] = useState("$9876543");
  const [timeline, setTimeline] = useState("14/07/2026");
  const [assignedAgent, setAssignedAgent] = useState("User");
  const [status, setStatus] = useState("Tags");
  const [nextAction, setNextAction] = useState("................");

  const [isEditing, setIsEditing] = useState(false);
  const [openDropdownFieldId, setOpenDropdownFieldId] = useState(null);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const dealNameRef = useRef(null);
  const callOutcomeRef = useRef(null);
  const budgetRef = useRef(null);
  const timelineRef = useRef(null);
  const nextActionRef = useRef(null);

  const actionsMenuRef = useRef(null);
  const itemRefs = useRef([]);

  const fieldRefs = {
    dealName: dealNameRef,
    callOutcome: callOutcomeRef,
    budget: budgetRef,
    timeline: timelineRef,
    nextAction: nextActionRef,
  };

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
    setIsEditing(false);
    setOpenDropdownFieldId(null);
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

  useEffect(() => {
    if (openDropdownFieldId) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
    }
  }, [openDropdownFieldId]);

  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  useEffect(() => {
    if (!openDropdownFieldId) return undefined;
    const handlePointerDown = (event) => {
      if (actionsMenuRef.current && !actionsMenuRef.current.contains(event.target)) {
        setOpenDropdownFieldId(null);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openDropdownFieldId]);

  if (!open || !row) return null;

  const handleUpdate = (fieldId, value) => {
    onUpdateField(row.id, fieldId, value);
  };

  const handleEditRow = (fieldId) => {
    setOpenDropdownFieldId(null);
    setIsEditing(true);
    setTimeout(() => {
      const activeRef = fieldRefs[fieldId] || dealNameRef;
      activeRef.current?.focus();
    }, 50);
  };

  const handleConfirmDelete = () => {
    setIsConfirmDeleteOpen(false);
    onDeleteRow(row.id);
    onClose();
  };

  const handleChevronClick = (fieldId) => {
    setOpenDropdownFieldId((prev) => (prev === fieldId ? null : fieldId));
  };

  const handleKeyDownMenu = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % 3);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + 3) % 3);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpenDropdownFieldId(null);
    }
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

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    border: "none",
    background: "transparent",
    padding: "8px 12px",
    borderRadius: T.radius.sm,
    cursor: "pointer",
    textAlign: "left",
    color: C.text,
    fontSize: T.font.size.sm,
    fontWeight: T.font.weight.medium,
    fontFamily: T.font.family,
  };

  const renderChevronColumn = (fieldId, fieldLabel) => {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", position: "relative" }}>
        <IconButton
          aria-label={`Field actions for ${fieldLabel}`}
          onClick={(e) => {
            e.stopPropagation();
            handleChevronClick(fieldId);
          }}
          style={{
            borderRadius: T.radius.sm,
            padding: 4,
            background: openDropdownFieldId === fieldId ? C.surface : "transparent",
          }}
        >
          <LuChevronDown size={14} style={{ color: C.muted }} />
        </IconButton>

        {openDropdownFieldId === fieldId && (
          <div
            ref={actionsMenuRef}
            role="menu"
            aria-label="Row actions"
            onKeyDown={handleKeyDownMenu}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 28,
              zIndex: 100,
              minWidth: 160,
              borderRadius: T.radius.sm,
              border: `1px solid ${C.border}`,
              background: C.card,
              boxShadow: T.shadow.soft,
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <button
              ref={(el) => (itemRefs.current[0] = el)}
              role="menuitem"
              type="button"
              onClick={() => handleEditRow(fieldId)}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              style={menuItemStyle}
            >
              <LuPencilLine size={14} color={C.muted} />
              <span>Edit Row</span>
            </button>

            <button
              ref={(el) => (itemRefs.current[1] = el)}
              role="menuitem"
              type="button"
              onClick={() => {
                setOpenDropdownFieldId(null);
                onDuplicateRow(row.id);
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              style={menuItemStyle}
            >
              <LuCopy size={14} color={C.muted} />
              <span>Duplicate Row</span>
            </button>

            <button
              ref={(el) => (itemRefs.current[2] = el)}
              role="menuitem"
              type="button"
              onClick={() => {
                setOpenDropdownFieldId(null);
                setIsConfirmDeleteOpen(true);
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              style={{
                ...menuItemStyle,
                color: C.hot,
              }}
            >
              <LuTrash2 size={14} color={C.hot} />
              <span style={{ color: C.hot }}>Delete Row</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
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

            {/* Close button */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <IconButton aria-label="Close modal" onClick={onClose} style={{ borderRadius: T.radius.sm }}>
                <LuX size={16} />
              </IconButton>
            </div>
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
                {renderChevronColumn("dealName", "Deal Name")}
                <div style={{ width: "100%" }}>
                  <TextField
                    ref={dealNameRef}
                    value={dealName}
                    readOnly={!isEditing}
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
                {renderChevronColumn("callType", "Call Type")}
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
                {renderChevronColumn("score", "Score")}
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
                {renderChevronColumn("callOutcome", "Call Outcome")}
                <div style={{ width: "100%" }}>
                  <TextField
                    ref={callOutcomeRef}
                    value={callOutcome}
                    readOnly={!isEditing}
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
                {renderChevronColumn("budget", "Budget")}
                <div style={{ width: "100%" }}>
                  <TextField
                    ref={budgetRef}
                    value={budget}
                    readOnly={!isEditing}
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
                {renderChevronColumn("timeline", "Timeline")}
                <div style={{ width: "100%" }}>
                  <div style={{ position: "relative", width: "100%" }}>
                    <TextField
                      ref={timelineRef}
                      value={timeline}
                      readOnly={!isEditing}
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
                {renderChevronColumn("assignedAgent", "Assigned Agent")}
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
                {renderChevronColumn("status", "Status")}
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
                {renderChevronColumn("nextAction", "Next Action")}
                <div style={{ width: "100%" }}>
                  <TextField
                    ref={nextActionRef}
                    value={nextAction}
                    readOnly={!isEditing}
                    onChange={(e) => {
                      setNextAction(e.target.value);
                      handleUpdate("nextAction", e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <AddColumnModal onSelectField={(type) => {
              if (onAddField) onAddField(type);
            }}>
              {({ ref, onClick }) => (
                <span
                  ref={ref}
                  role="button"
                  tabIndex={0}
                  className="add-field-link"
                  onClick={onClick}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onClick(e);
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
              )}
            </AddColumnModal>
          </div>
        </div>
      </Modal>

      <ConfirmationDialog
        open={isConfirmDeleteOpen}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmDeleteOpen(false)}
      />
    </>
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
  onDuplicateRow: PropTypes.func.isRequired,
  onDeleteRow: PropTypes.func.isRequired,
};

export default DealDetailsModal;
