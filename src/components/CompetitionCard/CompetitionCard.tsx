import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";
import { ButtonModel } from '../ButtonModel';

interface Competicao {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
  imagem: string;
  limiteCompetidores?: number;
}

function CompetitionCard() {
  const [competicoes, setCompeticoes] = useState<Competicao[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCompeticoes();
  }, []);

  const fetchCompeticoes = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("Competicoes")
        .select("*")
        .order("data", { ascending: true });

      if (error) throw error;

      const competicoesFormatadas: Competicao[] = data.map((comp) => ({
        id: comp.id,
        titulo: comp.titulo,
        descricao: comp.descricao,
        data: formatarData(comp.data),
        horario: comp.horario,
        local: comp.local,
        imagem: comp.imagem_url,
        limiteCompetidores: comp.limiteCompetidores,
      }));

      setCompeticoes(competicoesFormatadas);
    } catch (error: any) {
      console.error("Erro ao buscar competições:", error);
      setError("Não foi possível carregar as competições");
      setCompeticoes([]);
    } finally {
      setLoading(false);
    }
  };

  const formatarData = (dataString: string): string => {
    if (!dataString) return "";
    const data = new Date(dataString + "T00:00:00");
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "400px" 
      }}>
        <CircularProgress sx={{ color: "#ff0000" }} />
        <Typography sx={{ ml: 2, color: "white" }}>
          Carregando eventos...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "400px",
        gap: 2
      }}>
        <Typography sx={{ color: "white", fontSize: "1.2rem" }}>
          {error}
        </Typography>
        <Button 
          variant="contained" 
          onClick={fetchCompeticoes}
          sx={{ 
            backgroundColor: "#ff0000",
            '&:hover': { backgroundColor: "#cc0000" }
          }}
        >
          Tentar novamente
        </Button>
      </Box>
    );
  }

  if (competicoes.length === 0) {
    return (
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "400px" 
      }}>
        <Typography sx={{ color: "#888", fontSize: "1.5rem" }}>
          Ainda não temos competições programadas
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      display: "flex", 
      flexWrap: "wrap",
      gap: 3, 
      margin: 5,
      justifyContent: "center"
    }}>
      {competicoes.map((competicao) => (
        <Card 
          key={competicao.id} 
          sx={{
            width: 345,
            backgroundColor: "#0a0a0a",
            color: "white",
            borderRadius: 2,
            transition: "transform 0.3s",
            '&:hover': {
              transform: "scale(1.05)"
            }
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={competicao.titulo}
              height={200}
              image={competicao.imagem}
              onError={(e: any) => {
                e.target.src = "/images/default-competition.jpg";
              }}
              sx={{ objectFit: "cover" }}
            />
          </CardActionArea>
          
          <CardContent sx={{ textAlign: "left" }}>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              {competicao.titulo}
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ color: "#aaa", mb: 1 }}
            >
              {competicao.descricao}
            </Typography>
            
            <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                📅 {competicao.data}
              </Typography>
              
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                🕐 {competicao.horario}
              </Typography>
              
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                📍 {competicao.local}
              </Typography>
              
              {competicao.limiteCompetidores && (
                <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  👥 Limite: {competicao.limiteCompetidores} competidores
                </Typography>
              )}
            </Box>
            
            <ButtonModel>
              Inscreva-se
            </ButtonModel>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default CompetitionCard;