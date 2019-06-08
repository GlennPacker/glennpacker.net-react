import React from "react";
import beImg from "./be.png";
import PageTemplate from "../pageTemplate";

const FrontEndDevelopment = () => {
	const fe = {
		heading: "Back End Development",
		img: {
			src: beImg,
			classes: ""
		},
		content: (
			<>
				<p>
					Back end development is the interaction with the input supplying data
					to and from the databases and API's to the front end. Developement is
					focused on the database and the application.
				</p>
			</>
		),
		articles: {
			minHeight: 350,
			data: [
				{
					colour: "danger",
					heading: "Application",
					content: (
						<>
							<p>
								Glenn Packer has been writing web applications for 15 years; his
								total programming experience dates back to the early 1990s with
								C and Assembly.
							</p>
							<p>
								In Glenn's early days as a web developer the language of choice
								was classic ASP with VB Script, which became ASP.net with VB.net
								and into ASP.net MVC in 2012.
							</p>
							<p>
								The ASP.net MVC and ASP.net MVC Web API are a large part of any
								.net web application handling all data. Glenn Packer works to
								the highest of standards and uses patterns such as DRY, SOLID
								and KISS.
							</p>
						</>
					)
				},
				{
					colour: "success",
					heading: "Databases",
					content: (
						<>
							<p>
								Glenn Packer has been working with databases for over 25 years.
								In the early days, these were MS Access and DB2. Glenn started
								using SQL server version 6.5 in 1999 and Oracle in 2005.
							</p>
							<p>
								Glenn is a fully competent SQL server database developer, with a
								wealth of experience. Glenn is capable of writing any query,
								stored procedure, function or trigger that is required. His SQL
								server skills also extend into reporting services SSRS and SSAS
							</p>
							<p>
								These skills are ever growing with the explosion of NoSQL
								databases including Dyanmo DB and Raven.
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
		</div>
	);
};

export default FrontEndDevelopment;
