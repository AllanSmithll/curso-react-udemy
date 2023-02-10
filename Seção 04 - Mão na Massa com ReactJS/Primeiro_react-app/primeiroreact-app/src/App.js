import React, { Component } from 'react';
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true
        }

        this.sair = this.sair.bind(this)
        this.entrar = this.entrar.bind(this)

    }

    sair() {
        this.setState({status: false})
    }

    entrar() {
        this.setState({status: true})
    }
    
    render() {
        return (
            <div>
                {this.state.status ? // se o status for tru
                <div>
                    <h2>Curso React JS</h2>
                    <button onClick={this.sair}>Sair</button>
                </div> : // Caso não seja true
                <div>
                    <h2>Olá, visitante, faça o login!</h2>
                    <button onClick={this.entrar}>Fazer Login</button>
                </div>
                }
            </div>
        );
    }
}

export default App;