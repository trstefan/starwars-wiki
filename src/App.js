import "./App.css";
import { Home } from "./pages/Home/Home";
import { Router, Route, Routes } from "react-router-dom";
import { Characters } from "./pages/Characters/Characters";
import { Planets } from "./pages/Planets/Planets";
import { Starships } from "./pages/Starships/Starships";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships />} />
    </Routes>
  );
}

export default App;
