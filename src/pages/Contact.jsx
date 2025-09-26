import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import TwoColumns from '../components/page-sections/TwoColumns';
import OneColumn from '../components/page-sections/OneColumn';
import { v4 as uuid } from 'uuid';
import { Button, TextField, MenuItem, IconButton, Box } from '@mui/material'
import { useState } from "react";
import '../styles/Contact.css'
import MapEmbed from "../components/MapEmbed";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";



export default function Contact() {

    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
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
        setFormData({ name: "", email: "", subject: "", message: "" });
    }


    const subjects = [
        { label: 'General Inquiry', value: 'general' },
        { label: 'Adoption Question', value: 'adoption' },
        { label: 'Volunteering', value: 'volunteering' },
        { label: 'Donations', value: 'donation' },
        { label: 'Events', value: 'events' },
        { label: 'Others', value: 'others' },
    ]


    return (
        <div className="Contact">
            <Navbar />
            <PageBanner
                title="CONTACT US"
                description="Got questions about adoption, volunteering, or our shelters? We’d love to hear from you!"
                background="#5BC0EB"
            />
            <TwoColumns
                className='FormSection'
                titleL="Have a question or feedback?"
                subtitleL="GET IN TOUCH"
                childrenL={[
                    "We're all ears (and tails)! Drop us a message and our team will respond as quickly as possible.",
                    <hr
                        key={uuid()}
                        style={{
                            border: "none",
                            borderTop: "4px solid #5BC0EB",
                            margin: "50px 0",
                            marginBottom: "0",
                            width: "20%"
                        }}
                    />
                ]}
                childrenR={[
                    <form key="ContactUs-Form" onSubmit={handleSubmit}>
                        <div className="TextField-ContactUs-Box">
                            <TextField
                                variant="filled"
                                label='Name'
                                className={`TextField-ContactUs-Name`}
                                name='name'
                                type='text'
                                value={formData["name"]}
                                onChange={handleChange}
                                margin="dense"
                                fullWidth
                            />
                            <TextField
                                variant="filled"
                                label='Email'
                                className={`TextField-ContactUs-email`}
                                name='email'
                                type='email'
                                value={formData["email"]}
                                onChange={handleChange}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <TextField
                            variant="filled"
                            label='Subject'
                            className={`TextField-ContactUs-Subject`}
                            name='subject'
                            select
                            helperText='Please select the topic of your concern'
                            value={formData["subject"]}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        >
                            {subjects.map((subject) => (
                                <MenuItem key={subject.value} value={subject.value}>
                                    {subject.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            variant="filled"
                            label='Message'
                            className={`TextField-ContactUs-Message`}
                            name='message'
                            multiline
                            rows={5}
                            value={formData["message"]}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <Button
                            variant='contained'
                            className={`TextField-ContactUs-Submit`}
                            fullWidth
                            size='large'
                            type='submit'
                            sx={{
                                mt: 2
                            }}
                        >
                            SUBMIT
                        </Button>
                    </form>

                ]}
            >
            </TwoColumns>

            <TwoColumns
                className="DetailsSection"
                childrenL={[<MapEmbed key={uuid()} />]}
                titleR="We're here to help"
                subtitleR="LOCATION"
                childrenR={[
                    <div className="ContactDetails Contact-Location" key={uuid()}>
                        <LocationOnIcon sx={{ color: "#5BC0EB" }} />
                        Tails On Camp HQ, Philippines
                    </div>,
                    <div className="ContactDetails Contact-Location" key={uuid()}>
                        <EmailIcon sx={{ color: "#5BC0EB" }} />
                        support@tailsoncamp.com
                    </div>,
                    <div className="ContactDetails Contact-Location" key={uuid()}>
                        <PhoneIcon sx={{ color: "#5BC0EB" }} />
                        +63 912 345 6789
                    </div>
                ]}
            >
            </TwoColumns>


            <OneColumn className="SocialNetworkSection" title="Follow our official social network">
                <section className="LogoArrayContainer">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <figure className="LogoContainer">
                            <FacebookIcon className="LogoIcon" />
                        </figure>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <figure className="LogoContainer">
                            <InstagramIcon className="LogoIcon" />
                        </figure>
                    </a>

                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <figure className="LogoContainer">
                            <TwitterIcon className="LogoIcon" />
                        </figure>
                    </a>

                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <figure className="LogoContainer">
                            <YouTubeIcon className="LogoIcon" />
                        </figure>
                    </a>
                </section>
            </OneColumn>

            <Footer />
        </div >
    )
}