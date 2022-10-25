<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FolderPage from "../pages/FolderPage";
import FolderItem from "../pages/FolderItem";
=======
import { BrowserRouter } from "react-router-dom";
import Pages from "../pages/Pages";
>>>>>>> 7bebda6289f85779f12c9c036937adab2eb93f55

function Router() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="folder" element={<FolderPage />} />
        <Route path="folder1" element={<FolderItem />} />
      </Routes>
=======
      <Pages />
>>>>>>> 7bebda6289f85779f12c9c036937adab2eb93f55
    </BrowserRouter>
  );
}

export default Router;
