import React from 'react';

import Footer from '../footer'
import Header from '../header'
import Routing from '../routing';
import Nav from '../nav';
import { Style } from 'radium'
import styles from './mainStyle'

const Index = () => (
    <div>
        <Style rules={styles} />
        <Nav/>

        <Header  strapline="Software Developer - Contractor"/>
        <div className="main-content">
            <Routing/>
        </div>
        <Footer/>
    </div>
)

export default Index;
