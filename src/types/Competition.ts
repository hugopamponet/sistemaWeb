export interface Competition {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
  imagem: string;
  limiteCompetidores?: number;
}