import React, { useEffect, useRef, useState } from "react"
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const decrement = () => {
    let value = Number(inputRef.current.value) || 1;
    let newCount = count > 0 ? count - value : 0;
    setCount(newCount)
    localStorage.setItem('count', JSON.stringify(newCount));
  }

  const increment = () => {

    let value = Number(inputRef.current.value) || 1;
    let newCount = count + value;
    setCount(newCount)
    localStorage.setItem('count', JSON.stringify(newCount));
    console.log(Number(inputRef.current.value));
  }

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem('count')) || 0;
    setCount(oldCount);
  }, [])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <input type="number" name="" ref={inputRef} id="" style={{ margin: "0px 5px 0px 0px", padding: "5px"}}></input>
          <br /> <br />
          <div className="btn">
            <button type="button" onClick={decrement}>-</button>
            <span style={{ border: "1px solid black", display: "inline-block", padding: "0px 10px", margin: "0px 5px", background: "#ffff" }}>{count}</span>
            <button type="button" onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
