import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const activeStyle = { color: "#F15B2A" };
	return (
		<div className="container">
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<NavLink exact to="/" className="nav-link" activeStyle={activeStyle}>
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/clients" className="nav-link" activeStyle={activeStyle}>
						Clients
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to="/spadevelopment"
						className="nav-link"
						activeStyle={activeStyle}
					>
						SPA
					</NavLink>
				</li>
				<li className="nav-item d-none d-sm-block">
					<NavLink
						to="/frontenddevelopment"
						className="nav-link"
						activeStyle={activeStyle}
					>
						Front End
					</NavLink>
				</li>
				<li className="nav-item d-none d-sm-block">
					<NavLink
						to="/backenddevelopment"
						className="nav-link"
						activeStyle={activeStyle}
					>
						Back End
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/contact" className="nav-link" activeStyle={activeStyle}>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
