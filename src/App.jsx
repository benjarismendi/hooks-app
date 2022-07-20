import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithHook } from './02-useEffect/FormWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Hooks App</h1>
      <hr />
      <FormWithHook />
    </div>
  )
}

export default App
