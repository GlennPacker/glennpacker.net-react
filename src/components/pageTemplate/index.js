import React from "react";
import ContentTemplate from "../contentTemplate";

const PageTemplate = page => (
	<div className="container pt-4">
		<div className="row">
			<div className="col-md-4 pb-2 d-none d-md-block">
				<img
					src={page.img.src}
					height="220px"
					style={{ maxWidth: "100%" }}
					className={page.img.classes}
					alt="spa"
				/>
			</div>

			<ContentTemplate {...page} />
		</div>
	</div>
);

export default PageTemplate;
