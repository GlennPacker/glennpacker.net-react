import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from './logo.png';
import {withRouter} from 'react-router-dom';

const pageDescription = (pathName) => {
	switch (pathName) {
		case '/clients': return 'Clients'
		default: return ''
	}
}

const Header = (props) => (
	<div className="container">
		<header>
			<div className="row">
				<Link to="/">
					<img
						src={logo}
						className="logo"
						alt="logo"
					/>
				</Link>
			</div>

			<div className="row">
				<div className="col-7 col-md-7 subtitle">
					<div className="pl-3">
						{props.strapline}
					</div>
				</div>
				<div className="col-5 col-md-5 subtitle text-right pr-3">
					<div className="col-12 subtitle text-right pr-3">
						{ pageDescription(props.location.pathname) }
					</div>
				</div>
			</div>
		</header>
	</div>
)

Header.propTypes = {
	strapline: PropTypes.string.isRequired
}

export default withRouter(Header);
