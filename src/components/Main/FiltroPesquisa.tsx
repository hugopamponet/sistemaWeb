import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export function FiltroPesquisa() {
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

      <select className={styles.faixa}>
        <option value="">Faixa</option>
        <option value="branca">Branca</option>
        <option value="azul">Azul</option>
        <option value="roxa">Roxa</option>
        <option value="marrom">Marrom</option>
        <option value="preta">Preta</option>
      </select>

      <select className={styles.categoria}>
        <option value="">Categoria</option>
        <option value="galo">Galo</option>
        <option value="pluma">Pluma</option>
        <option value="pena">Pena</option>
        <option value="leve">Leve</option>
        <option value="medio">Médio</option>
        <option value="pesado">Pesado</option>
      </select>

      <select className={styles.sexo}>
        <option value="">Sexo</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
      </select>
    </div>
  );
}