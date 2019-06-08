import React from "react";

const Article = ({ heading, content, colour, minHeight }) => {
	const cardClasses = "bg-" + colour + " card-header text-white";
	const cardHeight = { minHeight: minHeight };
	return (
		<div className="card" style={cardHeight}>
			<h5 className={cardClasses}>{heading}</h5>
			<div className="card-body">{content}</div>
		</div>
	);
};

export default Article;
