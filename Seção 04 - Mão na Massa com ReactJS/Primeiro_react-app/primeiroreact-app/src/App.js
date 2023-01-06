// 28/11/2022
// Primeiro projeto React
import React from 'react'

const Bemvindo = () => {
    return (
        <div>
            <h2>Bem-vindo(a)</h2>
        </div>
    )
}
function App() {
    return (
        <div>
            Olá Mundo!
            <Bemvindo />
            <h1>Curso React</h1>
        </div>
    )
}

export default App;