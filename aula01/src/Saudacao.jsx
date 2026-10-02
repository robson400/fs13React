import "./Saudacao.css"

const Saudacao = ({nome, src, children})=>{
    return(
        <div className="card">
            <img src={src} alt={nome} width="100px" />
            <h2> Ola, {nome}</h2>
            <p>{children}</p>
        </div>
    )
}


// const pessoa = {
//     nome: "robson",
//     idade: 25
// }

// Descontrução:
// const nome = pessoa.nome
// const idade = pessoa.idade

// const {idade, nome } = pessoa

// const lista = ["ro", "gi"]
// const [,gisele] = lista


export default Saudacao
