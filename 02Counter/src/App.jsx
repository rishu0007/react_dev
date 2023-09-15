import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5;

  const addValue = () => {
    // console.log("clicked", counter);
    if(counter < 5) {
      counter += 1;
      setCounter(counter);
    }
  }

  const subValue = () => {
    if(counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
    
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={subValue}
      >Remove Value</button>
      <p>footer : Counter Value from 0 to 5</p>

    </>
  )
}

export default App
