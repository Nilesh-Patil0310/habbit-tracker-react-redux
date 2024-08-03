import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../pages/WeekView.css'
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Component to display the status of all habits for the entire week
function WeekView() {
  const habits = useSelector((state) => state.habits); // Get habits from the Redux store

  return (
    <div className="week-view">
      <h1>Weekly View</h1>
      {/* Display the days of the week */}
      <div className="week-header">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="week-day">{day}</div>
        ))}
      </div>
      {/* Display each habit and its status for the week */}
      {habits.length === 0 ? (
        <p>No habits found. Please add some habits.</p>
      ) : (
        habits.map((habit) => (
          <div key={habit.id} className="habit-week">
            <h2>
              <Link to={`/habit/${habit.id}`}>{habit.name}</Link>
            </h2>
            <div className="week-status-container">
              {habit.statuses.map((status, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`week-status ${status.toLowerCase().replace(' ', '-')}`}
                >
                  {status}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default WeekView;
