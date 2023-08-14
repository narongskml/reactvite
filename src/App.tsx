import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <h1>Hi Github Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is github page from Vite
        </p>
      </div>
      <p>source code on <a href="https://github.com/narongskml/reactvite/">link</a> </p>
    </>
  )
}

export default App
