import './App.css'
import MyForms from './components/MyForms'

function App() {

  return (
    <div>
      <h2>Formulario</h2>
      <MyForms user ={{name: "Lucas", email: "lucas@gmail.com"}}/>
    </div>
  )
}

export default App
