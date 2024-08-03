import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateHabitStatus } from '../redux/habbitSclice';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Component to display and manage the status of a specific habit
function HabitDetails() {
  const { id } = useParams();
  const habit = useSelector((state) => state.habits.find(h => h.id === parseInt(id))); // Find the habit by ID
  const dispatch = useDispatch();

  // Handle status change for a specific day
  const handleStatusChange = (dayIndex, currentStatus) => {
    const nextStatus = currentStatus === 'None' ? 'Done' : currentStatus === 'Done' ? 'Not Done' : 'None';
    // Dispatch action to update status
    dispatch(updateHabitStatus({ habitId: habit.id, dayIndex, status: nextStatus }));
  };

  return (
    <div className="habit-details">
      <h2>{habit.name}</h2>
      {/* Display the days of the week */}
      <div className="status-header">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="status-day">{day}</div>
        ))}
      </div>
      {/* Display the status of the habit for each day */}
      <div className="status-container">
        {habit.statuses.map((status, dayIndex) => (
          <div
            key={dayIndex}
            className={`status ${status.toLowerCase().replace(' ', '-')}`}
            onClick={() => handleStatusChange(dayIndex, status)}
          >
            {status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitDetails;
