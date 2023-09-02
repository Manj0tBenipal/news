import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Grid from "./pages/Genre";
import Layout from "./Layouts/Nav";
import GenreSidebar from "./Layouts/GenreSidebar";
import AnimeInfoKitsu from "./components/AnimeInfo/AnimeInfoKitsu";
import AnimeInfoJikan from "./components/AnimeInfo/AnimeInfoJikan";

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
          <Route path="genre" element={<GenreSidebar />}>
            <Route path=":mal_id/:name" element={<Grid />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
