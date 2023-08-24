import './App.css'
import Cars from './components/Cars'

function App() {

  const cars = [
    {id: 1, brand: "Fiat", model:"uno" ,year: 2015, km: 73078},
    {id: 2, brand: "Ford", model:"ka" ,year: 2020, km: 35736},
    {id: 3, brand: "Volkswagen", model:"gol" ,year: 2023, km: 5309}]

  return (
    <div>
      <h1>Seção 4: Challenge CSS</h1>
      <h2>Showroom de carros</h2>
      
      <div className="car-container" >
       {cars.map((car)=> <Cars 
        key={car.id}
        brand = {car.brand}
        model = {car.model}
        year = {car.year}
        km = {car.km}
        />
       )}
       </div>


    </div>
  )
}

export default App
