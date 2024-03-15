import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [text, settext] = useState("")
  function changehandler(event) {
    settext(() => event.target.value);
    console.log(text);
  }

// for useEffect Case 1 => Run on every Render
  // jab bhi page render hoga useeffect wala hook chalega

  useEffect(()=>{
    console.log("UI is rendering");
  })
    



  return (
    <div className='App'>
      <input type="text" onChange={changehandler} />
    </div>
  )
}

export default App
