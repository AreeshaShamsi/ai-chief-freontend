import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardSection from "../dashboard/sections/DashboardSection";
import CampaignsSection from "../dashboard/sections/CampaignsSection";
import LeadsSection from "../dashboard/sections/LeadsSection";
import CallLogSection from "../dashboard/sections/CallLogSection";
import TasksSection from "../dashboard/sections/TasksSection";
import ContactSection from "../dashboard/sections/ContactSection";
import IntegrationSection from "../dashboard/sections/IntegrationSection";
import SettingsSection from "../dashboard/sections/SettingsSection";
import CreateCampaignModal from "../dashboard/modals/CreateCampaignModal";
import KnowledgeBaseSection from "./sections/KnowledgeBaseSection";
import { API_URL } from "../../config/main";
import Loader from "../../components/Loader";
import { C, T } from "../../components/utils";

const pathToTab = {
    "/dashboard": "dashboard",
    "/campaigns": "campaigns",
    "/deals": "deals",
    "/call-log": "calls",
    "/knowledge-base": "kb",
    "/tasks": "tasks",
    "/contact": "contact",
    "/integration": "integration",
    "/settings": "settings",
};

function PlaceholderSection({ title }) {
    return (
        <div style={{ minHeight: "100%", width: "100%", background: C.pageBg, padding: T.spacing.page, boxSizing: "border-box" }}>
            <h1 style={{ margin: 0, color: C.text, fontSize: T.font.size.pageTitle, fontWeight: T.font.weight.bold }}>
                {title}
            </h1>
        </div>
    );
}

export default function DashboardMain() {
    const location = useLocation();
    const navigate = useNavigate();
    const tab = pathToTab[location.pathname] || "dashboard";
    const [showModal, setShowModal] = useState(false);

    const [summaryData, setSummaryData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchSummaryData = async () => {
        const company_id = localStorage.getItem("company_id");
        const res = await fetch(`${API_URL}/dashboard/summary?company_id=${company_id}`);
        const data = await res.json();
        setSummaryData(data);
        console.log(data);
        return data;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const company_id = localStorage.getItem("company_id");
                setLoading(true);

                if (tab === "dashboard" || tab === "campaigns") {
                    if (!summaryData) {
                        await fetchSummaryData();
                    }
                }

                if (tab === "calls") {
                    if (!activityData) {
                        const res = await fetch(`${API_URL}/dashboard/activity?company_id=${company_id}`);
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

    const handleLead = () => { navigate("/deals"); };
    const handleLaunch = async () => { await fetchSummaryData(); };

    if (loading) return <Loader />;
    return (
        <div style={{ width: "100%", minWidth: 0, fontFamily: T.font.family, background: C.pageBg }}>
            {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onLaunch={handleLaunch} />}

            <main style={{ width: "100%", minWidth: 0 }}>
                {tab === "dashboard" && <DashboardSection data={summaryData} onLeadClick={handleLead} openCampaign={() => navigate("/campaigns")} />}
                {tab === "campaigns" && <CampaignsSection data={summaryData} onShowCreate={() => setShowModal(true)} />}
                {tab === "deals" && <LeadsSection />}
                {tab === "calls" && <CallLogSection data={activityData} />}
                {tab === "kb" && <KnowledgeBaseSection />}
                {tab === "tasks" && <TasksSection />}
                {tab === "contact" && <ContactSection />}
                {tab === "integration" && <IntegrationSection />}
                {tab === "settings" && <SettingsSection />}
            </main>
        </div>
    );
}
