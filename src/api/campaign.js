import { api } from "./client";
import { ENDPOINTS } from "./endpoints";

export const createBulkCampaign = (data) =>
    api.post(ENDPOINTS.CAMPAIGN.CREATE_BULK, data);
