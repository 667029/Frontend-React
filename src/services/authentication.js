import { userAuthenticated } from '../app/userSlice';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44373/Authentication',
});

export const SignUp = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signup', credentials);
        dispatch(userAuthenticated(data));
    } catch {
        console.log('Error!');
    }
}

export const SignIn = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signin', credentials);
        dispatch(userAuthenticated(data));
    } catch {
        console.log('Error!');
    }
}