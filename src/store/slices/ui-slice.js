import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
  openModal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showModal(state, action) {
      state.openModal = action.payload;
    },
    hideModal(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const { showNotification, showModal, hideModal } = uiSlice.actions;
export default uiSlice.reducer;
