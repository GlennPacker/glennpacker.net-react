import React from 'react';
import History from './history'
import Clients from './clients'
import SiteSummary from './siteSummary'

const Home = (props) => (
    <div>
        <div className="container pt-4">
            <SiteSummary/>
        </div>
        <div className="container pt-5">
            <div className="card-group">
                <div className="col-md-6">
                    <History/>
                </div>
                <div className="col-md-6">
                    <Clients/>
                </div>
            </div>
        </div>
    </div>
)
 
export default Home;