import styles from "./styles.module.css";
import stylesButton from "../../components/Button/styles.module.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Filter } from "../../components/Filter";
import { ButtonModel } from "../../components/ButtonModel"
import { Button } from "../../components/Button";
import { supabase } from "../../lib/supabaseClient";

// Interface para tipar as competições
interface Competicao {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
  imagem: string;
  limiteCompetidores?: number;
}

interface Seminario {
  id: number;
  titulo: string;
  mestre: string;
  data: string;
  imagem: string;
}

export function Home() {
  // ✅ CORRIGIDO: Tipagem correta - array simples, não array de arrays
  const [competicoes, setCompeticoes] = useState<Competicao[]>([]);
  const [seminarios, setSeminarios] = useState<Seminario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCompeticoes();
    fetchSeminarios();
  }, []);

  // Buscar competições do Supabase
  const fetchCompeticoes = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('Competicoes')
        .select('*')
        .order('data', { ascending: true });

      if (error) throw error;

      // Formatar os dados para o formato esperado pelo componente
      const competicoesFormatadas: Competicao[] = data.map(comp => ({
        id: comp.id,
        titulo: comp.titulo,
        descricao: comp.descricao,
        data: formatarData(comp.data),
        horario: comp.horario,
        local: comp.local,
        imagem: comp.imagem_url || '/images/default-competition.jpg',
        limiteCompetidores: comp.limiteCompetidores
      }));

      setCompeticoes(competicoesFormatadas);

    } catch (error: any) {
      console.error("Erro ao buscar competições:", error);
      setError("Não foi possível carregar as competições");
      setCompeticoes([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchSeminarios = async () => {
    try {
      setSeminarios([]);

      /* Quando criar a tabela de Seminários:
      const { data, error } = await supabase
        .from('Seminario')
        .select('*')
        .order('data', { ascending: true });

      if (error) throw error;
      
      const seminariosFormatados: Seminario[] = data.map(sem => ({
        id: sem.id,
        titulo: sem.titulo,
        mestre: sem.mestre,
        data: formatarData(sem.data),
        imagem: sem.imagem_url || '/images/default-seminar.jpg'
      }));
      
      setSeminarios(seminariosFormatados);
      */

    } catch (error: any) {
      console.error("Erro ao buscar seminários:", error);
    }
  };

  // Função auxiliar para formatar data
  const formatarData = (dataString: string): string => {
    if (!dataString) return '';
    
    const data = new Date(dataString + 'T00:00:00');
    
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="public/videos/videoHome.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className={styles.heroContent}>
          <img
            src="public/images/logoHome02.png"
            className={styles.logoPublicano}
            alt="Logo Publicano"
          />
          <h2>Encontre todas as Competições de Jiu-Jitsu em um só lugar</h2>
          <p>
            Eventos oficiais, regionais, seminários e cursos tudo organizado
            para você competir, aprender e evoluir
          </p>
          <div className={styles.buttons}>
            <Button children="Ver próximos eventos" className={stylesButton.botaoVermelho} />
            <Link to="/PromoteEvent">
              <Button children="Divulgue seu evento" className={stylesButton.botaoCinza} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.competicoes}>
        <h2>Próximas Competições</h2>
        <Filter />

        {loading ? (
          <div className={styles.mensagemVazia}>
            <p>Carregando eventos...</p>
          </div>
        ) : error ? (
          <div className={styles.mensagemVazia}>
            <p>{error}</p>
            <button onClick={fetchCompeticoes}>Tentar novamente</button>
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
                    alt={competicao.titulo}
                    onError={(e: any) => {
                      e.target.src = '/images/default-competition.jpg';
                    }}
                  />
                  <div className={styles.textoCard}>
                    <h3>{competicao.titulo}</h3>
                    <p>{competicao.descricao}</p>
                    <p>📅 {competicao.data}</p>
                    <p>📍 {competicao.local}</p>
                    {competicao.limiteCompetidores && (
                      <p>👥 Limite: {competicao.limiteCompetidores} competidores</p>
                    )}
                  </div>
                </div>
                <ButtonModel children="Inscreva-se"/>
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
                  <img src={seminario.imagem} alt="Professor de Jiu-Jitsu" />
                  <div className={styles.textoCard}>
                    <h3>{seminario.titulo}</h3>
                    <p>{seminario.mestre}</p>
                    <p>{seminario.data}</p>
                  </div>
                </div>
                <ButtonModel children="Participe"/>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}