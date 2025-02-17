import '../styles/FormSection.css'

export default function FormSection({ fields, className, sectionName = "" }) {
    return (
        <section className="FormSection">
            <heading className="SectionTitle">{sectionName}</heading>
            <div className={className} style={{ margin: "0"}}>
                {fields}
            </div>
        </section>
    )
}