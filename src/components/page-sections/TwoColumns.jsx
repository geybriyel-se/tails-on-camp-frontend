import '../../styles/page-sections/TwoColumns.css'

export default function TwoColumns({
    className = "",
    titleL = "",
    titleR = "",
    childrenL = "",
    childrenR = "",
    subtitleL = "",
    subtitleR = "" }) {


    return (
        <section className={`TwoColumns ${className}`}>
            <div className="Container ContainerL">
                {titleL && <h1 className="SectionTitle">{titleL}</h1>}
                {subtitleL && <h4 className="SectionSubtitle">{subtitleL}</h4>}
                <div className="Children ChildrenL">
                    {childrenL}
                </div>
            </div>
            <div className="Container ContainerR">
                {titleR && <h1 className="SectionTitle">{titleR}</h1>}
                {subtitleR && <p className="SectionSubtitle">{subtitleR}</p>}
                <div className="Children ChildrenR">
                    {childrenR}
                </div>
            </div>
        </section>
    )
}