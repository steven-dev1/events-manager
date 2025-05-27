import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type EventMenuState = {
  openCardId: number | null;
};

const initialState: EventMenuState = {
  openCardId: null,
};

const eventMenuSlice = createSlice({
  name: 'eventMenu',
  initialState,
  reducers: {
    openMenu(state, action: PayloadAction<number>) {
      state.openCardId = action.payload;
    },
    closeMenu(state) {
      state.openCardId = null;
    },
    toggleMenu(state, action: PayloadAction<number>) {
      state.openCardId =
        state.openCardId === action.payload ? null : action.payload;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = eventMenuSlice.actions;
export default eventMenuSlice.reducer;