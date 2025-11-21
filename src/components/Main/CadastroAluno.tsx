import { DefaultEndereco } from './DefaultEndereco';
import { DefaultSenha } from './DefaultSenha'

export function DadosBasicos() {
  return (
    <>
      <div>
        <div>
          <h1>Dados Pessoais</h1>
        </div>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" />
        </div>
        <div>
          <label htmlFor="sobrenome">Sobrenome</label>
          <input type="text" name="sobrenome" id="sobrenome" />
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="cpf" id="cpf" />
        </div>
        <div>
          <label htmlFor="dtaNascimento">Data de nascimento</label>
          <input type="date" name="dtaNascimento" id="dtaNascimento" />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" name="telefone" id="telefone" />
        </div>
        <div>
          <select>
            <option value="">Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>
        <div>
          <DefaultEndereco />
        </div>
        <div>
          <h1>Equipe</h1>
        </div>
        <div>
          <div>
            <select>
              <option value="">Escola</option>
            </select>
          </div>
          <div>
            <select>
              <option value="">Professor</option>
            </select>
          </div>
        </div>
        <DefaultSenha />
      </div>
    </>
  );
}
