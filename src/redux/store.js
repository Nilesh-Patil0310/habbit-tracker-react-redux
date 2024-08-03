import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '../redux/habbitSclice';

// Configure Redux store with the habits reducer
export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});
