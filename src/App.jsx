import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Portfolio from './pages/portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Portfolio />
    </>
  )
}

export default App
