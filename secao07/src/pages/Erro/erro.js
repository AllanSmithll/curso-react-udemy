import { Link } from 'react-router-dom'

function Erro() {
    return(
        <div>
            <h2>Ops! parece que essa página nao existe</h2>

            <span>Encontramos estas páginas aqui:</span> <br />
            <Link to="/">Home</Link> <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Erro;