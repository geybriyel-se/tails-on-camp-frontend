import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/Applications.css'
import { RES_ADREQ_BY_USER as apiRes } from "../constants/SampleReponses";
import Avatar from '@mui/material/Avatar';
import StatusTag from "../components/StatusTag";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


export default function Applications() {
    const applicationsArr = apiRes.body;

    const [anchorEl, setAnchorEl] = useState(null);

    function handleClose() {
        setAnchorEl(null);
    }

    function handleView(id) {
        handleClose();
    }

    function handleEdit(id) {
        handleClose();

    }

    function handleDelete(id) {
        handleClose();

    }


    return (
        <main className="Applications ">
            <Navbar />
            <section className="ContentContainer">
                <h1 className="UserPageTitle">My Applications</h1>

                <article className="TableContainer">
                    <table className="ApplicationTbl">
                        <thead>
                            <tr>
                                <th>Pet</th>
                                <th>Shelter</th>
                                <th>Applied On</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicationsArr.map((app, index) => (
                                <tr key={app.adoptionId || index}>
                                    <td>
                                        <div className="PetCell">
                                            <Avatar className="Avatar" alt={`Avatar of ${app.pet.name}`} src={app.pet.imageUrl} /> {app.pet.name}
                                        </div>
                                    </td>
                                    <td>{app.pet.shelter.shelterName}</td>
                                    <td>
                                        {new Date(app.createdAt * 1000).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        })}
                                    </td>
                                    <td><StatusTag status={app.status} /></td>
                                    <td>
                                        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            slotProps={{
                                                paper: {
                                                    elevation: 1,
                                                    sx: {
                                                        "& .MuiMenuItem-root": {
                                                            fontSize: "0.875rem",
                                                            minHeight: "32px",
                                                        },
                                                        "& .MuiListItemIcon-root": {
                                                            fontSize: "18px",
                                                            minWidth: "32px",
                                                        },
                                                    },
                                                },
                                            }}
                                        >
                                            <MenuItem onClick={() => handleView(app.adoptionId)}>
                                                <ListItemIcon>
                                                    <VisibilityIcon fontSize="small" />
                                                </ListItemIcon>
                                                View
                                            </MenuItem>
                                            <MenuItem onClick={() => handleEdit(app.adoptionId)}>
                                                <ListItemIcon>
                                                    <EditIcon fontSize="small" />
                                                </ListItemIcon>
                                                Edit
                                            </MenuItem>
                                            <MenuItem onClick={() => handleDelete(app.adoptionId)}>
                                                <ListItemIcon>
                                                    <DeleteIcon fontSize="small" />
                                                </ListItemIcon>
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </section>
            <Footer />
        </main >
    )
}