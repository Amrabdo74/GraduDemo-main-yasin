import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const Protected = ({children}) => {
    const auth = useSelector(state=>state.auth)
    console.log(auth);
    if (auth) {
        console.log("l");
        console.log(children);
        return children;
    }else{
        console.log("l");

        return <Navigate to="/signIn" />;
    }
    
}
