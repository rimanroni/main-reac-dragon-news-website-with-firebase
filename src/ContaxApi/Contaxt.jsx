import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,GithubAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/FirebaseConfig';
export const myContaxt = createContext(null) 

const Contaxt = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const Googleprovider = new GoogleAuthProvider();
    const Githubprovider = new GithubAuthProvider();
    // create user 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  log in user 
    const userLogIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // for google singup
    const forGoogle = () =>{
        setLoading(true)
      return  signInWithPopup(auth,  Googleprovider)
    }
    //  for github singup
    const forGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth,  Githubprovider )
    }
  useEffect(()=>{
  const unscircub =   onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
    })
    return () =>{
        unscircub()
    }
  },[])
//   share info other pages 
    const AuthInfo = {forGoogle , loading ,userLogIn, createUser, forGithub , user}
    return (
        <myContaxt.Provider value={AuthInfo}>
            {children}
        </myContaxt.Provider>
    );
};

export default Contaxt;