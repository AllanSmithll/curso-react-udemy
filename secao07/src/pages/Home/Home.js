import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Bem-vindo a página Home</h1>
        <span>Allan, jogador caro</span> <br/> <br/>

        <Link to="/sobre">Sobre</Link> <br></br>
        <Link to="/contato">Contato</Link>

        <br />

        <Link to="/produto/123">Acessar Produto 123</Link>
    </div>
  );
}

export default Home;
