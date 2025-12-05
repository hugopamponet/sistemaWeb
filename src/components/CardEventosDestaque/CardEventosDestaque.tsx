import { Typography, Box} from "@mui/material";
import Card from "@mui/material/Card";
import teste from "../../assets/Image/evento02.jpg";

function CardEventos() {
    const listaEventos = [
        { id: 1, img: teste, name: "Campeonato De Jiu-Jitsu", data: "23 de fevereiro de 2026", price: "R$ 400,00" },
        { id: 2, img: teste, name: "Campeonato 2", data: "23 de fevereiro de 2026", price: "R$ 400,00" },
        { id: 3, img: teste, name: "Campeonato 3", data: "23 de fevereiro de 2026", price: "R$ 400,00" },
        { id: 4, img: teste, name: "Campeonaro 4", data: "23 de fevereiro de 2026", price: "R$ 400,00" }
    ];

    return (
        <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", mt: 3, textAlign: "center", marginBottom: 5 }}>
            {listaEventos.map((e) => (
                <Card
                    key={e.id}
                    sx={{
                        width: 280,
                        height: 100,
                        backgroundColor: "#171718ff",
                        color: "#d1ced5ff",
                        borderRadius: 3
                    }}
                >
                    <Box sx={{
                        p: 1,
                        textAlign: "center", 
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        padding: 0,
                        justifyContent: "center"
                    }}>
                        <Typography sx={{ fontSize: 15 }}>
                            Evento: {e.name}
                        </Typography>
                    </Box>

                </Card>

            ))}
        </Box>
    );
}

export default CardEventos;
