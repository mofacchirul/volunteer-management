import React from 'react';
import Banner from '../Banner/Banner';

import Volunteer from './Volunteer';
import HomePage from '../HomePage/Homepage';
import Banner3 from '../Banner3/Banner3';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div >
            <Banner></Banner>
           
            <Volunteer ></Volunteer>
            <Banner3></Banner3>
            <HomePage></HomePage>
            <Outlet></Outlet>
       
        </div>
    );
};

export default Home;