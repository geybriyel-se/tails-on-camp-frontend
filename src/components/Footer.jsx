import '../styles/Footer.css'
import line from '../assets/line.svg'

export default function Footer() {

    return (
        <footer className="Footer">
            <main>
                <section className="LinksContainer">
                    <img className="LineDecor" src={line} />
                    <article className='FooterSection'>
                        <p className="SectionTitle">HOW TO HELP</p>
                        <p className='SectionItem'><a href="/adopt">Adoption</a></p>
                        <p className='SectionItem'><a href="/contact">Donate</a></p>
                        <p className='SectionItem'><a href="/contact">Volunteer</a></p>
                    </article>
                    <article className='FooterSection'>
                        <p className="SectionTitle">ABOUT US</p>
                        <p className='SectionItem'><a href="/about">Our Story</a></p>
                        <p className='SectionItem'><a href="/about">Mission & Values</a></p>
                        <p className='SectionItem'><a href="/about">Contact Us</a></p>
                    </article>
                    <article className='FooterSection'>
                        <p className="SectionTitle">RESOURCES</p>
                        <p className='SectionItem'><a href="/about">FAQs</a></p>
                        <p className='SectionItem'><a href="/about">Success Stories</a></p>
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