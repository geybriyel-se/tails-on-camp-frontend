import { Link } from "react-router-dom"
import '../styles/BannerBtn.css'

export default function BannerBtn({ name, url }) {
    return (
        <button className="BannerBtn">
            <Link to={url}>{name}</Link>
        </button>
    )
}