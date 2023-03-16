import { useState } from 'react'
import './App.css'
import MovieApi from './components/MovieApi'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MovieApi />
      <Footer />
    </div>
  )
}

export default App
