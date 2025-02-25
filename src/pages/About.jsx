import '../styles/About.css'
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import OneColumn from '../components/page-sections/OneColumn'
import { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Team1 from '../assets/team-1.svg'
import Team2 from '../assets/team-2.svg'
import Team3 from '../assets/team-3.svg'
import Team4 from '../assets/team-4.svg'
import Team5 from '../assets/team-5.svg'
import Story from '../assets/story.mp4'
import Divider from '../assets/divider-3.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function About() {
    /* 
    *   Adding class when section is active
    */
    
    const [activeSection, setActiveSection] = useState("");
    
    useEffect(() => {
        const sections = [...document.querySelectorAll("section")].filter(section => section.id !== "")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -48% 0px",
                threshold: 0.3
            }
        );

        sections.forEach(s => observer.observe(s));

        return () => {
            sections.forEach((s) => observer.unobserve(s));
        };

    }, []);


    /* 
    *   Allow shrinking only when Page Banner is no longer visible
    */
    
    const [startShrink, setStartShrink] = useState(false);

    useEffect(() => {
        const banner = document.querySelector("#AboutBanner");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        setStartShrink(true);
                    } else {
                        setStartShrink(false);
                    }
                });
            },
            {
                threshold: 0.65
            }
        );

        observer.observe(banner);
        return () => {
            if (banner) observer.unobserve(banner);
        };

    }, []);


    /* 
    *   Shrink on scroll only if shrinking is allowed
    */
    
    const [isShrunk, setIsShrunk] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (!startShrink) {
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsShrunk(currentScrollY > lastScrollY.current);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [startShrink]);

    return (
        <div className="About">
            <Navbar />
            <PageBanner
                title="ABOUT US"
                description={"Get to know Tails on Camp—who we are, and our passion for animal welfare."}
                background="#5BC0EB"
                id='AboutBanner'
            />

            <div className="PageContent">
                <main className="Main">
                    <video controls width="100%">
                        <source src={Story} type="video/mp4" />
                    </video>
                    <OneColumn
                        title={"Our Story"}
                        paragraph={[
                            "Tails on Camp began with a simple yet powerful goal: to give every stray and abandoned pet a second chance at a loving home. What started as a small initiative among animal lovers has grown into a thriving pet adoption community. We rescue, rehabilitate, and rehome animals, ensuring they receive the care and attention they deserve.",
                            <br key={uuid()} />,
                            <br key={uuid()} />,
                            "Our journey is fueled by compassion and a belief that every tail deserves to wag happily. Over the years, we’ve helped countless pets find their forever families, and we continue to work tirelessly to connect more animals with people who will cherish them."
                        ]}
                        id='Story'
                        className='DefaultSection'
                    />

                    <img src={Divider} alt="Page divider" className='Divider' />

                    <section id="MissionVision">
                        <OneColumn
                            title={"Mission"}
                            subtitle='Every stray has a story—we help them find their happy ending.'
                            paragraph={[
                                "Behind every stray animal is a journey of survival, resilience, and hope. At Tails on Camp, we believe every pet deserves a chance at a loving home, where their story can turn from struggle to happiness. Through rescue, rehabilitation, and responsible adoption, we help these animals find families that will cherish them forever. Because every tail deserves a happy ending.",
                            ]}
                            className='DefaultSection'
                        />
                        <OneColumn
                            title={"Vision"}
                            subtitle='A world where kindness isn’t just a word, but a promise to every stray in need.'
                            paragraph={[
                                "We believe kindness should be more than just a word—it should be a commitment. At Tails on Camp, we dedicate ourselves to rescuing, rehabilitating, and rehoming stray animals, ensuring they receive the love, care, and second chances they deserve. Through community efforts, responsible adoption, and unwavering compassion, we turn kindness into action—one stray at a time.",
                            ]}
                            className='DefaultSection'
                        />
                    </section>

                    <img src={Divider} alt="Page divider" className='Divider' />

                    <section id="Team" className='DefaultSection TeamSection'>
                        <h2 className="SectionTitle">Meet the Team</h2>
                        <article className='TeamGrid'>
                            <figure className="Member">
                                <img src={Team1} alt="Team member 1" />
                                <p className="Role">Founder, Director</p>
                            </figure>
                            <figure className="Member">
                                <img src={Team2} alt="Team member 2" />
                                <p className="Role">Adoption Coordinator</p>
                            </figure>
                            <figure className="Member">
                                <img src={Team3} alt="Team member 3" />
                                <p className="Role">Veterinary Partner</p>
                            </figure>
                            <figure className="Member">
                                <img src={Team4} alt="Team member 4" />
                                <p className="Role">Volutneer Coordinator</p>
                            </figure>
                            <figure className="Member">
                                <img src={Team5} alt="Team member 5" />
                                <p className="Role">Social Media and Outreachr</p>
                            </figure>
                        </article>
                    </section>
                </main>

                <aside className="NavContainer">
                    <nav className={`SectionsNav ${isShrunk ? "shrink" : ""}`}>
                        <ul>
                            <div className="Line"></div>
                            <li className={`NavItem ${activeSection === "Story" ? "NavActive" : ""}`}>
                                <div className="Bullet"></div>
                                <AnchorLink href="#Story" onClick={() => setActiveSection("Story")} className='AnchorLink'>
                                    Our Story
                                </AnchorLink>
                            </li>
                            <li className={`NavItem ${activeSection === "MissionVision" ? "NavActive" : ""}`}>
                                <div className="Bullet"></div>
                                <AnchorLink href="#MissionVision" onClick={() => setActiveSection("MissionVision")} className='AnchorLink'>
                                    Mission & Vision
                                </AnchorLink>
                            </li>
                            <li className={`NavItem ${activeSection === "Team" ? "NavActive" : ""}`}>
                                <div className="Bullet"></div>
                                <AnchorLink href="#Team" onClick={() => setActiveSection("Team")} className='AnchorLink'>
                                    Meet the Team
                                </AnchorLink>
                            </li>
                            <li className={`NavItem ${activeSection === "Stories" ? "NavActive" : ""}`}>
                                <div className="Bullet"></div>
                                <AnchorLink href="#Stories" onClick={() => setActiveSection("Stories")} className='AnchorLink'>
                                    Success Stories
                                </AnchorLink>
                            </li>
                            <li className={`NavItem ${activeSection === "HowWeWork" ? "NavActive" : ""}`}>
                                <div className="Bullet"></div>
                                <AnchorLink href="#HowWeWork" onClick={() => setActiveSection("HowWeWork")} className='AnchorLink'>
                                    How We Work
                                </AnchorLink>
                            </li>
                            <li className={`NavItem ${activeSection === "FAQs" ? "NavActive" : ""}`}>
                                <div className="Bullet"></div>
                                <AnchorLink href="#FAQs" onClick={() => setActiveSection("FAQs")} className='AnchorLink'>
                                    FAQs
                                </AnchorLink>
                            </li>
                            <li className={`NavItem ${activeSection === "Involve" ? "NavActive" : ""}`}>
                                <div className="Bullet"></div>
                                <AnchorLink href="#Involve" onClick={() => setActiveSection("Involve")} className='AnchorLink'>
                                    Get Involved
                                </AnchorLink>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    )
}