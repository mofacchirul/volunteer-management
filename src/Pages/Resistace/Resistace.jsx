import React, { useContext } from 'react';
import icon_logo from '../../assets/logo_Volunteer management.png'
import resistancce from '../../lotti/resistance.json'
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import { AuthContext } from '../../Provider/Provider';
import Google from '../../Firebase/Google';
import { Link } from 'react-router-dom';

const Resistance = () => {
    
    const{Resistacesing,UpdateProfile}= useContext(AuthContext)
  
const Handleresistance=(event)=>{
  
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  
    const user ={name,email,password,photo}
    console.log(user);
    
  if (!passwordRegex.test(password)) {
    Swal.fire({
      title: "Invalid Password",
      text: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
      icon: "error",
      draggable: true,
    });
    return;
  }
   
    Resistacesing(email,password)
    .then(result=>{
      Swal.fire({
        title: "Resistance success",
        icon: "success",
        draggable: true
      });
      UpdateProfile({
        photoURL: photo,
      })
     
      console.log(result.user);
      

    })
    .then(error=>{
       
    })
    
}





    return (
        <div className='border-2 shadow-2xl rounded-2xl '>
         <div className='flex justify-center items-center my-7'>
         <img src={icon_logo} className='w-28 h-28'  alt="" />
         <h2 className='lg:text-3xl text-2xl font-semibold'>Volunteer management</h2>
         </div>
          
           <h1 className="lg:text-5xl text-2xl text-center font-bold ">Resistance now!</h1>
            <div className="hero   ">
          

          
        <div className="hero-content flex-col my-7 gap-5 items-center  lg:flex-row-reverse">
          <div className="text-center lg:text-left  ">
       <div className=' '>
       <Lottie animationData={resistancce}></Lottie>
       
       </div>
          </div>
         
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         
            <form className="card-body" onSubmit={Handleresistance}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="url" name='photo' placeholder="Photo" className="input input-bordered" required />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block btn-info text-white text-2xl font-bold">Resistance</button>
              </div>
              <div>
                      <h3 className='text-xl text-info font-semibold'>Create your accountt</h3>
                      <p>Have an account? <Link to="/login" className='underline text-info'>Log in now</Link></p>
                    </div>
              <div className='pt-4'>
             <Google></Google>
            </div>
            </form>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Resistance;