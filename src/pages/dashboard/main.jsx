import React, { useState } from "react";
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
import Loader from "../../components/Loader";
import { C, T } from "../../components/utils";
import {
    mockSummaryData,
    mockUserData,
    mockContactData,
    mockKnowledgeBaseData,
    mockDealsData,
    mockIntegrationsData,
    mockActivityData
} from "../../data/mockData";

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

export default function DashboardMain() {
    const location = useLocation();
    const navigate = useNavigate();
    const tab = pathToTab[location.pathname] || "dashboard";
    const [showModal, setShowModal] = useState(false);

    const [summaryData, setSummaryData] = useState(mockSummaryData);
    const [activityData, setActivityData] = useState(mockActivityData);
    const [userData, setUserData] = useState(mockUserData);
    const [contactData, setContactData] = useState(mockContactData);
    const [knowledgeBaseData, setKnowledgeBaseData] = useState(mockKnowledgeBaseData);
    const [dealsData, setDealsData] = useState(mockDealsData);
    const [integrationsData, setIntegrationsData] = useState(mockIntegrationsData);

    const handleLead = () => { navigate("/contact"); };
    const handleLaunch = () => { setShowModal(false); };

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
                {tab === "integration" && <IntegrationSection data={integrationsData} />}
                {tab === "settings" && <SettingsSection data={userData} />}
                {tab === "tasks" && <TasksSection />}
            </main>
        </div>
    );
}
