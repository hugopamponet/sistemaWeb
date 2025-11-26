import { useState, ChangeEvent, FormEvent } from 'react'
import { supabase } from '../lib/supabaseClient'

interface FormData {
  titulo: string
  data: string
  horario: string
  local: string
  descricao: string
  limiteCompetidores: string
}

export function CadastrarCompeticao() {
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    data: '',
    horario: '',
    local: '',
    descricao: '',
    limiteCompetidores: ''
  })
  
  const [imagem, setImagem] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // Handler para mudanças nos inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handler para seleção de imagem
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0]
    
    if (!arquivo) return

    // Validações
    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
    const tamanhoMaximo = 5 * 1024 * 1024 // 5MB

    if (!tiposPermitidos.includes(arquivo.type)) {
      alert('Apenas imagens JPG, PNG ou WEBP são permitidas')
      return
    }

    if (arquivo.size > tamanhoMaximo) {
      alert('A imagem deve ter no máximo 5MB')
      return
    }

    setImagem(arquivo)

    // Criar preview da imagem
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(arquivo)
  }

  // Função para fazer upload da imagem
  const uploadImagem = async (arquivo: File): Promise<string> => {
    try {
      const fileExt = arquivo.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      
      console.log('Iniciando upload da imagem:', fileName)
      
      const { error: uploadError } = await supabase.storage
        .from('competicao-images')
        .upload(fileName, arquivo, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Erro no upload:', uploadError)
        throw new Error(`Erro ao fazer upload: ${uploadError.message}`)
      }

      // Obter URL pública
      const { data } = supabase.storage
        .from('competicao-images')
        .getPublicUrl(fileName)

      console.log('URL da imagem:', data.publicUrl)
      return data.publicUrl

    } catch (error) {
      console.error('Erro no upload:', error)
      throw error
    }
  }

  // Submeter formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUploading(true)

    try {
      let imagemUrl: string | null = null

      // Upload da imagem se houver
      if (imagem) {
        console.log('Fazendo upload da imagem...')
        imagemUrl = await uploadImagem(imagem)
        console.log('Upload concluído:', imagemUrl)
      }

      // Inserir dados na tabela
      console.log('Inserindo dados na tabela...')
      const { data, error } = await supabase
        .from('Competicoes')
        .insert([
          {
            titulo: formData.titulo,
            data: formData.data,
            horario: formData.horario,
            local: formData.local,
            imagem_url: imagemUrl,
            descricao: formData.descricao,
            limiteCompetidores: formData.limiteCompetidores ? parseInt(formData.limiteCompetidores) : null
          }
        ])
        .select()

      if (error) {
        console.error('Erro ao inserir:', error)
        throw new Error(`Erro ao cadastrar: ${error.message}`)
      }

      console.log('Competicoes cadastrada:', data)
      alert('Competicoes cadastrada com sucesso!')
      
      // Limpar formulário
      setFormData({
        titulo: '',
        data: '',
        horario: '',
        local: '',
        descricao: '',
        limiteCompetidores: ''
      })
      setImagem(null)
      setPreviewUrl(null)
      
      // Limpar input de arquivo
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
      if (fileInput) fileInput.value = ''

    } catch (error: any) {
      console.error('Erro completo:', error)
      alert(error.message || 'Erro ao cadastrar Competicoes')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Cadastrar Nova Competicoes</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Título *</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Data *</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Horário *</label>
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Local *</label>
          <input
            type="text"
            name="local"
            value={formData.local}
            onChange={handleChange}
            required
            placeholder="Ex: Ginásio Municipal"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Limite de Competidores</label>
          <input
            type="number"
            name="limiteCompetidores"
            value={formData.limiteCompetidores}
            onChange={handleChange}
            min="1"
            placeholder="Ex: 50"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Descrição *</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Descreva os detalhes da Competicoes..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Imagem da Competicoes</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: '100%', padding: '8px' }}
          />
          
          {previewUrl && (
            <div style={{ marginTop: '10px' }}>
              <img 
                src={previewUrl} 
                alt="Preview" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '200px', 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '2px solid #ddd'
                }}
              />
            </div>
          )}
        </div>

        <button 
          type="submit" 
          disabled={uploading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: uploading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: uploading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {uploading ? 'Cadastrando...' : 'Cadastrar Competicoes'}
        </button>
      </form>
    </div>
  )
}

export default CadastrarCompeticao