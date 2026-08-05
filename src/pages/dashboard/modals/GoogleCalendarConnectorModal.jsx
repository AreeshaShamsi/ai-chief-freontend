import { useState } from "react";
import PropTypes from "prop-types";
import { FiX, FiCheck, FiCalendar, FiLogOut } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { C, Modal, T } from "../../../components/utils";
import googleCalLogo from "../../../assets/logos/google-calender.png";

export default function GoogleCalendarConnectorModal({ onClose }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Mocking an OAuth flow delay
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 1500);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <Modal width={600} onClose={onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: C.card,
          borderRadius: T.radius.card,
          overflow: "hidden",
        }}
      >
        {/* ── Header ──────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "20px 28px 20px",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <img
              src={googleCalLogo}
              alt="Google Calendar"
              style={{ width: 48, objectFit: "contain", flexShrink: 0 }}
            />
            <div>
              <h2
                style={{
                  margin: "0 0 4px",
                  fontSize: 20,
                  fontWeight: T.font.weight.extraBold,
                  color: C.text,
                  lineHeight: 1.2,
                }}
              >
                Google Calendar
              </h2>
              <p
                style={{
                  margin: 0,
                  color: C.muted,
                  fontSize: T.font.size.bodySmall,
                  lineHeight: 1.5,
                }}
              >
                Sync your meetings and schedule appointments directly.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent",
              border: "none",
              color: C.muted,
              cursor: "pointer",
              padding: 4,
              borderRadius: T.radius.sm,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FiX size={18} />
          </button>
        </div>

        {/* ── Body ────────────────────────────────────────── */}
        <div style={{ padding: "30px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {!isConnected ? (
            <>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: C.text,
                }}
              >
                <FiCalendar size={28} />
              </div>
              <h3 style={{ margin: "0 0 10px", color: C.text, fontSize: T.font.size.cardTitle, fontWeight: T.font.weight.bold }}>
                Connect your account
              </h3>
              <p style={{ margin: "0 0 30px", color: C.muted, fontSize: T.font.size.bodySmall, maxWidth: 400, lineHeight: 1.6 }}>
                Allow the CRM to access your Google Calendar to automatically schedule meetings, check availability, and sync events with your leads.
              </p>

              <button
                type="button"
                onClick={handleConnect}
                disabled={isConnecting}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  color: "#3c4043",
                  border: "1px solid #dadce0",
                  borderRadius: 4,
                  padding: "10px 24px",
                  fontSize: T.font.size.bodySmall,
                  fontWeight: T.font.weight.semibold,
                  fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
                  cursor: isConnecting ? "not-allowed" : "pointer",
                  boxShadow: "0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)",
                  transition: "background 0.2s",
                }}
              >
                {isConnecting ? (
                  <span style={{ color: C.muted }}>Connecting...</span>
                ) : (
                  <>
                    <FcGoogle size={20} />
                    Sign in with Google
                  </>
                )}
              </button>
            </>
          ) : (
            <>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: C.greenSoft || "#d1fae5",
                  border: `1px solid ${C.greenBdr || "#34d399"}`,
                  color: C.greenText || "#059669",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <FiCheck size={32} />
              </div>
              <h3 style={{ margin: "0 0 10px", color: C.text, fontSize: T.font.size.cardTitle, fontWeight: T.font.weight.bold }}>
                Successfully Connected
              </h3>
              <p style={{ margin: "0 0 30px", color: C.muted, fontSize: T.font.size.bodySmall, maxWidth: 400, lineHeight: 1.6 }}>
                Your Google Calendar is now synced. You can schedule meetings with your leads directly from the Contacts or Campaign tabs.
              </p>
              
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: C.accent,
                    color: "#fff",
                    border: "none",
                    borderRadius: T.radius.sm,
                    padding: "10px 24px",
                    fontSize: T.font.size.bodySmall,
                    fontWeight: T.font.weight.bold,
                    cursor: "pointer",
                  }}
                >
                  Done
                </button>
                <button
                  type="button"
                  onClick={handleDisconnect}
                  style={{
                    background: C.surface,
                    color: C.hot || "#ef4444",
                    border: `1px solid ${C.border}`,
                    borderRadius: T.radius.sm,
                    padding: "10px 20px",
                    fontSize: T.font.size.bodySmall,
                    fontWeight: T.font.weight.medium,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <FiLogOut size={14} />
                  Disconnect
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}

GoogleCalendarConnectorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
