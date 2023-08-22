import './App.css'
//components
import ManageData from './components/ManageData';
import RenderList from './components/RenderList';

//images
import City from "./assets/City.jpg";

function App() {

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src="/img1.jpg" alt="paisagem"/> {/* imagem está em public*/}
      <div>
        <img src = {City} alt="Cidade"/> {/* imagem está em src/assets. Precisar importar*/}
      </div>
      <ManageData/>
      <RenderList/>
    </div>
  );
};

export default App
