import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api";

const initialState = {
  tags: [],
  photos: [],
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

export const __deleteImage = createAsyncThunk(
  "DELETE_IMAGE",

  async (payload, thunkAPI) => {
    const arr = [1, 2, 3, 4].join(",");
    const params = { photoId: arr };
    try {
      console.log("이건뭐냐", payload);
      await api.delete(`folder/${payload.id}`, { params });
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
    [__addImage.pending]: (state) => {
      state.isLoading = true;
    },
    [__addImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Imgs.push(action.payload);
    },
    [__addImage.rejected]: (state, action) => {
      state.isLoading = false;
      state.folder = action.payload;
    },

    // GET
    [__getContentById.pending]: pendingReducer,
    [__getContentById.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.tags = action.payload.tags;
      state.photos = action.payload.photos;
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
    [__deleteImage.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.photos.findIndex(
        (photos) => photos.id === action.payload
      );
      state.photos.splice(target, 1, action.payload);
    },
    [__deleteImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    },
  },
});
