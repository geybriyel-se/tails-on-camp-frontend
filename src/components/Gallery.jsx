import '../styles/Gallery.css'


export default function Gallery({ cards, className = "", title = "" }) {

    return (
        <section className='Gallery'>
            {title !== "" && <h2 className="SectionTitle">{title}</h2>}
            <article className={`GalleryContainer ${className}`}>
                {cards}
            </article>
        </section>
    )
}

