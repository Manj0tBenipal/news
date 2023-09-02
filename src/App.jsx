import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Layout from "./Layouts/Nav";
import GenreSidebar from "./Layouts/GenreSidebar";
import AnimeInfoKitsu from "./components/AnimeInfo/AnimeInfoKitsu";
import AnimeInfoJikan from "./components/AnimeInfo/AnimeInfoJikan";
import AnimeByFilter from "./pages/AnimeByFilter";
import "./main.css";
import AnimeByType from "./pages/AnimeByType";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details">
            <Route path="kitsu/:id" element={<AnimeInfoKitsu />} />
            <Route path="jikan/:id" element={<AnimeInfoJikan />} />
          </Route>
          <Route path="grid" element={<GenreSidebar />}>
            <Route path="genre" element={<Genre />} />
            <Route path="filter" element={<AnimeByFilter />} />
            <Route path="type" element={<AnimeByType />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
