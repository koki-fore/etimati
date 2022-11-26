import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoutes = () => {
    const { user } = useAuthContext();
    return(
        user !== null ? <Outlet/> : <Navigate to='/login'/>
    )
}
export default PrivateRoutes;