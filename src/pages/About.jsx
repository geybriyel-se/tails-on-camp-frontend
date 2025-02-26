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
import Story1 from '../assets/story-1.png'
import Story2 from '../assets/story-2.png'
import Story3 from '../assets/story-3.png'
import Story4 from '../assets/story-4.png'
import Story5 from '../assets/story-5.png'
import SpotlightCarousel from '../components/SpotlightCarousel';
import Footer from '../components/Footer'

const successStories = [
    {
        key: uuid(),
        name: "BELLA",
        challenge: "Bella was found wandering the streets, skinny and scared, searching for scraps of food. She was wary of people, having likely faced neglect or mistreatment.",
        response: "Our team rescued Bella, providing her with proper nutrition, medical care, and a safe space to heal. Slowly, she learned to trust again through gentle interresponses and patient training.",
        outcome: "After weeks of care and rehabilitation, Bella found a loving family that showers her with affection. She now enjoys cozy naps on soft beds and endless belly rubs, far from the harsh life she once knew.",
        imgSrc: Story1,
    },
    {
        key: uuid(),
        name: "LILA, LUCKY, and LEO",
        challenge: "A kind-hearted passerby spotted a cardboard box near a busy highway. Inside were five tiny newborn kittens, crying for their mother. Without immediate help, they wouldn’t survive.",
        response: "With the support of donations, we bottle-fed them, kept them warm, and gave them the medical care they needed. As they grew stronger, their playful personalities emerged.",
        outcome: "One by one, they found their forever homes. Now, all five have been adopted into loving families, turning a heartbreaking start into a happy ending, thanks to the support of our amazing community.",
        imgSrc: Story2,
    },
    {
        key: uuid(),
        name: "SHADOW",
        challenge: "When a powerful typhoon hit, Shadow was left behind as floodwaters rose. Stranded on a rooftop for days, he survived on rainwater and scraps until rescuers arrived.",
        response: "Our team rescued Shadow just in time, providing him with food, shelter, and medical attention. At first, he was anxious and withdrawn, but with love and patience, he slowly regained his trust in people.",
        outcome: "Shadow is now thriving in his loving forever home, surrounded by a family that will never leave him behind again. His resilience is an inspiration to everyone who meets him.",
        imgSrc: Story3,
    },
    {
        key: uuid(),
        name: "WHISKERS",
        challenge: "Whiskers was just a tiny kitten when he was found shivering under a parked car, dangerously close to traffic. Weak and hungry, he wouldn’t have survived much longer without help.",
        response: "Whiskers was bottle-fed, nursed back to health, and given a warm, safe space to grow. His once frail body became strong, and his playful nature began to shine.",
        outcome: "Now a confident and loving cat, Whiskers has been adopted into a home where he spends his days cuddling and chasing toy mice. He went from a lonely street kitten to a cherished family member.",
        imgSrc: Story4,
    },
    {
        key: uuid(),
        name: "MILO",
        challenge: "Milo was rescued in critical condition—weak, malnourished, and suffering from severe mange. His fur was almost gone, and he had wounds from living on the streets for too long. Without urgent care, he wouldn’t have survived.",
        response: "Thanks to generous donations, Milo received life-saving veterinary treatment, proper nutrition, and daily medicated baths. Slowly, his fur grew back, and his playful personality emerged.",
        outcome: "Today, Milo is a happy, healthy dog full of energy! He’s ready for adoption and looking for a family to give him the second chance he deserves.",
        imgSrc: Story5,
    }
]

export default function About() {
    /* 
    *   FOR SECTION NAV
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
    *   FOR SECTION NAV
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
    *   FOR SECTION NAV
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
                                "We believe kindness should be more than just a word—it should be a commitment. At Tails on Camp, we dedicate ourselves to rescuing, rehabilitating, and rehoming stray animals, ensuring they receive the love, care, and second chances they deserve. Through community efforts, responsible adoption, and unwavering compassion, we turn kindness into response—one stray at a time.",
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
                                <p className="Role">Social Media and Outreach</p>
                            </figure>
                        </article>
                    </section>

                    <img src={Divider} alt="Page divider" className='Divider' />
                    
                    <section className="DefaultSection Success" id='Success'>
                        <h2 className="SectionTitle">Success Stories</h2>
                        <div className="StoriesWrapper">
                            <SpotlightCarousel
                                articles={successStories}
                                className='StoriesCarousel'
                            />
                        </div>
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
            <Footer />
        </div>
    )
}

