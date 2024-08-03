import React, { useState } from 'react';
import HabitFormPopup from '../components/HabitFormPopup';
import HabitList from '../components/habbitList';
import { useSelector } from 'react-redux';

// Home page component displaying the list of habits and a button to add a new habit
function Home() {
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the popup
  const habits = useSelector((state) => state.habits); // Get habits state from the Redux store

  return (
    <div className="home">
      {/* Display the list of habits */}
      <HabitList habits={habits} />
      {/* Button to show the popup form to add a new habit */}
      <button className="add-habit-button" onClick={() => setShowPopup(true)}>
        Add Habit
      </button>
      {/* Popup form to add a new habit */}
      <HabitFormPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

export default Home;
