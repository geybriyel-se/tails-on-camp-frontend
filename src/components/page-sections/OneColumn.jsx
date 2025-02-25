import '../../styles/page-sections/OneColumn.css'

export default function OneColumn({ id = "", className = "", title, subtitle = "", paragraph = "", imgSrc = "", imgAlt = "" }) {
    return (
        <section className={`OneColumn ${className}`} id={id && id}>
            <main className="ContentContainer">
                <h2 className="SectionTitle">{title}</h2>
                {subtitle !== "" && <h3 className="SectionSubtitle">{subtitle}</h3>}
                {paragraph !== "" && <p className="SectionParagraph">{paragraph}</p>}
                {imgSrc !== "" &&
                    <figure className="ImageContainer">
                        <img src={imgSrc} alt={imgAlt} className="Image" />
                    </figure>
                }
            </main>
        </section>
    )
} 