import styles from "./styles.module.css";

import { useState, useEffect } from "react";
import { Filter } from "../../components/Filter";
import { ButtonModel } from "../../components/ButtonModel";
import { Advertising } from "../../components/Advertising";
import { CompetitionCard } from "../../components/CompetitionCard/CompetitionCard";

interface Seminario {
  id: number;
  titulo: string;
  mestre: string;
  data: string;
  imagem: string;
}

export function Home() {
  const [seminarios, setSeminarios] = useState<Seminario[]>([]);

  useEffect(() => {
    fetchSeminarios();
  }, []);


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

  return (
    <>
    <Advertising />
      <section className={styles.competicoes}>
        <h2>Próximas Competições</h2>
        <Filter />
        <CompetitionCard />
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
                <ButtonModel children="Participe" />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}