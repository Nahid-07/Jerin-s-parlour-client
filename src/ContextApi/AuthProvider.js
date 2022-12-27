import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useState } from 'react';
export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true);
    const [user,setUser] = useState(null)
    const auth = getAuth(app)
    // signup with email password
    const singUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login with email password
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {
        user,
        loader,
        singUp,
        login
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;