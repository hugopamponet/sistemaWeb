import styles from "./styles.module.css";

export function Main() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Encontre todas as Competições de Jiu-Jitsu em um só lugar</h2>
          <p>
            Eventos oficiais, regionais, seminários e cursos tudo organizado
            para você competir, aprender e evoluir
          </p>
          <div className={styles.buttons}>
            <button className={styles.botaoVermelho}>
              Ver próximos eventos
            </button>
            <button className={styles.botaoCinza}>Divulgar seu evento</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="src/assets/Homens Lutando.png" alt="Lutadores de Jiu-Jitsu" />
        </div>
      </section>
      <section className={styles.hero}>
        <h2>Próximas Competições</h2>
      </section>
      <section className={styles.hero}>
        <h2>Eventos em Destaque</h2>
      </section>
      <section className={styles.hero}>
        <h2>Seminário e Cursos</h2>
      </section>
    </>
  );
}