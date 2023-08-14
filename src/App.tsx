import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date());

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
      <div>
        <p>This test Flatpickr </p>
      <Flatpickr
        data-enable-time
        value={date}
        onChange={() => {
          setDate((date)=>date);
        }}
      />
      </div>
      <p>source code on <a href="https://github.com/narongskml/reactvite/">link</a> </p>
    </>
  )
}

export default App
