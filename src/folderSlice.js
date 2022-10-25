import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  contents: [],
};

export const __addContent = createAsyncThunk(
  "ADD_CONTENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/contents", payload);
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
      const result = await axios.get(
        `http://localhost:3001/contents?Id=${payload}`
      );
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateContent = createAsyncThunk(
  "UPDATE_CONTENT",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.patch(
        `http://localhost:3001/contents/${payload.id}`,
        payload
      );
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
      await axios.delete(`http://localhost:3001/contents/${payload.id}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {},
  extraReducers: {
    // ADD
    [__addContent.pending]: (state) => {
      state.isLoading = true;
    },
    [__addContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contents.push(action.payload);
    },
    [__addContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.folder = action.payload;
    },

    // GET
    [__getContentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    },
    [__getContentById.rejected]: (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    },

    // UPDATE
    [__updateContent.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateContent.fulfilled]: (state, action) => {
      const target = state.content.findIndex(
        (content) => content.id === action.payload.id
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

export const { addContent } = folderSlice.actions;
export default folderSlice.reducer;
