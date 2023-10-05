import React from "react";
import "./hero.css";

const Hero = () => {
	return (
		<div className='heroContainer'>
			<div className='heroColumns'>
				<h1 className="heroHeading">University Calendar</h1>
				<h2 className='heroPara'>
					View all the events happening in the <br />
					university with just a <span className="heroClick"> CLICK.</span>
                </h2>
                <a href = "/calendar" className="heroAnchor" target="_blank">Show Events</a>
			</div>
			<div className='heroColumns'>
				<img
					src='https://www.pioneeredge.in/wp-content/uploads/2022/03/UPES.jpg'
					alt='Image of College Campus'
					className='heroImage'
				></img>
			</div>
		</div>
	);
};

export default Hero;
