import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuthContext } from './context/AuthContext';
import Home from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';

function App() {

  const {authUser} = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home></Home>: <Navigate to={'/login'}></Navigate>}></Route>
        <Route path='/login' element={authUser ? <Navigate to='/'></Navigate> : <Login></Login>}></Route>
        <Route path='/signup' element={authUser ? <Navigate to='/'></Navigate> : <Signup></Signup>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App
