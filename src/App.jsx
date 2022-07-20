import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Hooks App</h1>
      <hr />
      <CounterWithCustomHook />
    </div>
  )
}

export default App
