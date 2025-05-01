import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Layouts/Dashboard';
import ChatsLayout from './Layouts/ChatsLayout';
import InitialPage from './Components/InitialPage';
import GroupsLayout from './Layouts/GroupsLayout';
import CallsLayout from './Layouts/CallsLayout';
import SettingsLayout from './Layouts/SettingsLayout';
import ProfileLayout from './Layouts/ProfileLayout';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/Signup';
import ForgetPassword from './Components/Auth/ForgetPassword';
import VerifyCode from './Components/Auth/VerifyCode';
import UpdatePassword from './Components/Auth/UpdatePassword';
import ProtectRoute from './Components/Auth/ProtectRoute';
import NotFound from './Components/NotFound';
import { ToastContainer } from 'react-toastify';



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectRoute><Dashboard /></ProtectRoute>}>
          <Route path='/' element={<ChatsLayout />}>
            <Route index element={<InitialPage />} />
          </Route>
          <Route path='/groups' element={<GroupsLayout />}>
            <Route index element={<InitialPage />} />
          </Route>
          <Route path='/calls' element={<CallsLayout />}>
            <Route index element={<InitialPage />} />
          </Route>
          <Route path='/settings' element={<SettingsLayout />}>
            <Route index element={<InitialPage />} />
          </Route>
          <Route path='/profile' element={<ProfileLayout />}>
            <Route index element={<InitialPage />} />
          </Route>
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/updatepassword' element={<UpdatePassword />} />
        <Route path='/verifycode' element={<VerifyCode />} />

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
