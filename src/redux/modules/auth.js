import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const __signUp = createAsyncThunk(
  "auth/signUp",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.post("member/signup", payload);
      if (success) return thunkAPI.fulfillWithValue(data);
      else {
        throw new Error(error.message);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __signIn = createAsyncThunk(
  "auth/signIn",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.post("member/login", payload);

      if (success) {
        return thunkAPI.fulfillWithValue(data);
      } else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const pendingReducer = (state) => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {
      id: "",
      userId: "",
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    clearErr: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [__signUp.pending]: pendingReducer,
    [__signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__signUp.rejected]: rejectedReducer,

    [__signIn.pending]: pendingReducer,
    [__signIn.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    },
    [__signIn.rejected]: rejectedReducer,
  },
});
export const { clearErr } = authSlice.actions;
