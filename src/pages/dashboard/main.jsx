import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DashboardSection from "../dashboard/sections/DashboardSection";
import CampaignsSection from "../dashboard/sections/CampaignsSection";
import LeadsSection from "../dashboard/sections/LeadsSection";
import CallsSection from "../dashboard/sections/CallsSection";
import CreateCampaignModal from "../dashboard/modals/CreateCampaignModal";
import KnowledgeBaseSection from "./sections/KnowledgeBaseSection";
import { API_URL } from "../../config/main";
import Loader from "../../components/Loader";
import { C, T } from "../../components/utils";

export default function DashboardMain() {
    const { activeItem = "dashboard", setActiveItem = () => { } } = useOutletContext() || {};
    const tab = activeItem;
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

    const handleLead = lead => { setSelLead(lead); setActiveItem("leads"); };
    const handleLaunch = () => { setShowModal(false); };

    if (loading) return <Loader />;
    return (
        <div style={{ width: "100%", minWidth: 0, fontFamily: T.font.family, background: C.pageBg }}>
            {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onLaunch={handleLaunch} />}

            <main style={{ width: "100%", minWidth: 0 }}>
                {tab === "dashboard" && <DashboardSection data={summaryData} onLeadClick={handleLead} openCampaign={() => setActiveItem("campaigns")} />}
                {tab === "campaigns" && <CampaignsSection data={summaryData} onShowCreate={() => setShowModal(true)} />}
                {tab === "leads" && <LeadsSection data={activityData} selectedLead={selLead} onLeadClick={setSelLead} />}
                {tab === "calls" && <CallsSection data={activityData} />}
                {tab === "kb" && <KnowledgeBaseSection data={knowledgeBaseData} />}
            </main>
        </div>
    );
}
