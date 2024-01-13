import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import { Navbar } from './components/Navbar'
import { NoteCard } from './components/NoteCard'
import { Login } from './components/Login'
import LoginSignup from './components/LoginSignup'
import FlippableCard from './components/Flippable-card'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar/>
      <div className="wrapper container" id="wrapper">
        <div className="search-wrapper">
          {/* <input type="text" className='search-input' placeholder='Search' />
          <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button> */}
        </div>
        <div className="notes-wrapper">
            {/* <Login/> */}
            <FlippableCard/>

          </div>
        
      </div>
    
    </div>
  )
}

export default App
