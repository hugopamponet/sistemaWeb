import styles from './styles.module.css';
import { useState } from 'react';

interface DefaultEnderecoProps {
  formData?: any;
  updateEndereco?: (data: any) => void;
}

export function DefaultEndereco({ formData = {}, updateEndereco = () => {} }: DefaultEnderecoProps) {
  const [loading, setLoading] = useState(false);

  const buscarCEP = async (cep: string) => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert('CEP não encontrado!');
        setLoading(false);
        return;
      }

      updateEndereco({
        cep: cep,
        logradouro: data.logradouro || '',
        bairro: data.bairro || '',
        cidade: data.localidade || '',
        estado: data.uf || ''
      });

    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const formatarCEP = (valor: string) => {
    const cepLimpo = valor.replace(/\D/g, '');
    if (cepLimpo.length <= 5) return cepLimpo;
    return `${cepLimpo.slice(0, 5)}-${cepLimpo.slice(5, 8)}`;
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarCEP(e.target.value);
    updateEndereco({ cep: valorFormatado });

    if (valorFormatado.length === 9) {
      buscarCEP(valorFormatado);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateEndereco({ [name]: value });
  };

  return (
    <div className={styles.contentCadastroAluno}>
      <div>
        <h1>Endereço</h1>
      </div>
      
      <div>
        <label htmlFor="cep">CEP *</label>
        <input 
          type="text" 
          name="cep" 
          id="cep"
          value={formData.cep || ''} // ← ADICIONE || ''
          onChange={handleCEPChange}
          placeholder="00000-000"
          maxLength={9}
          required
        />
        {loading && <small style={{ color: '#C02434' }}>Buscando CEP...</small>}
      </div>
      
      <div className={styles.camposLinha}>
        <div>
          <label htmlFor="logradouro">Endereço *</label>
          <input 
            type="text" 
            name="logradouro" 
            id="logradouro"
            value={formData.logradouro || ''} // ← ADICIONE || ''
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro *</label>
          <input 
            type="text" 
            name="bairro" 
            id="bairro"
            value={formData.bairro || ''} // ← ADICIONE || ''
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className={styles.camposLinha}>
        <div>
          <label htmlFor="cidade">Cidade *</label>
          <input 
            type="text" 
            name="cidade" 
            id="cidade"
            value={formData.cidade || ''} // ← ADICIONE || ''
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="estado">Estado *</label>
          <input 
            type="text" 
            name="estado" 
            id="estado"
            value={formData.estado || ''} // ← ADICIONE || ''
            onChange={handleChange}
            maxLength={2}
            required
          />
        </div>
      </div>
      
      <div className={styles.camposLinha}>
        <div>
          <label htmlFor="numero">Número *</label>
          <input 
            type="text" 
            name="numero" 
            id="numero"
            value={formData.numero || ''} // ← ADICIONE || ''
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="complemento">Complemento</label>
          <input 
            type="text" 
            name="complemento" 
            id="complemento"
            value={formData.complemento || ''} // ← ADICIONE || ''
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>
      </div>
    </div>
  );
}