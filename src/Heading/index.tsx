import styles from './styles.module.css'


export function Heading() {
  return (
    <>
      <header className={styles.heading}>
        <div >
          <h1 className="title">Jiu-Jitsu Eventos</h1>
          <div className="menu">
            <nav className="navegacao">
              <ul>
                <li>Inicio</li>
                <li>Competições</li>
                <li>Seminários</li>
                <li>Cursos</li>
                <button>Criar conta</button>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}