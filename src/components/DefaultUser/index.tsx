import styles from "./styles.module.css";

export function DefaultUser() {
  return (
    <>
      <section>
        <div>
          <h1>Dados pessoais</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.nameInput}>
            <label htmlFor={styles.name}>Nome</label>
            <input type="text" name="nome" id="nome" />
          </div>
          <div className="sobreNomeInput">
            <label htmlFor="sobreNome">Sobrenome</label>
            <input type="text" name="sobreNome" id="sobreNome" />
          </div>
          <div className="cpfInput">
            <label htmlFor="cpfInput">CPF</label>
            <input type="text" name="cpfInput" id="cpfInput" />
          </div>
          <div className="dtNascimentoInput">
            <label htmlFor="dtNascimento">Data de nascimento</label>
            <input type="date" name="dtNascimento" id="dtNascimento" />
          </div>
          <div className="telefoneInput">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" name="telefone" id="telefone" />
          </div>
          <div className="sexoSelect">
            <label htmlFor="sexo">Sexo</label>
            <select id="sexo" name="sexo">
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
}