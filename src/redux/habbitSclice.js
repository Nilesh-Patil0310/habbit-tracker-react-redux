import { createSlice } from '@reduxjs/toolkit';

// Initial state for the habits
const initialState = [];

// Redux slice to manage habits and their statuses
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    // Action to add a new habit
    addHabit: (state, action) => {
      state.push({ 
        id: state.length + 1, 
        name: action.payload, 
        statuses: Array(7).fill('None') // Initialize a week with 'None' statuses
      });
    },
    // Action to update the status of a habit for a specific day
    updateHabitStatus: (state, action) => {
      const { habitId, dayIndex, status } = action.payload;
      const habit = state.find(h => h.id === habitId);
      if (habit) {
        habit.statuses[dayIndex] = status; // Update the status for the given day
      }
    },
  },
});

export const { addHabit, updateHabitStatus } = habitsSlice.actions;
export default habitsSlice.reducer;
