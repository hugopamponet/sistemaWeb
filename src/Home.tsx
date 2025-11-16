import './styles/theme.css'
import './styles/global.css'

export function Home() {
    return(
        <>
        <header>
            <div className='imgLogo'>
                <h1>Jiu-Jitsu eventos</h1>
            </div>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Competições</li>
                    <li>Seminários</li>
                    <li>Cursos</li>
                    <li><button>Criar Conta</button></li>
                </ul>
            </nav>
        </header>
        <main>
        <div className='imgMain'>
            <img src="src/assets/Homens Lutando.png" alt="Imagem JiuJitsu" />
        </div>
        <div className='conteiner'>
            <div className='buttons'>
                <button>Estado</button>
                <button>Faixa</button>
                <button>Categoria</button>
                <button>Idade</button>
                <button>Sexo</button>
            </div>
            <h1>Próximas Competições</h1>
            <h1>Eventos em Destaque</h1>
            <h1>Seminário e Cursos</h1>
        </div>
        </main>
        <footer>
            <p>Direitos reservados</p>
        </footer>
        </>
    )
}