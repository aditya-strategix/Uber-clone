import axios from "axios";
import { Navigate } from "react-router-dom";
const CaptainLogout = () => {
    // const navigate=useNavigate(); //use navigate hook
    const token=localStorage.getItem('token'); //get token from local storage
     axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`)
     .then((response)=>{
            console.log(response)
            if(response.status===200){
                localStorage.removeItem('token'); //remove token from local storage
                Navigate('/captain-login'); //redirect to login page
            }})
  return (
    <div>
      captain logout successfully
    </div>
  )
}


export default CaptainLogout
