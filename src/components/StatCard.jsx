import '../styles/StatCard.css'

export default function StatCard({ icon, label, number, className = "" }) {
    const Icon = icon;

    return (
        <section className={`StatCard ${className}`}>
            <Icon className="StatIcon" fontSize="large" />
            <section className="StatDetails">
                <p className="Label">{label}</p>
                <p className="Number">{number}</p>
            </section>
        </section>
    )
}