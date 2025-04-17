import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    popup: {
        show: false,
        type: ''
    } ,
    user: {}
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setPopup: (state, action) => {
        state.popup = action.payload
    },
    setCurruser: (state, action) => {
        state.user = action.payload
    }
  },
});

// Export actions for globalSlice
export const { setPopup, setCurruser } = globalSlice.actions;

// Export reducer to be added to the store
export default globalSlice.reducer;
