import React from "react";
import "./eventform.css";
const EventForm = () => {
	return (
		<>
			<h1> Add Event</h1>
			<div className='event-container'>
				<div className='event-container-one'>
					<input
						type='text'
						className='event title'
						placeholder='Event Title'
					></input>
					<input
						type='text'
						className='event desc'
						placeholder='Event Desc'
					></input>
				</div>
				<div className='event-container-two'>
					<input
						type='date'
						className='event date'
						placeholder='event date'
					></input>
					<input
						type='text'
						className='event venue'
						placeholder='Event Venue'
					></input>
				</div>
				<button className='add btn'>Add event</button>
			</div>
		</>
	);
};

export default EventForm;
