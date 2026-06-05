import React, { useState } from "react";
import { initCampaigns } from "../utils";
import { Card, Btn, C } from "../../../components/utils";
import CrmCampaignCard from "../components/CrmCampaignCard";
import ColdCampaignCard from "../components/ColdCampaignCard";

function CampaignsSection({ onShowCreate }) {
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

export default CampaignsSection;
