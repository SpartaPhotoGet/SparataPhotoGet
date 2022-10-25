import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
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
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
