import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  message: '',
  errors: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.message = 'Registration successful. You can now log in.';
      state.errors = {};
    },
    registerFailure: (state, action) => {
      state.message = '';
      state.errors = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.message = 'Login successful!';
      state.errors = {};
    },
    loginFailure: (state, action) => {
      state.message = 'Invalid email or password.';
      state.errors = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.message = '';
      state.errors = {};
    },
  },
});

export const {
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
