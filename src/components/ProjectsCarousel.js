import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import { FiExternalLink } from "react-icons/fi";

export default class ProjectsCarousel extends Component {
	render() {
		const settings = {
			autoplay: true,
			autoplaySpeed: 9000,
			dots: true,
			wheelScroll: 4,
		};
		return (
			<div>
				<Slider {...settings}>
					<div className="druz projects-item">
						<h2>Druz</h2>
						<div className="project-image-parent">
							<img
								className="projects-preview"
								src="https://res.cloudinary.com/djksghat4/image/upload/v1611211331/erons.me/druz_home.jpg"
								alt="Druz"
							/>
							<div className="view-project">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://druz.xyz"
								>
									<FiExternalLink size="2.6rem" />
								</a>
							</div>
						</div>
						<p className="project-label">
							Druz is a social app that helps users find out what others think
							about them.
						</p>
					</div>
					<div className="checkref projects-item">
						<h2>Checkref</h2>
						<div className="project-image-parent">
							<img
								className="projects-preview"
								src="https://res.cloudinary.com/djksghat4/image/upload/v1611211664/erons.me/checkref_home.jpg"
								alt="Checkref"
							/>
							<div className="view-project">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="http://checkref.co"
								>
									<FiExternalLink size="2.6rem" />
								</a>
							</div>
						</div>
						<p className="project-label">
							Checkref is a reference checking tool that makes it easy for HR
							professionals and recruitment agencies to easily request employee
							references.
						</p>
					</div>
					<div className="careerskillz projects-item">
						<h2>CareerSkillz</h2>
						<div className="project-image-parent">
							<img
								className="projects-preview"
								src="https://res.cloudinary.com/djksghat4/image/upload/v1611211943/erons.me/careerskillz-path.jpg"
								alt="CareerSkillz"
							/>
							<div className="view-project">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://careerskillz.com"
								>
									<FiExternalLink size="2.6rem" />
								</a>
							</div>
						</div>
						<p className="project-label">
							CareerSkillz analyzes the career patterns of millions of
							professionals and uses these learnings to help you choose the
							right path.
						</p>
					</div>
					<div className="careerskillz projects-item">
						<h2>Define this</h2>
						<div className="project-image-parent">
							<img
								className="projects-preview"
								src="https://res.cloudinary.com/djksghat4/image/upload/v1611218345/erons.me/define-this.jpg"
								alt="Define this"
							/>
							<div className="view-project">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.npmjs.com/package/define-this"
								>
									<FiExternalLink size="2.6rem" />
								</a>
							</div>
						</div>
						<p className="project-label">
							'define-this' is a tool that gives you the definitions and
							synonyms of words from the comfort of your terminal.
						</p>
					</div>
				</Slider>
			</div>
		);
	}
}
