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
          <select className={styles.estado}>
            <option value="">Estado</option>
            <option value="AC">Acre</option>
            <option value="BA">Bahia</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
          </select>
          <select className={styles.cidade}>
            <option value="">Cidade</option>
            <option value="salvador">Salvador</option>
            <option value="lauro">Lauro de Freitas</option>
          </select>
          <select className={styles.faixa}>
            <option value="">Faixa</option>
            <option value="branca">Branca</option>
            <option value="azul">Azul</option>
            <option value="roxa">Roxa</option>
            <option value="marrom">Marrom</option>
            <option value="preta">Preta</option>
          </select>
          <select className={styles.categoria}>
            <option value="">Categoria</option>
            <option value="galo">Galo</option>
            <option value="pluma">Pluma</option>
            <option value="pena">Pena</option>
            <option value="leve">Leve</option>
            <option value="medio">Médio</option>
            <option value="pesado">Pesado</option>
          </select>
          <select className={styles.sexo}>
            <option value="">Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
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
      <section className={styles.eventoDestaque}>
        <h2>Eventos em Destaque</h2>
        <div className={styles.todosEventos}>
          <div className={styles.eventoCard}>
            <div className={styles.cardEventos1}>
              <h3>Campeonato Mundial</h3>
              <h3>De Jiu-Jitsu</h3>
            </div>
          </div>
          <div className={styles.eventoCard}>
            <div className={styles.cardEventos2}>
              <h3>Campeonato Mundial</h3>
              <h3>De Jiu-Jitsu</h3>
            </div>
          </div>
          <div className={styles.eventoCard}>
            <div className={styles.cardEventos3}>
              <h3>Campeonato Mundial</h3>
              <h3>De Jiu-Jitsu</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.competicoes}>
        <h2>Seminário e Cursos</h2>
        <div className={styles.container}>
          <div className={styles.divulgacoes}>
            <div className={styles.topoCard}>
              <img
                src="src/assets/Seminario.png"
                alt="Professor de Jiu-Jitsu"
              />
              <div className={styles.textoCard}>
                <h3>Seminário Defesa Pessoal</h3>
                <p>Mestre: Jonathas Meire</p>
                <p>15 de Dezembro Salvador - Ba</p>
              </div>
            </div>
            <button className={styles.botaoCard}>Participar</button>
          </div>
          <div className={styles.divulgacoes}>
            <div className={styles.topoCard}>
              <img
                src="src/assets/Seminario.png"
                alt="Professor de Jiu-Jitsu"
              />
              <div className={styles.textoCard}>
                <h3>Seminário Defesa Pessoal</h3>
                <p>Mestre: Jonathas Meire</p>
                <p>15 de Dezembro Salvador - Ba</p>
              </div>
            </div>
            <button className={styles.botaoCard}>Participar</button>
          </div>
          <div className={styles.divulgacoes}>
            <div className={styles.topoCard}>
              <img
                src="src/assets/Seminario.png"
                alt="Professor de Jiu-Jitsu"
              />
              <div className={styles.textoCard}>
                <h3>Seminário Defesa Pessoal</h3>
                <p>Mestre: Jonathas Meire</p>
                <p>15 de Dezembro Salvador - Ba</p>
              </div>
            </div>
            <button className={styles.botaoCard}>Participar</button>
          </div>
        </div>
      </section>
    </>
  );
}