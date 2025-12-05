import { Box, CardMedia, FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import videoHome from "../../assets/Video/videoHome.mp4";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import CardEventos from "../../components/CardEventos/CardEventos";
import CardDestaque from "../../components/CardEventosDestaque/CardEventosDestaque";

function Home() {
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")

    const handleChange = (event: SelectChangeEvent) => {
        setEstado(event.target.value)
    }
    const handleSelect = (event: SelectChangeEvent) => {
        setCidade(event.target.value)
    }


    // Texto presente na frente dos video

    const titleVideo = "Encontre todas as "
    const titleVideo2 = "Competições de Jiu-Jitsu em um só lugar"
    const subtitleVideo = "Jiu-Jitsu Eventos — Os melhores campeonatos"

    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "90vh",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Vídeo ocupando a tela */}

                <CardMedia
                    component="video"
                    src={videoHome}
                    autoPlay
                    muted
                    loop
                    playsInline
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                />

                {/* Texto e botão na frente */}

                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        color: "#fff",
                        textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
                        margin: "5px"
                    }}
                >
                    <Typography variant="h3" fontWeight="bold">
                        <Box>{titleVideo}</Box>
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                        {titleVideo2}
                    </Typography>
                    <Typography variant="h5" mt={2} mb={3}>
                        {subtitleVideo}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Button variant="contained" color="error">Proximos eventos</Button>
                        <Button variant="contained"
                            sx={{ backgroundColor: "#212121", border: "none", "&:focus": { outline: "nome" } }}
                        >Divulgue seu evento</Button>
                    </Box>
                </Box>
            </Box>
            <Typography variant="h3" sx={{
                backgroundColor: "#d22f2f",
                padding: 2,
                textAlign: "center"
            }}>Próximas Competições</Typography>


            {/* Parte responsavel pelo select dos estados e cidade*/}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 3,
                    textAlign: "center",
                    marginBottom: 3

                }}
            >
                {/* Select responsavel pelos estados */}

                <FormControl size="small">
                    <InputLabel sx={{ color: "#d1ced5ff" }}><em>Estado</em></InputLabel>
                    <Select
                        value={estado}
                        label="estado"
                        onChange={handleChange}
                        sx={{
                            backgroundColor: "#212020ff",
                            color: "#d1ced5ff",
                            width: "180px"
                        }}
                    >
                        <MenuItem value={1}>Bahia</MenuItem>
                        <MenuItem value={2}>São Paulo</MenuItem>
                        <MenuItem value={3}>Rio de Janeiro</MenuItem>
                    </Select>
                </FormControl>

                {/* Select responsavel pelas cidades */}

                <FormControl size="small">
                    <InputLabel sx={{ color: "#d1ced5ff" }}><em>Cidade</em></InputLabel>
                    <Select
                        value={cidade}
                        label="cidade"
                        onChange={handleSelect}
                        sx={{
                            backgroundColor: "#212020ff",
                            color: "#d1ced5ff",
                            width: "180px"
                        }}
                    >
                        <MenuItem value={1}>Salvador</MenuItem>
                        <MenuItem value={2}>Recife</MenuItem>
                        <MenuItem value={3}>Fortaleza</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <CardEventos />

            {/* Eventos em Destaque*/}

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 5,
                fontSize: "40px",
            }}>
                Eventos em Destaque
            </Box>
            <Box>
                <CardDestaque />
            </Box>
            <Box sx={{ margin: "auto", textAlign: "center", fontSize: 40, marginBottom: 5 }}>
                Seminario
                <Typography variant="h6" sx={{ marginTop: 2, fontSize: 20, }}>
                    Nenhum seminario encontrado!
                </Typography>
            </Box>
        </>
    );
}

export default Home;
