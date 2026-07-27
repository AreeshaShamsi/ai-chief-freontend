// src/api/client.js
import { API_URL } from "../config/main";

const BASE_URL = API_URL;
const VERCEL_BYPASS_TOKEN = import.meta.env.VITE_VERCEL_BYPASS_TOKEN;

function withBypass(url) {
    if (!VERCEL_BYPASS_TOKEN) return url;
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}x-vercel-protection-bypass=${VERCEL_BYPASS_TOKEN}`;
}

async function request(endpoint, options = {}) {
    //const token = localStorage.getItem("token");


    const headers = {
        ...(options.body instanceof FormData
            ? {}
            : { "Content-Type": "application/json" }),
        ...options.headers,
    };

    const response = await fetch(withBypass(`${BASE_URL}${endpoint}`), {
        ...options,
        headers,
    });

    const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");

    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
        throw new Error(data?.message || "Request failed");
    }

    return data;
}

export const api = {
    // GET
    get(endpoint, params = {}) {
        const query = new URLSearchParams(params).toString();
        const url = query ? `${endpoint}?${query}` : endpoint;

        return request(url);
    },

    // POST
    post(endpoint, body) {
        return request(endpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    },

    postForm(endpoint, formData) {
        return request(endpoint, {
            method: "POST",
            headers: {}, // Don't set Content-Type
            body: formData,
        });
    },

    // PUT
    put(endpoint, body) {
        return request(endpoint, {
            method: "PUT",
            body: JSON.stringify(body),
        });
    },

    // PATCH
    patch(endpoint, body) {
        return request(endpoint, {
            method: "PATCH",
            body: JSON.stringify(body),
        });
    },

    // DELETE
    delete(endpoint, payload = null) {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (payload) {
            options.body = JSON.stringify(payload);
        }

        return request(endpoint, options);
    },
};