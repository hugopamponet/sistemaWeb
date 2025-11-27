import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const competicoesList = [
  { id: 1, nome: "Campeonato A" },
  { id: 2, nome: "Campeonato B" },
  { id: 3, nome: "Campeonato C" },
  { id: 4, nome: "Campeonato D" },
]

function CompetitionCard() {
  return (
    <>
      <Box sx={{ display: "flex", gap: 5, margin: 5 }}>
        {competicoesList.map((evento) =>
          <Card key={evento.id} sx={{
            width: 300,
            backgroundColor: "#0a0a0a",
            color: "white",
            textAlign: "center"
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt=''
                height={150}
                image='public/images/fight01.png'
              />
            </CardActionArea>
            <CardContent>
              <Typography>
                {evento.nome}
              </Typography>
            </CardContent>

          </Card>
        )}
      </Box>
    </>
  )
}

export default CompetitionCard