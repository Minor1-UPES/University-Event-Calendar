import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios'

export function App() {
  // fetching data from node backend
  const [eventData, setEventData] = useState([{}])
  const [timeFrame, setTimeFrame] = useState('dayGridMonth')

  useEffect(() => {
    axios.get('http://localhost:5000/api')
    .then((res) => setEventData(res.data))
  }, [])

  function changeCalendarTimeFrame() {
    setTimeFrame('dayGridWeek')
  }

  return (
    <div>
      <h1>University Event Calendar</h1>
      <button onClick={changeCalendarTimeFrame}>Weekly</button>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView={[timeFrame]}
        weekends={true}
        events={eventData}
        eventContent={renderEventContent}
      />
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default App