import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import { Navbar } from './components/Navbar'
import { NoteCard } from './components/NoteCard'
import LoginSignup from './components/LoginSignup'
import FlippableCard from './components/Flippable-card'
import UserProfile from './PAGES/User/UserProfile'
import { BrowserRouter } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="wrapper container" id="wrapper">
          <div className="notes-wrapper">
                 <UserProfile/>   
                 {/* <FlippableCard/>    */}
            </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
