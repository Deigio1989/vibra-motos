import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Modulo1 from "./pages/Modulo1";

import Retrovisor1 from "./pages/Retrovisor1";
import Retrovisor2 from "./pages/Retrovisor2";
import Retrovisor3 from "./pages/Retrovisor3";
import Parada1 from "./pages/Parada1";
import Parada2 from "./pages/Parada2";
import Parada3 from "./pages/Parada3";

import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";
import Quiz3 from "./pages/Quiz3";

import DestinoFinal from "./pages/DestinoFinal";

// App principal com Provider
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Modulo1 />} />
        <Route path="/parada1" element={<Parada1 />} />
        <Route path="/retrovisor1" element={<Retrovisor1 />} />
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="/parada2" element={<Parada2 />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/retrovisor2" element={<Retrovisor2 />} />
        <Route path="/parada3" element={<Parada3 />} />
        <Route path="/retrovisor3" element={<Retrovisor3 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="/destinofinal" element={<DestinoFinal />} />
      </Routes>
    </Router>
  );
}

export default App;
