import '../styles/About.css'
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import OneColumn from '../components/page-sections/OneColumn'
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Team1 from '../assets/team-1.svg'
import Team2 from '../assets/team-2.svg'
import Team3 from '../assets/team-3.svg'
import Team4 from '../assets/team-4.svg'
import Team5 from '../assets/team-5.svg'

export default function About() {
    const [activeSection, setActiveSection] = useState("Story");

    useEffect(() => {
        const navbarHeight = document.querySelector(".Navbar")?.offsetHeight || 80; // Default to 80px
        const sections = document.querySelectorAll("section");
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: `-${navbarHeight}px 0px 0px 0px`, // Offset by navbar height
                threshold: 0.1, // Detect even small sections early
            }
        );
    
        sections.forEach((section) => observer.observe(section));
    
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);


    return (
        <div className="About">
            <Navbar />
            <PageBanner
                title="About Us"
                description={"Get to know Tails on Camp—who we are, and our passion for animal welfare."}
                background="#5BC0EB"
            />

            <div className="PageContent">
                <main className="Main">
                    <OneColumn
                        title={"Our Story"}
                        paragraph={[
                            <p key={uuid()}>Tails on Camp began with a simple yet powerful goal: to give every stray and abandoned pet a second chance at a loving home. What started as a small initiative among animal lovers has grown into a thriving pet adoption community. We rescue, rehabilitate, and rehome animals, ensuring they receive the care and attention they deserve.</p>,
                            <p key={uuid()}>Our journey is fueled by compassion and a belief that every tail deserves to wag happily. Over the years, we’ve helped countless pets find their forever families, and we continue to work tirelessly to connect more animals with people who will cherish them.</p>
                        ]}
                        id='Story'
                        className='DefaultSection'
                    />
                    <article id="MissionVision">
                        <OneColumn
                            title={"Mission"}
                            subtitle='Every stray has a story—we help them find their happy ending.'
                            paragraph={[
                                <p key={uuid()}>Behind every stray animal is a journey of survival, resilience, and hope. At Tails on Camp, we believe every pet deserves a chance at a loving home, where their story can turn from struggle to happiness. Through rescue, rehabilitation, and responsible adoption, we help these animals find families that will cherish them forever. Because every tail deserves a happy ending.</p>,
                            ]}
                            className='DefaultSection'
                        />
                        <OneColumn
                            title={"Vision"}
                            subtitle='A world where kindness isn’t just a word, but a promise to every stray in need.'
                            paragraph={[
                                <p key={uuid()}>We believe kindness should be more than just a word—it should be a commitment. At Tails on Camp, we dedicate ourselves to rescuing, rehabilitating, and rehoming stray animals, ensuring they receive the love, care, and second chances they deserve. Through community efforts, responsible adoption, and unwavering compassion, we turn kindness into action—one stray at a time.</p>,
                            ]}
                            className='DefaultSection'
                        />
                    </article>

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

                <nav className="SectionsNav">
                    <ul>
                        <div className="Line"></div>
                        <li className={`NavItem ${activeSection === "Story" ? "NavActive" : ""}`}>
                            <div className="Bullet"></div>
                            <a href="#Story">Our Story</a>
                        </li>
                        <li className={`NavItem ${activeSection === "Mission" ? "NavActive" : ""}`}>
                            <div className="Bullet"></div>
                            <a href="#MissionVision">Mission & Vision</a>
                        </li>
                        <li className={`NavItem ${activeSection === "Team" ? "NavActive" : ""}`}>
                            <div className="Bullet"></div>
                            <a href="#Team">Meet the Team</a>
                        </li>
                        <li className={`NavItem ${activeSection === "Stories" ? "NavActive" : ""}`}>
                            <div className="Bullet"></div>
                            <a href="#Stories">Success Stories</a>
                        </li>
                        <li className={`NavItem ${activeSection === "HowWeWork" ? "NavActive" : ""}`}>
                            <div className="Bullet"></div>
                            <a href="#HowWeWork">How We Work</a>
                        </li>
                        <li className={`NavItem ${activeSection === "FAQs" ? "NavActive" : ""}`}>
                            <div className="Bullet"></div>
                            <a href="#FAQs">FAQs</a>
                        </li>
                        <li className={`NavItem ${activeSection === "Involve" ? "NavActive" : ""}`}>
                            <div className="Bullet"></div>
                            <a href="#Involve">Get Involved</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}