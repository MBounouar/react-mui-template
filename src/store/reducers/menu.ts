import { createSlice } from '@reduxjs/toolkit';

const menu = createSlice({
  name: 'menu',
  initialState: { drawerOpen: false },
  reducers: {
    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },
  },
});

export default menu.reducer;

export const { openDrawer } = menu.actions;
