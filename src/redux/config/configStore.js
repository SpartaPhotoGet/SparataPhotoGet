import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
<<<<<<< HEAD
import FolderPage from "../../pages/FolderPage";
import FolderItem from "../../pages/FolderItem";
import Home from "../../pages/Home";
import folderSlice from "./folderSlice";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default configureStore({
  reducer: {
    Home: Home,
    folderSlice: folderSlice,
=======
import { authSlice } from "../modules/auth";
import { foldersSlice, tagsSlice } from "../modules/main";

export default configureStore({
  reducer: {
    folderReducer: foldersSlice.reducer,
    tagReducer: tagsSlice.reducer,
    authReducer: authSlice.reducer,
>>>>>>> 7bebda6289f85779f12c9c036937adab2eb93f55
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
