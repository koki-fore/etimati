import { Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebaseEnv";

const PrivateRoutes = () => {
    onAuthStateChanged(auth, (user) => {
        return(
            user != null ? <Outlet /> : <Navigate to='login' />
        )
    });
    
}
export default PrivateRoutes;