import './App.css'
//images
import City from "./assets/City.jpg";
import { useState } from 'react';

//components
import ManageData from './components/ManageData';
import RenderList from './components/RenderList';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import ShowUserName from './components/ShowUserName';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {

  const name = "Matheus";
  const [userName] = useState("Maria")
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: false, km: 10000},
    {id: 2, brand: "Ford", color: "Azul", newCar: true, km: 0},
    {id: 3, brand: "Fiat", color: "Preto", newCar: false, km: 2343}
  ]

  function ShowMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src="/img1.jpg" alt="paisagem"/> {/* imagem está em public*/}
      <div>
        <img src = {City} alt="Cidade"/> {/* imagem está em src/assets. Precisar importar*/}
      </div>
      <ManageData/>
      <RenderList/>
      <ConditionalRender/>
          {/* Props */}
      <ShowUserName name = {userName}/> 
          {/* Destructuring */}
      <CarDetails brand= "Fiat" km={55000} color="preto" newCar= {false}/>
          {/*Reaproveitando*/}
      <CarDetails brand= "Ford" km={0} color="Azul" newCar= {true}/>
      <CarDetails brand= "Fiat" km={5000} color="prata" newCar= {false}/>
          {/* Loop em array de objetos */}
      {cars.map((car)=>(
        <CarDetails
          key={car.id}
          brand = {car.brand} 
          km = {car.km} 
          color = {car.color} 
          newCar = {car.newCar} />
      ))}
          {/* Fragment */}
      <Fragment propFragment = "teste" />
          {/* Children */}
      <Container myValue = "valor 1">
        <p>Este é o conteudo!</p>
      </Container>
      <Container myValue = "valor 2">
        <h4>Testando container</h4>
      </Container>
          {/* Executar funcao passada pelo props */}
      <ExecuteFunction myFunction={ShowMessage}/>
          {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
};

export default App
