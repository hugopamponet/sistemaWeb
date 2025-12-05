import styles from "./styles.module.css";

interface DefaultUserProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function DefaultUser({ formData, handleChange }: DefaultUserProps) {
  const formatarCPF = (valor: string) => {
    const cpfLimpo = valor.replace(/\D/g, '');
    if (cpfLimpo.length <= 3) return cpfLimpo;
    if (cpfLimpo.length <= 6) return `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3)}`;
    if (cpfLimpo.length <= 9) return `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3, 6)}.${cpfLimpo.slice(6)}`;
    return `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3, 6)}.${cpfLimpo.slice(6, 9)}-${cpfLimpo.slice(9, 11)}`;
  };

  const formatarTelefone = (valor: string) => {
    const telLimpo = valor.replace(/\D/g, '');
    if (telLimpo.length <= 2) return telLimpo;
    if (telLimpo.length <= 7) return `(${telLimpo.slice(0, 2)}) ${telLimpo.slice(2)}`;
    return `(${telLimpo.slice(0, 2)}) ${telLimpo.slice(2, 7)}-${telLimpo.slice(7, 11)}`;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarCPF(e.target.value);
    handleChange({ 
      ...e, 
      target: { ...e.target, value: valorFormatado, name: 'cpf' } 
    } as any);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarTelefone(e.target.value);
    handleChange({ 
      ...e, 
      target: { ...e.target, value: valorFormatado, name: 'telefone' } 
    } as any);
  };

  return (
    <section>
      <div>
        <h1>Dados pessoais</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="nome">Nome *</label>
            <input 
              type="text" 
              name="nome" 
              id="nome"
              value={formData.nome || ''} // ← ADICIONE || ''
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="sobrenome">Sobrenome *</label>
            <input 
              type="text" 
              name="sobrenome" 
              id="sobrenome"
              value={formData.sobrenome || ''} // ← ADICIONE || ''
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="cpf">CPF *</label>
            <input 
              type="text" 
              name="cpf" 
              id="cpf"
              value={formData.cpf || ''} // ← ADICIONE || ''
              onChange={handleCPFChange}
              placeholder="000.000.000-00"
              maxLength={14}
              required
            />
          </div>
          <div>
            <label htmlFor="dataNascimento">Data de nascimento *</label>
            <input 
              type="date" 
              name="dataNascimento" 
              id="dataNascimento"
              value={formData.dataNascimento || ''} // ← ADICIONE || ''
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="telefone">Telefone *</label>
            <input 
              type="tel" 
              name="telefone" 
              id="telefone"
              value={formData.telefone || ''} // ← ADICIONE || ''
              onChange={handleTelefoneChange}
              placeholder="(00) 00000-0000"
              maxLength={15}
              required
            />
          </div>
          <div>
            <label htmlFor="sexo">Sexo *</label>
            <select 
              id="sexo" 
              name="sexo"
              value={formData.sexo || ''} // ← ADICIONE || ''
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
        </div>

        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="faixa">Faixa *</label>
            <select 
              id="faixa" 
              name="faixa"
              value={formData.faixa || ''} // ← ADICIONE || ''
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="branca">Branca</option>
              <option value="azul">Azul</option>
              <option value="roxa">Roxa</option>
              <option value="marrom">Marrom</option>
              <option value="preta">Preta</option>
            </select>
          </div>
          <div>
            <label htmlFor="peso">Peso *</label>
            <select 
              id="peso" 
              name="peso"
              value={formData.peso || ''} // ← ADICIONE || ''
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="galo">Galo</option>
              <option value="pluma">Pluma</option>
              <option value="pena">Pena</option>
              <option value="leve">Leve</option>
              <option value="medio">Médio</option>
              <option value="meioPesado">Meio-Pesado</option>
              <option value="pesado">Pesado</option>
              <option value="superPesado">Super-Pesado</option>
              <option value="pesadissimo">Pesadíssimo</option>
            </select>
          </div>
        </div>

        <div className={styles.camposLinha}>
          <div>
            <label htmlFor="ct">CT</label>
            <input 
              type="text" 
              name="ct" 
              id="ct"
              value={formData.ct || ''} // ← ADICIONE || ''
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="professor">Professor</label>
            <input 
              type="text" 
              name="professor" 
              id="professor"
              value={formData.professor || ''} // ← ADICIONE || ''
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}