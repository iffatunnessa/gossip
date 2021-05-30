import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/userSlice'
import appReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    app:appReducer,
    counter:counterReducer,
  },
});
