import React from 'react';
import { Link } from 'react-router-dom';

// Component to display a list of habits with links to their details
function HabitList({ habits }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit-item">
          <Link to={`/habit/${habit.id}`}>{habit.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
