import styles from "./styles.module.css";

import { Filter } from "../../components/Filter/index";

export function Courses() {
  return (
    <>
      <main>
        <div className={styles.content}>
          <div className={styles.filter}>
            <h1>Pesquisa</h1>
          </div>
          <Filter />
        </div>
      </main>
    </>
  );
}