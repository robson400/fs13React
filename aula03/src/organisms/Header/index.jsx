import Menu from "../../molecules/Menu.jsx"
import Logo from "../../atoms/Logo.jsx"

import "./style.css"

const Header = ()=>{

    const itens = [
        {item: "Home", href:"#home"},
        {item: "Produtos", href:"#produtos"},
        {item: "Tarefas", href:"#tarefas"},
        {item: "Contato", href:"#contato"}
    ]

    return(
        <header>
            <Logo />
            <Menu itens={itens} />
        </header>
    )
}

export default Header