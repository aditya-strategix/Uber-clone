
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const CaptainProtectWrapper = ({children}) => {
    const [isLoading,setIsLoading]=useState(true);
   const token=localStorage.getItem('token');
    const navigate=useNavigate();

 useEffect(()=>{
        if(!token){
            navigate('/captain-login');
        } else{
            const decoded=jwtDecode(token);
            if(decoded.role!=='captain'){
              localStorage.removeItem('token');
navigate('/captain-login');
            }
        }
        setIsLoading(false);
 },[navigate, token])
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectWrapper
