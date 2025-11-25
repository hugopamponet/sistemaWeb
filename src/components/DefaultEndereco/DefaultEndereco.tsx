import styles from './styles.module.css';

import { useState } from 'react';

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

      setEndereco({
        ...endereco,
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
    
    if (cepLimpo.length <= 5) {
      return cepLimpo;
    }
    
    return `${cepLimpo.slice(0, 5)}-${cepLimpo.slice(5, 8)}`;
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarCEP(e.target.value);
    setEndereco({ ...endereco, cep: valorFormatado });

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
        
        { }
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
        
        { }
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
        
        { }
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
        
        { }
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