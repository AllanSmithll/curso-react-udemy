# Aula 1 - Requisição HTTP

```
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import './style.css';

// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
            console.log(json)
            setNutri(json)
          }
        )
    }
    loadApi();
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>
                {item.subtitulo}
              </p>
            <a href='#' className='botao'>Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
```

## Explicando

Este é um componente React que consome uma API para exibir dados na interface. Vou explicar o código em partes:

1. Importações:

useEffect e useState são Hooks do React utilizados para lidar com efeitos colaterais e estados no componente.
style.css é um arquivo de estilo externo que é importado para estilizar o componente.

2. useState:

const [nutri, setNutri] = useState([]) define um estado nutri como um array vazio e uma função setNutri para atualizar esse estado.

3. useEffect:

useEffect é usado para realizar operações após a renderização do componente. No código, ele é usado para carregar dados da API assim que o componente é montado.

4. Função loadApi:

É uma função definida dentro de useEffect que realiza a solicitação à API e atualiza o estado nutri com os dados recebidos.

5. Fetch da API:

fetch é usado para fazer uma solicitação HTTP para a URL especificada.
.then é usado para tratar a resposta da solicitação, transformando-a em JSON usando o método .json().
Quando os dados JSON são obtidos, a função setNutri é usada para atualizar o estado nutri, fazendo com que o componente seja renderizado novamente com os dados da API.

6. Renderização:

O componente é renderizado dentro de uma div com a classe "container".
Há um cabeçalho com o texto "React Nutri".
Os dados obtidos da API (nutri) são mapeados usando .map() para criar uma série de artigos (\<article>) que representam os itens da API.
Cada item da API é exibido com um título, uma imagem de capa, um subtítulo e um botão "Acessar". Os dados são inseridos dinamicamente com base nos dados obtidos da API.

7. Chave Única (key):

Cada \<article> tem uma propriedade key definida com o valor item.id. Isso é importante para ajudar o React a identificar de forma única cada elemento renderizado e otimizar as atualizações.

8. Estilo CSS:

A classe CSS "post" é usada para estilizar os elementos \<article>.
Há também classes para estilizar outros elementos, como títulos, capas, subtítulos e botões.
No geral, este código representa um componente React que faz uma solicitação à API, obtém os dados, armazena-os no estado e renderiza esses dados na interface. Ele exibe uma lista de artigos com títulos, imagens de capa e botões de acesso. Certifique-se de que o URL da API está acessível e fornece os dados esperados para que este componente funcione corretamente.

# Aula 2 - Trabalhando com Rotas

Instalação -> `npm install react-router-dom`