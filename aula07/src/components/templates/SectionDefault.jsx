const SectionDefault = ({ children, className })=>{
    return(
        <section className={className}>
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}

export default SectionDefault