import styles from './styles.module.css';

import { useState } from 'react';
import { Button } from '../Button';

interface DefaultSenhaProps {
  formData?: any;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
}

export function DefaultSenha({ formData, handleChange, loading }: DefaultSenhaProps) {
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setConfirmarSenha(valor);

    if (valor && valor !== formData.senha) {
      setErroSenha('As senhas não coincidem');
    } else {
      setErroSenha('');
    }
  };

  return (
    <div className={styles.contentCadastroAluno}>
      <div>
        <h1>Dados de acesso</h1>
      </div>
      
      <div>
        <label htmlFor="email">E-mail *</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.camposLinha}>
        <div>
          <label htmlFor="senha">Senha *</label>
          <input 
            type="password" 
            name="senha" 
            id="senha"
            value={formData.senha || ''}
            onChange={handleChange}
            minLength={6}
            required
          />
          <small>Mínimo 6 caracteres</small>
        </div>
        <div>
          <label htmlFor="confirmar">Confirmar a senha *</label>
          <input 
            type="password" 
            name="confirmar" 
            id="confirmar"
            value={confirmarSenha}
            onChange={handleConfirmarSenhaChange}
            required
          />
          {erroSenha && <small style={{ color: 'red' }}>{erroSenha}</small>}
        </div>
      </div>
      
      <div>
        <label htmlFor="dica">Uma dica para lembrar de sua senha</label>
        <input 
          type="text" 
          name="dica"
          id="dica"
          value={formData.dica || ''}
          onChange={handleChange}
        />
      </div>

      <Button 
        children={loading ? 'Cadastrando...' : 'Inscreva-se'} 
        className={styles.botaoCard} 
        type='submit'
        disabled={loading || !!erroSenha}
      />
    </div>
  );
}