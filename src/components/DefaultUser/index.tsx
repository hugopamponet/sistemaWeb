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
          <div className="faixaInput">
            <label htmlFor="faixa">Faixa</label>
            <select id="faixa" name="faixa">
              <option value="">Selecione</option>
              <option value="branca">Branca</option>
              <option value="azul">Azul</option>
              <option value="roxa">Roxa</option>
              <option value="marrom">Marrom</option>
              <option value="preta">Preta</option>
            </select>
          </div>
          <div className="pesoInput">
            <label htmlFor="peso">Peso</label>
            <select id="peso" name="peso">
              <option value="">Selecione</option>
              <option value="galo">Galo</option>
              <option value="pluma">Pluma</option>
              <option value="pena">Pena</option>
              <option value="leve">Leve</option>
              <option value="medio">Médio</option>
              <option value="meioPesado">Meio-Pesado</option>
              <option value="pesado">Pesado</option>
              <option value="superPesado">Super-Pesado</option>
              <option value="pesadíssimo">Pesadíssimo</option>
            </select>
          </div>
          <div className="ctInput">
            <label htmlFor="ct">CT</label>
            <select id="ct" name="ct">
              <option value="">Selecione</option>
            </select>
          </div>
          <div className="professorInput">
            <label htmlFor="professor">Professor</label>
            <input type="text" name="professor" id="professor" />
          </div>
        </div>
      </section>
    </>
  );
}