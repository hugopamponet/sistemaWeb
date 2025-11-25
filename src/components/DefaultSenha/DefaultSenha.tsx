import { Button } from '../Button/Button';
import styles from './styles.module.css'

export function DefaultSenha() {
  return (
    <>
      <div className={styles.contentCadastroAluno}>
        <div>
          <h1>Dados de acesso</h1>
        </div>
        
        { }
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
        
        { }
        <div>
          <label htmlFor="lembrar">Uma dica para lembrar de sua senha</label>
          <input type="text" name="lembrar" id="lembrar" />
        </div>

        <Button children="Participe" type='submit' />
      </div>
    </>
  );
}