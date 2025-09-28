import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/brand.svg'
import logo1 from '../assets/logo-1.svg'
import '../styles/Navbar.css'
import { useState } from 'react'
import { Drawer, Menu, MenuItem, Avatar, Divider, ListItemIcon, Tooltip, IconButton } from '@mui/material';
import NavLinkContainer from './NavLinksContainer';
import { v4 as uuid } from 'uuid'
import { Diversity3, Home, Pets, Info, VolunteerActivism, Newspaper, ContactPage } from '@mui/icons-material'
import AuthDialog from './AuthDialog'
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FolderIcon from '@mui/icons-material/Folder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';

const links = [
    { key: uuid(), url: "/home", displayName: "HOME", icon: <Home /> },
    { key: uuid(), url: "/adopt", displayName: "ADOPT", icon: <Pets /> },
    { key: uuid(), url: "/donate", displayName: "DONATE", icon: <VolunteerActivism /> },
    { key: uuid(), url: "/volunteer", displayName: "VOLUNTEER", icon: <Diversity3 /> },
    { key: uuid(), url: "/about", displayName: "ABOUT", icon: <Info /> },
    { key: uuid(), url: "/bulletin", displayName: "BULLETIN", icon: <Newspaper /> },
    { key: uuid(), url: "/contact", displayName: "CONTACT", icon: <ContactPage /> },
]

export default function Navbar({ activeTab = "" }) {

    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setShowDrawer(newOpen);
    };

    const [openDialog, setOpenDialog] = useState(false);

    function handleOpen() {
        setOpenDialog(true);
    }

    function handleClose() {
        setOpenDialog(false);
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAccMenu = () => {
        setAnchorEl(null);
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
                            className={({ isActive }) => `NavLink NavLink${v.displayName} ${isActive || activeTab === v.displayName ? "active" : ""}`}
                        >
                            {v.displayName}
                        </NavLink>
                    ))
                } className={"BarContainer"} />


                <Drawer open={showDrawer}
                    onClose={toggleDrawer(false)}
                    // anchor='right'
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
                    {/* <Link to="/"><button className='NavAccountBtn'>LOGIN</button></Link> */}
                    <button className='NavAccountBtn' onClick={handleOpen}>LOGIN</button>
                    <AuthDialog dialogState={openDialog} onClose={handleClose} />
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            className='ProfileBtn'
                        >
                            <Avatar />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleCloseAccMenu}
                        onClick={handleCloseAccMenu}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleCloseAccMenu}>
                            <Avatar >
                                <DashboardIcon />
                            </Avatar>
                            Dashboard
                        </MenuItem>
                        <MenuItem onClick={handleCloseAccMenu}>
                            <Avatar>
                                <InsertDriveFileIcon />
                            </Avatar>
                            My Applications
                        </MenuItem>
                        <MenuItem onClick={handleCloseAccMenu}>
                            <Avatar>
                                <FavoriteIcon />
                            </Avatar>
                            Saved Items
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleCloseAccMenu}>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleCloseAccMenu}>
                            <Avatar>
                                <NotificationsIcon />
                            </Avatar>
                            Notifications
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleCloseAccMenu}>
                            <ListItemIcon>
                                <HelpIcon fontSize="small" />
                            </ListItemIcon>
                            Help & Support
                        </MenuItem>
                        <MenuItem onClick={handleCloseAccMenu}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>

            </div>
        </nav >
    )
}
