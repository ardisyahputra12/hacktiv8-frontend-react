import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Education } from './pages/Education'
import { Skill } from './pages/Skill'
import { Certificate } from './pages/Certificate'
import { Contact } from './pages/Contact'

export const App = () => {
  return (
    <div>
      <NavBar />
      <div className='container' style={{ padding: "80px 8px 20px 8px" }}>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
