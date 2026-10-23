import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const PageDefault = ({ children })=>{
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PageDefault