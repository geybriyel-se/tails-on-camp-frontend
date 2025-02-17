import '../styles/PageBanner.css'

const bannerStyles = {
    background: "linear-gradient(#5BC0EB, 65%, #FFFFFF)",
}

export default function PageBanner({ title, description, cssStyles=bannerStyles, children }) {
    return (
        <section className="PageBanner" style={cssStyles}>
            <div className="Content">
                <h1 className="Title">{title}</h1>
                <p className="Description"> {description} </p>
                {children && <div className="Children">{children}</div>}
            </div>
        </section>
    )
}