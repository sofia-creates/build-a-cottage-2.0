import { useState } from 'react'
import Quizlet from "./components/Quizlet";
import CottagePhoto from './components/CottagePhoto';


import './App.css'

function App() {
  const [level, setLevel] = useState(1)

  return (
    <>
    <div className="pageWrapper">
      <CottagePhoto/>
      <div id="headingsAndQuiz">
        <h1>Let's build a cottage</h1> 
        <h2>Level {level}</h2>
        <Quizlet level={level} setLevel={setLevel} />
      </div>
    </div>
    </>
  )
}

export default App
