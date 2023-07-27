import {useState} from 'react'
import './App.css'

function App() {

  const [taferas, setTarefas] = useState([
  'Pagar a conta de luz',
  'Estudar React Hooks'
]);

  return(
    <div>
      <ul>
        {setTarefas.map(tarefa => (
          <li key={}> </li>
        ))}
      </ul>
    </div>
  );
}

export default App;