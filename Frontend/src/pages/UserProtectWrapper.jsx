// import React, { useContext } from 'react'
// import { UserDataContext } from '../context/UserContext'
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const UserProtectWrapper = ({children}) => {
   const token=localStorage.getItem('token');
    const navigate=useNavigate();
    //if user is not login then redirect to login page and if user is login then show the children
    //if page reloads then user will be logout so we need to check if token is present in local storage or not
 useEffect(()=>{
        if(!token){
            navigate('/login');
        }
        const decoded=jwtDecode(token);
        if(decoded.role!=='user'){
          localStorage.removeItem('token');
            navigate('/login');
        }
 },[navigate, token])
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper
