import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoutes from './utils/PrivateRoutes'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import UserRegister from './pages/UserRegister'
import Challenges from './pages/Challenges'
import Header from './components/Header'
import Mypage from './pages/Mypage'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import PostPage from './pages/PostPage'
import NotFound from './pages/NotFound'


const App = () => {
  return (
        <BrowserRouter>
        <ChakraProvider>
        <AuthProvider>
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/*' element={<NotFound />} />
            
            <Route element={<PrivateRoutes/>}>
              <Route path='/UserRegister' element={<UserRegister />} />
              <Route path='/Challenges' element={<Challenges/>} />
              <Route path='/' element={<Mypage />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/TaskList' element={<TaskList />} />
              <Route path='/PostPage' element={<PostPage/>} />
            </Route>
            
          </Routes>
        </AuthProvider>
        </ChakraProvider>
        </BrowserRouter>
      )
}


export default App;
