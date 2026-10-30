import PageDefault from "../../templates/PageDefault.jsx"
import SectionDefault from "../../templates/SectionDefault.jsx"

import HomeStyle from "./style.module.css"

const Home = ()=>{
    return(
    <PageDefault>
        <SectionDefault className={HomeStyle.sectionHero}>
            <h1>Pagina Home</h1>
        </SectionDefault>
    </PageDefault>
    )
}

export default Home