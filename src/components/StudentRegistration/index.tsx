import styles from './styles.module.css'

import { DefaultEndereco } from '../DefaultEndereco';
import { DefaultSenha } from '../DefaultSenha'
import { Teams } from '../Teams';

export function StudentRegistration() {
  return (
    <>
      <div className={styles.contentCadastroAluno}>
        <div className={styles.imagemModal}>
          <img src="src/assets/Homens Lutando.png" alt="Homens Lutando" />
        </div>

        <div>
          <h1>Dados Pessoais</h1>
        </div>
        
        { }
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
          </div>
          <div>
            <label htmlFor="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" id="sobrenome" />
          </div>
        </div>
        
        { }
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf" />
          </div>
          <div>
            <label htmlFor="dtaNascimento">Data de nascimento</label>
            <input type="date" name="dtaNascimento" id="dtaNascimento" />
          </div>
        </div>
        
        { }
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" name="telefone" id="telefone" />
          </div>
          <div>
            <label htmlFor="sexo">Sexo</label>
            <select id="sexo" name="sexo">
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
        </div>
        
        <div>
          <DefaultEndereco />
        </div>

        <div>
          <Teams />
        </div>
        
        <div>
        <DefaultSenha />
        </div>

      </div>
    </>
  );
}