import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { withRouter } from "react-router-dom";

const pageDescription = pathName => {
	switch (pathName) {
		case "/clients":
			return "Clients";
		case "/backenddevelopment":
			return "Back End Developer";
		case "/spadevelopment":
			return "Single Page Application (SPA) Developer";
		case "/frontenddevelopment":
			return "Front End Developer";
		default:
			return "";
	}
};

const Header = props => (
	<div className="container">
		<header>
			<div className="row">
				<Link to="/">
					<img src={logo} className="logo" alt="logo" />
				</Link>
			</div>

			<div className="row">
				<div className="col-lg-12 col-xl-6 subtitle">
					<div className="pl-3">{props.strapline}</div>
				</div>
				<div className="col-6 d-none d-lg-none d-xl-block subtitle">
					<div className="subtitle text-right">
						{pageDescription(props.location.pathname)}
					</div>
				</div>
				<div className="col-lg-12 d-block d-xl-none subtitle">
					<div className="pl-3 subtitle">
						{pageDescription(props.location.pathname)}
					</div>
				</div>
			</div>
		</header>
	</div>
);

Header.propTypes = {
	strapline: PropTypes.string.isRequired,
	loaction: PropTypes.shape({
		pathname: PropTypes.string
	})
};

export default withRouter(Header);
