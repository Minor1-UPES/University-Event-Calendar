import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalendarHome } from './Components/CalendarHome';
import Navbar from './Components/Navbar/Navbar';
import EventForm from './Components/AddEvent/EventForm';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
export function App() {
  return (
    <Router>

      <Routes>
        <Route path='/calendar' element={<CalendarHome />} />
      </Routes>
      <Routes>
        <Route path='' element={<><Navbar /> <Hero /> <Footer /></>} />
      </Routes>
      <Routes>
        <Route path='/event' element={<EventForm />} />
      </Routes>
    </Router>
  )
}

export default App