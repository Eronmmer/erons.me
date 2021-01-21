import React from "react";

const NavBar = () => {
	return (
		<div className="navbar">
			<ul className="nav-list">
				<li>
					<a href="#about" className="nav-item">
						About Me
					</a>
				</li>
				<li>
					<a href="#work" className="nav-item">
						Projects
					</a>
				</li>
				<li>
					<a href="#contact" className="nav-item">
						Contact
					</a>
				</li>
				<li>
					<a
						href="http://erons-blog.netlify.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Blog
					</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
