import { Link } from "react-router-dom"
import '../styles/BtnOutlined.css'

export default function BtnOutlined({ name, url, className }) {
    return <Link className={`BtnOutlined ${className}`} to={url}>{name}</Link>
}