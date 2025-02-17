import '../../styles/page-sections/TwoColumns.css'

export default function TwoColumns({ className, title, paragraph, imgSrc = "", imgAlt = "", children = "" }) {

    return (
        <section className={`TwoColumns ${className}`}>
            {imgSrc === "" && <h1 className="SectionTitle">{title}</h1>}
            <div className="ContentContainer">
                <img src={imgSrc} alt={imgAlt} className='Image' />
                <p className={`SectionText ${imgSrc === "" ? "NoImage" : ""}`}>
                    {imgSrc !== "" && <h1 className="SectionTitle">{title}</h1>}
                    {paragraph}
                    {imgSrc !== "" && children !== "" && <div className="SectionChildren">{children}</div>}
                </p>
            </div>
            {imgSrc === "" && children !== "" && <div className="SectionChildren">{children}</div>}
        </section>
    )
}

function TwoDivs({ className, titleL, titleR, childrenL = "", childrenR = "" }) {
    return (
        <section className={`TwoDivs ${className}`}>
            <div className="Container LeftContainer">
                <h1 className="SectionTitle">{titleL}</h1>
                <div className="Children ChildrenL">
                    {childrenL}
                </div>
            </div>
            <div className="Container RightContainer">
                <h1 className="SectionTitle">{titleR}</h1>
                <div className="Children ChildrenR">
                    {childrenR}
                </div>
            </div>
        </section>
    )
}


export { TwoDivs };