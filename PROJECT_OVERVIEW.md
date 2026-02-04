# Project Overview: React Counter App

## Assignment Completion Summary

This project fulfills all requirements of the React assignment:

### 1. ✅ React App Setup with npm and Vite

The project was created using Vite, a modern build tool for React applications. The configuration includes:

- **package.json**: Defines dependencies (React, ReactDOM) and dev dependencies (Vite, plugins)
- **vite.config.js**: Configures the Vite build tool with React plugin
- **Scripts available**:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build

### 2. ✅ Study of Core Files

#### **index.html**
- Entry point of the application
- Contains a `<div id="root">` where React mounts
- Links to `main.jsx` as a module script

#### **main.jsx**
- Imports React, ReactDOM, and the App component
- Uses `ReactDOM.createRoot()` to render the app into the DOM
- Wraps App in `<React.StrictMode>` for development checks

#### **App.jsx**
- Main functional component using React hooks
- Demonstrates `useState` hook for state management
- Imports styles (App.css) and the custom Profile component
- Returns JSX with a counter example

#### **App.css**
- Provides styling for the App component
- Includes button styles, card styles, and responsive design
- Uses CSS variables and media queries

### 3. ✅ Custom Functional Component: Profile.jsx

The **Profile.jsx** component replicates and extends the pattern from App.jsx:

```javascript
import { useState } from 'react'
import './Profile.css'
import profileImage from './assets/profile.svg'

function Profile() {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(clickCount + 1)
  }

  return (
    // JSX structure with profile card and counter
  )
}

export default Profile
```

**Key Features:**
- Functional component structure
- State management with useState
- Event handling
- Props-free implementation (like the example)
- Exports for use in other components

### 4. ✅ Style Component: Profile.css

The **Profile.css** file provides comprehensive styling:

- **Modern design techniques**:
  - CSS gradients
  - Backdrop filters (glassmorphism)
  - Box shadows for depth
  - Smooth transitions and animations
  
- **Layout styles**:
  - Flexbox for alignment
  - Responsive design with media queries
  - Maximum width constraints
  - Spacing and padding

- **Interactive elements**:
  - Hover effects on buttons
  - Transform animations
  - Color transitions

### 5. ✅ File Imports

The Profile.jsx component demonstrates proper React imports:

#### **CSS Import:**
```javascript
import './Profile.css'
```
This imports the stylesheet that applies to the Profile component.

#### **Image Import:**
```javascript
import profileImage from './assets/profile.svg'
```
This imports the SVG image file, which Vite processes and makes available as a URL. The image is then used in the JSX:

```javascript
<img src={profileImage} alt="Profile" className="profile-image" />
```

### 6. ✅ useState Hook with Counter Button

The Profile component implements a counter using the useState hook:

```javascript
// Initialize state with 0
const [clickCount, setClickCount] = useState(0)

// Handler function to increment counter
const handleClick = () => {
  setClickCount(clickCount + 1)
}

// Button that triggers the handler
<button className="counter-button" onClick={handleClick}>
  Click Me!
</button>

// Display that shows current count
<p className="count-display">You've clicked: {clickCount} times</p>
```

**How it works:**
1. `useState(0)` creates a state variable initialized to 0
2. `clickCount` holds the current value
3. `setClickCount` is the function to update the value
4. Button's `onClick` calls `handleClick`
5. `handleClick` increments the count by 1
6. React re-renders with the new value

## File Structure Explanation

```
react-counter-app/
│
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
│
└── src/                   # Source code directory
    ├── main.jsx           # React entry point
    ├── index.css          # Global styles
    │
    ├── App.jsx            # Main App component
    ├── App.css            # App component styles
    │
    ├── Profile.jsx        # ✨ Custom component
    ├── Profile.css        # ✨ Custom component styles
    │
    └── assets/            # Static assets
        └── profile.svg    # ✨ Custom image
```

## Component Hierarchy

```
main.jsx
  └── App.jsx
        └── Profile.jsx (custom component)
```

## Technologies Used

- **React 18.2.0** - UI library
- **React DOM 18.2.0** - DOM rendering
- **Vite 5.2.0** - Build tool and dev server
- **@vitejs/plugin-react** - Vite React plugin

## Learning Outcomes Demonstrated

1. **Component Creation**: Building functional components from scratch
2. **State Management**: Using the useState hook effectively
3. **Event Handling**: Responding to user interactions
4. **Styling**: Organizing and applying CSS in React
5. **Asset Management**: Importing and using images in React
6. **Project Structure**: Understanding React project organization
7. **Module System**: Using ES6 imports/exports

## Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Access the app:**
   Open the URL shown in terminal (typically http://localhost:5173)

## What Makes This Project Complete

✅ All 6 requirements fulfilled  
✅ Clean, organized code structure  
✅ Proper React patterns followed  
✅ Functional useState implementation  
✅ Custom styling and assets  
✅ Well-documented and ready to submit  

The project can be submitted as:
- A zip file of the entire `react-counter-app` folder
- A GitHub repository (after initializing git and pushing)
