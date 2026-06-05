import React, { useState } from "react";


const C = {
  bg: "#F4F6FB", card: "#FFFFFF", sidebar: "#0B1120", sideActive: "#1A2540",
  accent: "#6366F1", accentHov: "#4F46E5", accentLt: "#EEF2FF",
  text: "#0F172A", muted: "#64748B", border: "#E2E8F0", borderLt: "#F1F5F9",
  hot: "#EF4444", hotBg: "#FEF2F2", hotBdr: "#FECACA",
  warm: "#F59E0B", warmBg: "#FFFBEB", warmBdr: "#FDE68A",
  green: "#10B981", greenBg: "#ECFDF5", greenBdr: "#A7F3D0",
  purple: "#8B5CF6",
};




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

function Waveform({ playing }) {
    const b = [.3, .6, .9, .5, .7, 1, .4, .8, .6, .3, .7, .5, .9, .4, .6, .8, .3, 1, .5, .7, .4, .9, .6, .3, .8, .5, .7, .4, .6, .9, .3, .5, .8, .4, .6];
    return <div style={{ display: "flex", gap: 2, alignItems: "center", height: 24, flex: 1 }}>{b.map((h, i) => <div key={i} style={{ width: 3, height: `${Math.round(h * 100)}%`, background: playing ? C.accent : "#CBD5E1", borderRadius: 2, transition: "background .2s" }} />)}</div>;
}

export { Avatar, Waveform, Card, Btn, C };