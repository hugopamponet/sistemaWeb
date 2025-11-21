import { Heading } from "./components/Heading";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading />
      <Main />
      <Footer />
    </>
  );
}