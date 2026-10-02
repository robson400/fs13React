const Footer = ()=> {
    return(
        <footer style={estilo.footer}>
            <span>Todos os direitos reservados.</span>
        </footer>
    )
}

const estilo = {
    footer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        height: "120px",
        marginTop: "40px"
    }
}

export default Footer
