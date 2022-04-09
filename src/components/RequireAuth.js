import { useAuthState } from "../firebase";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
    const user = useAuthState();
    const isAuthenticated = (user != null);
    const location = useLocation();

    return (
        isAuthenticated === true ? children : <Navigate to="/login" replace />
    )
}

export default RequireAuth;