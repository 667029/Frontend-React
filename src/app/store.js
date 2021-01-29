import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import expensesSlice from './expensesSlice';
import ToastMiddleware from '../middlewares/ToastMiddleware';
import AuthenticationMiddleware from '../middlewares/AuthenticationMiddleware';

export default configureStore({
  reducer: {
    userSlice: userSlice,
    expensesSlice: expensesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthenticationMiddleware, ToastMiddleware)
});
