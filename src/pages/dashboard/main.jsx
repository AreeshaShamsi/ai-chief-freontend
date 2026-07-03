import React, { useState, useEffect } from "react";
import Sidebar from "../dashboard/components/NavBar";
import DashboardSection from "../dashboard/sections/DashboardSection";
import CampaignsSection from "../dashboard/sections/CampaignsSection";
import LeadsSection from "../dashboard/sections/LeadsSection";
import CallsSection from "../dashboard/sections/CallsSection";
import CreateCampaignModal from "../dashboard/modals/CreateCampaignModal";
import KnowledgeBaseSection from "./sections/KnowledgeBaseSection";
import { C } from "../../components/utils";
import { API_URL } from "../../config/main";
import Loader from "../../components/Loader";

export default function DashboardMain() {
    const [tab, setTab] = useState("dashboard");
    const [showModal, setShowModal] = useState(false);
    const [selLead, setSelLead] = useState(null);

    const [summaryData, setSummaryData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [knowledgeBaseData, setKnowledgeBaseData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const company_id = localStorage.getItem("company_id");
                setLoading(true);

                if (tab === "dashboard" || tab === "campaigns") {
                    if (!summaryData) {

                        const res = await fetch(`${API_URL}/dashboard/summary?company_id=${company_id}`);
                        const data = await res.json();
                        setSummaryData(data);
                        console.log(data);
                    }
                }

                if (tab === "leads" || tab === "calls") {
                    if (!activityData) {
                        const res = await fetch(`${API_URL}/dashboard/activity?company_id=${company_id}`);
                        const data = await res.json();
                        setActivityData(data);
                    }
                }
                if (tab === "kb") {
                    if (!knowledgeBaseData) {
                        const res = await fetch(`${API_URL}/knowledge-base/${company_id}`);
                        const data = await res.json();
                        console.log(data);
                        setKnowledgeBaseData(data);
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

    if (loading) return <Loader />;
    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif", background: C.bg }}>
            {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onLaunch={handleLaunch} />}
            <Sidebar tab={tab} setTab={setTab} />

            <main style={{ flex: 1, overflow: "auto", minWidth: 0 }}>
                {tab === "dashboard" && <DashboardSection data={summaryData} onLeadClick={handleLead} openCampaign={() => setTab("campaigns")} />}
                {tab === "campaigns" && <CampaignsSection data={summaryData} onShowCreate={() => setShowModal(true)} />}
                {tab === "leads" && <LeadsSection data={activityData} selectedLead={selLead} onLeadClick={setSelLead} />}
                {tab === "calls" && <CallsSection data={activityData} />}
                {tab === "kb" && <KnowledgeBaseSection data={knowledgeBaseData} />}
            </main>
        </div>
    );
}