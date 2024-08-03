import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/habbitSclice';

// Popup form component for adding new habits
function HabitFormPopup({ show, onClose }) {
  const [habitName, setHabitName] = useState(''); // State to store the habit name input
  const dispatch = useDispatch();

  // Handle form submission to add a new habit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() !== '') {
      dispatch(addHabit(habitName)); // Dispatch the addHabit action with the habit name
      setHabitName(''); // Clear the input field
      onClose(); // Close the popup
    }
  };

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <h2 className='h2'>Add Habit</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            placeholder="Enter habit name"
          />
          <div className="popup-buttons">
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HabitFormPopup;
