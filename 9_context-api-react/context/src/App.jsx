import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//components
import NavBar from './components/NavBar'

//pages
import InicialPage from './pages/inicialPage'
import MiddlePage from './pages/MiddlePage'
import EndPage from './pages/EndPage'

function App() {

  return (
    <div>
      <h1>Context API</h1>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/inicial' element={<InicialPage/>} />
          <Route path='/middle' element={<MiddlePage/>} />
          <Route path='/end' element={<EndPage/>} />
          
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
