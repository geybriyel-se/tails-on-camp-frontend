import '../styles/FormHeader.css'

export default function FormHeader({ imgSrc, imgAlt, title = "", subtitle = "", hasBanner }) {
    return (
        <header className="FormHeader">
            <img src={imgSrc} alt={imgAlt} className='Form-Logo' />
            <h1>{title}</h1>
            <p className='Subtitle'>{subtitle}</p>
            <p className="Banner" style={{ visibility: hasBanner ? "visible" : "hidden" }}>
                For Shelter Owners Only
            </p>
        </header>
    )
}