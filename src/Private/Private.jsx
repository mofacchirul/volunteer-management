import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';




const PriviteRouter = ({children}) => {
const {user,Loding}=useContext(AuthContext);
const location = useLocation()


if (Loding){
    return <div className='flex justify-center items-start '>
        <span className="loading loading-ring bg-blue-600 loading-lg"></span>
    </div>
}

if(user){
    return children;
}

    return <Navigate to="/login" state={location?.pathname} ></Navigate>
};

export default PriviteRouter;