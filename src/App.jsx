// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithHook } from './02-useEffect/FormWithHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memo/Memorize'
// import { HookMemo } from './06-memo/HookMemo'
// import { HookCallback } from './07-useCallback/HookCallback'
import { TodoApp } from './09-reducer/TodoApp'
import './App.css'
import './09-reducer/intro-reducer'

function App() {

  return (
    <div className="App">
      <h1>Hooks App</h1>
      <hr />
      <TodoApp />
    </div>
  )
}

export default App
