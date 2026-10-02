import CardProduto from "./CardProduto.jsx"

import fusca from "./assets/images/fusca.jpg"
import bmw from "./assets/images/bmw.webp"
import ferrari from "./assets/images/ferrari.jpg"
import byd from "./assets/images/byd.webp"

import "./Cards.css"

const Cards = ()=>{
    return(
        <section className="section-produtos">
            <h3>Produtos</h3>
            <div className="cards">
                <CardProduto 
                    src={fusca} 
                    titulo="Fusca Legal" 
                    desc="Um fusca da VW." 
                />
                <CardProduto 
                    src={bmw} 
                    titulo="BMW X6" 
                    desc="Um carro de elite." 
                />
                <CardProduto 
                    src={ferrari} 
                    titulo="Ferrari" 
                    desc="Um carro lindo." 
                />
                <CardProduto 
                    src={byd} 
                    titulo="BYD" 
                    desc="Carro top de linha." 
                />
            </div>
      </section>
    )
}

export default Cards