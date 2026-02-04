import { useState } from 'react'
import './App.css'
import Profile from './Profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <h1>React Counter App</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        {/* Custom Profile Component */}
        <Profile />
      </div>
    </>
  )
}

export default App
