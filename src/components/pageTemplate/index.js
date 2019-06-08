import React from "react";
import ContentTemplate from "../contentTemplate";

const PageTemplate = page => (
	<div className="container pt-4">
		<div className="row">
			<div className="col-md-4 pb-5">
				<img
					src={page.img.src}
					height="250px"
					className={page.img.classes}
					alt="spa"
				/>
			</div>

			<ContentTemplate {...page} />
		</div>
	</div>
);

export default PageTemplate;
