import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import './assets/css/App.css'
import { Navbar } from './components/Navbar'
import { NoteCard } from './components/NoteCard'
import LoginSignup from './components/LoginSignup'
import {FlippableCard} from './components/Flippable-card'
import { UserProfile } from './PAGES/User/UserProfile'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
        <Routes>
          <Route path="/user/:activepage" element={<UserProfile/>}/>
          <Route path="/login" element={<FlippableCard/>}/>
        </Routes>
      <Footer/>
    </main>
  )
}

export default App
