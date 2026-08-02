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
import { getActivity, getContact, getSummary, getUser, getKnowledgeBase, getDeals } from "../../api/dashboard";

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
    const [userData, setUserData] = useState(null);
    const [contactData, setContactData] = useState(null);
    const [knowledgeBaseData, setKnowledgeBaseData] = useState(null);
    const [dealsData, setDealsData] = useState(null);

    const [loading, setLoading] = useState(false);

    const fetchSummaryData = async () => {
        const company_id = localStorage.getItem("company_id");
        if (!company_id) return;
        const res = await getSummary(company_id);
        const data = res
        setSummaryData(data);
        console.log(data);
        return data;
    };

    const fetchUserData = async () => {
        const company_id = localStorage.getItem("company_id");
        const user_id = localStorage.getItem("user_id");
        const is_admin = localStorage.getItem("role") === "admin";
        if (!company_id) return;
        const payload = {
            "company_id": company_id,
            "user_id": user_id,
            "is_admin": is_admin
        }
        const res = await getUser(payload);
        const data = res
        setUserData(data);
        console.log(data);
        return data;
    };

    const fetchContactData = async () => {
        const company_id = localStorage.getItem("company_id");
        if (!company_id) return;
        const res = await getContact(company_id);
        const data = res
        setContactData(data);
        console.log(data);
        return data;
    };

    const fetchKnowledgeBaseData = async () => {
        const company_id = localStorage.getItem("company_id");
        if (!company_id) return;
        const params = { "company_id": company_id, "name": "kb" };
        const res = await getKnowledgeBase(params);
        const data = res
        setKnowledgeBaseData(data);
        console.log(data);
        return data;
    };

    const fetchDeals = async () => {
        const company_id = localStorage.getItem("company_id");
        if (!company_id) return;
        const params = { "company_id": company_id };
        const res = await getDeals(params);
        const data = res
        setDealsData(data);
        console.log(data);
        return data;
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const company_id = localStorage.getItem("company_id");
                
                let needsLoading = false;
                if ((tab === "dashboard" || tab === "campaigns") && !summaryData) needsLoading = true;
                if (tab === "calls" && !activityData) needsLoading = true;
                if (tab === "settings" && !userData) needsLoading = true;
                if (tab === "contact" && !contactData) needsLoading = true;
                if (tab === "kb" && !knowledgeBaseData) needsLoading = true;
                if (tab === "deals" && !dealsData) needsLoading = true;

                if (needsLoading) setLoading(true);

                if (tab === "dashboard" || tab === "campaigns") {
                    if (!summaryData) {
                        await fetchSummaryData();
                    }
                }

                if (tab === "calls") {
                    if (!activityData) {
                        const res = await getActivity(company_id);
                        const data = res
                        setActivityData(data);
                    }
                }

                if (tab === "settings") {
                    if (!userData) {
                        await fetchUserData();
                    }
                }

                if (tab === "contact") {
                    if (!contactData) {
                        await fetchContactData();
                    }
                }

                if (tab === "kb") {
                    if (!knowledgeBaseData) {
                        await fetchKnowledgeBaseData();
                    }
                }

                if (tab === "deals") {
                    if (!dealsData) {
                        await fetchDeals();
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

    const handleLead = () => { navigate("/contact"); };
    const handleLaunch = async () => { await fetchSummaryData(); };

    if (loading) return <Loader />;
    return (
        <div style={{ width: "100%", minWidth: 0, fontFamily: T.font.family, background: C.pageBg }}>
            {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onLaunch={handleLaunch} />}

            <main style={{ width: "100%", minWidth: 0 }}>
                {tab === "dashboard" && <DashboardSection data={summaryData} onLeadClick={handleLead} openCampaign={() => navigate("/contact")} />}

                {tab === "campaigns" && <CampaignsSection data={summaryData} onShowCreate={() => setShowModal(true)} />}
                {tab === "deals" && <LeadsSection data={dealsData} />}
                {tab === "calls" && <CallLogSection data={activityData} />}
                {tab === "kb" && <KnowledgeBaseSection data={knowledgeBaseData} />}
                {tab === "contact" && <ContactSection data={contactData} />}
                {tab === "integration" && <IntegrationSection />}
                {tab === "settings" && <SettingsSection data={userData} />}
                {tab === "tasks" && <TasksSection />}
            </main>
        </div>
    );
}
