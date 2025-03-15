import { useState } from 'react'
import Quizlet from "./components/Quizlet";
import CottagePhoto from './components/CottagePhoto';


import './App.css'

function App() {
  const [level, setLevel] = useState(1)

  return (
    <>
      <h1>Let's build a cottage</h1> 
      <h2>Level {level}</h2>
      <button onClick={() => setLevel((level) => level + 1)}>
        Level is {level}
      </button>
      {/* <CottagePhoto/> */}
      <Quizlet level={level} setLevel={setLevel} />
    </>
  )
}

export default App
