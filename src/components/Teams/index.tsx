import styles from './styles.module.css' 

export function Teams() {
    return(
        <>
        <div>
        <div>
          <h1>Equipe</h1>
        </div>
        { }
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="escola">Equipe</label>
            <select id="escola" name="escola">
              <option value="">Selecione</option>
            </select>
          </div>
          <div>
            <label htmlFor="professor">Professor</label>
            <select id="professor" name="professor">
              <option value="">Selecione</option>
            </select>
          </div>
        </div>
        </div>
        </>
    );
}