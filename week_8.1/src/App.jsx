import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './Compound/RevenueCard'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div className='grid grid-col-3'>
   <RevenueCard title = {"Amount Pending"} amount = {"92,315,20"} OrderCount={13}/>
   </div>
    </>
  )
}

export default App


/*
The flex box code there : -- https://gist.github.com/BharatKhatwani/8ce9b9cd0c512a112c8860777b45838f
*/