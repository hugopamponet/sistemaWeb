import styles from "./styles.module.css";
import { Filter } from "../../components/Filter";
import { Advertising } from "../../components/Advertising";

export function Competicoes() {
  return (
    <>
      <main>
        <div className={styles.content}>
          <Advertising />
          <div className={styles.filter}>
            <h1>Pesquisa</h1>
            <Filter />
          </div>
        </div>
      </main>
    </>
  );
}