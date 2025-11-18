import styles from "./styles.module.css";

export function Main() {
  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="src/assets/WhatsApp Video 2025-11-18 at 00.52.03.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
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
      </section>
      <section className={styles.competicoes}>
        <h2>Próximas Competições</h2>
        <div className={styles.inputsPesquisas}>
          <input type="text" className="text" placeholder="Estado"/>
          <input type="text" className="cidade" placeholder="Cidade"/>
          <input type="text" className="faixa" placeholder="Faixa"/>
          <input type="text" className="categoria" placeholder="Categoria"/>
          <input type="text" className="sexo" placeholder="Sexo"/>
        </div>
        <div className={styles.container}>
          <div className={styles.divulgacoes}>
            <div className={styles.topoCard}>
              <img
                src="src/assets/Homens Lutando.png"
                alt="Lutadores de Jiu-Jitsu"
              />
              <div className={styles.textoCard}>
                <h3>Titulo da competição</h3>
                <p>Descrição da competição</p>
                <p>15 de novembro de 2025</p>
              </div>
            </div>
            <button className={styles.botaoCard}>Inscreva-se</button>
          </div>
          <div className={styles.divulgacoes}>
            <div className={styles.topoCard}>
              <img
                src="src/assets/Homens Lutando.png"
                alt="Lutadores de Jiu-Jitsu"
              />
              <div className={styles.textoCard}>
                <h3>Titulo da competição</h3>
                <p>Descrição da competição</p>
                <p>15 de novembro de 2025</p>
              </div>
            </div>
            <button className={styles.botaoCard}>Inscreva-se</button>
          </div>
          <div className={styles.divulgacoes}>
            <div className={styles.topoCard}>
              <img
                src="src/assets/Homens Lutando.png"
                alt="Lutadores de Jiu-Jitsu"
              />
              <div className={styles.textoCard}>
                <h3>Titulo da competição</h3>
                <p>Descrição da competição</p>
                <p>15 de novembro de 2025</p>
              </div>
            </div>
            <button className={styles.botaoCard}>Inscreva-se</button>
          </div>
        </div>
      </section>
      <section className={styles.seminarioCursos}>
        <h2>Seminário e Cursos</h2>
      </section>
      <section className={styles.hero}>
        <h2>Seminário e Cursos</h2>
      </section>
    </>
  );
}