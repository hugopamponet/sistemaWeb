import styles from "./styles.module.css";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { ButtonModel } from "../ButtonModel";

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

export function CompetitionCard() {
  const [competicoes, setCompeticoes] = useState<Competicao[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCompeticoes();
  }, []);

  const fetchCompeticoes = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("Competicoes")
        .select("*")
        .order("data", { ascending: true });

      if (error) throw error;

      const competicoesFormatadas: Competicao[] = data.map((comp) => ({
        id: comp.id,
        titulo: comp.titulo,
        descricao: comp.descricao,
        data: formatarData(comp.data),
        horario: comp.horario,
        local: comp.local,
        imagem: comp.imagem_url || "/images/default-competition.jpg",
        limiteCompetidores: comp.limiteCompetidores,
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

  const formatarData = (dataString: string): string => {
    if (!dataString) return "";

    const data = new Date(dataString + "T00:00:00");

    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <section className={styles.competicoes}>
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
                      e.target.src = "/images/default-competition.jpg";
                    }}
                  />
                  <div className={styles.textoCard}>
                    <h3>{competicao.titulo}</h3>
                    <p>{competicao.descricao}</p>
                    <p>📅 {competicao.data}</p>
                    <p>📍 {competicao.local}</p>
                    {competicao.limiteCompetidores && (
                      <p>
                        👥 Limite: {competicao.limiteCompetidores} competidores
                      </p>
                    )}
                  </div>
                </div>
                <ButtonModel children="Inscreva-se" />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}