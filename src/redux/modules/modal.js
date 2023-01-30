import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    showModal() {
      return true;
    },
    closeModal() {
      return false;
    },
  },
});
export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice;
