import React from "react";
import { C, Avatar } from "../../../components/utils";

const NAV = [{ id: "dashboard", e: "◼", l: "Dashboard" }, { id: "campaigns", e: "📢", l: "Campaigns" }, { id: "leads", e: "👥", l: "Leads" }, { id: "calls", e: "📞", l: "Call Log" }, { id: "kb", e: "📚", l: "Knowledge Base" }];
function Sidebar({ tab, setTab }) {
  const user_name = (localStorage.getItem("first_name") || "").trim().replace(/^./, c => c.toUpperCase());

  return (
    <div style={{ width: 210, background: C.sidebar, display: "flex", flexDirection: "column", flexShrink: 0, borderRight: "1px solid #1A2540" }}>
      <style>{`@keyframes pulse2{0%,100%{opacity:1}50%{opacity:.35}}.pls{animation:pulse2 2s ease-in-out infinite;}`}</style>
      <div style={{ padding: "20px 18px", borderBottom: "1px solid #1A2540", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>📞</div>
        <div><div style={{ color: "#F8FAFC", fontWeight: 700, fontSize: 14, letterSpacing: "-.3px" }}>VoiceIQ</div><div style={{ color: "#475569", fontSize: 10, marginTop: 1 }}>MVP · Real Estate</div></div>
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
        <Avatar name={user_name} size={28} color={C.accent} />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 8 }}><div style={{ color: "#F8FAFC", fontSize: 11, fontWeight: 600, letterSpacing: "-.3px", }}>{user_name}</div><div style={{ color: "#475569", fontSize: 10 }}>Admin</div></div>
      </div>
    </div>
  );
}


export default Sidebar