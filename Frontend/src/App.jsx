import { Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogout from './pages/CaptainLogout'
import CaptainLogin from './pages/CaptainLogin'
import { Routes } from 'react-router-dom'
import Start from './pages/Start'
import CaptainHome from './pages/CaptainHome'
import UserLogout from './pages/UserLogout'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin/>} /> 
        <Route path="/riding" element={<Riding/>}/>
        <Route path="/captain-riding" element={<CaptainRiding/>}/>
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path="/users/logout" element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} /> 
        <Route path="/captain-home" element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        } />
        <Route path="/captain-logout" element={<CaptainProtectWrapper>
          <CaptainLogout />
        </CaptainProtectWrapper>} />
       
      </Routes>
    </div>
  )
}

export default App
