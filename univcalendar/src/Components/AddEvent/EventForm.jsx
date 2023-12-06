import React from "react";
import { useState } from "react";
import "./eventform.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";

// Usestates for input fields
const EventForm = () => {
	const [eventitle, setTitle] = useState({ eventitle: "" });
	const [evendesc, setDesc] = useState({ evendesc: "" });
	const [evendate, setDate] = useState({ evendate: "" });
	const [eventvenue, setVenue] = useState({ eventvenue: "" });

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
		// Below snippet verifies that the date of the event is in the future.
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();
		today = yyyy + "-" + mm + "-" + dd;
		if (
			evendate < today ||
			eventitle === "" ||
			evendesc === "" ||
			eventvenue === ""
		) {
			window.alert(
				"Incorrect or Incomplete details found, please verify the details."
			);
		} else {
			console.log({
				eventitle: eventitle,
				evendesc: evendesc,
				evendate: evendate,
				eventvenue: eventvenue,
			});
		}

		const data = { hello: "world" };
		const x = JSON.parse(JSON.stringify(data));
		console.log(x);
		const response = await axios
			.post(
				"http://localhost:5000/create",
				{
					query: JSON.parse(JSON.stringify(data)),
				}
				// eventitle: eventitle,
				// evendesc: evendesc,
				// evendate: evendate,
				// eventvenue: eventvenue,
			)
			.then((response) => console.log(response))
			.then((error) => console.log(error));
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
						eventitle={eventitle}
						onChange={handleChangeTitle}
					></input>
					<input
						type='text'
						className='event desc'
						placeholder='Event Desccription'
						evendesc={evendesc}
						onChange={handleChangeDesc}
					></input>
				</div>
				<div className='event-subcontainer'>
					<input
						type='date'
						className='event date'
						placeholder='event date'
						evendate={evendate}
						onChange={handleChangeDate}
					></input>
					<input
						type='text'
						className='event venue'
						placeholder='Event Venue'
						eventvenue={eventvenue}
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
