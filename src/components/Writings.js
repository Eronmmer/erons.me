import React from "react";

const Writings = () => {
	return (
		<div className="writings">
			<h2 className="writings-header">
				WRITINGS{" "}
				<span role="img" aria-label="writing emoji">
					✍
				</span>
			</h2>
			<p>
				I write Tutorials and Articles for Software Developers on my{" "}
				<a
					href="http://erons-blog.netlify.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					blog
				</a>
			</p>
		</div>
	);
};

export default Writings;
