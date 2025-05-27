import { configureStore } from '@reduxjs/toolkit'
import eventMenuReducer from './eventMenuSlice'

export const store = configureStore({
  reducer: {
    eventMenu: eventMenuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch