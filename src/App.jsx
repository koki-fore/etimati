import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoutes from './utils/PrivateRoutes'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import UserRegister from './pages/UserRegister'
import Challenges from './pages/Challenges'
import Header from './components/Header'
const App = () => {
  return (
      
        <BrowserRouter>
        <ChakraProvider>
        <AuthProvider>
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Login' element={<Login />} />

            <Route element={<PrivateRoutes/>}>
              <Route path='/UserRegister' element={<UserRegister />} />
              <Route path='/Challenges' element={<Challenges/>} />

            </Route>
            
          </Routes>
        </AuthProvider>
        </ChakraProvider>
        </BrowserRouter>
      )
}


export default App;