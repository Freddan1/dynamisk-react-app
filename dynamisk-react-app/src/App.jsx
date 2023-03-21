
import './App.css'
import MovieApi from './components/MovieApi'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <MovieApi  />
      <Footer />
    </div>
  )
}

export default App
