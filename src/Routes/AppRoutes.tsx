import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home/Home'
import Competicao from '../pages/Competicao/Competicao'
import Seminario from "../pages/Seminario/Seminario"
import Cursos from "../pages/Cursos/Cursos"

function AppRoutes() {
    return (
        <>
            { /* Rotas das páginas */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/competicao" element={<Competicao />} />
                    <Route path="/seminario" element={<Seminario />} />
                    <Route path="/cursos" element={<Cursos />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes