import Saudacao from './Saudacao.jsx'
import imgFusca from "./assets/fusca_azul.jpg"
import './App.css'

function App() {

  return (
    <>
      <Saudacao 
        nome="Fusca" 
        src={imgFusca}
      >
        Um fusca muito Legal
      </Saudacao>
    </>
)}

export default App
