import React, { useState, useEffect } from "react";
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

    const [summaryData, setSummaryData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                if (tab === "dashboard" || tab === "campaigns") {
                    if (!summaryData) {
                        const res = await fetch("/api/dashboard/summary");
                        const data = await res.json();
                        setSummaryData(data);
                    }
                }

                if (tab === "leads" || tab === "calls") {
                    if (!activityData) {
                        const res = await fetch("/api/dashboard/activity");
                        const data = await res.json();
                        setActivityData(data);
                    }
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [tab]);

    const handleLead = lead => { setSelLead(lead); setTab("leads"); };
    const handleLaunch = () => { setShowModal(false); };

    return (
        <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif", background: C.bg }}>
            {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onLaunch={handleLaunch} />}
            <Sidebar tab={tab} setTab={setTab} />
            <main style={{ flex: 1, overflow: "auto", minWidth: 0 }}>
                {tab === "dashboard" && <DashboardSection data={summaryData} onLeadClick={handleLead} openCampaign={() => setTab("campaigns")} />}
                {tab === "campaigns" && <CampaignsSection data={summaryData} onShowCreate={() => setShowModal(true)} />}
                {tab === "leads" && <LeadsSection data={activityData} selectedLead={selLead} onLeadClick={setSelLead} />}
                {tab === "calls" && <CallsSection data={activityData} />}
                {tab === "kb" && <KnowledgeBaseSection />}
            </main>
        </div>
    );
}