import React from "react";
import beImg from "./be.png";
import PageTemplate from "../pageTemplate";
import Carousell from "../carousell";

const FrontEndDevelopment = () => {
	const beCerts = [
		"ASPnet.jpg",
		"ASPNET35Fundamentals.jpg",
		"aspnet4fundamentals.png",
		"aspnet4webforms.jpg",
		"ASPNETMVC3Fundamentals.jpg",
		"ASPNETMVC4Fundamentals.jpg",
		"aspnetmvc5fundamentals.png",
		"ASPNETMVCTestingFromScratch.jpg",
		"bestpracticesinaspnet.png",
		"BestPracticesInASPNETEntitiesValidationAndViewModels.png",
		"buildingnosqlappswithredis.png",
		"buildingwebappsserviceswithentityframwork.png",
		"c.png",
		"cshaprextensionmethods.png",
		"csharp4newfeatures.png",
		"csharpevents.png",
		"CsharpFundamentalspt1.jpg",
		"csharpfundamentalswith5.png",
		"csharpgenerics.png",
		"csharpinterfaces.png",
		"csharpprogrammingparadigms.png",
		"csharptipsandtraps.png",
		"defensivecodingincsharp.png",
		"entityframework.png",
		"EntityFrameworkDatabasePerformanceAntiPatterns.jpg",
		"FakeItEasy.jpg",
		"gettingstartedwithasynchronusprogramminginnet.png",
		"IntroductionToCSharpAndNET.jpg",
		"IntroductionToNETTestingWithNUnit.jpg",
		"IntroductiontoNuGet.jpg",
		"lessonsfromrealworldnetcodereviews.png",
		"LINQFundamentals.jpg",
		"mockingwithMoq.png",
		"MVC3.jpg",
		"mvc3fundamentals.png",
		"netmicroorms.png",
		"NETReflectorbyExample.jpg",
		"NHibernateFundamentals.jpg",
		"nosqlthebigpicture.png",
		"oracledeveloperessentialsdatatypes.png",
		"oracledeveloperessentialstablesandindexes.png",
		"oracledeveloperessentialsviews.png",
		"oracleplsqlfundamentalspt1.png",
		"PHPIntroduction.jpg",
		"playbyplaymodernizingyourdeployment.png",
		"PracticalIoCWithASPNETMVC4.jpg",
		"practicallinq.png",
		"practiclareflectioninnet.png",
		"reflector.png",
		"solidprinciplesofobjectorienteddesign.png",
		"SQLServerManagmentStudiobyExample.jpg",
		"SqlServerTransactSQLBasicDataModification.jpg",
		"tsql.png",
		"understandingandeliminatingtechnicaldebt.png",
		"understandingnosql.png",
		"vbnet.png",
		"VBNETFundamentals.jpg",
		"webforms.png",
		"webperformance.png"
	];

	const be = {
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
					colour: "success",
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
					colour: "danger",
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
			<PageTemplate {...be} />
			<Carousell imgs={beCerts} path={"backend"} />
		</div>
	);
};

export default FrontEndDevelopment;
