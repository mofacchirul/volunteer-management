import React, { useEffect, useState } from 'react';
import Valunteer from '../Home/valunteer';
import { div } from 'motion/react-client';

const Showall = () => {
    const [valunteers, setVolunteers] = useState([]);
     useEffect(() => {
        fetch("http://localhost:5000/Volunteers")
          .then((res) => res.json())
          .then((data) => setVolunteers(data));
      }, []);
    return (
      <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
           {
            valunteers.map(valunteer=><Valunteer key={valunteer._id} valunteer={valunteer} ></Valunteer>)
           }
        </div>
      </div>
    );
};

export default Showall;