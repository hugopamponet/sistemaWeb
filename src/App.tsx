import "./styles/theme.css";
import "./styles/global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Heading } from "./components/Heading";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Competicoes } from "./components/Competicoes";
import { Seminar } from "./components/Seminar";
import { Courses } from "./components/Courses";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/competicoes" element={<Competicoes />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}