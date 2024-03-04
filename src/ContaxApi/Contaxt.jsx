import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,GithubAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/FirebaseConfig';
export const myContaxt = createContext(null) 

const Contaxt = ({children}) => {
    const [user, setUser] = useState(null)

    const Googleprovider = new GoogleAuthProvider();
    const Githubprovider = new GithubAuthProvider();
    // create user 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  log in user 
    const userLogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // for google singup
    const forGoogle = () =>{
      return  signInWithPopup(auth,  Googleprovider)
    }
    //  for github singup
    const forGithub = () =>{
        return signInWithPopup(auth,  Githubprovider )
    }
  useEffect(()=>{
  const unscircub =   onAuthStateChanged(auth, currentUser=>{
     setUser(currentUser)
    })
    return () =>{
        unscircub()
    }
  },[])
//   share info other pages 
    const AuthInfo = {forGoogle ,userLogIn, createUser, forGithub , user}
    return (
        <myContaxt.Provider value={AuthInfo}>
            {children}
        </myContaxt.Provider>
    );
};

export default Contaxt;