import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import FolderPage from "../../pages/FolderPage";
import FolderItem from "../../pages/FolderItem";
import Home from "../../pages/Home";

export default configureStore({
  reducer: {
    Home: Home,
    FolderPage: FolderPage,
    FolderItem: FolderItem,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
