import React from 'react';
import { MdCategory } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Valunteer = ({valunteer}) => {
   const {thumbnail,postTitle,category,deadline,_id} = valunteer;
    
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={thumbnail}
      alt="Shoes" className='h-[300px] w-full' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{postTitle}</h2>
   <div className='flex justify-between items-center text-base text-gray-600'>
    <p className='flex gap-3 items-center'> <MdCategory /> category : {category}</p>
    <p> 🕒 Deadline: {deadline}</p>
   </div>
    <div className="card-actions justify-end">
    <Link to={`/viewdetails/${_id}`}><button className="btn btn-block btn-info text-white font-bold">View Details </button></Link>
    </div>
  </div>
</div>


        </div>
    );
};

export default Valunteer;