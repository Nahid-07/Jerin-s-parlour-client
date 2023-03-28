import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useState } from 'react';
export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true);
    const [user,setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    // signup with email password
    const singUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login with email password
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google login
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loader,
        singUp,
        login,
        logOut,
        setLoader,
        googleLogin
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoader(false)
        });
        return () => unsubscribe();
      }, [auth]);
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;