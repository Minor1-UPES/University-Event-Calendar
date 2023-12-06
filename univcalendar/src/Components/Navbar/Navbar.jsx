import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<a className='navbarHeadingLink' href='/'>
				Event Calendar
			</a>
			<div>
				<a href='/calendar' className='link' target='_blank'>
					View Calendar
				</a>
				<a href='event' className='link'>
					Add event
				</a>
				<a href='event' className='link'>
					Login
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
