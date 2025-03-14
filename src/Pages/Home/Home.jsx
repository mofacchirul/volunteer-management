import React from 'react';
import Banner from '../Banner/Banner';

import Volunteer from './Volunteer';
import HomePage from '../HomePage/Homepage';
import Banner3 from '../Banner3/Banner3';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div >
             <Helmet>
                <meta charSet="utf-8" />
                <title> Volunteer | Home </title>
                
            </Helmet>
            <Banner></Banner>
           
            <Volunteer ></Volunteer>
            <Banner3></Banner3>
            <HomePage></HomePage>
            <Outlet></Outlet>
       
        </div>
    );
};

export default Home;