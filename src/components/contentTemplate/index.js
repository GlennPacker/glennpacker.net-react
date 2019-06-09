import React from "react";
import ArticleRow from "../articleRow";

const ContentTemplate = ({ content, articles }) => (
	<>
		<div className="col-md-8 pb-2">{content}</div>

		<ArticleRow {...articles} />
	</>
);

export default ContentTemplate;
