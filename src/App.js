import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { AuthContextProvider } from './Context/AuthContext';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Account from './Pages/Account/Account';
import ProtectedRouted from './Components/ProtectedRoute/ProtectedRouted';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/account'
            element={
              <ProtectedRouted>
                <Account />
              </ProtectedRouted>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
