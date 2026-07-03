import React, { useState } from "react";
import { initCampaigns } from "../utils";
import { Card, Btn, C } from "../../../components/utils";
import CrmCampaignCard from "../components/CrmCampaignCard";
import ColdCampaignCard from "../components/ColdCampaignCard";

function CampaignsSection({ data, onShowCreate }) {
  const campaigns = data?.campaigns || [];
  const stats = data?.campaigns || {};

  const crmCampaigns = campaigns.filter(
    (c) => c.campaign_type === "crm_connected"
  );

  const coldCampaigns = campaigns.filter(
    (c) => c.campaign_type === "leads_uploaded"
  );

  return (
    <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 22
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: C.text,
              letterSpacing: "-.4px"
            }}
          >
            Campaigns
          </div>

          <div
            style={{
              fontSize: 12,
              color: C.muted,
              marginTop: 3
            }}
          >
            {crmCampaigns.length} CRM-connected ·{" "}
            {coldCampaigns.length} cold campaigns
          </div>
        </div>
      </div>

      {/* CRM Campaigns */}
      <div style={{ marginBottom: 22 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12
          }}
        >
          <div
            style={{
              width: 3,
              height: 16,
              background: C.green,
              borderRadius: 2
            }}
          />

          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: C.text
            }}
          >
            CRM Connected Campaigns
          </span>

          <span
            style={{ fontSize: 11, color: C.muted }}
          >
            — Real-time leads from CRM
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {crmCampaigns.map((cp) => (
            <CrmCampaignCard
              key={cp.campaign_id}
              cp={cp}
              stat={stats[cp.campaign_id] || {}}
            />
          ))}
        </div>
      </div>

      {/* Cold Campaigns */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 3,
                height: 16,
                background: C.accent,
                borderRadius: 2
              }}
            />

            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: C.text
              }}
            >
              Cold Calling Campaigns
            </span>

            <span
              style={{ fontSize: 11, color: C.muted }}
            >
              — Upload leads via Excel
            </span>
          </div>

          <button
            onClick={onShowCreate}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: C.accent,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            <span style={{ fontSize: 14 }}>📊</span>
            Upload & Launch
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {coldCampaigns.map((cp) => (
            <ColdCampaignCard
              key={cp.campaign_id}
              cp={cp}
              stat={stats[cp.campaign_id] || {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default CampaignsSection;
