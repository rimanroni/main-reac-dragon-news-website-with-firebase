import React, { useContext } from 'react';
import { myContaxt } from '../../ContaxApi/Contaxt';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(myContaxt);
    const location = useLocation()
     
    if(loading ){
        return <div className='h-[100vh] flex justify-center items-center'>Loading Data Please Wait... </div>
    }
    if(user){
        return  children 
    }
    return (
        <Navigate state={location.pathname} to="/login"/>
    );
};

export default PrivetRouter;