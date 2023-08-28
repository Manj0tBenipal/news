import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Grid from "./pages/Grid";
import Layout from "./components/Layout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/grid/:mal_id/:name" element={<Grid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
