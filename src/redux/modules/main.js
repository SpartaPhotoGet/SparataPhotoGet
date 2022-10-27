import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

// 질문: 서버와 통신 성공시 예외처리
// tag와 folder의 reducer를 분리해줬는데 성능상에 문제가 없을까??

/**
 * TODO: 토큰만료 처리
 */

export const __getFolders = createAsyncThunk(
  "main/getFolders",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.get("mainpage");
      if (success) return thunkAPI.fulfillWithValue(data);
      else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __addFolder = createAsyncThunk(
  "main/addFolder",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.post("mainpage", payload);
      if (success) return thunkAPI.fulfillWithValue(payload);
      else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __searchFolder = createAsyncThunk(
  "main/searchFolder",
  async (payload, thunkAPI) => {
    const params = { query: payload };
    try {
      const {
        data: { data, success, error },
      } = await api.get("mainpage/search", { params });
      if (success) return thunkAPI.fulfillWithValue(data);
      else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deleteFolder = createAsyncThunk(
  "main/deleteFolder",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.delete(`mainpage/${payload}`);
      if (success) return thunkAPI.fulfillWithValue(data);
      else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __getTags = createAsyncThunk(
  "main/getTags",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.get("mainpage");
      if (success) return thunkAPI.fulfillWithValue(data);
      else throw new Error(error.message);
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

export const foldersSlice = createSlice({
  name: "folders",
  initialState: {
    folders: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [__getFolders.pending]: pendingReducer,
    [__getFolders.fulfilled]: (state, action) => {
      state.folders = action.payload.folders;
      state.isLoading = false;
    },
    [__getFolders.rejected]: rejectedReducer,

    [__addFolder.pending]: pendingReducer,
    [__addFolder.fulfilled]: (state, action) => {
      state.folders.push({ folderName: action.payload.folderName });
      // FIXME: id값, 태그값 업데이트
      state.isLoading = false;
    },
    [__addFolder.rejected]: rejectedReducer,

    [__searchFolder.pending]: pendingReducer,
    [__searchFolder.fulfilled]: (state, action) => {
      state.folders = action.payload;
      state.isLoading = false;
    },
    [__searchFolder.rejected]: rejectedReducer,
  },
});

export const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    myTags: {},
    tags: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [__getTags.pending]: pendingReducer,
    [__getTags.fulfilled]: (state, action) => {
      state.myTags = action.payload.mytags;
      state.tags = action.payload.tags;
      state.isLoading = false;
    },
    [__getTags.rejected]: rejectedReducer,
  },
});
