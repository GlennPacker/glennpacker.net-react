import React from "react";
import feImg from "./fe.png";
import PageTemplate from "../pageTemplate";
import Carousell from "../carousell";

const FrontEndDevelopment = () => {
	const feCerts = [
		"A-Practical-Start-with-React.png",
		"ABetterCSSLESSAndSASS.png",
		"An-AngularJS-Playbook.png",
		"angular-getting-started.jpg",
		"angularbestpractices.jpg",
		"angularfronttobackwithwebapi.jpg",
		"AngularJSBestPractices.jpg",
		"angularjsbestpractices.png",
		"angularjslineofbusinessapplications.png",
		"angularjswithtypescript.png",
		"AngularTheBigPicture.jpg",
		"Bootstrap3.jpg",
		"BowerFundamentals.png",
		"css.png",
		"Getting-Started-with-ES2017-ES8.png",
		"googlemapsapigetstarted.png",
		"HandsOnResponsiveWebDesign.jpg",
		"html5fromscratch.png",
		"htmlfundamentals.jpg",
		"IntroductiontoBootstrap.jpg",
		"introductiontocss.jpg",
		"IntroductionToPresentationDesign.jpg",
		"javascriptforcsharpdevelopers.png",
		"jQueryFundamentals.jpg",
		"jQueryGettingStarted.jpg",
		"jQueryUI.jpg",
		"QuickStartToJavaScript.jpg",
		"QuickStartToJavaScriptVolume2.jpg",
		"reactfundamentals.png",
		"React-Getting-Started.png",
		"socialmedia.png",
		"Styling-React-Components.png",
		"Testing-AngularJS-From-Scratch.png",
		"thinkingoutsidetheboxwithcssshapes.png",
		"typescriptfundamentals.png",
		"Vue-js-Getting-Started.png"
	];

	const fe = {
		img: {
			src: feImg,
			classes: ""
		},
		content: (
			<>
				<p>
					The term front end development refers to a developer that is capable
					of dealing with all visual elements. On a website it means somone who
					is capable of writing HTML, CSS and JavaScript and derivatives.
				</p>
			</>
		),
		articles: {
			minHeight: 450,
			data: [
				{
					colour: "danger",
					heading: "Html",
					content: (
						<>
							<p>
								Glenn Packer has been writing html for 20 years. Html standards
								have changed through the years, variants include XHTML and later
								HTML5.
							</p>
							<p>
								Glenn worked in a classroom environment teaching HTML from 1998.
							</p>
							<p>
								Through the years new ways of writing HTML programatically have
								developed, from Classic ASP, Controls via ASP.net and later with
								the emergance of MVC3 the Razor syntax. Glenn has kept abreast
								of all these developments and still uses HTML on a daily basis.
							</p>
						</>
					)
				},
				{
					colour: "info",
					heading: "CSS",
					content: (
						<>
							<p>
								Glenn Packer has been writing CSS for 14 years. Through the
								years the specification has been added to and new ways of
								writing CSS have emerged, such as SASS and LESS.
							</p>
							<p>
								Demands on styling a website are stronger now than ever. Every
								site needs to be responsive and attractive on any device, from
								phone to destop and in every browser. To help with these growing
								demands, in recent years there has been a flurry of new CSS
								frameworks, the biggest of which is Twitter's Bootstrap. Glenn
								has built this site using Bootstrap.
							</p>
						</>
					)
				},
				{
					colour: "success",
					heading: "JavaScript",
					content: (
						<>
							<p>
								Glenn Packer has been writing JavaScript for over 15 years. For
								a long time JavaScript was just a way to animate somthing on a
								page, this was made easier by the emergance jQuery and jQuery
								UI.
							</p>
							<p>
								Then Ajax was born, giving the ability to use Javascript to
								retrieve smaller parts of the page directly from the server.
								This huge breakthrough changed the face of JavaScript.
								JavaScript and its Frameworks, such as{" "}
								<a href="//angular.glennpacker.net" target="blank">
									Angular
								</a>
								, <a href="//vuejs.glennpacker.net">Vue Js</a> and React are
								today some of the most sort after skills on the market.
							</p>
						</>
					)
				}
			]
		}
	};

	return (
		<div>
			<PageTemplate {...fe} />
			<Carousell imgs={feCerts} path={"frontend"} />
		</div>
	);
};

export default FrontEndDevelopment;
