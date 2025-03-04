import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/brand.svg'
import '../styles/Navbar.css'
import { useState } from 'react'
import { Drawer } from '@mui/material';
import NavLinkContainer from './NavLinksContainer';
import { v4 as uuid } from 'uuid'
import { Diversity3, Home, Pets, Info, VolunteerActivism, Newspaper, ContactPage } from '@mui/icons-material'

const links = [
    { key: uuid(), url: "/home", displayName: "HOME", icon: <Home />},
    { key: uuid(), url: "/adopt", displayName: "ADOPT", icon: <Pets />},
    { key: uuid(), url: "/donate", displayName: "DONATE", icon: <VolunteerActivism /> },
    { key: uuid(), url: "/volunteer", displayName: "VOLUNTEER", icon: <Diversity3 /> },
    { key: uuid(), url: "/about", displayName: "ABOUT", icon: <Info />},
    { key: uuid(), url: "/bulletin", displayName: "BULLETIN", icon: <Newspaper /> },
    { key: uuid(), url: "/contact", displayName: "CONTACT", icon: <ContactPage />},
]

export default function Navbar() {

    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setShowDrawer(newOpen);
    };

    return (
        <nav className="Navbar">
            <button className='DrawerButton' onClick={toggleDrawer(true)}>☰</button>
            <div className="NavContent">
                <Link to="/home" className='LogoLinkContainer'><img src={logo} alt="Tails on Camp logo and brand name" className='NavLogo' /></Link>
                <NavLinkContainer menuLink={
                    links.map(v => (
                        <NavLink
                            key={v.key}
                            to={v.url}
                            className={({ isActive }) => `NavLink NavLink${v.displayName} ${isActive ? "active" : ""}`}
                        >
                            {v.displayName}
                        </NavLink>
                    ))
                } className={"BarContainer"} />


                <Drawer open={showDrawer}
                    onClose={toggleDrawer(false)}
                    className='NavDrawer'
                    PaperProps={{
                        sx: {
                            paddingTop: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }
                    }}
                >
                    <NavLinkContainer menuLink={
                        links.map(v => (
                            <NavLink
                                key={v.key}
                                to={v.url}
                                className={({ isActive }) => `NavLink NavLink${v.displayName} ${isActive ? "active" : ""}`}
                            >
                                {v.icon}
                                {v.displayName}
                            </NavLink>
                        ))
                    } className={"DrawerContainer"} />
                </Drawer>


                <div className="NavAccount">
                    {/* <Link to="/register"><button className='NavAccountBtn NavAccountBtnRegister'>REGISTER</button></Link> */}
                    <Link to="/login"><button className='NavAccountBtn'>LOGIN</button></Link>
                </div>

            </div>
        </nav >
    )
}
