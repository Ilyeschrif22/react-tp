import './App.css'
import { useState  } from 'react'

import Conter from './Conter'

function App(props) {

  const [step, setStep] = useState(0);
  return (
    <>


      <input type='number' 
      onChange={(e) => setStep(Number(e.target.value))} 
      value={step} />

      <Conter step={step} />
    </>
  )
}

export default App
