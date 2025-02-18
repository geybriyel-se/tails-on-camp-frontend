import '../styles/Footer.css'
import line from '../assets/line.svg'
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <footer className="Footer">
            <main>
                <section className="LinksContainer">
                    <img className="LineDecor" src={line} />
                    <article className='FooterSection'>
                        <p className="SectionTitle">HOW TO HELP</p>
                        <p className='SectionItem'><Link to="/adopt">Adoption</Link></p>
                        <p className='SectionItem'><Link to="/donate">Donate</Link></p>
                        <p className='SectionItem'><Link to="/volunteer">Volunteer</Link></p>
                    </article>
                    <article className='FooterSection'>
                        <p className="SectionTitle">ABOUT US</p>
                        <p className='SectionItem'><Link to="/about">Our Story</Link></p>
                        <p className='SectionItem'><Link to="/about">Mission & Values</Link></p>
                        <p className='SectionItem'><Link to="/contact">Contact Us</Link></p>
                    </article>
                    <article className='FooterSection'>
                        <p className="SectionTitle">RESOURCES</p>
                        <p className='SectionItem'><Link to="/about">FAQs</Link></p>
                        <p className='SectionItem'><Link to="/bulletin">Success Stories</Link></p>
                    </article>
                </section>
                <section className="FormContainer">
                    <form action="" className='FormFooter'>
                        <div className="CircleContainer">
                            <div className="Circle"></div>
                            <div className="Circle"></div>
                        </div>
                        <p className="FormTitle">Stay updated with our newsletter!</p>
                        <input type='text' placeholder='Name' name='name' className='InputName' />
                        <input type='text' placeholder='Email address' name='email' className='InputEmail' />
                        <button type='submit' className='BtnFormFooter'>Submit</button>
                    </form>
                </section>
            </main>
            <section className="Fence">
            </section>
        </footer>
    )
}