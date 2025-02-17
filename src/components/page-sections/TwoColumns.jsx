import '../../styles/page-sections/TwoColumns.css'

export default function TwoColumns({ className = "", titleL = "", titleR = "", childrenL = "", childrenR = "" }) {
    return (
        <section className={`TwoColumns ${className}`}>
            <div className="Container ContainerL">
                {titleL && <h1 className="SectionTitle">{titleL}</h1>}
                <div className="Children ChildrenL">
                    {childrenL}
                </div>
            </div>
            <div className="Container ContainerR">
                {titleR && <h1 className="SectionTitle">{titleR}</h1>}
                <div className="Children ChildrenR">
                    {childrenR}
                </div>
            </div>
        </section>
    )
}