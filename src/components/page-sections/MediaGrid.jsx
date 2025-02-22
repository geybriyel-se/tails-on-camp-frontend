import '../../styles/page-sections/MediaGrid.css'

export default function MediaGrid({ className = "", objArr, title = "" }) {
    return (
        <section className={`MediaGrid ${className}`}>
            {title && <h1 className="SectionTitle">{title}</h1>}
            <main className="GridContainer">
                {objArr}
            </main>
        </section>
    )
}