import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FolderPage from "../pages/FolderPage";
import FolderItem from "../pages/FolderItem";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="folder" element={<FolderPage />} />
        <Route path="folder1" element={<FolderItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
