import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feactures/counterSlise'
export const store = configureStore({
  reducer: {
    counte: counterReducer,
  },
});