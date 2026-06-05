import React, { useState } from "react";
import Sidebar from "../dashboard/components/NavBar";
import DashboardSection from "../dashboard/sections/DashboardSection";
import CampaignsSection from "../dashboard/sections/CampaignsSection";
import LeadsSection from "../dashboard/sections/LeadsSection";
import CallsSection from "../dashboard/sections/CallsSection";
import CreateCampaignModal from "../dashboard/modals/CreateCampaignModal";
import KnowledgeBaseSection from "./sections/KnowledgeBaseSection";
import { C } from "../../components/utils";
export default function DashboardMain() {
    const [tab, setTab] = useState("dashboard");
    const [showModal, setShowModal] = useState(false);
    const [selLead, setSelLead] = useState(null);

    const handleLead = lead => { setSelLead(lead); setTab("leads"); };
    const handleLaunch = () => { setShowModal(false); };

    return (
        <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif", background: C.bg }}>
            {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onLaunch={handleLaunch} />}
            <Sidebar tab={tab} setTab={setTab} />
            <main style={{ flex: 1, overflow: "auto", minWidth: 0 }}>
                {tab === "dashboard" && <DashboardSection onLeadClick={handleLead} openCampaign={() => setTab("campaigns")} />}
                {tab === "campaigns" && <CampaignsSection onShowCreate={() => setShowModal(true)} />}
                {tab === "leads" && <LeadsSection selectedLead={selLead} onLeadClick={setSelLead} />}
                {tab === "calls" && <CallsSection />}
                {tab === "kb" && <KnowledgeBaseSection />}
            </main>
        </div>
    );
}