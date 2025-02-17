import { NavLink } from "react-router-dom"


export default function NavLinkContainer({ menuLink, className }) {
    return (
        <div className={`NavLinkContainer ${className}`}>
            {menuLink}
        </div>
    )
}