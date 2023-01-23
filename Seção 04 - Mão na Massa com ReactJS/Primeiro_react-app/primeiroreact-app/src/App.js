import React from 'react';

const Presentation = (props) => {
    return(
        <div>
            <h2>Olá! Eu sou {props.nome} e tenho {props.idade} anos.</h2>
        </div>
    )
}

export default function App() {
    // A função App que retornará nosso Aplicativo
    return(
        <div>
            <h1>Olá Mundo</h1>
            <Presentation nome="Allan" idade="18"/>
            <Presentation nome="Anderson" idade="19" />
        </div>
    )
}

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