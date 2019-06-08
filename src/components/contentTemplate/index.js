import React from "react";
import ArticleRow from "../articleRow";

const ContentTemplate = ({ heading, content, articles }) => (
	<>
		<div className="col-md-8 pb-5">
			<h2>{heading}</h2>
			{content}
		</div>

		<ArticleRow {...articles} />
	</>
);

export default ContentTemplate;
