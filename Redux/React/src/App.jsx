import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'

function App() {
  const [state , setState] = useState({count: 0})

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => {
          state.count = state.count + 1
          setState(state)
          console.log(state)
        }}>
          count is {state.count}
        </button> */}

          {/* Non mutating way */}
          {/* naya object ban jata hai yaha , kyuki react tabhi re-render karta hai jab poorna state aur naya state mein difference ho , agar nhi hai to re render nhi karega  , i.e. state prevState === state vo false hona chahiye */}

        <button onClick={() => {
          setState({count : state.count + 1})
        }}>count is {state.count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <List/>
    </>
  )
}

export default App
