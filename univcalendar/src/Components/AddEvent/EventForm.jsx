import React from "react";
import { useState } from "react";
import "./eventform.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Usestates for input fields
const EventForm = () => {
	const [eventTitle, setTitle] = useState({ eventTitle: "" });
	const [eventDesc, setDesc] = useState({ eventDesc: "" });
	const [eventDate, setDate] = useState({ eventDate: "" });
	const [eventVenue, setVenue] = useState({ eventVenue: "" });

	// Changes the variables to the input field names
	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleChangeDesc = (event) => {
		setDesc(event.target.value);
	};
	const handleChangeDate = (event) => {
		setDate(event.target.value);
	};
	const handleChangeVenue = (event) => {
		setVenue(event.target.value);
	};

	// Function to handle the submit button
	const EventButtonClick = async (event) => {
		console.log({
			"eventTitle": eventTitle,
			"eventDesc": eventDesc,
			"eventDate": eventDate,
			"eventVenue": eventVenue
		})
	};
	return (
		<>
			<Navbar> </Navbar>
			<div className='event-container'>
				<h2 className='event-heading'>
					Enter event details and SUBMIT when done
				</h2>
				<div className='event-subcontainer'>
					<input
						type='text'
						className='event title'
						placeholder='Event Title'
						eventTitle={eventTitle}
						onChange={handleChangeTitle}
					></input>
					<input
						type='text'
						className='event desc'
						placeholder='Event Desccription'
						eventDesc={eventDesc}
						onChange={handleChangeDesc}
					></input>
				</div>
				<div className='event-subcontainer'>
					<input
						type='date'
						className='event date'
						placeholder='event date'
						eventDate={eventDate}
						onChange={handleChangeDate}
					></input>
					<input
						type='text'
						className='event venue'
						placeholder='Event Venue'
						eventVenue={eventVenue}
						onChange={handleChangeVenue}
					></input>
				</div>
				<button className='addBtn' onClick={EventButtonClick}>
					Submit Details
				</button>
			</div>
			<Footer></Footer>
		</>
	);
};

export default EventForm;
