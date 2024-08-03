# Habit Tracker App

This is a Habit Tracker application built using React, Redux, and React Router. It allows users to add multiple habits, track their status over a week, and toggle between different statuses for each day.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Features

- Add multiple habits to track.
- Track each habit daily with three statuses: `Done`, `Not Done`, and `None`.
- View the status of each habit for the current day and the previous six days.
- Change the status of any day for any habit.
- Responsive design with a pop-up form for adding habit.


## Technologies Used

- React
- Redux
- React Router
- CSS

## Folder Structure

habit-tracker/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── HabitFormPopup.js
│ │ ├── HabitList.js
│ │ ├── Navbar.js
│ │ └── ...
│ │
│ ├── pages/
│ │ ├── Home.js
│ │ ├── WeekView.js
│ │ └── ...
│ │
│ ├── redux/
│ │ ├── store.js
│ │ └── habitSlice.js
│ │
│ ├── App.js
│ ├── index.js
│ ├── styles.css
│ └── ...
│
├── .gitignore
├── package.json
├── README.md




### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
