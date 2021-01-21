import React from "react";

export const Header = () => {
	return (
		<div className="header">
			<img
				title="My pretty awesome octocat"
				className="avatar"
				src="https://res.cloudinary.com/djksghat4/image/upload/v1574086502/erons.me/octocat.png"
				alt="Erons' avatar"
			/>
			<h1 id="about" className="main-heading">
				Aigbiluese Eronmonsele
			</h1>

			<p className="main-paragraph">
				An innovative and resourceful Software Engineer and problem solver with
				with demonstrated experience building quality, user-friendly and
				scalable software products with teams, startups and companies around the
				world.
			</p>
		</div>
	);
};

export default Header;
