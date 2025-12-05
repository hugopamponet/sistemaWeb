import { CardActionArea, CardMedia, Typography, Box, CardActions, Button } from "@mui/material";
import Card from "@mui/material/Card";
import teste from "../../assets/Image/evento02.jpg";

function CardEventos() {
    const listaEventos = [
        { id: 1, img: teste, name: "Chikara", data: "23 de fevereiro de 2026", price: "R$ 400,00" },
        { id: 2, img: teste, name: "Chikara", data: "23 de fevereiro de 2026", price: "R$ 400,00" },
        { id: 3, img: teste, name: "Chikara", data: "23 de fevereiro de 2026", price: "R$ 400,00" },
        { id: 4, img: teste, name: "Chikara", data: "23 de fevereiro de 2026", price: "R$ 400,00" }
    ];

    return (
        <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", mt: 3, textAlign: "center" }}>
            {listaEventos.map((e) => (
                <Card key={e.id} sx={{ maxWidth: 280 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height={180}
                            image={e.img}
                            alt={e.name}
                        />
                        <Box sx={{ p: 1, textAlign: "left" }}>
                            <Typography sx={{ fontSize: 18 }}>Evento: {e.name}</Typography>
                            <Typography sx={{ fontSize: 16, color: "text.secondary" }}>Data: {e.data}</Typography>
                            <Typography sx={{ fontSize: 16, color: "text.secondary" }}>Valor: {e.price}</Typography>
                        </Box>
                    </CardActionArea>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button variant="contained" color="error"
                            sx={{ width:"40vh"}}
                        >Teste</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
}

export default CardEventos;
