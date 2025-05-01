import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: { isOpen: false },
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    setNavState: (state, action) => {
      state.isOpen = action.payload;
    }
  },
});

export const { toggleNav, setNavState } = navSlice.actions;
export default navSlice.reducer;