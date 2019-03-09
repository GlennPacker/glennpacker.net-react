import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header'
import Routing from '../routing';
import Nav from '../nav';
import { Style } from 'radium'
import styles from './mainStyle'

const Index = () => (
    <Router>
        <div>
            <Style rules={styles} />
            <Nav/>     
       
            <Header  strapline="Software Developer - Contractor"/>
            <Routing/>
            <Footer/>
        </div>
    </Router>
)

export default Index;
