import { useEffect, useState } from "react"
import PageDefault from "../../templates/PageDefault.jsx"
import SectionDefault from "../../templates/SectionDefault.jsx"
import CardsProducts from "../../organisms/CardsProducts.jsx"

import styleProducts from "./Products.module.css"

const Products = ()=>{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async ()=>{
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
        }
        getProducts()
    },[])
    return(
        <PageDefault>
            <SectionDefault className={styleProducts.sectionProducts}>
                <h3>Produtos</h3>
                <CardsProducts products={products} style={styleProducts}/>
            </SectionDefault>
        </PageDefault>
    )
}

export default Products