import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Technos from "./pages/Technos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/technos" element={<Technos />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
