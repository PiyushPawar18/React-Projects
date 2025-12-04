import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ischecked, setIsChecked] = useState(false);
  const handlechecked = () => {
    setIsChecked((prev) => !prev)
    console.log(ischecked)
  }
  return (
    <>
      <div >
        <input type="checkbox" checked={ischecked} onChange={handlechecked}/>
      </div>
    </>
  )
}

export default App
