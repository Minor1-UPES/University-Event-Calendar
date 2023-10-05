import React from "react";
import { useState } from "react";
import "./eventform.css";
import Navbar from "../Navbar/Navbar";
const EventButtonClick = () => {
	const [eventTitle, setTitle] = useState({ eventTitle: "" });
	const [eventDesc, setUsername] = useState({ eventDesc: "" });
};
const EventForm = () => {
	return (
		<>
			<Navbar> </Navbar>
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
				<button className='addBtn'>Add event</button>
			</div>
		</>
	);
};

export default EventForm;
