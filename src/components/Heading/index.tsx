import styles from "./styles.module.css";
import stylesButton from '../Button/styles.module.css'

import { Button } from "../Button";
import { Link } from "react-router-dom";

export function Heading() {
  return (
    <>
      <header>
        <div className={styles.menu}>
          <img src="/images/logoHome.png" alt="Logo Publicando" className={styles.logoP} />
          <h1 className={styles.title}>Jiu-Jitsu Eventos</h1>
          <nav className={styles.navegacao}>
            <ul>
              <li><Link to="/"> Inicio</Link></li>
              <li><Link to="/competicoes">Competições</Link></li>
              <li><Link to="/seminar">Seminários</Link></li>
              <li><Link to="/courses">Cursos</Link></li>
              <Link to="/criarConta"><Button children="Criar conta" className={stylesButton.botaoVermelho}/></Link>
              <Link to="/login"><Button children="Login" className={stylesButton.botaoVermelho}/></Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
