import { useState } from "react";
import styles from "./styles.module.css";
import stylesButton from '../Button/styles.module.css'
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function Heading() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <>
      <header>
        <div className={styles.menu}>
          <Link to="/" onClick={fecharMenu}>
            <img 
              src="/images/logoHome.png" 
              alt="Logo Publicando" 
              className={styles.logoP} 
            />
          </Link>
          
          <h1 className={styles.title}>Jiu-Jitsu Eventos</h1>
          
          {/* Botão Hambúrguer */}
          <button 
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={menuAberto ? styles.active : ''}></span>
            <span className={menuAberto ? styles.active : ''}></span>
            <span className={menuAberto ? styles.active : ''}></span>
          </button>

          {/* Menu de Navegação */}
          <nav className={`${styles.navegacao} ${menuAberto ? styles.navAberta : ''}`}>
            <ul>
              <li><Link to="/" onClick={fecharMenu}>Inicio</Link></li>
              <li><Link to="/competicoes" onClick={fecharMenu}>Competições</Link></li>
              <li><Link to="/seminar" onClick={fecharMenu}>Seminários</Link></li>
              <li><Link to="/courses" onClick={fecharMenu}>Cursos</Link></li>
              <Link to="/criarConta" onClick={fecharMenu}>
                <Button children="Criar conta" className={stylesButton.botaoVermelho}/>
              </Link>
              <Link to="/login" onClick={fecharMenu}>
                <Button children="Login" className={stylesButton.botaoVermelho}/>
              </Link>
            </ul>
          </nav>
        </div>
        
        {/* Overlay quando menu está aberto */}
        {menuAberto && (
          <div 
            className={styles.overlay} 
            onClick={fecharMenu}
          ></div>
        )}
      </header>
    </>
  );
}