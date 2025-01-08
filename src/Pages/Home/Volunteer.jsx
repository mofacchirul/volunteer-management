import React, { useEffect, useState } from 'react';
import Valunteer from './valunteer';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { easeOut } from 'motion';
const Volunteer = () => {
    const [valunteers,setvalunteers]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/volunteer')
        .then(res=>res.json())
        .then(data=>{
            setvalunteers(data)
        })
    },[])
 
    
    return (
        <div className=''>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
           {
                valunteers.map(valunteer=> <Valunteer key={valunteer._id} valunteer={valunteer}></Valunteer> )
            }
           </div>
                <div className=' text-center py-10'>
<Link to="/showall"><motion.button 
animate={{y:[0,10,0],color:['#b933ff','#683c98','#3c985c']}}
transition={{duration:7.3,repeat:Infinity,ease:easeOut, delay:1}}
className=' text-3xl font-bold  border-info border-solid border-2 py-2 px-4 rounded-2xl text-info'>Show All</motion.button></Link>
</div>
        </div>
    );
};

export default Volunteer;