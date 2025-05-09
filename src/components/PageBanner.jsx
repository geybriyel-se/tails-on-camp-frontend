import '../styles/PageBanner.css'

const bannerStyles = {
    // background: "linear-gradient(#5BC0EB, 75%, #F8F8F8)",
}

export default function PageBanner({ id = "", title, description, cssStyles = bannerStyles, children }) {
    return (
        <section className="PageBanner" style={cssStyles} id={id && id}>
            <div className="Content">
                <h1 className="Title">{title}</h1>
                <p className="Description"> {description} </p>
                {children && <div className="Children">{children}</div>}
            </div>
        </section>
    )
}