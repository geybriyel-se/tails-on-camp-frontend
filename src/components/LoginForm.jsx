import '../styles/LoginForm.css'
import logo from '../assets/logo.svg'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import FormSection from './FormSection';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SkeletonHome from './skeleton/SkeletonHome';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export default function LoginForm({ toggleThemeFunc, theme, fields }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ username: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(evt) {
        setFormData(data => {
            return {
                ...data,
                [evt.target.name]: evt.target.value
            }
        });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();

        await login();
        setFormData({ username: "", password: "" });
    }


    async function login() {
        setIsLoading(true);
        let data = JSON.stringify({
            "username": formData.username,
            "password": formData.password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            // url: `${apiBaseUrl}/login`,
            url: `http://localhost:8080/api/v1/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            if (response.status === 200) {
                navigate("/home");
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
    }




    // for form fields
    const inputs = fields.map((field) => (
        <TextField
            key={field.name}
            variant="outlined"
            label={field.label}
            fullWidth
            className="TextField"
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            disabled={isLoading}
        />
    ));

    // for form footer 
    const texts = ["Don't have an account? "];
    const links = [
        {
            text: "Join now",
            src: "/register"
        }
    ];
    const clickFuncs = [toggleThemeFunc]
    const toggles = [
        {
            condition: theme,
            true: "I am an adopter",
            false: "I am a shelter owner"
        }
    ]



    return (
        <>
            {isLoading ? <SkeletonHome /> :
                <form className="LoginForm" onSubmit={handleSubmit}>
                    <FormHeader
                        imgSrc={logo}
                        imgAlt="Tails on Camp logo"
                        title='Welcome'
                        subtitle='Enter your credentials to login'
                        hasBanner={theme}
                    />

                    <FormSection fields={inputs} />

                    <Button
                        variant='contained'
                        className='BtnForm'
                        fullWidth
                        size='large'
                        type='submit'
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>

                    <FormFooter texts={texts} links={links} clickFuncs={clickFuncs} toggles={toggles} />
                </form>
            }
        </>
    )
}