import '../styles/Volunteer.css'
import ImageCard from "../components/ImageCard";
import Navbar from "../components/Navbar";
import MediaGrid from "../components/page-sections/MediaGrid";
import PageBanner from "../components/PageBanner";
import { v4 as uuid } from 'uuid';
import Carousel from "../components/Carousel"
import ArticleCard from "../components/ArticleCard"
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
import Profile1 from '../assets/profile-1.svg'
import Profile2 from '../assets/profile-2.svg'
import Profile3 from '../assets/profile-3.svg'
import Profile4 from '../assets/profile-4.svg'
import Profile5 from '../assets/profile-5.svg'
import Profile6 from '../assets/profile-6.svg'
import BannerBackground from '../assets/volunteer-background.svg'
import Event1 from '../assets/event-1.png'
import Event2 from '../assets/event-2.png'
import Event3 from '../assets/event-3.png'
import BtnOutlined from '../components/BtnOutlined';
import { useNavigate } from 'react-router-dom';
import OneColumn from '../components/page-sections/OneColumn'
import BannerBtn from '../components/BannerBtn';

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

const testimonies = [
    <article className="ArticleContainer" key={uuid()}>
        <img src={Profile1} alt="Samantha's picture" className="ProfilePic" />
        <ArticleCard
            title={"SAMANTHA"}
            paragraph={"Helping feed stray animals was such a heartwarming experience. Seeing them wag their tails and approach us with trust made me realize how small acts of kindness can mean the world to them. I’ll definitely be volunteering again!"}
        />
    </article>,
    <article className="ArticleContainer" key={uuid()}>
        <img src={Profile2} alt="Jake's picture" className="ProfilePic" />
        <ArticleCard
            title={"JAKE"}
            paragraph={"Spending the day grooming and caring for shelter animals was both fun and fulfilling. It’s amazing how a simple bath and a little love can bring out their playful personalities. I highly recommend volunteering—it’s an experience you won’t forget!"}
        />
    </article>,
    <article className="ArticleContainer" key={uuid()}>
        <img src={Profile3} alt="Melissa's picture" className="ProfilePic" />
        <ArticleCard
            title={"MELISSA"}
            paragraph={"Helping out at an adoption event and seeing pets find their forever homes was an unforgettable experience. The joy on both the adopters’ and pets’ faces was priceless. I’m proud to be part of something that truly changes lives!"}
        />
    </article>,
    <article className="ArticleContainer" key={uuid()}>
        <img src={Profile4} alt="Daniel's picture" className="ProfilePic" />
        <ArticleCard
            title={"DANIEL"}
            paragraph={"Seeing a stray dog go from scared and malnourished to healthy and happy after weeks of care was incredible. Volunteering here has shown me that every animal deserves a second chance, and I’m grateful to be part of their journey"}
        />
    </article>,
    <article className="ArticleContainer" key={uuid()}>
        <img src={Profile5} alt="Lara's picture" className="ProfilePic" />
        <ArticleCard
            title={"LARA"}
            paragraph={"Spending time playing with the shelter dogs and cats was the highlight of my week! Many of them just need love and attention while waiting for their forever homes. It’s rewarding to know that even small efforts can help prepare them for adoption."}
        />
    </article>,
    <article className="ArticleContainer" key={uuid()}>
        <img src={Profile6} alt="Chris' picture" className="ProfilePic" />
        <ArticleCard
            title={"CHRIS"}
            paragraph={"Educating the community about responsible pet ownership was an eye-opening experience. Many people don’t realize the impact of adoption and proper care. I’m glad to help spread awareness and make a difference for these animals!"}
        />
    </article>,
]

const bannerStyles = {
    backgroundImage: `url(${BannerBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const upcomingEvents = [
    <ArticleCard
        key={uuid()}
        className={"EventCard"}
        isLandscape
        imgSrc={Event1}
        imgAlt='Pet adoption fair'
        title='Pet Adoption Fair'
        subtitle={[
            "📍 Bonifacio High Street, Taguig City",
            <br key={uuid()} />,
            "️🕐 10:00 AM – 4:00 PM"
        ]}
        paragraph='Help connect rescue pets with loving homes! Volunteers assist in setting up booths, guiding adopters, and caring for pets during the event.'
        divider
        buttonName='Join the Fair →'
        url='/'
        highlight={[
            <p className="Month" key={uuid()}>MAR</p>,
            <hr key={uuid()} />,
            <h2 className="Date" key={uuid()}>25</h2>
        ]}
    />,
    <ArticleCard
        key={uuid()}
        className={"EventCard"}
        isLandscape
        imgSrc={Event2}
        imgAlt='Shelter clean-up'
        title='Shelter Clean-Up Day'
        subtitle={[
            "📍 PAWS Animal Shelter, Quezon City",
            <br key={uuid()} />,
            "️🕐 9:00 AM – 12:00 PM"
        ]}
        paragraph='Support our rescue center by lending a helping hand! Assist with cleaning kennels, organizing food, and creating a comfortable environment for our rescued pets. Spend quality time socializing with the animals while they wait for their forever homes.'
        divider
        buttonName='Join the Clean-Up →'
        url='/'
        highlight={[
            <p className="Month" key={uuid()}>APR</p>,
            <hr key={uuid()} />,
            <h2 className="Date" key={uuid()}>07</h2>
        ]}
    />,
    <ArticleCard
        key={uuid()}
        className={"EventCard"}
        isLandscape
        imgSrc={Event3}
        imgAlt='Stray Feeding Drive'
        title='Stray Feeding Drive'
        subtitle={[
            "📍 Rizal Park, Manila",
            <br key={uuid()} />,
            "️🕐 8:00 AM – 12:00 PM"
        ]}
        paragraph='Join us in providing meals to stray animals in need! Volunteers will help distribute food, refill water stations, and spread awareness about responsible pet care.'
        divider
        buttonName='Join the Feeding Drive →'
        url='/'
        highlight={[
            <p className="Month" key={uuid()}>MAY</p>,
            <hr key={uuid()} />,
            <h2 className="Date" key={uuid()}>19</h2>
        ]}
    />,
]

export default function Volunteer() {

    const navigate = useNavigate();

    return (
        <div className="Volunteer">
            <Navbar />
            <PageBanner
                title="BE A VOLUNTEER"
                description="Your time and compassion is welcome! Join us, and create meaningful memories with our Tails on Camp."
                cssStyles={bannerStyles}
            />

            <section className="NumbersContainer">
                <main className="Content">
                    <div className="Number">
                        <h1 className="Title">18</h1>
                        <p className="Description">impact-driven <br />events organized</p>
                    </div>
                    <div className="Number">
                        <h1 className="Title">76</h1>
                        <p className="Description">dedicated <br />volunteers</p>
                    </div>
                    <div className="Number">
                        <h1 className="Title">132</h1>
                        <p className="Description">tails rescued from <br />the streets</p>
                    </div>
                    <div className="Number">
                        <h1 className="Title">45</h1>
                        <p className="Description">adoption matches <br />during our events</p>
                    </div>
                </main>
            </section>

            <MediaGrid className="EventsGrid"
                title='Our Volunteers in Action'
                objArr={
                    images.map((image, i) => (
                        <ImageCard
                            key={image.id}
                            imgSrc={image.image}
                            paragraph={image.paragraph}
                            url={image.url}
                            className={`image-${i}`}
                        />
                    ))
                }
            />

            <section className="TestimonialSection">
                <Carousel
                    title={"TESTIMONIAL"}
                    subtitle={"What the volunteers in our community say"}
                    articles={testimonies}
                />
            </section>

            <section className="UpcomingSection">
                <h1 className="SectionTitle">Upcoming Events</h1>
                {upcomingEvents}
                <div className="Previous" onClick={() => navigate('/bulletin')}>
                    <BtnOutlined name={"<"} />
                    <p className="BtnCaption">Previous events</p>
                </div>
            </section>


            <OneColumn
                title={"WE’D LOVE TO HAVE YOU!"}
                subtitle='Join our volunteer list to be notified about upcoming events.'
                paragraph={[
                    <BannerBtn name={"JOIN NOW!"} key={uuid()} url={"/contact"}/>
                ]}
                className='CallToAction'
            />

            <Footer />
        </div>
    )
}


