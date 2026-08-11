import { api } from "./client";
import { ENDPOINTS } from "./endpoints";

export const getUser = (data) =>
    api.post(ENDPOINTS.DASHBOARD.USER, data);

export const getSummary = (id) => {
    return api.get(ENDPOINTS.DASHBOARD.SUMMARY(id));
};

export const getActivity = (id) => {
    return api.get(ENDPOINTS.DASHBOARD.ACTIVITY(id));
};

export const getContact = (id) => {
    return api.get(ENDPOINTS.DASHBOARD.CONTACT(id));
};

export const getKnowledgeBase = (params) => {
    return api.get(ENDPOINTS.DASHBOARD.KNOWLEDGE_BASE, params);
};

export const getDeals = (params) => {
    return api.get(ENDPOINTS.DASHBOARD.DEALS, params);
};

export const getIntegration = (id) => {
    return api.get(ENDPOINTS.DASHBOARD.INTEGRATION(id));
};
