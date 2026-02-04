import { useState } from 'react'
import './Profile.css'
import profileImage from './assets/profile-photo.jpeg'

function Profile() {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(clickCount + 1)
  }

  return (
    <div className="profile-container">
      <h2>My Custom Profile Component</h2>
      
      <div className="profile-card">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="profile-image"
        />
        
        <div className="profile-info">
          <h3>Ihor Holubets</h3>
          <p>React Developer</p>
          <p className="bio">
            Learning React with Vite and creating custom components!
          </p>
        </div>
      </div>

      <div className="counter-section">
        <h3>Click Counter</h3>
        <p className="count-display">You've clicked: {clickCount} times</p>
        <button className="counter-button" onClick={handleClick}>
          Click Me!
        </button>
      </div>
    </div>
  )
}

export default Profile
