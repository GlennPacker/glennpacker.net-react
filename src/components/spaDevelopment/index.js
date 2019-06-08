import React from "react";
import { Style } from "radium";
import spaImg from "./spa.png";
import styles from "./SpaDevelopmentStyle";
import PageTemplate from "../pageTemplate";

const SpaDevelopment = () => {
	const spa = {
		heading: "Single Page Application (SPA) Development",
		img: {
			src: spaImg,
			classes: ""
		},
		content: (
			<>
				<p>
					With SPA frameworks like React,{" "}
					<a href="//vuejs.glennpacker.net" target="blank">
						Vue
					</a>
					,{" "}
					<a href="//angular.glennpacker.net" target="blank">
						Angular
					</a>{" "}
					we have entered a new age of user interactivity. The frameworks are
					able to leverage technologies like AJAX and Local Storage. This site
					has been developed as a small showcase to using REACT.
				</p>
				<p>
					Glenn has been working with SPA frameworks scince 2014 and has a
					wealth of experience in several.
				</p>
			</>
		),
		articles: {
			minHeight: 325,
			data: [
				{
					colour: "success",
					heading: "Fast and Responsive",
					content: (
						<>
							<p>
								Updates only the part of the page that needs to change leaving
								the rest. This has less overhead on the server and the client.
							</p>
							<p>
								The backend in a SPA application will supply the data via API
								calls which will be created specific for the entity or purpose,
								instead of the entirety of the page.
							</p>
							<p>
								With local storage we can further reduce the number of calls to
								the server and used cached data which has already been supplied
								to the application.
							</p>
						</>
					)
				},
				{
					colour: "info",
					heading: "User Experience",
					content: (
						<>
							<p>
								The user will have a better exprience with a SPA as they will
								not have the flicker of the full page reload allowing them to
								concentrate at the task in hand.
							</p>
							<p>
								With only part of the page updating we can supplier richer
								fuller interfaces with improved user expereince.
							</p>
						</>
					)
				}
			]
		}
	};

	return (
		<div>
			<Style rules={styles} />
			<PageTemplate {...spa} />
		</div>
	);
};

export default SpaDevelopment;
