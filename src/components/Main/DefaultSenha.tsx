import styles from './styles.module.css'

export function DefaultSenha() {
  return (
    <>
      <div className={styles.contentCadastroAluno}>
        {/* Senha e Confirmar lado a lado */}
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" />
          </div>
          <div>
            <label htmlFor="confirmar">Confirmar a senha</label>
            <input type="password" name="confirmar" id="confirmar" />
          </div>
        </div>
        
        {/* Dica da senha ocupa linha inteira */}
        <div>
          <label htmlFor="lembrar">Uma dica para lembrar de sua senha</label>
          <input type="text" name="lembrar" id="lembrar" />
        </div>

        <button type="submit">Inscrever</button>
      </div>
    </>
  );
}