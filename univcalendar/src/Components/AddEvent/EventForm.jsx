import React from "react";
// import { useState } from "react";
import "./eventform.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const EventForm = () => {
	// const EventButtonClick = () => {
	// 	const [eventTitle, setTitle] = useState({ eventTitle: "" });
	// 	const [eventDesc, setUsername] = useState({ eventDesc: "" });
	// };
	// const handleClick = async (event) => {
	// 	setTitle = 
	// };

	return (
		<>
			<Navbar> </Navbar>
			<div className='event-container'>
				<h2 className='event-heading'>
					{" "}
					Enter event details and SUBMIT when done{" "}
				</h2>
				<div className='event-subcontainer'>
					<input
						type='text'
						className='event title'
						placeholder='Event Title'
					></input>
					<input
						type='text'
						className='event desc'
						placeholder='Event Desccription'
					></input>
				</div>
				<div className='event-subcontainer'>
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
				<button className='addBtn'>Submit Details</button>
			</div>
			<Footer></Footer>
		</>
	);
};

export default EventForm;
