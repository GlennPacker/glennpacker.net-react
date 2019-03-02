import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './main.css';
import Footer from '../footer'
import Header from '../header'
import Routing from '../routing';
import Nav from '../nav';

// const SomeComponent = withRouter(props => <Header {...props}/>);

const Index = () => (
    <Router>
        <div>
            <Nav/>     
                     
            <Header  strapline="Software Developer - Contractor"/>
            <Routing/>
            <Footer/>
        </div>
    </Router>
)

export default Index;
