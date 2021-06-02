import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../component/userSlice';
import appReducer from '../component/appSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
