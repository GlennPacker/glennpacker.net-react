import React from 'react';
import Footer from '../footer'
import Header from '../header'
import Routing from '../routing';
import Nav from '../nav';
import { Style } from 'radium'
import styles from './mainStyle'
import { HashRouter as Router } from 'react-router-dom'

import configureStore from '../../redux/configureStore';
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

const Index = () => (
    <ReduxProvider store={store}>
        <Router>
            <div>
                <Style rules={styles} />
                <Nav/>

                <Header  strapline="Software Developer - Contractor"/>
                <div className="main-content">
                    <Routing/>
                </div>
                <Footer/>
            </div>
        </Router>
    </ReduxProvider>
)

export default Index;
