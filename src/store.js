import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global/globalReducer";
import homeReducer from './modules/Home/reducer/index'
export const store = configureStore({
  reducer: {
    counter: homeReducer,  // Registering reducer
    global: globalReducer
  },
});

export default store;