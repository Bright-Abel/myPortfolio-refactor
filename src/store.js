import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './portfolio_features/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});
