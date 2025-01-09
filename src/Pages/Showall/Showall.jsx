import React, { useEffect, useState } from 'react';
import Valunteer from '../Home/valunteer';

const Showall = () => {
    const [valunteers, setVolunteers] = useState([]);
     useEffect(() => {
        fetch("https://assignment-11-server-side-mu-ten.vercel.app/Volunteers")
          .then((res) => res.json())
          .then((data) => setVolunteers(data));
      }, []);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
           {
            valunteers.map(valunteer=><Valunteer key={valunteer._id} valunteer={valunteer} ></Valunteer>)
           }
        </div>
    );
};

export default Showall;