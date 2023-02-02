import React, { Component } from 'react';

class App extends Component {
    // Class Component

    constructor(props) {
        // Construtor que possui as propriedades mais importantes
        super(props); // Acessar todas as informações do componente pai (App)
        this.state = { // Os estados desse Component
            nome: "Allan",
            contador: 0
        };

        // Lembrando que o this serve para acessar cada variável

        this.aumentar = this.aumentar.bind(this) // bind() serve para que a função consiga ser usada pela aplicação
        this.diminuir = this.diminuir.bind(this)
    }

    aumentar() {
        let state = this.state;
        state.contador += 1
        state.nome = "Anderson"
        this.setState(state);
    }

    diminuir () {
        let stateDiminuir = this.state;
        if(stateDiminuir.contador === 0) {
            alert('Chegamos a zero! Não pode diminuir mais.');
            return;
        }

        stateDiminuir.contador -= 1;
        this.setState(stateDiminuir);
    }


    render() {
        return (
            <div>
                <h1>Contador</h1>
                <h2>{this.state.nome}</h2>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}

export default App;