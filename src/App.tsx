import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Competicoes } from "./components/Competicoes";

export function App() {
  return (
    <>
    <BrowserRouter>
    <Heading />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/competicoes" element={<Competicoes />} />
    </Routes>
    </BrowserRouter>
      <Footer />
    </>
  );
}