import styles from "./styles.module.css";

import { Button } from "../Button";
import { Link } from "react-router-dom";

export function Heading() {
  return (
    <>
      <header>
        <div className={styles.menu}>
          <img src="src/assets/Logo P.png" alt="Logo P" className={styles.logoP} />
          <h1 className={styles.title}>Jiu-Jitsu Eventos</h1>
          <nav className={styles.navegacao}>
            <ul>
              <li><Link to="/"> Inicio</Link></li>
              <li><Link to="/competicoes">Competições</Link></li>
              <li><Link to="/seminario">Seminários</Link></li>
              <li><Link to="/cursos">Cursos</Link></li>
              <Link to="/criarConta"><Button children="Criar conta" /></Link>
              <Link to="/login"><Button children="Login" /></Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
