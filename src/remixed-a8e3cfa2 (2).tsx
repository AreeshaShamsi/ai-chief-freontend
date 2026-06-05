import React, { useState, useRef } from "react";

const C = {
  bg: "#F4F6FB", card: "#FFFFFF", sidebar: "#0B1120", sideActive: "#1A2540",
  accent: "#6366F1", accentHov: "#4F46E5", accentLt: "#EEF2FF",
  text: "#0F172A", muted: "#64748B", border: "#E2E8F0", borderLt: "#F1F5F9",
  hot: "#EF4444", hotBg: "#FEF2F2", hotBdr: "#FECACA",
  warm: "#F59E0B", warmBg: "#FFFBEB", warmBdr: "#FDE68A",
  green: "#10B981", greenBg: "#ECFDF5", greenBdr: "#A7F3D0",
  purple: "#8B5CF6",
};

// ── MOCK DATA ────────────────────────────────────────────────────────
const ALL_LEADS = [
  {
    id: 1, callType: "property_enquiry", name: "Arjun Mehta", phone: "+91 98765 43210",
    propertyEnquired: "Prestige Lakeside", callOutcome: "Site Visit Scheduled",
    config: "3BHK", budget: "₹1.2 Cr", location: "Sarjapur Road", purpose: "Self Use",
    timeline: "2 months", aiSummary: "Budget ₹1.1–1.3 Cr confirmed. Site visit Saturday 11AM arranged. Sarjapur preferred.",
    objections: "Wants spouse to join for final decision", nextAction: "Confirm site visit — Saturday 11AM",
    followUpDate: "Dec 23", followUpTime: "11:00 AM", score: "hot", ago: "6 min ago"
  },

  {
    id: 2, callType: "property_enquiry", name: "Kavya Nair", phone: "+91 87654 32109",
    propertyEnquired: "Sobha Hartland", callOutcome: "Interested / Follow-up Required",
    config: "2BHK", budget: "₹85L", location: "Whitefield", purpose: "Investment",
    timeline: "1 month", aiSummary: "Loan pre-approved. First-time investor. Comparing with one more project.",
    objections: "Comparing with Prestige Lakeside", nextAction: "Send project comparison sheet",
    followUpDate: "Dec 22", followUpTime: "3:00 PM", score: "qualified", ago: "19 min ago"
  },

  {
    id: 3, callType: "property_enquiry", name: "Sunita Pillai", phone: "+91 65432 10987",
    propertyEnquired: "Prestige Lakeside", callOutcome: "Site Visit Scheduled",
    config: "4BHK", budget: "₹1.5 Cr", location: "Sarjapur", purpose: "Self Use",
    timeline: "4 months", aiSummary: "High-budget buyer. Open to spacious 3BHK. Spouse joining Saturday call.",
    objections: "Wants 4BHK — limited inventory", nextAction: "Site visit Saturday — arrange 3BHK walkthrough",
    followUpDate: "Dec 23", followUpTime: "4:00 PM", score: "hot", ago: "41 min ago"
  },

  {
    id: 4, callType: "requirement_gathering", name: "Rohan Sharma", phone: "+91 76543 21098",
    preferredArea: "Whitefield / ITPL", propertyType: "Apartment", config: "2BHK",
    budget: "₹60L", purpose: "Self Use", timeline: "6 months", loanRequired: "Yes",
    callOutcome: "Qualified Lead", propertyMatchStatus: "Matching Properties Available",
    aiSummary: "IT professional. Budget ₹55–65L. Whitefield preferred. Loan pre-approved at HDFC.",
    nextAction: "Share Brigade Lakefront brochure", followUpDate: "Dec 24", followUpTime: "12:00 PM",
    score: "qualified", ago: "2 hrs ago"
  },

  {
    id: 5, callType: "requirement_gathering", name: "Ananya Rao", phone: "+91 43210 98765",
    preferredArea: "Electronic City", propertyType: "Apartment", config: "2BHK",
    budget: "₹70L", purpose: "Self Use", timeline: "3–6 months", loanRequired: "Yes",
    callOutcome: "Interested", propertyMatchStatus: "Matching Properties Available",
    aiSummary: "Working professional. Interested but busy. Prefers weekend callbacks.",
    nextAction: "Call back Saturday morning", followUpDate: "Dec 23", followUpTime: "10:00 AM",
    score: "warm", ago: "2 days ago"
  },

  {
    id: 6, callType: "cold_call", name: "Deepak Joshi", phone: "+91 54321 09876",
    interestedInBuying: "Maybe Later", purpose: "Investment", preferredArea: "Anywhere Bengaluru",
    propertyType: "Apartment", config: "1BHK", budget: "₹40L", timeline: "1 year+",
    callOutcome: "Future Prospect", interestLevel: "Low",
    aiSummary: "Early exploration. Budget low for current inventory. Long-term nurture candidate.",
    nextAction: "Add to monthly newsletter drip", followUpDate: "Jan 15", followUpTime: "11:00 AM",
    score: "cold", ago: "3 days ago"
  },

  {
    id: 7, callType: "cold_call", name: "Vikram Singh", phone: "+91 32109 87654",
    interestedInBuying: "No", purpose: "—", preferredArea: "—", propertyType: "—",
    config: "—", budget: "—", timeline: "—",
    callOutcome: "Wrong Number", interestLevel: "—",
    aiSummary: "Number belongs to a different person. Invalid lead — not a prospect.",
    nextAction: "Mark as junk", followUpDate: "—", followUpTime: "—",
    score: "junk", ago: "1 week ago"
  },
];

const HOT_LEADS = ALL_LEADS.filter(l => l.score === "hot");

const CALLS = [
  {
    id: 1, lead: "Arjun Mehta", callType: "property_enquiry", dur: "3:42", date: "Today 10:15 AM",
    score: "hot", status: "completed", callOutcome: "Site Visit Scheduled",
    nextAction: "Confirm site visit — Saturday 11AM", followUp: "Dec 23, 11:00 AM",
    summary: "Budget ₹1.2 Cr confirmed. Sarjapur preferred. Site visit Saturday arranged.",
    transcript: [
      { t: "0:03", r: "AI", tx: "Hello, this is an automated call from Prestige Realty. Is this a good time?" },
      { t: "0:09", r: "Lead", tx: "Yes, go ahead." },
      { t: "0:11", r: "AI", tx: "Are you looking for own stay or investment?" },
      { t: "0:16", r: "Lead", tx: "Own stay for my family." },
      { t: "0:19", r: "AI", tx: "What would be your approximate budget?" },
      { t: "0:24", r: "Lead", tx: "Around 1.2 crore, maybe up to 1.3." },
      { t: "0:40", r: "AI", tx: "Are you looking to move in within 3 months?" },
      { t: "0:46", r: "Lead", tx: "Within 2 months if possible." },
      { t: "1:01", r: "AI", tx: "Prestige Lakeside near Sarjapur looks like an excellent fit. Would you like a site visit?" },
      { t: "1:10", r: "Lead", tx: "Yes, Saturday works." },
    ]
  },
  {
    id: 2, lead: "Kavya Nair", callType: "property_enquiry", dur: "2:18", date: "Today 10:52 AM",
    score: "qualified", status: "completed", callOutcome: "Interested / Follow-up Required",
    nextAction: "Send comparison sheet", followUp: "Dec 22, 3:00 PM",
    summary: "Investor, 2BHK, ₹85L. Loan pre-approved. Comparing one more project.",
    transcript: [
      { t: "0:04", r: "AI", tx: "Hello Kavya, automated call from Sobha Realty about your 2BHK inquiry." },
      { t: "0:10", r: "Lead", tx: "Yes I filled a form online." },
      { t: "0:13", r: "AI", tx: "Are you looking for personal use or investment?" },
      { t: "0:18", r: "Lead", tx: "Investment. Loan approved for 85 lakhs." },
    ]
  },
  {
    id: 3, lead: "Rohan Sharma", callType: "requirement_gathering", dur: "0:00", date: "Today 09:30 AM",
    score: "warm", status: "no_answer", callOutcome: "Not Reachable",
    nextAction: "Retry at 3 PM", followUp: "Today, 3:00 PM", summary: "No answer. 3rd attempt.", transcript: []
  },
  {
    id: 4, lead: "Deepak Joshi", callType: "cold_call", dur: "0:42", date: "Yesterday 11 AM",
    score: "cold", status: "completed", callOutcome: "Future Prospect",
    nextAction: "Add to newsletter drip", followUp: "Jan 15, 11:00 AM",
    summary: "Budget ₹40L. Timeline 1 year+. Long-term nurture only.", transcript: []
  },
];

// ── HELPERS ──────────────────────────────────────────────────────────
const CALL_TYPE_META = {
  property_enquiry: { label: "Property Enquiry", bg: "#EEF2FF", c: C.accent, b: "#C7D2FE", icon: "🏢" },
  requirement_gathering: { label: "Requirement Gathering", bg: C.greenBg, c: C.green, b: C.greenBdr, icon: "🔍" },
  cold_call: { label: "Cold Call", bg: C.warmBg, c: "#B45309", b: C.warmBdr, icon: "📲" },
};
function CallTypeBadge({ type }) {
  const m = CALL_TYPE_META[type] || { label: type, bg: "#F8FAFC", c: C.muted, b: C.border, icon: "📞" };
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 9px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: m.bg, color: m.c, border: `1px solid ${m.b}`, whiteSpace: "nowrap" }}>{m.icon} {m.label}</span>;
}

const SCORE_META = {
  hot: { l: "🔥 Hot", bg: C.hotBg, c: C.hot, b: C.hotBdr, def: "Site visit scheduled or very high buying intent. Needs immediate follow-up." },
  warm: { l: "⚡ Warm", bg: C.warmBg, c: C.warm, b: C.warmBdr, def: "Interested but needs nurturing. Medium intent, follow-up required." },
  cold: { l: "❄️ Cold", bg: "#F8FAFC", c: C.muted, b: C.border, def: "Low intent or long timeline (6 months+). Future prospect only." },
  qualified: { l: "✓ Qualified", bg: C.greenBg, c: C.green, b: C.greenBdr, def: "Clear budget, defined timeline & requirement confirmed. Ready for sales team handoff." },
  junk: { l: "✕ Junk", bg: "#F9FAFB", c: "#9CA3AF", b: "#E5E7EB", def: "Wrong number, not reachable, not interested, or Do Not Call." },
};
function ScoreBadge({ score }) {
  const m = SCORE_META[score] || { l: "–", bg: "#F8FAFC", c: C.muted, b: C.border };
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 9px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: m.bg, color: m.c, border: `1px solid ${m.b}`, whiteSpace: "nowrap" }}>{m.l}</span>;
}
function Avatar({ name, size = 30, color }) {
  const i = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const p = ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#6366F1"];
  return <div style={{ width: size, height: size, borderRadius: "50%", background: color || p[name.charCodeAt(0) % p.length], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: size * .36, fontWeight: 700, flexShrink: 0 }}>{i}</div>;
}
function Card({ children, style, onClick }) {
  return <div onClick={onClick} style={{ background: C.card, borderRadius: 12, border: `1px solid ${C.border}`, padding: 20, ...style, cursor: onClick ? "pointer" : "default" }}>{children}</div>;
}
function Btn({ children, primary, sm, style, onClick, disabled }) {
  return <button onClick={onClick} disabled={disabled}
    style={{ background: primary ? C.accent : "transparent", color: primary ? "#fff" : C.muted, border: `1px solid ${primary ? C.accent : C.border}`, borderRadius: 7, padding: sm ? "5px 12px" : "8px 18px", fontSize: sm ? 11 : 13, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? .5 : 1, ...style }}>{children}</button>;
}

// ── SIDEBAR ──────────────────────────────────────────────────────────
const NAV = [{ id: "dashboard", e: "◼", l: "Dashboard" }, { id: "campaigns", e: "📢", l: "Campaigns", b: 3 }, { id: "leads", e: "👥", l: "Leads", b: 7 }, { id: "calls", e: "📞", l: "Call Log" }, { id: "kb", e: "📚", l: "Knowledge Base" }];
function Sidebar({ tab, setTab }) {
  return (
    <div style={{ width: 210, background: C.sidebar, display: "flex", flexDirection: "column", flexShrink: 0, borderRight: "1px solid #1A2540" }}>
      <style>{`@keyframes pulse2{0%,100%{opacity:1}50%{opacity:.35}}.pls{animation:pulse2 2s ease-in-out infinite;}`}</style>
      <div style={{ padding: "20px 18px", borderBottom: "1px solid #1A2540", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>📞</div>
        <div><div style={{ color: "#F8FAFC", fontWeight: 700, fontSize: 14, letterSpacing: "-.3px" }}>VoiceIQ</div><div style={{ color: "#475569", fontSize: 10, marginTop: 1 }}>MVP · Real Estate</div></div>
      </div>
      <div style={{ margin: "8px 10px", background: "#0F2A1A", borderRadius: 7, padding: "7px 12px", display: "flex", alignItems: "center", gap: 7 }}>
        <span className="pls" style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block", flexShrink: 0 }} />
        <span style={{ fontSize: 11, color: "#34D399", fontWeight: 500 }}>2 active campaigns</span>
      </div>
      <nav style={{ flex: 1, padding: "6px 0" }}>
        {NAV.map(n => {
          const a = tab === n.id;
          return <div key={n.id} onClick={() => setTab(n.id)}
            style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 18px", margin: "1px 6px", borderRadius: 7, cursor: "pointer", transition: "all .12s", background: a ? "#1E293B" : "transparent", color: a ? "#F8FAFC" : "#94A3B8", fontSize: 12, fontWeight: a ? 600 : 400, borderLeft: a ? `2px solid ${C.accent}` : "2px solid transparent" }}>
            <span style={{ fontSize: 13 }}>{n.e}</span><span style={{ flex: 1 }}>{n.l}</span>
            {n.b && <span style={{ background: C.accent, color: "#fff", borderRadius: 9, padding: "1px 6px", fontSize: 9, fontWeight: 700 }}>{n.b}</span>}
          </div>;
        })}
      </nav>
      <div style={{ padding: "12px 18px", borderBottom: "1px solid #1A2540", display: "flex", alignItems: "center", gap: 9 }}>
        <Avatar name="Himanshu S" size={28} color={C.accent} />
        <div><div style={{ color: "#F8FAFC", fontSize: 11, fontWeight: 600 }}>Himanshu S.</div><div style={{ color: "#475569", fontSize: 10 }}>Admin</div></div>
      </div>
    </div>
  );
}

// ── CREATE CAMPAIGN MODAL ─────────────────────────────────────────────
function CreateCampaignModal({ onClose, onLaunch }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [script, setScript] = useState("property_enquiry");
  const [uploadPhase, setUploadPhase] = useState("idle");
  const [launching, setLaunching] = useState(false);
  const [launched, setLaunched] = useState(false);

  const triggerUpload = () => { setUploadPhase("uploading"); setTimeout(() => setUploadPhase("mapped"), 1400); };
  const handleLaunch = () => { setLaunching(true); setTimeout(() => { setLaunching(false); setLaunched(true); setTimeout(() => { onLaunch(name, script); }, 1800); }, 1800); };

  const scripts = [
    { id: "property_enquiry", label: "Property Enquiry Call", icon: "🏢", desc: "For leads enquiring about a specific property — confirms interest, answers queries, and books a site visit." },
    { id: "requirement_gathering", label: "Requirement Gathering Call", icon: "🔍", desc: "For leads who want to buy a flat but haven't shortlisted a property — captures BHK, budget, location, and timeline." },
    { id: "cold_call", label: "Cold Call", icon: "📲", desc: "For untouched lead lists — introduces the brand, gauges intent, and qualifies for follow-up." },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(10,14,26,.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16 }}>
      <div style={{ background: C.card, borderRadius: 16, width: "100%", maxWidth: 560, border: `1px solid ${C.border}`, overflow: "hidden" }}>
        <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>New Campaign</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>Step {step} of 2 — {step === 1 ? "Details" : "Upload leads"}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 5 }}>{[1, 2].map(s => <div key={s} style={{ width: s === step ? 20 : 6, height: 6, borderRadius: 3, background: s <= step ? C.accent : C.border, transition: "all .2s" }} />)}</div>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 18, lineHeight: 1 }}>✕</button>
          </div>
        </div>
        {step === 1 && (
          <div style={{ padding: "22px 24px" }}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 6 }}>Campaign name <span style={{ color: C.hot }}>*</span></label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Prestige Lakeside — Jan 2025"
                style={{ width: "100%", padding: "10px 12px", border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 13, outline: "none", boxSizing: "border-box", background: "#FAFBFC" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 10 }}>AI qualification script</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {scripts.map(s => (
                  <div key={s.id} onClick={() => setScript(s.id)}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 9, border: `1.5px solid ${script === s.id ? C.accent : C.border}`, background: script === s.id ? C.accentLt : "#FAFBFC", cursor: "pointer", transition: "all .15s" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${script === s.id ? C.accent : C.muted}`, background: script === s.id ? C.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {script === s.id && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                    </div>
                    <span style={{ fontSize: 16 }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: script === s.id ? C.accent : C.text }}>{s.label}</div>
                      <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 24 }}>
              <Btn onClick={onClose}>Cancel</Btn>
              <Btn primary disabled={!name.trim()} onClick={() => setStep(2)}>Next: Upload leads →</Btn>
            </div>
          </div>
        )}
        {step === 2 && (
          <div style={{ padding: "22px 24px" }}>
            {uploadPhase === "idle" && (
              <>
                <div onClick={triggerUpload} style={{ border: `2px dashed ${C.border}`, borderRadius: 12, padding: "36px 24px", textAlign: "center", cursor: "pointer", marginBottom: 18 }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>📊</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: C.text, marginBottom: 4 }}>Drop your Excel or CSV file here</div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 14 }}>Supports .xlsx, .xls, .csv · Max 50MB</div>
                  <Btn primary sm>Browse files</Btn>
                </div>
                <div style={{ background: "#FFFBEB", borderRadius: 8, padding: "10px 14px", fontSize: 11, color: "#92400E", border: `1px solid ${C.warmBdr}` }}>
                  💡 Required columns: phone number and lead name.
                </div>
              </>
            )}
            {uploadPhase === "uploading" && (
              <div style={{ textAlign: "center", padding: "40px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>⏳</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: C.text, marginBottom: 6 }}>Reading your file…</div>
                <div style={{ height: 4, background: C.border, borderRadius: 2, overflow: "hidden", marginTop: 18 }}>
                  <div style={{ height: "100%", background: C.accent, borderRadius: 2, animation: "progbar 1.4s ease-out forwards" }} />
                </div>
                <style>{`@keyframes progbar{from{width:0%}to{width:95%}}`}</style>
              </div>
            )}
            {uploadPhase === "mapped" && !launched && (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 10, background: C.greenBg, border: `1px solid ${C.greenBdr}`, marginBottom: 24 }}>
                  <span style={{ fontSize: 22 }}>✅</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#065F46" }}>leads_dec_batch.xlsx ready</div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>320 leads detected · Phone & name columns auto-mapped</div>
                  </div>
                  <button onClick={() => setUploadPhase("idle")} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 12, fontWeight: 500 }}>Change</button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Btn onClick={() => setStep(1)}>← Back</Btn>
                  <Btn primary onClick={handleLaunch} disabled={launching} style={{ background: C.green, borderColor: C.green, minWidth: 170, textAlign: "center", fontSize: 14 }}>
                    {launching ? "Launching…" : "🚀 Launch Campaign"}
                  </Btn>
                </div>
              </>
            )}
            {launched && (
              <div style={{ textAlign: "center", padding: "32px 24px" }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>🚀</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 6 }}>Campaign launched!</div>
                <div style={{ fontSize: 13, color: C.muted, marginBottom: 14 }}>{name}</div>
                <div style={{ display: "inline-flex", gap: 16, padding: "10px 20px", background: C.greenBg, borderRadius: 9, border: `1px solid ${C.greenBdr}` }}>
                  <span style={{ fontSize: 12, color: C.green, fontWeight: 600 }}>✓ 320 leads queued</span>
                  <span style={{ fontSize: 12, color: C.green, fontWeight: 600 }}>⚡ First call in ~2 min</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── DASHBOARD ────────────────────────────────────────────────────────
function Dashboard({ onLeadClick, openCampaign }) {
  return (
    <div style={{ padding: 26, minHeight: "100vh", background: C.bg }}>
      {/* Minutes Balance Banner */}
      {(() => {
        const totalMins = 1200, usedMins = 347, remaining = totalMins - usedMins;
        const pct = Math.round((remaining / totalMins) * 100);
        const low = remaining < 200;
        const barColor = remaining < 200 ? C.hot : remaining < 500 ? C.warm : C.green;
        return (
          <div style={{ background: C.card, border: `1px solid ${low ? C.hotBdr : C.border}`, borderRadius: 12, padding: "14px 20px", marginBottom: 18, display: "flex", alignItems: "center", gap: 20, boxShadow: low ? "0 0 0 3px #FEE2E2" : "none", transition: "box-shadow .3s" }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: low ? "#FEF2F2" : "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{low ? "⚠️" : "🎙️"}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: low ? C.hot : C.text, letterSpacing: "-1px", lineHeight: 1 }}>{remaining.toLocaleString()}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.muted }}>minutes remaining</span>
                {low && <span style={{ fontSize: 10, fontWeight: 700, background: C.hotBg, color: C.hot, border: `1px solid ${C.hotBdr}`, borderRadius: 8, padding: "2px 8px" }}>Low balance</span>}
              </div>
              <div style={{ background: C.bg, borderRadius: 4, height: 5, overflow: "hidden" }}>
                <div style={{ height: "100%", background: barColor, width: `${pct}%`, borderRadius: 4, transition: "width .4s" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: C.muted }}>
                <span>{usedMins.toLocaleString()} mins used</span>
                <span>{pct}% remaining of {totalMins.toLocaleString()} purchased</span>
              </div>
            </div>
            <div style={{ width: 1, height: 44, background: C.border, flexShrink: 0 }} />
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 2 }}>Rate</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.text, letterSpacing: "-.5px" }}>₹7<span style={{ fontSize: 11, fontWeight: 500, color: C.muted }}>/min</span></div>
            </div>
            <div style={{ width: 1, height: 44, background: C.border, flexShrink: 0 }} />
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 2 }}>Balance value</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.green, letterSpacing: "-.5px" }}>₹{(remaining * 7).toLocaleString()}</div>
            </div>
          </div>
        );
      })()}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Good morning, Himanshu 👋</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>Wednesday, 20 Dec 2024  ·  2 campaigns active</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 13px", fontSize: 12, color: C.muted }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, display: "inline-block" }} />3 calls active now
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, marginBottom: 22 }}>
        {[["Calls Today", "94", "↑ 23% vs yesterday", C.accent, "📞"], ["Hot Leads", "2", "Immediate action needed", C.hot, "🔥"], ["Qualified", "4", "Ready for sales handoff", C.green, "✓"], ["Warm Leads", "1", "Follow-up required", C.warm, "⚡"], ["Junk", "1", "Wrong no. / not interested", "#9CA3AF", "✕"]].map(([l, v, s, c, ic], i) => (
          <Card key={i} style={{ padding: "15px 17px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", fontWeight: 600, marginBottom: 5 }}>{l}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: c, letterSpacing: "-1.2px", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>{s}</div>
              </div>
              <span style={{ fontSize: 18, opacity: .7 }}>{ic}</span>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 14, marginBottom: 14 }}>
        {/* Hot leads */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFFBFB" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 18 }}>🔥</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: C.text }}>Hot leads — act now</span>
            </div>
            <span style={{ background: C.hotBg, color: C.hot, border: `1px solid ${C.hotBdr}`, borderRadius: 10, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{HOT_LEADS.length} leads</span>
          </div>
          {HOT_LEADS.map(lead => (
            <div key={lead.id} onClick={() => onLeadClick(lead)}
              style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, cursor: "pointer", transition: "background .1s" }}
              onMouseEnter={e => e.currentTarget.style.background = C.hotBg} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Avatar name={lead.name} size={36} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{lead.name}</span>
                    <span style={{ fontSize: 10, color: C.muted, flexShrink: 0, marginLeft: 8 }}>{lead.ago}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 5 }}>
                    <CallTypeBadge type={lead.callType} />
                    <span style={{ fontSize: 11, color: C.muted }}>{lead.budget} · {lead.config} · {lead.timeline}</span>
                  </div>
                  <div style={{ fontSize: 11, color: C.text, background: "#FAFBFC", borderRadius: 6, padding: "5px 8px", lineHeight: 1.5, borderLeft: `2px solid ${C.accent}` }}>
                    {lead.aiSummary}
                  </div>
                  <div style={{ marginTop: 6, fontSize: 10, color: C.accent, fontWeight: 600 }}>
                    ➜ Next: {lead.nextAction}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Card>

        {/* Campaigns snapshot */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: 13, color: C.text }}>Active campaigns</span>
            <span onClick={openCampaign} style={{ fontSize: 11, color: C.accent, cursor: "pointer", fontWeight: 500 }}>View all →</span>
          </div>
          {[
            { name: "Prestige Lakeside — Live", type: "crm", called: 47, hot: 2, qualified: 4 },
            { name: "Prestige Dec Batch", type: "cold", total: 320, called: 187, hot: 8, qualified: 32 },
          ].map((cp, i) => (
            <div key={i} style={{ padding: "13px 18px", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ fontWeight: 600, fontSize: 12, color: C.text, flex: 1, paddingRight: 8, lineHeight: 1.3 }}>{cp.name}</div>
                <span style={{ background: cp.type === "crm" ? C.greenBg : C.accentLt, color: cp.type === "crm" ? C.green : C.accent, borderRadius: 8, padding: "1px 7px", fontSize: 9, fontWeight: 600, flexShrink: 0 }}>{cp.type === "crm" ? "Live" : "Running"}</span>
              </div>
              {cp.total && <div style={{ background: C.bg, borderRadius: 3, height: 4, overflow: "hidden", marginBottom: 8 }}><div style={{ height: "100%", background: C.accent, width: `${Math.round(cp.called / cp.total * 100)}%`, borderRadius: 3 }} /></div>}
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ background: C.hotBg, borderRadius: 5, padding: "4px 8px", flex: 1, textAlign: "center" }}><div style={{ fontSize: 13, fontWeight: 700, color: C.hot }}>{cp.hot}</div><div style={{ fontSize: 9, color: C.hot }}>Hot</div></div>
                <div style={{ background: C.accentLt, borderRadius: 5, padding: "4px 8px", flex: 1, textAlign: "center" }}><div style={{ fontSize: 13, fontWeight: 700, color: C.accent }}>{cp.qualified}</div><div style={{ fontSize: 9, color: C.accent }}>Qualified</div></div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

// ── CAMPAIGNS ────────────────────────────────────────────────────────
const initCampaigns = [
  { id: 1, type: "crm", name: "Prestige Lakeside — Live Enquiries", status: "active", called: 47, hot: 11, qualified: 18, crm: "LeadSquared", since: "Dec 15", script: "property_enquiry" },
  { id: 2, type: "crm", name: "Sobha Hartland — CRM Sync", status: "active", called: 23, hot: 5, qualified: 8, crm: "Salesforce", since: "Dec 18", script: "requirement_gathering" },
  { id: 3, type: "cold", name: "Prestige Lakeside — Dec Batch", status: "active", total: 320, called: 187, hot: 8, qualified: 32, uploaded: "Dec 18", script: "cold_call" },
  { id: 4, type: "cold", name: "Brigade Mysuru — Nov Remainder", status: "completed", total: 200, called: 200, hot: 6, qualified: 42, uploaded: "Nov 30", script: "cold_call" },
];
const scriptLabel = { property_enquiry: "Property Enquiry Call", requirement_gathering: "Requirement Gathering Call", cold_call: "Cold Call" };

function CrmCampaignCard({ cp }) {
  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: "#F0FDF4" }}>
        <span style={{ fontSize: 15 }}>🔗</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{cp.name}</div>
          <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>Connected to <span style={{ fontWeight: 600, color: C.green }}>{cp.crm}</span> · Live since {cp.since}</div>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: C.greenBg, color: C.green, border: `1px solid ${C.greenBdr}` }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, display: "inline-block", animation: "pulse2 2s ease-in-out infinite" }} />Live
        </span>
      </div>
      <div style={{ padding: "14px 18px" }}>
        <div style={{ fontSize: 10, color: C.muted, marginBottom: 10 }}>Script: <span style={{ fontWeight: 600, color: C.text }}>{scriptLabel[cp.script]}</span> · Leads ingested in real-time from CRM</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
          {[["Calls Made", cp.called, "📞", C.accent], ["Qualified", cp.qualified, "✓", C.green], ["Hot", cp.hot, "🔥", C.hot]].map(([l, v, ic, c]) => (
            <div key={l} style={{ background: C.bg, borderRadius: 8, padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: c, letterSpacing: "-.5px" }}>{v}</div>
              <div style={{ fontSize: 9, color: C.muted, marginTop: 2 }}>{ic} {l}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
function ColdCampaignCard({ cp }) {
  const pct = Math.round((cp.called / cp.total) * 100);
  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: cp.status === "completed" ? "#F8FAFC" : "#FAFBFF" }}>
        <span style={{ fontSize: 15 }}>📊</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{cp.name}</div>
          <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>Excel upload · {cp.total} leads · Uploaded {cp.uploaded}</div>
        </div>
        <span style={{ padding: "3px 10px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: cp.status === "active" ? C.accentLt : C.bg, color: cp.status === "active" ? C.accent : C.muted, border: `1px solid ${cp.status === "active" ? C.accent : C.border}` }}>
          {cp.status === "active" ? "● Running" : "✓ Completed"}
        </span>
      </div>
      <div style={{ padding: "14px 18px" }}>
        <div style={{ fontSize: 10, color: C.muted, marginBottom: 8 }}>Script: <span style={{ fontWeight: 600, color: C.text }}>{scriptLabel[cp.script]}</span></div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.muted, marginBottom: 5 }}>
            <span>{cp.called} of {cp.total} called</span><span style={{ fontWeight: 600 }}>{pct}% complete</span>
          </div>
          <div style={{ background: C.bg, borderRadius: 4, height: 5, overflow: "hidden" }}><div style={{ height: "100%", background: cp.status === "active" ? C.accent : "#94A3B8", width: `${pct}%`, borderRadius: 4 }} /></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {[["Total", cp.total, "📋", "#64748B"], ["Called", cp.called, "📞", C.accent], ["Qualified", cp.qualified, "✓", C.green], ["Hot", cp.hot, "🔥", C.hot]].map(([l, v, ic, c]) => (
            <div key={l} style={{ background: C.bg, borderRadius: 8, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: c, letterSpacing: "-.5px" }}>{v}</div>
              <div style={{ fontSize: 9, color: C.muted, marginTop: 2 }}>{ic} {l}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
function CampaignsTab({ onShowCreate }) {
  const crm = initCampaigns.filter(c => c.type === "crm");
  const cold = initCampaigns.filter(c => c.type === "cold");
  return (
    <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Campaigns</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{crm.length} CRM-connected · {cold.length} cold calling</div>
        </div>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, background: C.green, borderRadius: 2 }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>CRM Connected Campaigns</span>
          <span style={{ fontSize: 11, color: C.muted }}>— Leads flow in automatically from your CRM</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{crm.map(cp => <CrmCampaignCard key={cp.id} cp={cp} />)}</div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 3, height: 16, background: C.accent, borderRadius: 2 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Cold Calling Campaigns</span>
            <span style={{ fontSize: 11, color: C.muted }}>— Upload an Excel file to start</span>
          </div>
          <button onClick={onShowCreate} style={{ display: "flex", alignItems: "center", gap: 6, background: C.accent, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
            <span style={{ fontSize: 14 }}>📊</span> Upload & Launch
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{cold.map(cp => <ColdCampaignCard key={cp.id} cp={cp} />)}</div>
      </div>
    </div>
  );
}

// ── LEADS ─────────────────────────────────────────────────────────────
function LeadDetailPanel({ lead, onClose }) {
  const tm = CALL_TYPE_META[lead.callType] || {};
  const Row = ({ l, v }) => v && v !== "—" ? (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid #F8FAFC`, fontSize: 11 }}>
      <span style={{ color: C.muted, fontWeight: 500, flexShrink: 0, marginRight: 12 }}>{l}</span>
      <span style={{ color: C.text, fontWeight: 500, textAlign: "right" }}>{v}</span>
    </div>
  ) : null;
  return (
    <div style={{ width: 300, background: C.card, borderLeft: `1px solid ${C.border}`, overflow: "auto", flexShrink: 0 }}>
      <div style={{ padding: "14px 17px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: C.card, zIndex: 1 }}>
        <span style={{ fontWeight: 700, fontSize: 13, color: C.text }}>Lead Detail</span>
        <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 14, cursor: "pointer", color: C.muted }}>✕</button>
      </div>
      <div style={{ padding: 17 }}>
        {/* Identity */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, padding: 12, background: C.bg, borderRadius: 9 }}>
          <Avatar name={lead.name} size={40} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 3 }}>{lead.name}</div>
            <div style={{ fontSize: 11, color: C.muted, marginBottom: 5 }}>{lead.phone}</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}><ScoreBadge score={lead.score} /><CallTypeBadge type={lead.callType} /></div>
          </div>
        </div>

        {/* Call outcome */}
        <div style={{ background: lead.score === "hot" ? C.hotBg : lead.score === "qualified" ? C.greenBg : C.accentLt, border: `1px solid ${lead.score === "hot" ? C.hotBdr : lead.score === "qualified" ? C.greenBdr : C.accentLt}`, borderRadius: 8, padding: "8px 12px", marginBottom: 14, fontSize: 11 }}>
          <div style={{ fontWeight: 600, color: C.muted, marginBottom: 2, fontSize: 10, textTransform: "uppercase", letterSpacing: ".4px" }}>Call Outcome</div>
          <div style={{ fontWeight: 700, color: lead.score === "hot" ? C.hot : lead.score === "qualified" ? C.green : C.accent, fontSize: 13 }}>{lead.callOutcome}</div>
        </div>

        {/* Type-specific fields */}
        {lead.callType === "property_enquiry" && <>
          <Row l="Property Enquired" v={lead.propertyEnquired} />
          <Row l="Configuration" v={lead.config} />
          <Row l="Budget" v={lead.budget} />
          <Row l="Preferred Location" v={lead.location} />
          <Row l="Purpose" v={lead.purpose} />
          <Row l="Purchase Timeline" v={lead.timeline} />
          <Row l="Objections" v={lead.objections} />
        </>}
        {lead.callType === "requirement_gathering" && <>
          <Row l="Preferred Area" v={lead.preferredArea} />
          <Row l="Property Type" v={lead.propertyType} />
          <Row l="Configuration" v={lead.config} />
          <Row l="Budget" v={lead.budget} />
          <Row l="Purpose" v={lead.purpose} />
          <Row l="Purchase Timeline" v={lead.timeline} />
          <Row l="Loan Required" v={lead.loanRequired} />
          <Row l="Property Match" v={lead.propertyMatchStatus} />
        </>}
        {lead.callType === "cold_call" && <>
          <Row l="Interested in Buying" v={lead.interestedInBuying} />
          <Row l="Purpose" v={lead.purpose} />
          <Row l="Preferred Area" v={lead.preferredArea} />
          <Row l="Property Type" v={lead.propertyType} />
          <Row l="Configuration" v={lead.config} />
          <Row l="Budget" v={lead.budget} />
          <Row l="Purchase Timeline" v={lead.timeline} />
          <Row l="Interest Level" v={lead.interestLevel} />
        </>}

        {/* AI Summary */}
        <div style={{ marginTop: 14, marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 6 }}>🤖 AI Call Summary</div>
          <div style={{ background: C.bg, borderRadius: 7, padding: 10, fontSize: 11, color: C.text, lineHeight: 1.6, borderLeft: `3px solid ${C.accent}` }}>{lead.aiSummary}</div>
        </div>

        {/* Next action */}
        <div style={{ background: "#FFFBEB", border: `1px solid ${C.warmBdr}`, borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#92400E", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".4px" }}>➜ Next Action</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 4 }}>{lead.nextAction}</div>
          {lead.followUpDate !== "—" && <div style={{ fontSize: 11, color: C.muted }}>📅 {lead.followUpDate} at {lead.followUpTime}</div>}
        </div>
      </div>
    </div>
  );
}

function LeadsTab() {
  const [sel, setSel] = useState(null);
  const [scoref, setScoref] = useState("all");
  const [typef, setTypef] = useState("all");
  const [showLegend, setShowLegend] = useState(true);

  const filtered = ALL_LEADS.filter(l => (scoref === "all" || l.score === scoref) && (typef === "all" || l.callType === typef));

  return (
    <div style={{ display: "flex", height: "100%", background: C.bg }}>
      <div style={{ flex: 1, padding: 26, overflow: "auto", minWidth: 0 }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Leads</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{ALL_LEADS.length} total · {ALL_LEADS.filter(l => l.score === "hot").length} hot · {ALL_LEADS.filter(l => l.score === "qualified").length} qualified · {ALL_LEADS.filter(l => l.score === "junk").length} junk</div>
        </div>

        {/* Lead categories legend */}
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, marginBottom: 16, overflow: "hidden" }}>
          <div onClick={() => setShowLegend(s => !s)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", cursor: "pointer" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: ".5px" }}>📖 Lead Category Definitions</span>
            <span style={{ fontSize: 11, color: C.muted }}>{showLegend ? "▲ Hide" : "▼ Show"}</span>
          </div>
          {showLegend && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0, borderTop: `1px solid ${C.border}` }}>
              {Object.entries(SCORE_META).map(([key, m], i, arr) => (
                <div key={key} style={{ padding: "12px 14px", borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : "none", background: m.bg }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
                    <ScoreBadge score={key} />
                  </div>
                  <div style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>{m.def}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 3, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: 3 }}>
            {["all", "hot", "qualified", "warm", "cold", "junk"].map(s => (
              <button key={s} onClick={() => setScoref(s)}
                style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "none", background: scoref === s ? C.accent : "transparent", color: scoref === s ? "#fff" : C.muted, transition: "all .12s", textTransform: "capitalize" }}>{s === "all" ? "All scores" : s.charAt(0).toUpperCase() + s.slice(1)}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 3, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: 3 }}>
            {[["all", "All types"], ["property_enquiry", "Enquiry"], ["requirement_gathering", "Requirement"], ["cold_call", "Cold Call"]].map(([id, l]) => (
              <button key={id} onClick={() => setTypef(id)}
                style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "none", background: typef === id ? C.accent : "transparent", color: typef === id ? "#fff" : C.muted, transition: "all .12s" }}>{l}</button>
            ))}
          </div>
        </div>

        {/* Table */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead><tr style={{ background: "#F8FAFC" }}>
              {["Lead", "Call Type", "Score", "Call Outcome", "Budget", "Timeline", "Next Action", "Follow-up"].map(h => (
                <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontSize: 9, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>{filtered.map(lead => (
              <tr key={lead.id} style={{ borderBottom: `1px solid ${C.border}`, cursor: "pointer", background: sel?.id === lead.id ? C.accentLt : undefined }}
                onClick={() => setSel(lead)}
                onMouseEnter={e => { if (sel?.id !== lead.id) e.currentTarget.style.background = "#F8FAFC"; }}
                onMouseLeave={e => { if (sel?.id !== lead.id) e.currentTarget.style.background = "transparent"; }}>
                <td style={{ padding: "10px 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <Avatar name={lead.name} size={26} />
                    <div>
                      <div style={{ fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>{lead.name}</div>
                      <div style={{ fontSize: 10, color: C.muted }}>{lead.phone}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: "10px 12px" }}><CallTypeBadge type={lead.callType} /></td>
                <td style={{ padding: "10px 12px" }}><ScoreBadge score={lead.score} /></td>
                <td style={{ padding: "10px 12px", color: C.text, fontSize: 11, maxWidth: 130, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.callOutcome}</td>
                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.budget || "—"}</td>
                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap" }}>{lead.timeline || "—"}</td>
                <td style={{ padding: "10px 12px", color: C.accent, fontSize: 10, fontWeight: 500, maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.nextAction}</td>
                <td style={{ padding: "10px 12px", color: C.muted, whiteSpace: "nowrap", fontSize: 10 }}>{lead.followUpDate !== "—" ? `${lead.followUpDate}, ${lead.followUpTime}` : "—"}</td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
      </div>
      {sel && <LeadDetailPanel lead={sel} onClose={() => setSel(null)} />}
    </div>
  );
}

// ── CALL LOG ──────────────────────────────────────────────────────────
function CallsTab() {
  const [exp, setExp] = useState(null);
  return (
    <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Call Log</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>All calls with AI summaries, outcomes, and next actions</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
        {[["Calls Today", "94", "Total attempted"], ["Pickup Rate", "74%", "35 of 47 answered"], ["Avg Duration", "2:34", "Per completed call"]].map(([l, v, s], i) => (
          <Card key={i} style={{ padding: "13px 16px" }}>
            <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", fontWeight: 600, marginBottom: 4 }}>{l}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: "-.8px" }}>{v}</div>
            <div style={{ fontSize: 10, color: C.muted, marginTop: 3 }}>{s}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {CALLS.map(call => (
          <Card key={call.id} style={{ padding: 0, overflow: "hidden" }}>
            <div onClick={() => setExp(exp === call.id ? null : call.id)}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 18px", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#F8FAFC"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: call.status === "completed" ? C.accentLt : C.hotBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>
                {call.status === "completed" ? "📞" : "📵"}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: C.text, marginBottom: 2 }}>{call.lead}</div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}><CallTypeBadge type={call.callType} /><span style={{ fontSize: 10, color: C.muted }}>{call.date}</span></div>
              </div>
              <ScoreBadge score={call.score} />
              <div style={{ textAlign: "center", flexShrink: 0, minWidth: 50 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{call.dur || "—"}</div>
                <div style={{ fontSize: 9, color: C.muted }}>duration</div>
              </div>
              <span style={{ padding: "2px 9px", borderRadius: 9, fontSize: 10, fontWeight: 600, background: call.status === "completed" ? C.accentLt : C.hotBg, color: call.status === "completed" ? C.accent : C.hot, flexShrink: 0, whiteSpace: "nowrap" }}>{call.status === "completed" ? "Completed" : "No Answer"}</span>
              <span style={{ color: C.muted, fontSize: 11, flexShrink: 0 }}>{exp === call.id ? "▲" : "▼"}</span>
            </div>
            {exp === call.id && (
              <div style={{ borderTop: `1px solid ${C.border}`, padding: "16px 18px", background: "#FAFBFC" }}>
                {/* Outcome */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                  <div style={{ background: C.card, borderRadius: 8, padding: "10px 13px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: 9, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 4 }}>Call Outcome</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{call.callOutcome}</div>
                  </div>
                  <div style={{ background: "#FFFBEB", borderRadius: 8, padding: "10px 13px", border: `1px solid ${C.warmBdr}` }}>
                    <div style={{ fontSize: 9, color: "#92400E", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 4 }}>➜ Next Action</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{call.nextAction}</div>
                    <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>📅 {call.followUp}</div>
                  </div>
                </div>
                {/* AI Summary */}
                <div style={{ background: C.accentLt, borderRadius: 7, padding: "10px 12px", marginBottom: call.transcript.length ? 14 : 0, fontSize: 11, color: C.text, lineHeight: 1.6, borderLeft: `3px solid ${C.accent}` }}>
                  <span style={{ fontWeight: 600, color: C.accent }}>🤖 AI Summary: </span>{call.summary}
                </div>
                {/* Transcript */}
                {call.transcript.length > 0 && (
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 8 }}>Transcript</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, maxHeight: 220, overflow: "auto" }}>
                      {call.transcript.map((line, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ fontSize: 9, color: C.muted, flexShrink: 0, marginTop: 4, width: 26 }}>{line.t}</span>
                          <div style={{ padding: "7px 10px", borderRadius: 7, fontSize: 11, lineHeight: 1.5, maxWidth: "88%", background: line.r === "AI" ? C.accentLt : C.card, color: line.r === "AI" ? C.accent : C.text, border: `1px solid ${line.r === "AI" ? C.accentLt : C.border}` }}>
                            <span style={{ fontSize: 9, fontWeight: 700, display: "block", marginBottom: 1, opacity: .7 }}>{line.r === "AI" ? "🤖 AI Agent" : "👤 Lead"}</span>
                            {line.tx}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── KNOWLEDGE BASE ────────────────────────────────────────────────────
const FILE_ICONS = { "pdf": "📄", "xlsx": "📊", "xls": "📊", "doc": "📝", "docx": "📝" };
const initInventory = [
  { id: 1, name: "Prestige Lakeside", location: "Sarjapur Road, Bengaluru", bhk: ["2BHK", "3BHK", "4BHK"], priceRange: "₹85L – ₹1.8 Cr", possession: "Ready to move", units: 24, facing: ["East", "North"], amenities: "Clubhouse, Pool, Gym, Jogging Track", highlight: "Last few units left. RERA approved.", status: "active" },
  { id: 2, name: "Sobha Hartland", location: "Whitefield, Bengaluru", bhk: ["2BHK", "3BHK"], priceRange: "₹72L – ₹1.2 Cr", possession: "Dec 2025", units: 58, facing: ["East", "West", "North"], amenities: "Rooftop Garden, EV Charging, Kids Play Area", highlight: "Pre-launch pricing available for limited period.", status: "active" },
  { id: 3, name: "Brigade Lakefront", location: "Mysuru Road, Bengaluru", bhk: ["1BHK", "2BHK", "3BHK"], priceRange: "₹45L – ₹95L", possession: "Jun 2026", units: 112, facing: ["East", "South"], amenities: "Lake View, Co-working Space, Gym", highlight: "Investment-friendly. Rental yield ~4.2% p.a.", status: "active" },
];
const initFaqs = [
  { id: 1, q: "What documents are required for booking?", a: "Aadhar, PAN, 3 months bank statement, and 2 passport photos. For loan cases, salary slips of last 3 months." },
  { id: 2, q: "Is home loan available?", a: "Yes, we have tie-ups with SBI, HDFC, ICICI, and Axis Bank. Our team can assist with pre-approval within 48 hours." },
  { id: 3, q: "What is the booking amount?", a: "Booking amount is ₹1 lakh for all projects. Fully adjustable against the final cost." },
  { id: 4, q: "Can NRIs invest?", a: "Yes, all projects are NRI-eligible. Payment via NRE/NRO account. POA assistance available." },
];
const initUploadedFiles = [
  { id: 1, name: "Prestige_Inventory_Dec24.pdf", type: "pdf", size: "2.4 MB", uploaded: "Dec 15", status: "processed", properties: 2 },
  { id: 2, name: "Brigade_Units_Nov24.xlsx", type: "xlsx", size: "540 KB", uploaded: "Nov 30", status: "processed", properties: 1 },
];

function InventorySection({ inventory, setInventory, openEditProp, delProp }) {
  const [files, setFiles] = useState(initUploadedFiles);
  const [phase, setPhase] = useState("idle");
  const [dragOver, setDragOver] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [newFileType, setNewFileType] = useState("pdf");
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");

  const triggerUpload = (fname, ftype) => {
    setNewFileName(fname); setNewFileType(ftype || "pdf"); setPhase("uploading"); setProgress(0);
    const labels = ["Reading file…", "Extracting property data…", "Parsing pricing & inventory…", "Mapping to knowledge base…"];
    let step = 0;
    const iv = setInterval(() => {
      step++; setProgress(Math.min(step * 26, 95)); setProgressLabel(labels[Math.min(step - 1, labels.length - 1)]);
      if (step >= 4) {
        clearInterval(iv); setPhase("processing");
        setTimeout(() => { setPhase("done"); setFiles(f => [{ id: Date.now(), name: fname, type: ftype || "pdf", size: "1.2 MB", uploaded: "Just now", status: "processed", properties: 2 }, ...f]); setTimeout(() => setPhase("idle"), 2200); }, 900);
      }
    }, 600);
  };
  const handleDrop = e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) triggerUpload(f.name, f.name.split(".").pop()); };
  const handlePick = () => { const names = ["Sobha_Brochure_Q1.pdf", "Units_Jan25.xlsx", "Brigade_Inventory.docx"]; const n = names[Math.floor(Math.random() * names.length)]; triggerUpload(n, n.split(".").pop()); };
  const removeFile = id => setFiles(f => f.filter(x => x.id !== id));

  return (
    <div>
      <div onDrop={handleDrop} onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
        style={{ border: `2px dashed ${dragOver ? C.accent : C.border}`, borderRadius: 14, padding: "28px 24px", background: dragOver ? C.accentLt : C.card, transition: "all .15s", marginBottom: 18, textAlign: "center" }}>
        {phase === "idle" && (<>
          <div style={{ fontSize: 36, marginBottom: 10 }}>📂</div>
          <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 4 }}>Drop your inventory file here</div>
          <div style={{ fontSize: 12, color: C.muted, marginBottom: 10 }}>The AI will extract all property details automatically</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 16 }}>
            {[["📄", "PDF"], ["📊", "Excel"], ["📝", "Word Doc"]].map(([ic, l]) => (
              <span key={l} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 6, padding: "3px 10px", fontSize: 11, color: C.muted, fontWeight: 500 }}>{ic} {l}</span>
            ))}
          </div>
          <button onClick={handlePick} style={{ background: C.accent, color: "#fff", border: "none", borderRadius: 8, padding: "9px 22px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Browse & Upload</button>
        </>)}
        {(phase === "uploading" || phase === "processing") && (
          <div style={{ padding: "8px 0" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{FILE_ICONS[newFileType] || "📄"}</div>
            <div style={{ fontWeight: 600, fontSize: 13, color: C.text, marginBottom: 2 }}>{newFileName}</div>
            <div style={{ fontSize: 11, color: C.muted, marginBottom: 14 }}>{progressLabel}</div>
            <div style={{ maxWidth: 320, margin: "0 auto", background: C.border, borderRadius: 4, height: 5, overflow: "hidden" }}>
              <div style={{ height: "100%", background: C.accent, borderRadius: 4, width: `${progress}%`, transition: "width .5s ease" }} />
            </div>
            <div style={{ fontSize: 11, color: C.accent, fontWeight: 600, marginTop: 8 }}>{progress}%</div>
          </div>
        )}
        {phase === "done" && (<div style={{ padding: "8px 0" }}><div style={{ fontSize: 32, marginBottom: 8 }}>✅</div><div style={{ fontWeight: 700, fontSize: 14, color: C.green, marginBottom: 3 }}>Inventory updated!</div><div style={{ fontSize: 12, color: C.muted }}>AI agent's knowledge base has been refreshed.</div></div>)}
      </div>
      {files.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 9 }}>Uploaded files</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {files.map(f => (
              <div key={f.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 9 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{FILE_ICONS[f.type] || "📄"}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 12, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>{f.size} · Uploaded {f.uploaded} · {f.properties} {f.properties === 1 ? "property" : "properties"} extracted</div>
                </div>
                <span style={{ background: C.greenBg, color: C.green, border: `1px solid ${C.greenBdr}`, borderRadius: 7, padding: "2px 9px", fontSize: 10, fontWeight: 600, flexShrink: 0 }}>✓ Processed</span>
                <button onClick={() => removeFile(f.id)} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 13, padding: 2, flexShrink: 0 }}>✕</button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ flex: 1, height: 1, background: C.border }} /><span style={{ fontSize: 11, color: C.muted, fontWeight: 500 }}>Extracted inventory</span><div style={{ flex: 1, height: 1, background: C.border }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {inventory.map(p => (
          <Card key={p.id} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "13px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: C.accentLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>🏢</div>
              <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{p.name}</div><div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>📍 {p.location}</div></div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ background: C.greenBg, color: C.green, border: `1px solid ${C.greenBdr}`, borderRadius: 7, padding: "2px 9px", fontSize: 10, fontWeight: 600 }}>● Active</span>
                <button onClick={() => openEditProp(p)} style={{ background: C.accentLt, color: C.accent, border: "none", borderRadius: 6, padding: "4px 11px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Edit</button>
                <button onClick={() => delProp(p.id)} style={{ background: C.hotBg, color: C.hot, border: "none", borderRadius: 6, padding: "4px 11px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Remove</button>
              </div>
            </div>
            <div style={{ padding: "13px 18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, marginBottom: 10 }}>
                {[["BHK Types", p.bhk.join(", "), "🛏"], ["Price Range", p.priceRange, "💰"], ["Possession", p.possession, "📅"], ["Units Left", p.units, "🏗"]].map(([l, v, ic]) => (
                  <div key={l} style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}>
                    <div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>{ic} {l.toUpperCase()}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                <div style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}><div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>🧭 FACING</div><div style={{ fontSize: 12, color: C.text }}>{p.facing.join(", ")}</div></div>
                <div style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}><div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>🏊 AMENITIES</div><div style={{ fontSize: 12, color: C.text }}>{p.amenities}</div></div>
              </div>
              {p.highlight && <div style={{ marginTop: 9, background: "#FFFBEB", border: `1px solid ${C.warmBdr}`, borderRadius: 7, padding: "7px 11px", fontSize: 11, color: "#92400E" }}>💡 <span style={{ fontWeight: 600 }}>Agent highlight:</span> {p.highlight}</div>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function KnowledgeBaseTab() {
  const [inventory, setInventory] = useState(initInventory);
  const [faqs, setFaqs] = useState(initFaqs);
  const [activeSection, setActiveSection] = useState("inventory");
  const [showAddProp, setShowAddProp] = useState(false);
  const [showAddFaq, setShowAddFaq] = useState(false);
  const [editProp, setEditProp] = useState(null);
  const [editFaq, setEditFaq] = useState(null);
  const emptyProp = { name: "", location: "", bhk: "2BHK, 3BHK", priceRange: "", possession: "", units: "", facing: "", amenities: "", highlight: "", status: "active" };
  const [propForm, setPropForm] = useState(emptyProp);
  const emptyFaq = { q: "", a: "" };
  const [faqForm, setFaqForm] = useState(emptyFaq);
  const openAddProp = () => { setPropForm(emptyProp); setEditProp(null); setShowAddProp(true); };
  const openEditProp = p => { setPropForm({ ...p, bhk: p.bhk.join(", "), facing: p.facing.join(", ") }); setEditProp(p.id); setShowAddProp(true); };
  const saveProp = () => { const parsed = { ...propForm, bhk: propForm.bhk.split(",").map(s => s.trim()).filter(Boolean), facing: propForm.facing.split(",").map(s => s.trim()).filter(Boolean), units: parseInt(propForm.units) || 0 }; if (editProp) setInventory(inv => inv.map(p => p.id === editProp ? { ...parsed, id: editProp } : p)); else setInventory(inv => [...inv, { ...parsed, id: Date.now() }]); setShowAddProp(false); };
  const delProp = id => setInventory(inv => inv.filter(p => p.id !== id));
  const openAddFaq = () => { setFaqForm(emptyFaq); setEditFaq(null); setShowAddFaq(true); };
  const openEditFaq = f => { setFaqForm({ q: f.q, a: f.a }); setEditFaq(f.id); setShowAddFaq(true); };
  const saveFaq = () => { if (editFaq) setFaqs(fs => fs.map(f => f.id === editFaq ? { ...faqForm, id: editFaq } : f)); else setFaqs(fs => [...fs, { ...faqForm, id: Date.now() }]); setShowAddFaq(false); };
  const delFaq = id => setFaqs(fs => fs.filter(f => f.id !== id));
  const inputStyle = { width: "100%", padding: "9px 11px", border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12, outline: "none", boxSizing: "border-box", background: "#FAFBFC", color: C.text };
  const labelStyle = { display: "block", fontSize: 11, fontWeight: 600, color: C.text, marginBottom: 5 };
  return (
    <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Knowledge Base</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>Everything the AI agent knows before picking up a call</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: C.greenBg, border: `1px solid ${C.greenBdr}`, borderRadius: 8, padding: "7px 13px" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block" }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: C.green }}>Agent is using this knowledge</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, margin: "18px 0 20px" }}>
        {[["inventory", "🏢", "Property Inventory", inventory.length], ["faqs", "❓", "FAQs & Objections", faqs.length]].map(([id, ic, l, count]) => (
          <button key={id} onClick={() => setActiveSection(id)}
            style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 16px", borderRadius: 8, border: `1.5px solid ${activeSection === id ? C.accent : C.border}`, background: activeSection === id ? C.accentLt : C.card, color: activeSection === id ? C.accent : C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all .12s" }}>
            <span>{ic}</span>{l}
            <span style={{ background: activeSection === id ? C.accent : "#E2E8F0", color: activeSection === id ? "#fff" : C.muted, borderRadius: 9, padding: "1px 7px", fontSize: 10, fontWeight: 700 }}>{count}</span>
          </button>
        ))}
      </div>
      {activeSection === "inventory" && <InventorySection inventory={inventory} setInventory={setInventory} openEditProp={openEditProp} delProp={delProp} />}
      {activeSection === "faqs" && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: C.muted }}>The agent uses these to handle objections and answer questions on calls.</div>
            <button onClick={openAddFaq} style={{ display: "flex", alignItems: "center", gap: 6, background: C.accent, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>+ Add FAQ</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqs.map((f, i) => (
              <Card key={f.id} style={{ padding: "14px 18px" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.accentLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: C.accent, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.text, marginBottom: 5 }}>Q: {f.q}</div>
                    <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, background: C.bg, borderRadius: 7, padding: "8px 11px", borderLeft: `3px solid ${C.accent}` }}>A: {f.a}</div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <button onClick={() => openEditFaq(f)} style={{ background: C.accentLt, color: C.accent, border: "none", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Edit</button>
                    <button onClick={() => delFaq(f.id)} style={{ background: C.hotBg, color: C.hot, border: "none", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Delete</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
      {showAddProp && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,14,26,.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16 }}>
          <div style={{ background: C.card, borderRadius: 16, width: "100%", maxWidth: 540, border: `1px solid ${C.border}`, maxHeight: "90vh", overflow: "auto" }}>
            <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: C.card, zIndex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{editProp ? "Edit Property" : "Add Property"}</div>
              <button onClick={() => setShowAddProp(false)} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 18 }}>✕</button>
            </div>
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
              {[["name", "Project Name", "e.g. Prestige Lakeside", "text"], ["location", "Location", "e.g. Sarjapur Road, Bengaluru", "text"], ["priceRange", "Price Range", "e.g. ₹85L – ₹1.8 Cr", "text"], ["possession", "Possession", "e.g. Ready to move / Dec 2025", "text"], ["units", "Units Available", "e.g. 24", "number"], ["bhk", "BHK Types (comma separated)", "e.g. 2BHK, 3BHK, 4BHK", "text"], ["facing", "Facing Options (comma separated)", "e.g. East, North, West", "text"], ["amenities", "Amenities", "e.g. Pool, Gym, Clubhouse", "text"], ["highlight", "Agent Highlight", "Key selling point the agent should mention on calls", "text"]].map(([k, l, ph, t]) => (
                <div key={k}><label style={labelStyle}>{l}</label>
                  {k === "highlight" ? <textarea value={propForm[k]} onChange={e => setPropForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} rows={2} style={{ ...inputStyle, resize: "vertical" }} />
                    : <input type={t} value={propForm[k]} onChange={e => setPropForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} style={inputStyle} />}
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 4 }}>
                <Btn onClick={() => setShowAddProp(false)}>Cancel</Btn>
                <Btn primary disabled={!propForm.name.trim() || !propForm.location.trim()} onClick={saveProp}>{editProp ? "Save Changes" : "Add Property"}</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAddFaq && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,14,26,.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16 }}>
          <div style={{ background: C.card, borderRadius: 16, width: "100%", maxWidth: 480, border: `1px solid ${C.border}` }}>
            <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{editFaq ? "Edit FAQ" : "Add FAQ"}</div>
              <button onClick={() => setShowAddFaq(false)} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 18 }}>✕</button>
            </div>
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div><label style={labelStyle}>Question</label><input value={faqForm.q} onChange={e => setFaqForm(f => ({ ...f, q: e.target.value }))} placeholder="e.g. Is home loan available?" style={inputStyle} /></div>
              <div><label style={labelStyle}>Answer <span style={{ fontWeight: 400, color: C.muted }}>(the agent will speak this)</span></label><textarea value={faqForm.a} onChange={e => setFaqForm(f => ({ ...f, a: e.target.value }))} placeholder="Write the exact answer the AI agent should give..." rows={4} style={{ ...inputStyle, resize: "vertical" }} /></div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 4 }}>
                <Btn onClick={() => setShowAddFaq(false)}>Cancel</Btn>
                <Btn primary disabled={!faqForm.q.trim() || !faqForm.a.trim()} onClick={saveFaq}>{editFaq ? "Save Changes" : "Add FAQ"}</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── LOGIN ─────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const handle = () => { if (!email.trim() || !pass.trim()) { setErr("Please enter both email and password."); return; } setErr(""); setLoading(true); setTimeout(() => { setLoading(false); onLogin(email); }, 1600); };
  const dots = [0, 1, 2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,255,255,.85)", display: "inline-block", animation: `dotbounce 1.2s ease-in-out ${i * .18}s infinite` }} />);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0B1120 0%,#1A2540 55%,#0F2042 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif", position: "relative", overflow: "hidden" }}>
      <style>{`@keyframes dotbounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-8px)}}@keyframes fadeup{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}.login-input:focus{border-color:#6366F1!important;box-shadow:0 0 0 3px rgba(99,102,241,.15)!important;}.login-btn:hover:not(:disabled){background:#4F46E5!important;}`}</style>
      <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "#6366F1", opacity: .08, top: "-120px", right: "-80px", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-60px", width: 350, height: 350, borderRadius: "50%", background: "#8B5CF6", opacity: .06, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ background: "rgba(255,255,255,.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, width: "100%", maxWidth: 420, padding: "38px 36px", animation: "fadeup .5s ease-out forwards", boxShadow: "0 24px 60px rgba(0,0,0,.4)" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#6366F1,#8B5CF6)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 14, boxShadow: "0 8px 24px rgba(99,102,241,.4)" }}>📞</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#F8FAFC", letterSpacing: "-.6px", marginBottom: 4 }}>VoiceIQ</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>AI Calling Platform · Real Estate</div>
        </div>
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#F1F5F9", marginBottom: 4 }}>Welcome back</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>Sign in to your account to continue</div>
        </div>
        {err && <div style={{ background: "rgba(239,68,68,.12)", border: "1px solid rgba(239,68,68,.3)", borderRadius: 8, padding: "9px 13px", fontSize: 12, color: "#FCA5A5", marginBottom: 16, display: "flex", alignItems: "center", gap: 7 }}><span>⚠</span>{err}</div>}
        <div style={{ marginBottom: 14 }}>
          <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.55)", marginBottom: 6, letterSpacing: ".3px" }}>EMAIL ADDRESS</label>
          <input className="login-input" value={email} onChange={e => { setEmail(e.target.value); setErr(""); }} placeholder="you@company.com" type="email" onKeyDown={e => e.key === "Enter" && handle()}
            style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 9, fontSize: 13, color: "#F8FAFC", outline: "none", boxSizing: "border-box", caretColor: "#6366F1" }} />
        </div>
        <div style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <label style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.55)", letterSpacing: ".3px" }}>PASSWORD</label>
            <span style={{ fontSize: 11, color: "#818CF8", cursor: "pointer", fontWeight: 500 }}>Forgot password?</span>
          </div>
          <div style={{ position: "relative" }}>
            <input className="login-input" value={pass} onChange={e => { setPass(e.target.value); setErr(""); }} placeholder="••••••••" type={showPass ? "text" : "password"} onKeyDown={e => e.key === "Enter" && handle()}
              style={{ width: "100%", padding: "11px 40px 11px 14px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 9, fontSize: 13, color: "#F8FAFC", outline: "none", boxSizing: "border-box", caretColor: "#6366F1" }} />
            <button onClick={() => setShowPass(s => !s)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,.35)", fontSize: 14, lineHeight: 1, padding: 2 }}>{showPass ? "🙈" : "👁"}</button>
          </div>
        </div>
        <button className="login-btn" onClick={handle} disabled={loading}
          style={{ width: "100%", padding: "12px", background: "#6366F1", color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: "0 4px 18px rgba(99,102,241,.45)" }}>
          {loading ? <div style={{ display: "flex", gap: 6, alignItems: "center" }}>{dots}</div> : <><span>Sign in</span><span style={{ fontSize: 15 }}>→</span></>}
        </button>
        <div style={{ textAlign: "center", marginTop: 26, fontSize: 11, color: "rgba(255,255,255,.25)" }}>Don't have an account? <span style={{ color: "#818CF8", cursor: "pointer", fontWeight: 600 }}>Contact sales</span></div>
      </div>
      <div style={{ position: "absolute", bottom: 18, fontSize: 11, color: "rgba(255,255,255,.2)" }}>VoiceIQ · Secured · © 2024</div>
    </div>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────
export default function VoiceIQMVP() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [selLead, setSelLead] = useState(null);
  const handleLead = lead => { setSelLead(lead); setTab("leads"); };
  const handleLaunch = () => { setShowModal(false); };
  if (!loggedIn) return <LoginPage onLogin={() => setLoggedIn(true)} />;
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif", background: C.bg }}>
      {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onLaunch={handleLaunch} />}
      <Sidebar tab={tab} setTab={setTab} />
      <main style={{ flex: 1, overflow: "auto", minWidth: 0 }}>
        {tab === "dashboard" && <Dashboard onLeadClick={handleLead} openCampaign={() => setTab("campaigns")} />}
        {tab === "campaigns" && <CampaignsTab onShowCreate={() => setShowModal(true)} />}
        {tab === "leads" && <LeadsTab />}
        {tab === "calls" && <CallsTab />}
        {tab === "kb" && <KnowledgeBaseTab />}
      </main>
    </div>
  );
}
