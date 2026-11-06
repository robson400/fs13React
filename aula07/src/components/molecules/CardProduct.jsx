const CardProduct = ({ product, style }) => {
  return (
    <div className={style.card} id={product.id}>
        <img src={product.image} alt="" />
        <div className={style.cardBody}>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <div className={style.cardFoot}>
                <span>R$ {product.price}</span>
                <a href="#">Ver mais</a>
            </div>
        </div>
    </div>
  )
}

export default CardProduct