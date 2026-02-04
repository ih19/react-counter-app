# Quick Start Guide

## How to Run This Project

### Step 1: Extract the Files
Unzip the `react-counter-app.zip` file to your desired location.

### Step 2: Install Dependencies
Open a terminal/command prompt in the `react-counter-app` folder and run:

```bash
npm install
```

This will install all necessary packages (React, ReactDOM, Vite, etc.)

### Step 3: Start the Development Server
After installation completes, run:

```bash
npm run dev
```

### Step 4: View the App
Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`)

You should see:
- A heading "React Counter App"
- A counter button in the App component
- The custom Profile component with:
  - A profile card with an avatar image
  - Profile information
  - Another counter that starts at 0 and counts up when clicked

## What to Look For

### App.jsx Features:
- Basic counter implementation with useState
- Imports and renders the Profile component

### Profile.jsx Features (Custom Component):
- **Image Import**: SVG profile image from assets folder
- **CSS Import**: Profile.css for styling
- **useState Hook**: Counter that starts at 0
- **Button**: Increments counter on each click
- **Display**: Shows "You've clicked: X times"

## Troubleshooting

**If npm install fails:**
- Make sure you have Node.js installed (v16 or higher recommended)
- Try running: `npm install --legacy-peer-deps`

**If port 5173 is in use:**
- Vite will automatically try the next available port
- Or you can specify a port: `npm run dev -- --port 3000`

## Assignment Requirements Checklist

✅ React app created with npm and Vite
✅ All core files present (App.jsx, main.jsx, App.css, index.html)
✅ Custom functional component (Profile.jsx) created
✅ Custom style file (Profile.css) created
✅ Image file imported (profile.svg)
✅ useState hook implemented with button counter starting at 0

## File Location Reference

- **App Component**: `src/App.jsx` and `src/App.css`
- **Custom Component**: `src/Profile.jsx` and `src/Profile.css`
- **Image**: `src/assets/profile.svg`
- **Main Entry**: `src/main.jsx`
- **HTML Template**: `index.html`

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## Questions?

Check the README.md and PROJECT_OVERVIEW.md files for detailed documentation.
