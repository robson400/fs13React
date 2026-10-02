import "./CardProduto.css"

const CardProduto = ({src, titulo, desc})=>{
    return(
        <div className="card">
            <img src={src} alt="" />
            <div className="card-body">
                <h4>{titulo}</h4>
                <p>{desc}</p>
                <a href="#">Comprar</a>
            </div>
        </div>
    )
}

// CSS In Page
// const estilo = {
//     img:{
//         width: "100px",
//         borderRadius: "30px"
//     },
//     titulo:{
//         fontSize: "30px"
//     }
// }


export default CardProduto