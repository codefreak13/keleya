import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

export type authState = {
  loginData: {
    loading: boolean;
    data: {};
    error: {};
    token: boolean;
  };
}

const initialState: authState = {
  loginData: {
    loading: false,
    data: {},
    error: {},
    token: false,
  },
};

const onLogin = createAsyncThunk('auth/authorize', async () => {
  try {

  } catch (error) {
    console.log(JSON.stringify(error));
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state: authState) => {
      state.loginData = {
        ...state.loginData,
        token: false,
      };
    },
  },
  extraReducers: {
    [onLogin.pending.type]: (state: authState) => {
      state.loginData = {
        loading: true,
        data: {},
        error: {},
        token: false,
      };
    },
    [onLogin.fulfilled.type]: (state: authState, action: { payload: any; }) => {
      state.loginData = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [onLogin.rejected.type]: (state: authState, action: { payload: any; }) => {
      state.loginData = {
        loading: false,
        data: {},
        error: action.payload,
        token: false,
      };
    },
  },
});

const {
  actions: { signOut },
} = authSlice;

export { signOut, onLogin, };
export default authSlice.reducer;
