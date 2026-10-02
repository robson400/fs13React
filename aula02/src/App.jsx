import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Cards from "./Cards.jsx"
import './App.css'

function App() {
  const nome = "joao"

  return(
    <div className="container">
      <Header />
      <main>
        <Cards />
      </main>
      <Footer />
    </div>
  ) 
}

export default App
