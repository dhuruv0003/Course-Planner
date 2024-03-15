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

  // useEffect(()=>{
  //   console.log("UI is rendering");
  // })

  // for case 2=> First time render. This hook runs only on first time when the page is rendered. Here we use dependency array.

  // useEffect(()=>{
  //   console.log("render only once");
  // },[])

  // case 3=> on every render on particular dependencies whenever change occur in them..

  // useEffect(()=>{
  //   console.log("text is changed");
  // },[text])

  // case 4 => To handle unmounting of a component (Unmounting is when a React component is removed from the DOM).

  useEffect(() => {
    //add event listener
    console.log("listender added");

    //Note once the listener is added it first executes the return statement then add another listener.
    return()=>{
      console.log("listener removed");
    }
  },[text])




  return (
    <div className='App'>
      <input type="text" onChange={changehandler} />
    </div>
  )
}

export default App
