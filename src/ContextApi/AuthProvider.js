import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useState } from 'react';
export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true);
    const [user,setUser] = useState(null)
    const auth = getAuth(app)
    const singUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {
        user,
        loader,
        singUp
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;