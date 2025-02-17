import { useState } from "react";
import { Snackbar } from '@mui/material';
import BrandName from "../components/BrandName";
import LoginForm from "../components/LoginForm";
import '../styles/Login.css';
import Themes from "../constants/Themes";

// for form fields
const fields = [
    { label: 'Username', name: 'username', type: 'text' },
    { label: 'Password', name: 'password', type: 'password' }
];


export default function Login({ theme, toggleThemeFunc, snackbar, closeFunc }) {
    return (
        <div className="Login" style={{ backgroundColor: theme ? Themes.SHELTER.BACKGROUND_COLOR : Themes.DEFAULT.BACKGROUND_COLOR }}>
            <Snackbar
                message={theme ? Themes.SHELTER.LOGIN_MESSAGE : Themes.DEFAULT.LOGIN_MESSAGE}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbar}
                onClose={closeFunc}
                autoHideDuration={5000}
            />
            <BrandName />
            <LoginForm toggleThemeFunc={toggleThemeFunc} theme={theme} fields={fields} />
        </div>
    );
}

