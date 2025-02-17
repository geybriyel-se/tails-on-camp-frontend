import '../styles/Volunteer.css'
import ImageCard from "../components/ImageCard";
import Navbar from "../components/Navbar";
import MediaGrid from "../components/page-sections/MediaGrid";
import PageBanner from "../components/PageBanner";
import { v4 as uuid } from 'uuid';
import Pic1 from '../assets/grid-1.svg'
import Pic2 from '../assets/grid-2.svg'
import Pic3 from '../assets/grid-3.svg'
import Pic4 from '../assets/grid-4.svg'
import Pic5 from '../assets/grid-5.svg'
import Pic6 from '../assets/grid-6.svg'
import Pic7 from '../assets/grid-7.svg'
import Pic8 from '../assets/grid-8.svg'
import Pic9 from '../assets/grid-9.svg'
import Pic10 from '../assets/grid-10.svg'
import Pic11 from '../assets/grid-11.svg'
import Pic12 from '../assets/grid-12.svg'
import Pic13 from '../assets/grid-13.svg'
import Pic14 from '../assets/grid-14.svg'
import Footer from '../components/Footer';


const images = [
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic1 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic2 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic3 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic4 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic5 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic6 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic7 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic8 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic9 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic10 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic11 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic12 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic13 },
    { id: uuid(), url: "/", title: "Some title here", paragraph: "This is the time when something happened.", image: Pic14 },
]

export default function Volunteer() {

    return (
        <div className="Volunteer">
            <Navbar />
            <PageBanner
                title="BE A VOLUNTEER"
                description="Your time and compassion is welcome! Join us, and create meaningful memories with our Tails on Camp."
                background="#5BC0EB"
            />

            <MediaGrid className="EventsGrid" objArr={
                images.map((image, i) => (
                    <ImageCard
                        key={image.id}
                        imgSrc={image.image}
                        paragraph={image.paragraph}
                        url={image.url}
                        className={`image-${i}`}
                    />
                ))
            } />

            <Footer />
        </div>
    )
}