import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Component/userSlice';
import appReducer from '../Component/appSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
