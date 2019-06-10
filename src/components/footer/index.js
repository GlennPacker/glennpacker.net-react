import React from "react";
import { Style } from "radium";
import styles from "./footerStyle";

const Footer = () => (
	<div>
		<Style rules={styles} />
		<footer className="font-small text-white bg-danger ">
			<div className="container text-center text-md-left pt-3 pl-5 pr-5 container">
				<div className="row justify-content-center mb3">
					<div className="col-md-3 d-none d-md-block mb-md-0">
						<div>
							<a href="//www.linkedin.com/pub/glenn-packer/22/186/107">
								<i className="fab fa-linkedin text-white" />
							</a>
						</div>
						<div>
							<i className="fas fa-phone" />
							<a href="tel:07568400965" className="text-white pl-2">
								07568400965
							</a>
						</div>
					</div>
					<div className="col-md-8 mb-md-0 text-right d-none d-md-block">
						<div>
							<i className="fas fa-envelope" />
							<a href="mailto:glen.packer@glennpacker.net" className="pl-2">
								Glenn.Packer@GlennPacker.net
							</a>
						</div>
						<div>
							<i className="fas fa-map-marker pr-2 text-white" />
							22 The Martletts, Hellingly, East Sussex, BN22 4FA
						</div>
					</div>
					<div className="d-block d-md-none">
						<i className="fas fa-envelope" />
						<a href="mailto:glen.packer@glennpacker.net">
							Glenn.Packer@GlennPacker.net
						</a>
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
