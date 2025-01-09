import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PriviteRouter = ({children}) => {
const {user,loding}=useContext(AuthContext)
const location = useLocation()


if (loding){
    return <div className='flex justify-center items-start '>
        <span className="loading loading-ring bg-blue-600 loading-lg"></span>
    </div>
}

if(user){
    return children
}

    return <Navigate to="/login" state={location?.pathname} ></Navigate>
};

export default PriviteRouter;