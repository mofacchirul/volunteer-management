import Lottie from 'lottie-react';
import login from '../../lotti/singin.json'
import icon_logo from '../../assets/logo_Volunteer management.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import Google from '../../Firebase/Google';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
const Login = () => {
  const {Login}= useContext(AuthContext)


const location = useLocation();
const navigate = useNavigate();

const from = location.state || '/';


  const HandleSIngIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    Login(email, password)
      .then((result) => {
         Swal.fire({
                title: "Login success",
                icon: "success",
                draggable: true
              });
        navigate('/')
      })
      .catch((error) => {
        Swal.fire({
          title: "Login failed!",
          text:"Invalid email or password.",
          icon: "error",
          draggable: true,
        });
      });
  };
  






    return (
        <div className=' shadow-2xl border-2 rounded-2xl my-10'>

         <div className='flex justify-center items-center my-7'>
         <img src={icon_logo} className='w-28 h-28'  alt="" />
         <h2 className='lg:text-3xl text-2xl  font-semibold'>Volunteer management</h2>
         </div>
           {/* <h2 className='text-3xl font-bold text-center py-4'>Create your account</h2> */}
           <h1 className="lg:text-5xl text-2xl font-bold text-center">Login now!</h1>

            <div className="hero  ">
            <div className="hero-content flex-col gap-5  lg:flex-row-reverse">
              <div className="text-center lg:text-left  ">
           <div className='w-96 h-96 rounded-xl '>
              <Lottie animationData={login}></Lottie>    
           </div>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              
                <form className="card-body"  onSubmit={HandleSIngIn}>
                
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    
                  </div>
                  
                 
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-block btn-info text-white text-2xl font-bold">Log in</button>
                  </div>
                    <div>
                      <h3 className='text-xl text-info font-semibold'>Log in to your account</h3>
                      <p>Don't have an account? <Link to="/resistance" className='underline text-info'>Resistar</Link></p>
                    </div>

                  <div className='py-4'>
                  <Google></Google>
                </div>
                </form>
              
              </div>
            </div>
          </div>
        </div>
    );
};

export default Login;