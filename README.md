# To-do App

This project is a React-based task management board that provides users with a dark mode toggle, a real-time clock display, and a draggable task management system using the react-beautiful-dnd library. The board has three columns — To do, In progress, and Done — where tasks can be moved between statuses. Additionally, it features a responsive design and animations, enhancing the user experience.

Link: https://aitishnitsa.github.io/react-to-do-list/

The same project in Angular: https://github.com/Aitishnitsa/angular-to-do-list

## Features

- Dark Mode: Switch between light and dark themes with smooth transitions.
- Real-time Clock: Display of the current date and time, updated every second.
- Task Board: Users can add, delete, and reorder tasks in three categories: To do, In progress, and Done.
- Drag-and-Drop Functionality: Tasks can be dragged and dropped between the three columns using the react-beautiful-dnd library.
- Responsive Design: The UI adjusts to different screen sizes, making it usable across devices.
- Smooth Animations: Animations are applied to task transitions, date/time, and the dark mode toggle, improving the UX.
- Task Management with API Integration: Tasks are fetched, added, and deleted from a mock API. Task status updates are also reflected on the server.

## Technologies Used

- React: A JavaScript library for building user interfaces. It allows for creating reusable components and managing the application's state.
- react-beautiful-dnd: A popular library for implementing drag-and-drop functionality in React applications. This library is specifically used for the draggable task management system.
- TailwindCSS: A utility-first CSS framework that provides a rapid development experience. It offers pre-built classes for styling elements like layout, typography, and more.
- CSS & SVG animations: Techniques for creating smooth transitions and visual effects within the application. This contributes to the overall user experience.
- dotenv: A package that allows for managing environment variables in a Node.js application. This project uses it to store the API project token securely.
- mockAPI: A simple tool that lets you easily mock up APIs, generate custom data, and perform operations on it using RESTful interface.

## Installation

1. Clone the repository:

```
git clone https://github.com/Aitishnitsa/react-to-do-list.git
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the root directory and add your API project token:

```
REACT_APP_PROJECT_TOKEN=your_project_token
```

4. Run the application:

```
npm start
```
