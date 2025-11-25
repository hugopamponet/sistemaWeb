import { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import { FiltroPesquisa } from '../Filter';
import Button from "./Button";

export function Main() {
  const [competicoes, setCompeticoes] = useState([]);
  const [seminarios, setSeminarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simular busca do banco de dados
  useEffect(() => {
    // Aqui você vai substituir pela chamada real da sua API
    fetchCompeticoes();
    fetchSeminarios();
  }, []);

  const fetchCompeticoes = async () => {
    try {
      // Substitua pela URL da sua API
      // const response = await fetch('https://sua-api.com/competicoes');
      // const data = await response.json();
      // setCompeticoes(data);
      
      // Por enquanto, array vazio para testar
      setCompeticoes([]);
    } catch (error) {
      console.error('Erro ao buscar competições:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSeminarios = async () => {
    try {
      // Substitua pela URL da sua API
      // const response = await fetch('https://sua-api.com/seminarios');
      // const data = await response.json();
      // setSeminarios(data);
      
      // Por enquanto, array vazio para testar
      setSeminarios([]);
    } catch (error) {
      console.error('Erro ao buscar seminários:', error);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="src/assets/WhatsApp Video 2025-11-21 at 10.27.45.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className={styles.heroContent}>
          <img src="src/assets/Logo publicano.png" className={styles.logoPublicano} />
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
        <FiltroPesquisa />
        
        {loading ? (
          <div className={styles.mensagemVazia}>
            <p>Carregando eventos...</p>
          </div>
        ) : competicoes.length === 0 ? (
          <div className={styles.mensagemVazia}>
            <p>Ainda não temos competições programadas</p>
          </div>
        ) : (
          <div className={styles.container}>
            {competicoes.map((competicao) => (
              <div key={competicao.id} className={styles.divulgacoes}>
                <div className={styles.topoCard}>
                  <img
                    src={competicao.imagem}
                    alt="Lutadores de Jiu-Jitsu"
                  />
                  <div className={styles.textoCard}>
                    <h3>{competicao.titulo}</h3>
                    <p>{competicao.descricao}</p>
                    <p>{competicao.data}</p>
                  </div>
                </div>
                <Button />
              </div>
            ))}
          </div>
        )}
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
        
        {seminarios.length === 0 ? (
          <div className={styles.mensagemVazia}>
            <p>Ainda não temos seminários e cursos programados</p>
          </div>
        ) : (
          <div className={styles.container}>
            {seminarios.map((seminario) => (
              <div key={seminario.id} className={styles.divulgacoes}>
                <div className={styles.topoCard}>
                  <img
                    src={seminario.imagem}
                    alt="Professor de Jiu-Jitsu"
                  />
                  <div className={styles.textoCard}>
                    <h3>{seminario.titulo}</h3>
                    <p>{seminario.mestre}</p>
                    <p>{seminario.data}</p>
                  </div>
                </div>
                <button className={styles.botaoCard}>Participar</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}