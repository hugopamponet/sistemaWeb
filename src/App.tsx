import "../src/assets/styles/theme.css";
import "../src/assets/styles/global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Heading } from "./components/Heading";
import { Home } from "../src/pages/Home/index";
import { Footer } from "./components/Footer";
import { Competicoes } from "./pages/Competicoes";
import { Seminar } from "./pages/Seminar";
import { Courses } from "./pages/Courses/index";
import { PromoteEvent } from "./pages/PromoteEvent";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competicoes" element={<Competicoes />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/PromoteEvent" element={<PromoteEvent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}