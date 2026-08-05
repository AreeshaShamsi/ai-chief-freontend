import { useState } from "react";
import { FiCalendar, FiClock, FiX } from "react-icons/fi";
import { AppButton, C, ModalOverlay, T, Text, TextField } from "../../../components/utils";

export default function ScheduleMeetingModal({ onClose, contactName }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSchedule = () => {
    // Mock scheduling API call
    console.log(`Scheduled meeting with ${contactName} on ${date} at ${time}`);
    onClose();
  };

  return (
    <ModalOverlay onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 400,
          background: C.card,
          borderRadius: T.radius.lg,
          border: `1px solid ${C.border}`,
          boxShadow: T.shadow.lg,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            padding: "16px 20px",
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text variant="cardTitle">Schedule Meeting</Text>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: C.muted,
              cursor: "pointer",
            }}
          >
            <FiX size={18} />
          </button>
        </header>

        <div style={{ padding: 20 }}>
          <Text variant="body" color={C.muted} style={{ marginBottom: 16 }}>
            Schedule a meeting with <strong>{contactName}</strong> via Google Calendar.
          </Text>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: C.text }}>
              Date
            </label>
            <div style={{ position: "relative" }}>
              <FiCalendar style={{ position: "absolute", left: 10, top: 10, color: C.muted }} />
              <TextField
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ paddingLeft: 34, width: "100%" }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: C.text }}>
              Time
            </label>
            <div style={{ position: "relative" }}>
              <FiClock style={{ position: "absolute", left: 10, top: 10, color: C.muted }} />
              <TextField
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ paddingLeft: 34, width: "100%" }}
              />
            </div>
          </div>
        </div>

        <footer
          style={{
            padding: "16px 20px",
            borderTop: `1px solid ${C.border}`,
            background: C.sidebar,
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
          }}
        >
          <AppButton variant="outline" onClick={onClose}>
            Cancel
          </AppButton>
          <AppButton variant="primary" onClick={handleSchedule} disabled={!date || !time}>
            Schedule
          </AppButton>
        </footer>
      </div>
    </ModalOverlay>
  );
}
