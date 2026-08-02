import React from "react";
import { FiPlus, FiInbox } from "react-icons/fi";
import { AppButton, AppPill, C, SectionHeader, T } from "../../../components/utils";
import CrmCampaignCard from "../components/CrmCampaignCard";
import ColdCampaignCard from "../components/ColdCampaignCard";

function ActiveCallsPill({ count = 2 }) {
  return (
    <AppPill variant="neutral" dot dotColor={C.green} style={{ fontWeight: T.font.weight.semibold }}>
      {count} calls active now
    </AppPill>
  );
}

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
    <div
      style={{
        width: "100%",
        minWidth: 0,
        minHeight: "100%",
        background: C.bg,
        padding: `${T.spacing.pageCompactY}px ${T.spacing.page}px`,
        overflowX: "hidden",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
          marginBottom: 18
        }}
      >
        <div>
          <div
            style={{
              fontSize: T.font.size.pageTitle,
              fontWeight: T.font.weight.bold,
              color: C.text,
              lineHeight: "28px"
            }}
          >
            Campaigns
          </div>

          <div
            style={{
              fontSize: T.font.size.xs,
              color: C.muted,
              marginTop: 2
            }}
          >
            {crmCampaigns.length} CRM-connected&nbsp;&nbsp;
            {coldCampaigns.length} cold calling
          </div>
        </div>

      </div>

      <section>
        <SectionHeader
          title="CRM Connected Campaigns"
          helper="leads flow in automatically from your CRM"
        />

        {crmCampaigns.length === 0 ? (
          <div style={{ padding: "40px 20px", textAlign: "center", background: C.surface, borderRadius: 8, border: `1px solid ${C.border}`, color: C.muted, fontSize: T.font.size.bodySmall }}>
            <div style={{ marginBottom: 12 }}><FiInbox size={32} opacity={0.5} /></div>
            <div style={{ fontWeight: 600, color: C.text, marginBottom: 4 }}>No CRM Campaigns Found</div>
            <div>Connect your CRM to see campaigns here.</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {crmCampaigns.map((cp) => (
              <CrmCampaignCard
                key={cp.campaign_id}
                cp={cp}
                stat={stats[cp.campaign_id] || {}}
              />
            ))}
          </div>
        )}
      </section>

      <section style={{ marginTop: 16 }}>
        <SectionHeader
          title="Cold Calling Campaigns"
          helper="Upload an Excel file to start"
        />

        {coldCampaigns.length === 0 ? (
          <div style={{ padding: "40px 20px", textAlign: "center", background: C.surface, borderRadius: 8, border: `1px dashed ${C.border}`, color: C.muted, fontSize: T.font.size.bodySmall }}>
            <div style={{ marginBottom: 12 }}><FiInbox size={32} opacity={0.5} /></div>
            <div style={{ fontWeight: 600, color: C.text, marginBottom: 4 }}>No Cold Campaigns Found</div>
            <div>Upload a lead list to start your first cold campaign.</div>
            <AppButton 
              variant="outline" 
              compact 
              onClick={onShowCreate}
              style={{ marginTop: 16 }}
            >
              <FiPlus size={12} style={{ marginRight: 6 }} /> Create Campaign
            </AppButton>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {coldCampaigns.map((cp) => (
              <ColdCampaignCard
                key={cp.campaign_id}
                cp={cp}
                stat={stats[cp.campaign_id] || {}}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default CampaignsSection;
