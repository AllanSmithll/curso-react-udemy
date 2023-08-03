import {useState, useEffect} from 'react'
import './App.css'

function App() {

  const [tarefas, setTarefas] = useState([
  'Pagar a conta de luz',
  'Estudar React Hooks'
]);

const [input, setInput] = useState([' '])

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('')
  }

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  return(
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>
        Adicionar tarefa
      </button>

    </div>
  );
}

export default App;