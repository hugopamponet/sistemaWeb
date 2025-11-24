import { useState } from 'react';
import styles from './styles.module.css';

export function DefaultEndereco() {
  const [loading, setLoading] = useState(false);
  const [endereco, setEndereco] = useState({
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '',
    numero: ''
  });

  // Função para buscar CEP
  const buscarCEP = async (cep: string) => {
    // Remove caracteres não numéricos
    const cepLimpo = cep.replace(/\D/g, '');

    // Verifica se o CEP tem 8 dígitos
    if (cepLimpo.length !== 8) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();

      // Verifica se o CEP é válido
      if (data.erro) {
        alert('CEP não encontrado!');
        setLoading(false);
        return;
      }

      // Preenche os campos com os dados do CEP
      setEndereco({
        ...endereco,
        cep: cep,
        logradouro: data.logradouro || '',
        bairro: data.bairro || '',
        cidade: data.localidade || '',
        estado: data.uf || ''
        // complemento e numero não são preenchidos
      });

    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Função para formatar o CEP enquanto digita
  const formatarCEP = (valor: string) => {
    const cepLimpo = valor.replace(/\D/g, '');
    
    if (cepLimpo.length <= 5) {
      return cepLimpo;
    }
    
    return `${cepLimpo.slice(0, 5)}-${cepLimpo.slice(5, 8)}`;
  };

  // Handler para mudança no CEP
  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarCEP(e.target.value);
    setEndereco({ ...endereco, cep: valorFormatado });

    // Busca automaticamente quando completar 9 caracteres (00000-000)
    if (valorFormatado.length === 9) {
      buscarCEP(valorFormatado);
    }
  };

  return (
    <>
      <div className={styles.contentCadastroAluno}>
        <div>
          <h1>Endereço</h1>
        </div>
        
        {/* CEP sozinho */}
        <div>
          <label htmlFor="cep">CEP</label>
          <input 
            type="text" 
            name="cep" 
            id="cep"
            value={endereco.cep}
            onChange={handleCEPChange}
            placeholder="00000-000"
            maxLength={9}
          />
          {loading && <small style={{ color: '#C02434' }}>Buscando CEP...</small>}
        </div>
        
        {/* Endereço e Bairro lado a lado */}
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="endereco">Endereço</label>
            <input 
              type="text" 
              name="endereco" 
              id="endereco"
              value={endereco.logradouro}
              onChange={(e) => setEndereco({ ...endereco, logradouro: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="bairro">Bairro</label>
            <input 
              type="text" 
              name="bairro" 
              id="bairro"
              value={endereco.bairro}
              onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
            />
          </div>
        </div>
        
        {/* Cidade e Estado lado a lado */}
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <input 
              type="text" 
              name="cidade" 
              id="cidade"
              value={endereco.cidade}
              onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="estado">Estado</label>
            <input 
              type="text" 
              name="estado" 
              id="estado"
              value={endereco.estado}
              onChange={(e) => setEndereco({ ...endereco, estado: e.target.value })}
              maxLength={2}
            />
          </div>
        </div>
        
        {/* Número e Complemento lado a lado */}
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="numero">Número</label>
            <input 
              type="text" 
              name="numero" 
              id="numero"
              value={endereco.numero}
              onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="complemento">Complemento</label>
            <input 
              type="text" 
              name="complemento" 
              id="complemento"
              value={endereco.complemento}
              onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
              placeholder="Opcional"
            />
          </div>
        </div>
      </div>
    </>
  );
}