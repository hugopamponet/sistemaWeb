import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export function Filter() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(response => response.json())
      .then(data => setEstados(data))
      .catch(error => console.error('Erro ao buscar estados:', error));
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios?orderBy=nome`)
        .then(response => response.json())
        .then(data => setCidades(data))
        .catch(error => console.error('Erro ao buscar cidades:', error));
    } else {
      setCidades([]);
    }
  }, [estadoSelecionado]);

  return (
    <div className={styles.inputsPesquisas}>
      <select 
        className={styles.estado}
        value={estadoSelecionado}
        onChange={(e) => setEstadoSelecionado(e.target.value)}
      >
        <option value="">Estado</option>
        {estados.map((estado: any) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>

      <select 
        className={styles.cidade}
        disabled={!estadoSelecionado}
      >
        <option value="">Cidade</option>
        {cidades.map((cidade: any) => (
          <option key={cidade.id} value={cidade.nome}>
            {cidade.nome}
          </option>
        ))}
      </select>

      <select className={styles.sexo}>
        <option value="">Sexo</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
      </select>
    </div>
  );
}