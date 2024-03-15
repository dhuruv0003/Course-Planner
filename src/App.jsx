import { useState } from 'react'

import './App.css'

function App() {
  const [text, settext] = useState("")
  function changehandler(event) {
    settext(() => event.target.value);
    console.log(text);
  }
  return (
    <div className='App'>
      <input type="text" onChange={changehandler} />
    </div>
  )
}

export default App
