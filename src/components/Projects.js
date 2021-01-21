import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
	return (
		<div className="projects">
			<h2 id="work" className="projects-header">
				My Projects
			</h2>
			<p className="projects-paragraph">Here are some of my works</p>
			<div className="projects-carousel">
				<ProjectsCarousel />
			</div>
		</div>
	);
};

export default Projects;
