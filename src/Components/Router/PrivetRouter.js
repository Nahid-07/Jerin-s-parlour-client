import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../ContextApi/AuthProvider';

const PrivetRouter = ({children}) => {
    let location = useLocation()
    const {user} = useContext(authContext)
    if(!user?.email){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default PrivetRouter;