import '../styles/FormSection.css'

export default function FormSection({ fields, className, sectionName = "" }) {
    return (
        <section className="FormSection">
            <div className="SectionTitle">{sectionName}</div>
            <div className={className} style={{ margin: "0"}}>
                {fields}
            </div>
        </section>
    )
}