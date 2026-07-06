import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/main";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handle = async () => {

    
    if (!email.trim() || !pass.trim()) {
      setErr("Please enter both email and password.");
      return;
    }

    setErr("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/company/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: email,   // using email field as username
          password: pass,
        }),
      });

      const data = await res.json();

      localStorage.setItem("name", data.name);

      localStorage.setItem("user_name", data.user_name);
      localStorage.setItem("company_id", data.id);
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      setLoading(false);

      navigate("/dashboard");

    } catch (error) {
      setLoading(false);
      setErr(error.message);
    }
  };
  const dots = [0, 1, 2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,255,255,.85)", display: "inline-block", animation: `dotbounce 1.2s ease-in-out ${i * .18}s infinite` }} />);
  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "linear-gradient(135deg,#0B1120 0%,#1A2540 55%,#0F2042 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif", position: "relative", overflow: "hidden" }}>
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <label style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.55)", letterSpacing: ".3px" }}>USER NAME</label>
          </div>
          <input className="login-input" value={email} onChange={e => { setEmail(e.target.value); setErr(""); }} placeholder="username" onKeyDown={e => e.key === "Enter" && handle()}
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
      <div style={{ position: "absolute", bottom: 18, fontSize: 11, color: "rgba(255,255,255,.2)" }}>VoiceIQ · Secured · © 2026</div>
    </div>
  );
}

export default LoginPage