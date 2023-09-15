import './App.css'

//1 config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import NavBar from './components/NavBar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {

  return (
    <div>
      <h1>
        React Router
      </h1>

      <BrowserRouter>
      {/* Links com react router */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinamica */}
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
