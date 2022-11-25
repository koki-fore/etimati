import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import PrivateRoutes from './utils/PrivateRoutes'
import SignUp from './pages/SignUp'
import Login from './pages/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/" element={<App />} />
        {/* </Route> */}
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  </React.StrictMode>
)
