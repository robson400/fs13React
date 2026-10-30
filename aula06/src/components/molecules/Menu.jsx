import ItemMenu from "../atoms/ItemMenu.jsx"

const Menu = ({ itens }) => {
    return(
        <nav>
            <ul>
                {
                    itens.map(i => <ItemMenu 
                            item={i.item} 
                            href={i.href} 
                        />)
                }
            </ul>
        </nav>
    )
}

export default Menu