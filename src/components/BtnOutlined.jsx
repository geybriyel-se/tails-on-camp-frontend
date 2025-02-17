import { Link } from "react-router-dom"
import '../styles/BtnOutlined.css'

export default function BtnOutlined({name, url}) {
    return <Link className='BtnOutlined' to={url}>{name}</Link>
}