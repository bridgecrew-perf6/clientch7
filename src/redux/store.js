import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice'
import buttonReducer from './buttonSlice'

export const store = configureStore({
  reducer: {
    car: carReducer,
    button: buttonReducer,
  },
});
