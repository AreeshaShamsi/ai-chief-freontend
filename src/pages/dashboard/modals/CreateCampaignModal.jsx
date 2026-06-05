import { useState, useRef } from "react";
import { C, Btn } from "../../../components/utils";

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

export default CreateCampaignModal;