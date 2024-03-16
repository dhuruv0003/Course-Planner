import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards"
import Filter from "./Components/Filter";
import { toast } from "react-toastify";
import { filterData, apiUrl } from "./data"
import Spinner from "./Components/Spinner"

import "./App.css"
function App() {
  // const [text, settext] = useState("")
  // function changehandler(event) {
  //   settext(() => event.target.value);
  //   console.log(text);
  // }

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

  // useEffect(() => {
  //   //add event listener
  //   console.log("listender added");

  //   //Note once the listener is added it first executes the return statement then add another listener.
  //   return()=>{
  //     console.log("listener removed");
  //   }
  // },[text])

  const [courses, setCourses] = useState([])
  // To show loading icon while fetching data
  const [loading, setLoading] = useState(true)


  async function FetchData() {
    setLoading(true)//loading image dikhao
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      // Now save all the data within the json file into another variable i.e courses.
      setCourses(output.data)

    } catch (error) {
      toast.error("something went wrong")
    }
    setLoading(false) //loading image hatao , data aa chuka hai.. 
  }

  useEffect(() => {
    //    call the fetchdata after fetching data
    FetchData();
  }, []);


  return (
    // <div className='App'>
    //   <input type="text" onChange={changehandler} />
    // </div>
    <div className='App'>
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Filter filterData={filterData} />
      </div>

      <div className="">
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses}></Cards>)
        }
      </div>

    </div>
  )
}

export default App
