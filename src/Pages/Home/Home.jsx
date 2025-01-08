import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';
import Volunteer from './Volunteer';
import HomePage from '../HomePage/Homepage';
import Banner3 from '../Banner3/Banner3';
const Home = () => {
    return (
        <div className='py-10'>
            <Banner></Banner>
            <Outlet></Outlet>
            <Volunteer></Volunteer>
            <Banner3></Banner3>
            <HomePage></HomePage>
       
        </div>
    );
};

export default Home;