import React, { useContext } from 'react';
import GogleImges from '../assets/icons8-google-100.png'
import { AuthContext } from '../Provider/Provider';
import {  useNavigate } from 'react-router-dom';
const Google = () => {
    const {google}=useContext(AuthContext);

const navigate = useNavigate();


  
    
    return (
        <div>
           <div className="divider">OR</div> 
          <div>
           
          <button onClick={google} className='btn btn-block font-bold text-2xl'> <img src={GogleImges} className='h-10' alt="" /> Google</button>
          </div>
        </div>
    );
};

export default Google;