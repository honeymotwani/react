import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './comp/Header'
import Footer from './comp/Footer'
import Body from './comp/Body'


function App() {
  const [count, setCount] = useState(0)
    const handleChange=(val)=>{
        if(val==="increment")
        {
          setCount(count+1)
        }
        else{
          if(count!==0)
          {
            setCount(count-1)
          }
        }
    }
  return (
    <div>
      <Header count={count}/>
      <main><Body val={count} handleChange={handleChange}/></main>
    <Footer/>
    </div>
  )
}

export default App
