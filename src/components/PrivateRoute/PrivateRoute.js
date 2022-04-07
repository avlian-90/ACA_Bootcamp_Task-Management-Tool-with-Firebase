import { Navigate } from "react-router-dom";
import { useCleverContext } from '../../state';

function PrivateRoute({ children }) {
    const { state: { isLoggedIn } } = useCleverContext();

    if (!isLoggedIn) {
        return <Navigate to='/sign-in' replace />
    }
    return children;
}

export default PrivateRoute;