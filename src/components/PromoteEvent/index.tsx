import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { supabase } from "../../lib/supabaseClient";
import { DefaultEndereco } from "../DefaultEndereco";
import { DefaultInput } from "../DefaultInput";

interface FormData {
  titulo: string;
  data: string;
  horario: string;
  local: string;
  valor: string;
  prazoDeInscricao: string;
  descricao: string;

  limiteCompetidores: string;
}

export function PromoteEvent() {
  const [formData, setFormData] = useState<FormData>({
    titulo: "",
    data: "",
    horario: "",
    local: "",
    descricao: "",
    valor: "",
    prazoDeInscricao: "",
    limiteCompetidores: "",
  });

  const [imagem, setImagem] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0];

    if (!arquivo) return;

    const tiposPermitidos = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/jpg",
    ];
    const tamanhoMaximo = 5 * 1024 * 1024; // 5MB

    if (!tiposPermitidos.includes(arquivo.type)) {
      alert("Apenas imagens JPG, PNG ou WEBP são permitidas");
      return;
    }

    if (arquivo.size > tamanhoMaximo) {
      alert("A imagem deve ter no máximo 5MB");
      return;
    }

    setImagem(arquivo);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(arquivo);
  };

  const uploadImagem = async (arquivo: File): Promise<string> => {
    try {
      const fileExt = arquivo.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(7)}.${fileExt}`;

      console.log("Iniciando upload da imagem:", fileName);

      const { error: uploadError } = await supabase.storage
        .from("competicao-images")
        .upload(fileName, arquivo, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Erro no upload:", uploadError);
        throw new Error(`Erro ao fazer upload: ${uploadError.message}`);
      }

      const { data } = supabase.storage
        .from("competicao-images")
        .getPublicUrl(fileName);

      console.log("URL da imagem:", data.publicUrl);
      return data.publicUrl;
    } catch (error) {
      console.error("Erro no upload:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imagemUrl: string | null = null;

      if (imagem) {
        console.log("Fazendo upload da imagem...");
        imagemUrl = await uploadImagem(imagem);
        console.log("Upload concluído:", imagemUrl);
      }

      console.log("Inserindo dados na tabela...");
      const { data, error } = await supabase
        .from("Competicoes")
        .insert([
          {
            titulo: formData.titulo,
            data: formData.data,
            horario: formData.horario,
            local: formData.local,
            imagem_url: imagemUrl,
            descricao: formData.descricao,
            valor: formData.valor,
            prazoDeInscricao: formData.prazoDeInscricao,
            limiteCompetidores: formData.limiteCompetidores
              ? parseInt(formData.limiteCompetidores)
              : null,
          },
        ])
        .select();

      if (error) {
        console.error("Erro ao inserir:", error);
        throw new Error(`Erro ao cadastrar: ${error.message}`);
      }

      console.log("Competição cadastrada:", data);
      alert("Competição cadastrada com sucesso!");

      setFormData({
        titulo: "",
        data: "",
        horario: "",
        local: "",
        descricao: "",
        valor: "",
        prazoDeInscricao: "",
        limiteCompetidores: "",
      });
      setImagem(null);
      setPreviewUrl(null);

      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error: any) {
      console.error("Erro completo:", error);
      alert(error.message || "Erro ao cadastrar competição");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Cadastrar Competição</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Imagem da Competição
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: "100%", padding: "8px" }}
          />

          {previewUrl && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={previewUrl}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "2px solid #ddd",
                }}
              />
            </div>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Título *
          </label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Data *
          </label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Horário *
          </label>
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Local *
          </label>
          <input
            type="text"
            name="local"
            value={formData.local}
            onChange={handleChange}
            required
            placeholder="Ex: Ginásio Municipal"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Limite de Competidores
          </label>
          <input
            type="number"
            name="limiteCompetidores"
            value={formData.limiteCompetidores}
            onChange={handleChange}
            min="1"
            placeholder="Ex: 50"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Valor</label>
          <input
            type="text"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <DefaultInput
            children="Prazo de inscrição"
            className="pensando"
            type="date"
            name="prazoDeInscricao"
            value={formData.prazoDeInscricao}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Descrição *
          </label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Descreva os detalhes da competição..."
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: uploading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: uploading ? "not-allowed" : "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {uploading ? "Cadastrando..." : "Cadastrar Competição"}
        </button>
      </form>
    </div>
  );
}

export default PromoteEvent;
