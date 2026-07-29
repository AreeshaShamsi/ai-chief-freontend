import { api } from "./client";
import { ENDPOINTS } from "./endpoints";

export const updateCellValue = (data) =>
    api.patch(ENDPOINTS.WORKSPACE.UPDATE_CELL, data);


export const addRowValue = (tableId, userId) =>
    api.post(ENDPOINTS.WORKSPACE.ADD_ROW(tableId, userId));

export const addColumnValue = (tableId, userId, data) =>
    api.post(ENDPOINTS.WORKSPACE.ADD_COLUMN(tableId, userId), data);

export const updateColumnValue = (columnId, userId, data) =>
    api.patch(ENDPOINTS.WORKSPACE.UPDATE_COLUMN(columnId, userId), data);

export const deleteColumnValue = (id) =>
    api.delete(ENDPOINTS.WORKSPACE.DELETE_COLUMN(id));

export const duplicateColumnValue = (id, data) =>
    api.post(ENDPOINTS.WORKSPACE.DUPLICATE_COLUMN(id), data);

export const deleteRowValue = (id) =>
    api.delete(ENDPOINTS.WORKSPACE.DELETE_ROW(id));

export const deleteRowsValue = (data) =>
    api.delete(ENDPOINTS.WORKSPACE.DELETE_ROWS, data);

export const duplicateRowValue = (id, data) =>
    api.post(ENDPOINTS.WORKSPACE.DUPLICATE_ROW(id), data);


export const createBlankTable = (data) =>
    api.post(ENDPOINTS.WORKSPACE.CREATE_BLANK_TABLE, data);

export const importTable = (formData) =>
    api.postForm(ENDPOINTS.WORKSPACE.IMPORT_TABLE, formData);

export const appendTable = (formData) =>
    api.postForm(ENDPOINTS.WORKSPACE.APPEND_TABLE, formData);

export const renameTable = (data) =>
    api.put(ENDPOINTS.WORKSPACE.RENAME_TABLE, data);

export const deleteTable = (data) =>
    api.delete(ENDPOINTS.WORKSPACE.DELETE_TABLE, data);

export const duplicateTable = (data) =>
    api.post(ENDPOINTS.WORKSPACE.DUPLICATE_TABLE, data);

export const addUser = (data) =>
    api.post(ENDPOINTS.WORKSPACE.ADD_USER, data);

export const updateUser = (id, data) =>
    api.put(ENDPOINTS.WORKSPACE.UPDATE_USER(id), data);

export const deleteUser = (id) =>
    api.delete(ENDPOINTS.WORKSPACE.DELETE_USER(id));