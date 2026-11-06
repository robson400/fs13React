import CardProduct from "../molecules/CardProduct.jsx"

const CardsProducts = ({ products, style }) => {
  return (
    <div className={style.cards}>
        {
            products.map(p => 
              <CardProduct 
                key={p.id} 
                product={p} 
                style={style} 
              />)
        }
    </div>
  )
}

export default CardsProducts