// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let myObj = {
  //   userName: "Rishu",
  //   age: 21
  // }

  // let newArr = [1,3,5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="Rishu" btnText="Click Me"/>
      <Card userName="Kumar" btnText="Visit Me"/>
    </>
  )
}

export default App
