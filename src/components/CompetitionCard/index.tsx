import styles from "./styles.module.css";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Competition } from "../../types";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function CompetitionCard() {
  const [competicoes, setCompeticoes] = useState<Competition[]>([]);
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

      const competicoesFormatadas: Competition[] = data.map((comp) => ({
        id: comp.id,
        titulo: comp.titulo,
        descricao: comp.descricao,
        data: formatarData(comp.data),
        horario: comp.horario,
        local: comp.local,
        imagem: comp.imagem_url,
        valor: comp.valor,
        prazoDeInscricao: comp.prazoDeInscricao,
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
                    <p> 💲{competicao.valor}</p>
                    <p> 💲{competicao.prazoDeInscricao}</p>
                    {competicao.limiteCompetidores && (
                      <p>
                        👥 Limite: {competicao.limiteCompetidores} competidores
                      </p>
                    )}
                  </div>
                </div>
                <Link to={`/inscricao/${competicao.id}`}>
                  <Button children="Inscreva-se" className="vamos ver" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
