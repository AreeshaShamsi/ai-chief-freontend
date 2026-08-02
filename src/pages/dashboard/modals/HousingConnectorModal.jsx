import { useState } from "react";
import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiCheck,
  FiChevronRight,
  FiCopy,
  FiInfo,
  FiLink,
  FiLock,
  FiX,
} from "react-icons/fi";
import { C, Modal, T } from "../../../components/utils";
import housingLogo from "/Housing.com_Logo.png";

// ─── Stepper ─────────────────────────────────────────────────────────────────
const STEPS = [
  { n: 1, label: "Connect",    sub: "Add your webhook URL" },
  { n: 2, label: "Verify",     sub: "Verify connection" },
  { n: 3, label: "Map Fields", sub: "Map lead fields" },
  { n: 4, label: "Test",       sub: "Test lead & Activate" },
];

function Stepper({ active }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 0,
        padding: "18px 28px",
        borderBottom: `1px solid ${C.border}`,
        background: C.surface,
        flexShrink: 0,
      }}
    >
      {STEPS.map((step, i) => {
        const isDone    = step.n < active;
        const isCurrent = step.n === active;
        return (
          <div key={step.n} style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 0 }}>
              <div
                style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: isCurrent || isDone ? C.accent : C.surface,
                  border: `2px solid ${isCurrent || isDone ? C.accent : C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: T.font.weight.bold, fontSize: T.font.size.bodySmall,
                  color: isCurrent || isDone ? "#fff" : C.muted,
                  flexShrink: 0, transition: "all 0.2s",
                }}
              >
                {isDone ? <FiCheck size={13} /> : step.n}
              </div>
              <div style={{ marginTop: 5, textAlign: "center" }}>
                <div style={{
                  fontSize: T.font.size.bodySmall,
                  fontWeight: isCurrent ? T.font.weight.bold : T.font.weight.medium,
                  color: isCurrent ? C.accent : isDone ? C.text : C.muted,
                  whiteSpace: "nowrap",
                }}>
                  {step.label}
                </div>
                <div style={{ fontSize: T.font.size.caption, color: C.muted, whiteSpace: "nowrap" }}>
                  {step.sub}
                </div>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1, height: 2,
                background: isDone ? C.accent : C.border,
                margin: "0 8px", marginBottom: 26, transition: "background 0.2s",
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
Stepper.propTypes = { active: PropTypes.number.isRequired };

// ─── Setup Steps ──────────────────────────────────────────────────────────────
const SETUP_STEPS = [
  {
    n: 1,
    title: "Go to your Housing.com Account",
    desc: "Login to your Housing.com Builder / Agent account.",
  },
  {
    n: 2,
    title: "Request CRM Integration",
    desc: "Contact your Housing.com Account Manager and request CRM / API integration.",
  },
  {
    n: 3,
    title: "Provide Webhook URL",
    desc: "Share the webhook URL below with your Housing.com Account Manager.",
  },
  {
    n: 4,
    title: "Start Receiving Leads",
    desc: "Once enabled, new leads will be sent to this URL in real-time.",
  },
];

// ─── Sample JSON ──────────────────────────────────────────────────────────────
const SAMPLE_JSON = `{
  "source": "housing.com",
  "name": "Priya Mehta",
  "phone": "9812345678",
  "email": "priya@gmail.com",
  "project": "Skyline Heights",
  "propertyType": "3 BHK",
  "budget": "1.2 Cr",
  "message": "Looking for possession in 6 months",
  "createdAt": "2026-07-27T10:15:00Z"
}`;

const WEBHOOK_URL = "https://crm.aichief.in/api/webhooks/housing";

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function HousingConnectorModal({ onClose }) {
  const [activeStep]   = useState(1);
  const [copied,       setCopied]       = useState(false);
  const [jsonCopied,   setJsonCopied]   = useState(false);
  const [urlGenerated, setUrlGenerated] = useState(false);

  const handleCopyWebhook = async () => {
    try { await navigator.clipboard.writeText(WEBHOOK_URL); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch (_) {}
  };
  const handleCopyJson = async () => {
    try { await navigator.clipboard.writeText(SAMPLE_JSON); setJsonCopied(true); setTimeout(() => setJsonCopied(false), 2000); } catch (_) {}
  };

  return (
    <Modal width={920} onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", maxHeight: "90vh", background: C.card, borderRadius: T.radius.card, overflow: "hidden" }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "20px 28px 16px", borderBottom: `1px solid ${C.border}`, flexShrink: 0, gap: 20 }}>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flex: 1, minWidth: 0 }}>
            <img src={housingLogo} alt="Housing.com logo" style={{ width: 130, objectFit: "contain", flexShrink: 0, marginTop: 4 }} />
            <div>
              <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: T.font.weight.extraBold, color: C.text, lineHeight: 1.2 }}>
                Integrate with Housing.com
              </h2>
              <p style={{ margin: "0 0 10px", color: C.muted, fontSize: T.font.size.bodySmall, lineHeight: 1.5 }}>
                Connect your Housing.com account to automatically capture new leads<br />into your CRM in real-time.
              </p>
              <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "none", border: "none", color: C.accent, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold, cursor: "pointer", padding: 0 }}>
                <FiInfo size={14} /> How it works?
              </button>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" style={{ background: "transparent", border: "none", color: C.muted, cursor: "pointer", padding: 4, borderRadius: T.radius.sm, display: "flex", alignItems: "center", flexShrink: 0 }}>
            <FiX size={18} />
          </button>
        </div>

        {/* ── Stepper ────────────────────────────────────────── */}
        <Stepper active={activeStep} />

        {/* ── Body ───────────────────────────────────────────── */}
        <div style={{ flex: 1, overflowY: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>

          {/* LEFT */}
          <div style={{ padding: "24px 28px", borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "0 0 4px", fontSize: T.font.size.cardTitle, fontWeight: T.font.weight.bold, color: C.text }}>
              1. Connect Your Housing.com Account
            </h3>
            <p style={{ margin: "0 0 20px", color: C.muted, fontSize: T.font.size.bodySmall }}>
              Follow the steps below to connect Housing.com with your CRM.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>
              {SETUP_STEPS.map((step) => (
                <div key={step.n} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", border: `1.5px solid ${C.accent}`, color: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, flexShrink: 0, background: C.accentLt }}>
                    {step.n}
                  </div>
                  <div>
                    <div style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, color: C.text, marginBottom: 3 }}>{step.title}</div>
                    <div style={{ fontSize: T.font.size.caption, color: C.muted, lineHeight: 1.5 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Webhook URL */}
            <div style={{ marginTop: "auto" }}>
              <div style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, color: C.text, marginBottom: 8 }}>
                Your Webhook URL
              </div>

              {!urlGenerated ? (
                <>
                  <div style={{ border: `1.5px dashed ${C.border}`, borderRadius: T.radius.sm, background: C.surface, height: 38, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: T.font.size.caption, color: C.muted, fontStyle: "italic" }}>
                      URL will appear here after generation
                    </span>
                  </div>
                  <button type="button" onClick={() => setUrlGenerated(true)} style={{ width: "100%", height: 38, background: C.accentLt, border: `1.5px solid ${C.accent}`, borderRadius: T.radius.sm, color: C.accent, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, fontFamily: T.font.family }}>
                    <FiLink size={13} /> Create Webhook URL
                  </button>
                </>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", border: `1px solid ${C.border}`, borderRadius: T.radius.sm, background: C.surface, padding: "0 10px", height: 38, gap: 8 }}>
                    <span style={{ flex: 1, minWidth: 0, fontSize: T.font.size.bodySmall, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "monospace" }}>
                      {WEBHOOK_URL}
                    </span>
                    <button type="button" onClick={handleCopyWebhook} title="Copy URL" style={{ background: "none", border: "none", cursor: "pointer", color: copied ? "#10b981" : C.muted, padding: 4, flexShrink: 0, display: "flex", alignItems: "center" }}>
                      {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                    </button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6, color: C.muted, fontSize: T.font.size.caption }}>
                    <FiLock size={11} /> Keep this URL secure and don&apos;t share it publicly.
                  </div>
                  <button type="button" style={{ marginTop: 18, width: "100%", height: 42, background: C.accent, border: "none", borderRadius: T.radius.sm, color: "#fff", fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: T.font.family }}>
                    I have provided the URL <FiArrowRight size={15} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>

            {/* About */}
            <div>
              <h3 style={{ margin: "0 0 14px", fontSize: T.font.size.cardTitle, fontWeight: T.font.weight.bold, color: C.text }}>
                About Housing.com Integration
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
                {[
                  "Capture property inquiries in real-time",
                  "All leads added to your CRM automatically",
                  "No manual import required",
                  "Faster response time, more conversions",
                ].map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: C.greenSoft || "#d1fae5", color: C.greenText || "#059669", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <FiCheck size={11} />
                    </span>
                    <span style={{ fontSize: T.font.size.bodySmall, color: C.text }}>{b}</span>
                  </div>
                ))}
              </div>
              {/* Diagram */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10 }}>
                <div style={{ border: `1px solid ${C.border}`, borderRadius: T.radius.md, padding: "8px 14px", display: "flex", alignItems: "center", justifyContent: "center", background: C.surface }}>
                  <img src={housingLogo} alt="Housing.com" style={{ width: 80, objectFit: "contain" }} />
                </div>
                <FiArrowRight size={20} color={C.muted} />
                <div style={{ border: `1px solid ${C.border}`, borderRadius: T.radius.md, padding: "10px 20px", background: C.surface, fontSize: T.font.size.cardTitle, fontWeight: T.font.weight.extraBold, color: C.text, letterSpacing: 1 }}>
                  CRM
                </div>
              </div>
            </div>

            {/* Sample Payload */}
            <div>
              <div style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, color: C.text, marginBottom: 8 }}>
                Sample Lead Payload
              </div>
              <div style={{ background: "#0f172a", borderRadius: T.radius.md, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontSize: T.font.size.caption, color: "rgba(255,255,255,0.45)", fontWeight: T.font.weight.semibold, letterSpacing: 1 }}>JSON</span>
                  <button type="button" onClick={handleCopyJson} title="Copy JSON" style={{ background: "none", border: "none", cursor: "pointer", color: jsonCopied ? "#34d399" : "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", padding: 0 }}>
                    {jsonCopied ? <FiCheck size={12} /> : <FiCopy size={12} />}
                  </button>
                </div>
                <pre style={{ margin: 0, padding: "12px 16px", fontSize: 12, lineHeight: 1.65, overflowX: "auto", fontFamily: "'Fira Code','Cascadia Code','Courier New',monospace", color: "#e2e8f0" }}>
                  <span style={{ color: "#94a3b8" }}>{"{"}</span>{"\n"}
                  {[
                    ["source",       "housing.com"],
                    ["name",         "Priya Mehta"],
                    ["phone",        "9812345678"],
                    ["email",        "priya@gmail.com"],
                    ["project",      "Skyline Heights"],
                    ["propertyType", "3 BHK"],
                    ["budget",       "1.2 Cr"],
                    ["message",      "Looking for possession in 6 months"],
                    ["createdAt",    "2026-07-27T10:15:00Z"],
                  ].map(([key, val], i, arr) => (
                    <span key={key}>
                      {"  "}<span style={{ color: "#f59e0b" }}>&quot;{key}&quot;</span>
                      <span style={{ color: "#94a3b8" }}>: </span>
                      <span style={{ color: "#86efac" }}>&quot;{val}&quot;</span>
                      {i < arr.length - 1 && <span style={{ color: "#94a3b8" }}>,</span>}{"\n"}
                    </span>
                  ))}
                  <span style={{ color: "#94a3b8" }}>{"}"}</span>
                </pre>
              </div>
            </div>

            {/* Note */}
            <div style={{ border: `1px solid ${C.accentTrack || "#bfdbfe"}`, borderRadius: T.radius.md, background: C.accentLt, padding: "12px 14px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start", flex: 1 }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: C.accent, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <FiInfo size={10} />
                </span>
                <div>
                  <div style={{ fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, color: C.accent, marginBottom: 3 }}>Note</div>
                  <p style={{ margin: 0, fontSize: T.font.size.caption, color: C.text, lineHeight: 1.55 }}>
                    After connection, please test the integration to make sure leads are coming into your CRM correctly.
                  </p>
                </div>
              </div>
              <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 5, border: `1px solid ${C.accent}`, borderRadius: T.radius.sm, background: C.card, color: C.accent, fontSize: T.font.size.caption, fontWeight: T.font.weight.semibold, padding: "5px 10px", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, fontFamily: T.font.family }}>
                Go to Test Step <FiChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

HousingConnectorModal.propTypes = { onClose: PropTypes.func.isRequired };
