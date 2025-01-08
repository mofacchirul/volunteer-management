import React, { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
 withCredentials: true
});

const UserAxios = () => {

const {Singout}= useContext(AuthContext)
const navigate = useNavigate()

useEffect(()=>{
   axios.interceptors.response.use(response=>{
    return response
   } , 
   error=>{
    if(error.status === 401 || error.status === 403){
        Singout()
    .then(result=>{
        navigate("/login")
    })
    .catch(error=>{

    })
    }
    return Promise.reject(error)
   }


)
},[])
return apiClient;
};

export default UserAxios;