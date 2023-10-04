import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalendarHome } from './Components/CalendarHome';

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='' element={<CalendarHome />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App