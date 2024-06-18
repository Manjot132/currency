import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length,setLength] = useState(8);
 const [specialallowed, setSpecialAllowed] = useState(true);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [password, setPassword] = useState("");
  return (
    <>
    <div className='bg-white max-w-md text-orange-500 px-auto ' >
    
    </div>
    </>
  )
}

export default App
