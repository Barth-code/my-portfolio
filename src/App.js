import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Competance from "./pages/Compétance";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />{" "}
          <Route path="/compétances" element={<Competance />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
