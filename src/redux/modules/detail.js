import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api";

const initialState = {
  tags: [],
  img: [],
  isLoading: false,
  error: null,
};

export const __addContent = createAsyncThunk(
  "ADD_CONTENT",
  async (payload, thunkAPI) => {
    try {
      const data = await api.post(`folder/${payload.id}`, payload.imgData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __getContentById = createAsyncThunk(
  "GET_CONTENT_BY_ID",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, error, success },
      } = await api.get(`folder/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateContent = createAsyncThunk(
  "UPDATE_CONTENT",
  async (payload, thunkAPI) => {
    try {
      const result = await api.patch(`folder/${payload.id}`, {
        tag: payload.tag,
      });
      return thunkAPI.fulfillWithValue(result.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deleteContent = createAsyncThunk(
  "DELETE_CONTENT",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`folder/${payload.id}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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

export const imgSlice = createSlice({
  name: "img",
  initialState,
  reducers: {},
  extraReducers: {
    // ADD
    // [__addContent.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__addContent.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.contents.push(action.payload);
    // },
    // [__addContent.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.folder = action.payload;
    // },

    // GET
    [__getContentById.pending]: pendingReducer,
    [__getContentById.fulfilled]: (state, action) => {
      state.tags = action.payload.tags;
      state.img = action.payload.img;
      state.isLoading = false;
    },
    [__getContentById.rejected]: rejectedReducer,

    // UPDATE
    [__updateContent.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateContent.fulfilled]: (state, action) => {
      const target = state.tags.findIndex(
        (tags) => tags.id === action.payload.id
      );

      state.tags.splice(target, 1, action.payload);
    },
    [__updateContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //DELETE
    [__deleteContent.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.contents.findIndex(
        (content) => content.id === action.payload
      );
      state.contents.splice(target, 1);
    },
    [__deleteContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.folder = action.payload;
    },
  },
});
