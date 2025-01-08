import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.int';
import axios from 'axios';
export const AuthContext = createContext()
const Provider = ({children}) => {
const [Loding,setloding]= useState(true)
const [user,setuser]=useState(null);
const provider = new GoogleAuthProvider()

const Resistacesing =(email,password)=>{
    setloding(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const Login =(email,password)=>{
    setloding(true)
    return signInWithEmailAndPassword(auth,email,password);
}


useEffect(()=>{
const unscrib = onAuthStateChanged(auth,currentUser=>{
       
        setuser(currentUser)
            // if(currentUser?.email){
            //     const user = {email:currentUser.email}
            //     axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            //     .then(res =>{
                  
            //       setloding(false)
            //     })
                
            //   }
            //   else{
            //     axios.post('http://localhost:5000/login',{},{withCredentials:true})
            //     .then(res =>{
            //       setloding(false)
            //     })
               
            //   }

            setloding(false)
    })
    return ()=>{
        unscrib()
    }
},[])

const google =()=>{
    setloding(true) 
    signInWithPopup(auth,provider)
  
  
  }

const Singout =()=>{
    return signOut(auth);
}
const UpdateProfile = (update)=>{
    return updateProfile(auth.currentUser,update)
}

const info={
    Resistacesing,
    Login,
    Loding,
    user,
    Singout,
    UpdateProfile,
    google
}
    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default Provider;