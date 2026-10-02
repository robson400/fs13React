import digitalLogo from "./assets/images/digitalCollege.png"
import "./Header.css"

const Header = ()=>{
    
    return(
        <header>
            <img src={digitalLogo} alt="" />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header