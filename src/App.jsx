import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Grid from "./pages/Grid";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid/:mal_id/:name" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  );
}
