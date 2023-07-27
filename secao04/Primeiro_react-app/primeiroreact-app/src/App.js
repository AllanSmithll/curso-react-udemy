import React, { Component } from 'react';
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo: 'Selecionado'
        }

        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    trocaEmail(e) {
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado})
    }

    trocaSenha(s) {
        let valorDigitado = s.target.value;
        this.setState({senha: valorDigitado})
    }

    trocaSexo(se) {
        let valorDigitado = se.target.value;
        this.setState({sexo: valorDigitado})
    }

    cadastrar() {
        const {email, senha, sexo} = this.state;
        alert(`Email: ${email} \nSenha: ${senha} \nSexo: ${sexo}`)
    }
    
    render() {
        return (
            <div>
                <h2>Login</h2>
                Email: 
                <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} /> <br/> <br/>
                Senha: 
                <input type="password" name="senha" value={this.state.senha} onChange={(s) => this.setState({senha: s.target.value})}/> <br/> <br/>
                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
                <br></br><br></br>
                <button onClick={this.cadastrar}>Cadastrar</button>
            </div>
        );
    }
}

export default App;