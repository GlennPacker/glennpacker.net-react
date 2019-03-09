import React from 'react';

const Footer = () => (
    <div style={{height:'120px'}}>
        <footer className="font-small text-white bg-dark" style={{position: 'fixed', bottom: '0', width: '100%'}}>
            <div className="container-fluid text-center text-md-left pt-3">
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-md-0 mb3">
                        <i className="fas fa-phone"></i> 
                        <a href="tel:07568400965" className="text-white pl-2">07568400965</a>
                    </div>
                    <div className="col-md-3 mb-md-0 mb3">
                        <i className="fas fa-envelope"></i> 
                        <a href="mailto:glen.packer@glennpacker.net" className="text-white pl-2">Glenn.Packer@GlennPacker.net</a>
                    </div>
                    <div className="col-md-4 mb-md-0 mb4">
                        <i className="fas fa-map-marker pr-2"></i> 
                        22 The Martletts, Hellingly, East Sussex, BN22 4FA
                    </div>

                    <div className="col-md-2 mb-md-0 mb-2">
                        <a href="//www.linkedin.com/pub/glenn-packer/22/186/107">
                            <i className="fab fa-linkedin text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="//glennpacker.net"> GlennPacker.net</a>
            </div>
        </footer>
    </div>
)

export default Footer;