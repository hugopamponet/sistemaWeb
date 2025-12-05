import styles from './styles.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultEndereco } from "../../components/DefaultEndereco";
import { DefaultSenha } from "../../components/DefaultSenha";
import { DefaultUser } from "../../components/DefaultUser";
import { supabase } from '../../lib/supabaseClient';
import type { UserData } from '../../types/User';

export function CreateUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<UserData>({
    nome: '',
    sobrenome: '',
    cpf: '',
    datanascimento: '',
    telefone: '',
    sexo: '',
    faixa: '',
    peso: '',
    ct: '',
    professor: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
    complemento: '',
    email: '',
    senha: '',
    dica: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const updateEndereco = (enderecoData: any) => {
    setFormData(prev => ({
      ...prev,
      ...enderecoData
    }));
  };

  const validarFormulario = (): boolean => {
    if (!formData.nome || !formData.sobrenome) {
      setError('Nome e sobrenome são obrigatórios');
      return false;
    }

    if (!formData.email || !formData.email.includes('@')) {
      setError('Email inválido');
      return false;
    }

    if (!formData.senha || formData.senha.length < 6) {
      setError('Senha deve ter no mínimo 6 caracteres');
      return false;
    }

    if (!formData.cpf || formData.cpf.replace(/\D/g, '').length !== 11) {
      setError('CPF inválido');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // ← CORRIGIDO
    e.preventDefault();
    setError(null);

    if (!validarFormulario()) {
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.senha,
      });

      if (authError) throw authError;

      if (!authData.user) {
        throw new Error('Erro ao criar usuário');
      }

      const { error: insertError } = await supabase
        .from('Usuarios')
        .insert([
          {
            nome: formData.nome,
            sobrenome: formData.sobrenome,
            cpf: formData.cpf.replace(/\D/g, ''),
            datanascimento: formData.datanascimento,
            telefone: formData.telefone.replace(/\D/g, ''),
            sexo: formData.sexo,
            faixa: formData.faixa,
            peso: formData.peso,
            ct: formData.ct,
            professor: formData.professor,
            email: formData.email,
            dica: formData.dica,
            cep: formData.cep.replace(/\D/g, ''),
            logradouro: formData.logradouro,
            bairro: formData.bairro,
            cidade: formData.cidade,
            estado: formData.estado,
            numero: formData.numero,
            complemento: formData.complemento
          }
        ]);

      if (insertError) throw insertError;

      alert('Cadastro realizado com sucesso!');
      navigate('/login');
      
    } catch (error: any) {
      console.error('Erro ao cadastrar:', error);
      setError(error.message || 'Erro ao realizar cadastro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <div className="dadosBasicos">
          <DefaultUser formData={formData} handleChange={handleChange} />
        </div>
        
        <div className="endereco">
          <DefaultEndereco 
            formData={formData} 
            updateEndereco={updateEndereco} 
          />
        </div>
        
        <div className="dadosAcesso">
          <DefaultSenha 
            formData={formData} 
            handleChange={handleChange}
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
}