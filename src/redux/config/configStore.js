import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authSlice } from "../modules/auth";
import { imgSlice } from "../modules/detail";
import { foldersSlice, tagsSlice } from "../modules/main";

export default configureStore({
  reducer: {
    folderReducer: foldersSlice.reducer,
    tagReducer: tagsSlice.reducer,
    authReducer: authSlice.reducer,
    imgReducer: imgSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
