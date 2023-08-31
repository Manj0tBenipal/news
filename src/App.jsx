import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Grid from "./pages/Grid";
import Layout from "./Layouts/Nav";
import GenreSidebar from "./Layouts/GenreSidebar";
import Details from "./pages/Details";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id/:provider" element={<Details />} />
          <Route path="grid" element={<GenreSidebar />}>
            <Route path=":mal_id/:name" element={<Grid />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
