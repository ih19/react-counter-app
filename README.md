# React Counter App

A simple React application built with Vite that demonstrates custom components and the useState hook.

## Project Structure

```
react-counter-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── Profile.jsx          # Custom component
    ├── Profile.css          # Custom styles
    ├── index.css
    └── assets/
        └── profile.svg      # Custom image
```

## Features

### 1. App.jsx Component
- Main application component
- Demonstrates basic useState hook with a counter
- Imports and renders the custom Profile component

### 2. Profile.jsx Custom Component
- **Custom functional component** created following the same pattern as App.jsx
- **useState hook** implementation with a click counter that starts at 0
- **Image import** - imports and displays a custom SVG profile image
- **CSS import** - imports Profile.css for component styling
- Interactive button that increments the counter on each click

### 3. Styling
- **App.css** - Styles for the main App component
- **Profile.css** - Custom styles for the Profile component with:
  - Gradient background
  - Glassmorphism effects
  - Responsive design
  - Hover animations

### 4. Assets
- **profile.svg** - Custom SVG image imported into the Profile component

## Installation & Running

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Assignment Requirements Checklist

 1. Started React app using npm and Vite  
 2. Studied App.jsx, main.jsx, App.css, and index.html files  
 3. Created custom functional component (Profile.jsx) replicating App.jsx pattern  
 4. Created style component (Profile.css)  
 5. Imported image file (profile.svg) and CSS file into Profile.jsx  
 6. Used useState() hook with button to count up from 0  

## How It Works

### useState Hook in Profile.jsx
```javascript
const [clickCount, setClickCount] = useState(0)

const handleClick = () => {
  setClickCount(clickCount + 1)
}
```

The counter starts at 0 and increments by 1 each time the button is clicked.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```
