import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalendarHome } from './Components/CalendarHome';
import Navbar from './Components/Navbar';
import EventForm from './Components/EventForm';

export function App() {
  return (
    <Router>

      <Routes>
        <Route path='/calendar' element={<CalendarHome />} />
      </Routes>

      <Routes>
        <Route path='' element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path='/event' element={<EventForm />} />
      </Routes>
    </Router>
  )
}

export default App