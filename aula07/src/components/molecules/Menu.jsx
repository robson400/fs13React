import ItemMenu from "../atoms/ItemMenu.jsx"

const Menu = ({ itens }) => {
    return(
        <nav>
            <ul>
                {
                    itens.map((item, index) => <ItemMenu 
                            key={index}
                            item={item.item} 
                            href={item.href} 
                        />)
                }
            </ul>
        </nav>
    )
}

export default Menu