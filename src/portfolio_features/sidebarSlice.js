import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};
const sidebarSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isSidebarOpen = true;
    },

    closeSideBar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
