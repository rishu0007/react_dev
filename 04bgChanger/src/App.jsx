import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

    <div className="fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => setColor("#C70039")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#C70039"}}>Red</button>
        <button
        onClick={() => setColor("#A8DF8E")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#A8DF8E"}}>Green</button>
        <button
        onClick={() => setColor("#279EFF")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#279EFF"}}>Blue</button>
        <button 
        onClick={() => setColor("#FF9B50")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#FF9B50"}}>Gold</button>
        <button 
        onClick={() => setColor("#8DDFCB")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#8DDFCB"}}>Spring</button>
        <button 
        onClick={() => setColor("#FBA1B7")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#FBA1B7"}}>Pink</button>
        <button 
        onClick={() => setColor("#F8DE22")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#F8DE22"}}>Yellow</button>
        <button 
        onClick={() => setColor("#54BAB9")}
        className="outline-none px-4 py-1 
        rounded-full text-white shodow-lg" style={{backgroundColor: "#54BAB9"}}>Teal</button>

      </div>
    </div>
    </div>
  )
}

export default App
