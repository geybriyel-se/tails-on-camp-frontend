import '../styles/LoginForm.css'
import logo from '../assets/logo.svg'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import FormSection from './FormSection';

export default function LoginForm({ toggleThemeFunc, theme, fields }) {

    const [formData, setFormData] = useState({ username: "", password: "" });

    function handleChange(evt) {
        setFormData(data => {
            return {
                ...data,
                [evt.target.name]: evt.target.value
            }
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formData);
        setFormData({ username: "", password: "" });
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
            >
                Login
            </Button>

            <FormFooter texts={texts} links={links} clickFuncs={clickFuncs} toggles={toggles} />
        </form>
    )
}