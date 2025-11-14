import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Modulo1 from "./pages/Modulo1";
import Parada1 from "./pages/Parada1";
import Quiz1 from "./pages/Quiz1";

// App principal com Provider
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Modulo1 />} />
        <Route path="/parada1" element={<Parada1 />} />
        <Route path="/quiz1" element={<Quiz1 />} />
      </Routes>
    </Router>
  );
}

export default App;
