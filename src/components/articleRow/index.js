import React from "react";
import Article from "../article";

const ArticleRow = ({ minHeight, data }) => (
	<div className="row">
		{data.map((item, index) => {
			return (
				<div className="col-md" key={index}>
					<Article {...item} minHeight={minHeight} />
				</div>
			);
		})}
	</div>
);

export default ArticleRow;
