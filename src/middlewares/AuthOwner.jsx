import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthOwner = ({ children }) => {

    const { user } = useAuth();

    if (!user.isOwner) return <Navigate to="/" />

    return children;
}

export default AuthOwner;