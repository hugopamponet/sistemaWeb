import stylesButton from "../Button/styles.module.css"
import styles from "./styles.module.css"

import { Button } from "../Button";
import { StudentRegistration } from "../StudentRegistration";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import type { Competition } from "../../types";

export function ChampionshipRegistration() {
  const { id } = useParams<{ id: string }>();
  const [competicao, setCompeticao] = useState<Competition | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchCompeticao(id);
    }
  }, [id]);

  const fetchCompeticao = async (competicaoId: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("Competicoes")
        .select("*")
        .eq("id", competicaoId)
        .single();

      if (error) throw error;

      const competicaoFormatada: Competition = {
        id: data.id,
        titulo: data.titulo,
        descricao: data.descricao,
        data: formatarData(data.data),
        horario: data.horario,
        local: data.local,
        imagem: data.imagem_url,
        valor: data.valor,
        prazoDeInscricao: data.prazoDeInscricao,
        limiteCompetidores: data.limiteCompetidores,
      };

      setCompeticao(competicaoFormatada);
    } catch (error: any) {
      console.error("Erro ao buscar competição:", error);
      setError("Não foi possível carregar a competição");
      setCompeticao(null);
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

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!competicao) {
    return <div>Competição não encontrada</div>;
  }

  return (
    <>
        <main>
          <div className={styles.conteiner}>
          <section>
            <div className={styles.informacoesHeader}>
              <span>Forma de pagamento</span>
              <h1>{competicao.titulo}</h1>
            </div>
            <div className={styles.informacoesBanco}>
              <img className={styles.imgCampeonato}
                src={competicao.imagem}
                alt={competicao.titulo}
              />
              <p>{competicao.descricao}</p>
              <p>📅 {competicao.data}</p>
              <p>🕐 {competicao.horario}</p>
              <p>📍 {competicao.local}</p>
              <p>💲 {competicao.valor}</p>
              <p>⌛ {competicao.prazoDeInscricao}</p>
            </div>
            <StudentRegistration />
          </section>
          </div>
          <section className={styles.button}>
            <div>
              <Button children="Cronograma" className={stylesButton.botaoVermelho} />
            </div>
            <div>
              <Button children="Chaves" className={stylesButton.botaoVermelho} />
            </div>
            <div>
              <Button
                children="Atletas por time"
                className={stylesButton.botaoVermelho}
              />
            </div>
            <div>
              <Button
                children="Atletas por categoria"
                className={stylesButton.botaoVermelho}
              />
            </div>
            <div>
              <Button children="Tabela de Peso" className={stylesButton.botaoVermelho} />
            </div>
            <div>
              <Button children="Pesagem" className={stylesButton.botaoVermelho} />
            </div>
          </section>
        </main>
    </>
  );
}