import './App.css'
import Conter from './exercice1/Conter';
import ArrayMap from './exercice2/ArrayMap';
import ArrayPush from './exercice3/ArrayPush';

function App() {

  const name = "John Doe";

 

  return (
    <>

        <h1>Hello {name}!</h1>
        <h1>Vite + React</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


        <Conter />
        <ArrayMap />
        <ArrayPush />
    </>
  )
}

export default App
