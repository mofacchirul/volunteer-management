import React from 'react';
import team1 from '../../assets/banner3_2 (1).jpg'
import team2 from '../../assets/banner3_2 (2).jpg'
import { motion } from 'motion/react';
import { easeOut } from 'motion';
const Banner3 = () => {
    return (
        
        <div className="hero my-10 py-10 max-w-7xl mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='flex-1 space-y-4  gap-5'>
         <motion.img
         animate={{y:[50,100,50]}}
         transition={{duration: 5.3,repeat:Infinity}}
            src={team1}
            className="max-w-sm h-60 w-96 rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-400 rounded-lg shadow-2xl" />
             <motion.img
              animate={{x:[100,170,100]}}
              transition={{duration: 5.3,repeat:Infinity}}
            src={team2}
            className="max-w-sm  h-60 w-96  rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-400 rounded-lg shadow-2xl" />
         </div>
          <div className='flex-1'>
            <motion.h1         
            animate={{x:[0,70,0],color:['#FFA500','#00FFFF','#FF0000']}}
            transition={{duration:7.3,repeat:Infinity,ease:easeOut, delay:1}}
            className="text-5xl font-bold">
           Volunteer management 
            </motion.h1>
            <p className="py-6 ">
            Volunteer management is the process of working with volunteers to achieve an organization's goals. It involves recruiting, training, supporting, and managing 
            volunteers. The goal is to ensure that volunteers are engaged and productive, and that their efforts help the organization.
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default Banner3;