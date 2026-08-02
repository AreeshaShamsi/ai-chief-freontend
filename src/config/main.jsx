// src/config/index.js

export const CONFIG = {
    BASE_URL: import.meta.env.VITE_BASE_URL || "https://real-estate-backend-sable.vercel.app",
    API_PREFIX: "/api",
};

export const API_URL = `${CONFIG.BASE_URL}${CONFIG.API_PREFIX}`;