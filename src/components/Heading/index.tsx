import styles from "./styles.module.css";

export function Heading() {
  return (
    <>
      <header>
        <div className={styles.menu}>
          <img src="src/assets/Logo P.png" alt="Logo P" className={styles.logoP} />
          <h1 className={styles.title}>Jiu-Jitsu Eventos</h1>
          <nav className={styles.navegacao}>
            <ul>
              <li>Inicio</li>
              <li>Competições</li>
              <li>Seminários</li>
              <li>Cursos</li>
              <button className={styles.criarConta}>Criar conta</button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
