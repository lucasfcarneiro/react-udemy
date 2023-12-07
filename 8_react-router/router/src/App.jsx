import './App.css'

//1 config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//components
import NavBar from './components/NavBar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {

  return (
    <div>
      <h1>
        React Router
      </h1>

      <BrowserRouter>
        {/* Links com react router */}
        <NavBar />
        
        {/* search */}
        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/* Nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* search */}
          <Route path="/search" element={<Search />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
