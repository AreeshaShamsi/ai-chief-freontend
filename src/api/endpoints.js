export const ENDPOINTS = {

    DASHBOARD: {
        SUMMARY: (id) => `/dashboard/summary?company_id=${id}`,
        USER: `/user/list`,
        CONTACT: (id) => `/workspace/all/${id}/contact`,
        ACTIVITY: (id) => `/dashboard/activity?company_id=${id}`,
        KNOWLEDGE_BASE: `/dashboard/knowledge-base`,
        DEALS: `/dashboard/deals`,
    },


    WORKSPACE: {
        UPDATE_CELL: `/cell`,
        ADD_ROW: (tableId, userId) => `/table/rows/${tableId}/${userId}`,
        DELETE_ROW: (id) => `/table/rows/${id}`,
        DUPLICATE_ROW: (id) => `/table/rows/${id}/duplicate/create`,
        DELETE_ROWS: `/table/rows`,

        ADD_COLUMN: (tableId, userId) => `/table/columns/${tableId}/${userId}`,
        UPDATE_COLUMN: (columnId, userId) => `/table/columns/${columnId}/${userId}`,

        DELETE_COLUMN: (columnId) => `/column/${columnId}`,
        DUPLICATE_COLUMN: (columnId) => `/column/${columnId}/duplicate`,

        CREATE_BLANK_TABLE: `/table/blank`,
        IMPORT_TABLE: `/table/import`,
        APPEND_TABLE: `/table/append`,
        RENAME_TABLE: `/table/rename`,
        DELETE_TABLE: `/table`,
        DUPLICATE_TABLE: `/table/duplicate`,

        UPDATE_USER: (userId) => `/user/${userId}`,
        DELETE_USER: (userId) => `/user/${userId}`,
        ADD_USER: `/user`,
    },

    FAQ: {
        ADD: `/faq/create`,
        DELETE: (id) => `/faq/${id}`,
        UPDATE: (id) => `/faq/${id}`,
    },



};