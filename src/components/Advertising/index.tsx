import styles from './styles.module.css'
import stylesButton from '../Button/styles.module.css'

import { Button } from "../Button";
import { Link } from 'react-router-dom';

export function Advertising() {
  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="/videos/videoHome.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className={styles.heroContent}>
          <img
            src="/images/logoHome02.png"
            className={styles.logoPublicano}
            alt="Logo Publicano"
          />
          <h2>Encontre todas as Competições de Jiu-Jitsu em um só lugar</h2>
          <p>
            Eventos oficiais, regionais, seminários e cursos tudo organizado
            para você competir, aprender e evoluir
          </p>
          <div className={styles.buttons}>
            <Button
              children="Ver próximos eventos"
              className={stylesButton.botaoVermelho}
            />
            <Link to="/PromoteEvent">
              <Button
                children="Divulgue seu evento"
                className={stylesButton.botaoCinza}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}