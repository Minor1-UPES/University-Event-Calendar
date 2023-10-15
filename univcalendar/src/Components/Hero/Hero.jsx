import React from "react";
import "./hero.css";

const Hero = () => {
	return (
		<div className='heroContainer'>
			<div className='heroColumns'>
				<h1 className='heroHeading'>Event Calendar</h1>
				<h2 className='heroPara'>
					View the events happening  <br />
					around you in a  <span className='heroClick'> CLICK.</span>
				</h2>
				<div className="heroButtons">
					<a href='/calendar' className='heroAnchor' target='_blank'>
						Show Events
					</a>
					<a href='/event' className='hero-anchor-2'>
						Add Event
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
