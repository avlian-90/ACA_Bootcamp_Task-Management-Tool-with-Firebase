import { Navigate } from 'react-router-dom';
import { useCleverContext, ACTION_TYPES } from '../../state';

function SignIn() {
    const { dispatch } = useCleverContext();

    const login = () => {
        dispatch({ type: ACTION_TYPES.SIGN_IN });
        return <Navigate to='/home' replace />
    }

    return (
        <div>
            Sign In
            <form>
                <input type="text" placeholder="Login"/>
                <input type="text" placeholder="Password"/>
                <button onClick={login}>Sign in</button>
            </form>
        </div>
    )
}

export default SignIn;