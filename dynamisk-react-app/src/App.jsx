import { useState } from 'react'
import './App.css'
import MovieApi from './components/MovieApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MovieApi/>
      
    </div>
  )
}

export default App
