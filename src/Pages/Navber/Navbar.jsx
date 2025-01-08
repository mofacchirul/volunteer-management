import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_Volunteer management.png'
import { AuthContext } from '../../Provider/Provider';
import './Navber.css'
import { IoMoon, IoSunny } from 'react-icons/io5';
import { div } from 'motion/react-m';


const Navbar = () => {
    
 
  
  const links = 
    <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/all_volunteer">All volunteer </NavLink></li>  
    </>
  

const {Singout,user}= useContext(AuthContext) ;
const [dark, setDark] = React.useState(false);
const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    };


    return (
        <div
        
        className="navbar bg-base-100 sticky top-0 z-10 backdrop-blur-sm bg-white/30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <div className='flex items-center gap-3'>
        <img src={logo} className='w-16  h-16 lg:w-20 lg:h-20 border-2 rounded-full p-1' alt="" />
    <a className="font-bold text-xl">Volunteer management</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        links
     }
    </ul>
  </div>
  <div className="navbar-end gap-3">
   
  <div>
          <button onClick={darkModeHandler} className="btn border-2 border-info  btn-ghost mr-3">
                    {dark ? <IoSunny className='text-white' /> :  <IoMoon  />}
                </button>
          </div>
   
 <div>
 {
  user ? 
 <div className='flex items-center gap-2'>
  <div className="dropdown ">
  <div tabIndex={0} role="button" className=" m-1"><img src={user?.photoURL} className="w-16 h-16  rounded-full" alt="" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link to="/add_Volunteer" >Add Volunteer need Post</Link></li>
    <li><Link to="/myPost">Manage My Posts </Link></li>
  </ul>
</div>
   <button  className="btn btn-info" onClick={Singout}>Login Out</button>
 </div>
  :
 <div>
   <Link to="/resistance" ><button className="underline font-semibold">Resister</button></Link>
   <Link to="/login"> <button className="btn btn-info text-white">Login</button></Link>
 </div>
 }
 </div>
  </div>
</div>

    );
};

export default Navbar;