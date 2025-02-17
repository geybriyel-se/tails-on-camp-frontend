import FormHeader from "./FormHeader"
import FormFooter from "./FormFooter"
import FormSection from "./FormSection";
import '../styles/RegisterForm.css'
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function RegisterForm({ toggleThemeFunc, theme, sections }) {
    const texts = ["Already have an account? "];
    const links = [
        {
            text: "Login here",
            src: "/"
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
    const [formData, setFormData] = useState({ email: "", username: "", password: "", confirmPassword: "" });

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
        setFormData({ email: "", username: "", password: "", confirmPassword: "" });
    }


    const userInfoSection = sections.userInfo.map((field) => (
        <TextField
            key={field.name}
            variant="outlined"
            size="small"
            fullWidth
            label={field.label}
            className="TextField"
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
        />
    ));

    const shelterInfoSection = sections.shelterInfo.map((field) => (
        <TextField
            key={field.name}
            variant="outlined"
            size="small"
            label={field.label}
            className="TextField"
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
        />
    ));



    const shelterAddressSection = sections.shelterAddress.map((field) => (
        <TextField
            key={field.name}
            variant="outlined"
            size="small"
            label={field.label}
            className="TextField"
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
        />
    ));

    return (
        <form className="RegisterForm" onSubmit={handleSubmit}>
            <FormHeader
                title='Create a new account'
                subtitle='Join now, and make a difference'
                hasBanner={theme}
            />

            {theme && <FormSection fields={shelterInfoSection} className="ShelterInfoSection" sectionName="Shelter Information"/>}
            {theme && <FormSection fields={shelterAddressSection} className="ShelterAddressSection" sectionName="Shelter Address"/>}
            {!theme && <FormSection fields={userInfoSection} className="UserInfoSection" />}

            <Button
                variant='contained'
                className='BtnForm'
                fullWidth
                size='large'
                type='submit'
            >
                REGISTER
            </Button>
            <FormFooter texts={texts} links={links} clickFuncs={clickFuncs} toggles={toggles} />
        </form>
    )
}