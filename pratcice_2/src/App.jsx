import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/Header.jsx"
import Balance from './Components/Balance.jsx'
import IncomeExpense from './Components/IncomeExpense.jsx'
import TransactionList from './Components/TransactionList.jsx'
import AddTransition from './Components/AddTransition.jsx'
function App() {
  
  return (
    <div className='Container-1' >
     
      <Header/>
      <div>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransition/>
      </div>

    </div>
  )
}

export default App;