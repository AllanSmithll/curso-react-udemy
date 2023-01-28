import React, { Component } from 'react'; // Precisa incluir o React.Component antes de fazer uma Class Component

class Equipe extends Component {
    // A Class Component "renderiza" com o método render(), que se torna obrigatório
    render() {
        return(
            <Sobre name={this.props.nome} position={this.props.cargo} old={this.props.idade}/> // O sobre acessa rapidamente as propriedades que são atribuídas a ele, sem que tenha explicitamente o parâmetro "props" no Componente
        )
    }
}

class Sobre extends Component {
    // Também renderiza aqui, acessando rapidamente as proprieades
    render() {
        return(
            <div>
            <h2>Olá, sou(a) {this.props.name} </h2>
            <h3>Cargo: {this.props.position}</h3>
            <h3>idade: {this.props.old} anos</h3>
            <hr/>
            </div>
        )
    }
}

function App() {
    // Aqui também faço a atribuição de propriedades para Equipe
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Allan" cargo="Programador" idade="18" />
            <Equipe nome="Anderson" cargo="Nutricionista" idade="19"/>
        </div>
    )
}

export default App;


// import React, { Component } from 'react';

// class App extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             nome: "Allan",
//             contador: 0
//         };
//         this.aumentar = this.aumentar.bind(this)
//         this.diminuir = this.diminuir.bind(this)
//     }

//     aumentar() {
//         let state = this.state;
//         state.contador += 1
//         state.nome = "Anderson"
//         this.setState(state);
//     }

//     diminuir () {
//         let stateDiminuir = this.state;
//         if(this.diminuir === 0) {
//             alert('Chegamos a zero!');
//             return;
//         }

//         stateDiminuir.contador -= 1;
//         this.setState(stateDiminuir);
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Contador</h1>
//                 <h2>{this.state.nome}</h2>
//                 <h3>
//                     <button onClick={this.diminuir}>-</button>
//                     {this.state.contador}
//                     <button onClick={this.aumentar}>+</button>
//                 </h3>
//             </div>
//         )
//     }
// }

// export default App;