import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userAuth: '',
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setAuth: (state, action) => {
        state.userAuth = action.payload;
  
        state.isAuthenticated = true;
        return state;
      },
  
    },
  });
  
  export const { setAuth } = authSlice.actions;
  
  export default authSlice.reducer;