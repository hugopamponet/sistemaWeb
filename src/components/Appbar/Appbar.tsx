import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
    const titleNavbar = " Jiu-Jitsu Eventos"
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed"
                sx={{ backgroundColor: "#212121" }}
            >
                <Toolbar>

                    {/* Menu hambúrguer — aparece apenas no mobile */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Título */}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {titleNavbar}
                    </Typography>

                    {/* Botões — aparecem apenas no desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <Button color="inherit">Inicio</Button>
                        <Button color="inherit">Competições</Button>
                        <Button color="inherit">Seminários</Button>
                        <Button color="inherit">cursos</Button>
                        <Button variant="contained" color="error"
                            sx={{ borderRadius: 10 }}
                        >Criar conta</Button>
                        <Button variant="contained" color="error"
                            sx={{ borderRadius: 10 }}
                        >Login</Button>
                    </Box>

                </Toolbar>
            </AppBar>

            {/* Espaçador para não esconder o conteúdo atrás da AppBar */}
            <Toolbar />
        </Box>
    );
}
