import React from "react";
import { Style } from "radium";
import styles from "./footerStyle";

const Footer = () => (
	<div>
		<Style rules={styles} />
		<footer className="font-small text-white bg-dark">
			<div className="container text-center text-md-left pt-3">
				<div className="row justify-content-center">
					<div className="col-lg-1 mb-md-0 d-none d-sm-none d-lg-block">
						<a href="//www.linkedin.com/pub/glenn-packer/22/186/107">
							<i className="fab fa-linkedin text-white" />
						</a>
					</div>

					<div className="col-md-4 col-lg-2 mb-md-0 mb3">
						<i className="fas fa-phone" />
						<a href="tel:07568400965" className="text-white pl-2">
							07568400965
						</a>
					</div>
					<div className="col-md-8 col-lg-4 mb-md-0 mb3">
						<i className="fas fa-envelope" />
						<a
							href="mailto:glen.packer@glennpacker.net"
							className="text-white pl-2"
						>
							Glenn.Packer@GlennPacker.net
						</a>
					</div>
					<div className="col-lg-5 text-right d-none d-md-none d-lg-block">
						<i className="fas fa-map-marker pr-2" />
						22 The Martletts, Hellingly, East Sussex, BN22 4FA
					</div>
				</div>
			</div>
			<div className="footer-copyright text-center py-3">
				© 2019 Copyright <a href="//glennpacker.net"> GlennPacker.net</a>
			</div>
		</footer>
	</div>
);

export default Footer;
