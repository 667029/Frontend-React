import { userAuthenticated, logout } from '../app/userSlice';

const AuthenticationMiddleware = () => next => action => {
    switch (action.type) {
        case userAuthenticated.type:
            sessionStorage.setItem('token', action.payload.token);
            break;
        case logout.type:
            sessionStorage.clear();
            break;
        default:
            break;
    }
    return next(action);
}

export default AuthenticationMiddleware;