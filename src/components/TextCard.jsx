import { Link } from 'react-router-dom'
import '../styles/TextCard.css'

export default function TextCard({ imgSrc, title, text, indicator="", url="" }) {
    return (
        <Link to={url}>
            <div className="TextCard">
                <img src={imgSrc} alt="Card icon" className="CardIcon" />
                <h2 className="CardTitle">{title}</h2>
                <p className="CardText">{text}</p>
                {indicator !== "" && <button className="CardButton" >{indicator}</button>}
            </div>
        </Link>
    )
}