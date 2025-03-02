import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const UserLogout = () => {
    const navigate=useNavigate(); //use navigate hook
    const token=localStorage.getItem('token'); //get token from local storage
    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`).then((response)=>{
        if(response.status===200){
            localStorage.removeItem(token); //remove token from local storage
            navigate('/login'); //redirect to login page
        }
    })
    
  return (
    <div>
      
    </div>
  )
}

export default UserLogout
