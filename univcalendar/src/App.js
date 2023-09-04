import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const events = [
  { title: "Teacher's Day", date: '2023-09-05' },
  { title: 'Synopsis Evaluation', date: '2023-08-24' },
  { title: 'Rakhi Celebration', date: '2023-08-30' },
  { title: 'GitHub Event', date: '2023-09-09' }
]

export function App() {
  // fetching data from node backend
  const [eventData, setEventData] = useState([{}])
  const [timeFrame, setTimeFrame] = useState('dayGridMonth')

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
      ).then(
        data => {
          setEventData(data)
        }
        )}, [])

        console.log(eventData.events)

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
        events={events}
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