import React from "react";
import Slider from "react-slick";
import "./slick.css";

const Carousell = ({ imgs, path }) => {
	const basicSettings = {
		accessibility: false,
		adaptiveHeight: false,
		arrows: false,
		autoplaySpeed: 4000,
		autoplay: true,
		dots: false,
		infinite: true,
		speed: 1000
	};

	const largeSettings = {
		...basicSettings,
		slidesToShow: 3,
		slidesToScroll: 2
	};

	const mediumSettings = {
		...basicSettings,
		slidesToShow: 2,
		slidesToScroll: 1
	};

	const smallSettings = {
		...basicSettings,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const slides = imgs.map(item => {
		return (
			<div key={item}>
				<img
					src={"/" + path + "/" + item}
					height="250px"
					alt={path + " certificate " + item.split(".")[0]}
				/>
			</div>
		);
	});

	return (
		<div className="container">
			<div className="pt-3 d-none d-sm-block d-md-none">
				<Slider {...smallSettings}>{slides}</Slider>
			</div>

			<div className="pt-3 d-none d-md-block d-xl-none">
				<Slider {...mediumSettings}>{slides}</Slider>
			</div>

			<div className="pt-3 d-none d-md-none d-lg-none d-xl-block">
				<Slider {...largeSettings}>{slides}</Slider>
			</div>
		</div>
	);
};

export default Carousell;
