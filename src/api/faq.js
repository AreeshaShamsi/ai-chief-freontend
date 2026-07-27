import { api } from "./client";
import { ENDPOINTS } from "./endpoints";

export const addFAQ = (data) =>
    api.post(ENDPOINTS.FAQ.ADD, data);

export const updateFAQ = (id, data) =>
    api.put(ENDPOINTS.FAQ.UPDATE(id), data);

export const deleteFAQ = (id) =>
    api.delete(ENDPOINTS.FAQ.DELETE(id));