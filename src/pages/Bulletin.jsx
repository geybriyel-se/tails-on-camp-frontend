import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import GenSectionTitle from "../components/GenSectionTitle";
import '../styles/Bulletin.css'
import ImageCard from "../components/ImageCard";
import Adoptions1 from "../assets/article-image-1.svg"
import Adoptions2 from "../assets/article-image-2.svg"
import Adoptions3 from "../assets/article-image-3.svg"
import Adoptions4 from "../assets/article-image-4.svg"
import Footer from "../components/Footer";
import ALL_PETS from "../constants/SampleReponses";
import ProfileSidebar from "../components/ProfileSidebar";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ArticleCard from "../components/ArticleCard"
import Event1 from '../assets/event-1.png'
import Event2 from '../assets/event-2.png'
import Event3 from '../assets/event-3.png'
import PrevEvent1 from '../assets/prev-event-1.png'
import PrevEvent2 from '../assets/prev-event-2.png'
import PrevEvent3 from '../assets/prev-event-3.png'
import PrevEvent4 from '../assets/prev-event-4.png'
import PrevEvent5 from '../assets/prev-event-5.png'

export default function Bulletin() {
    const newPets = ALL_PETS.slice(0, 4);

    const [eventsActiveTab, setEventsActiveTab] = useState("upcoming");

    return (
        <div className="Bulletin">
            <Navbar />
            <PageBanner
                title="BROWSE OUR BULLETIN"
                description="Get the latest updates on our rescues, donations, and shelter activities in one place."
            />

            <section className="Bulletin-Section-Container Adoptions">
                <GenSectionTitle title={"Latest Adoptions"} moreText={"SEE OLDER →"} moreUrl="/" hr />
                <article className="AdoptionGrid">
                    <ImageCard
                        imgSrc={Adoptions1}
                        title="Toby just got adopted!"
                        url="/"
                        icon={"READ MORE →"}
                        subtitle="12 MAR 2025"
                        className="AdoptionCard MainAC"
                    />
                    <ImageCard
                        imgSrc={Adoptions2}
                        title="Toby just got adopted!"
                        onClickUrl="/"
                        icon={"READ MORE →"}
                        subtitle="12 MAR 2025"
                        className="AdoptionCard SquareAC1"
                    />
                    <ImageCard
                        imgSrc={Adoptions3}
                        title="Toby just got adopted!"
                        onClickUrl="/"
                        subtitle="12 MAR 2025"
                        className="AdoptionCard SquareAC2"
                    />
                    <ImageCard
                        imgSrc={Adoptions4}
                        title="Toby just got adopted!"
                        onClickUrl="/"
                        subtitle="12 MAR 2025"
                        className="AdoptionCard LandscapeAC"
                    />
                </article>
            </section>

            <section className="Bulletin-Section-Container Campers">
                <GenSectionTitle title="Newest Campers" hr moreText="SEE MORE →" moreUrl="/adopt" />
                <article className="PetProfiles">
                    {newPets.map(pet => (
                        <ProfileSidebar
                            key={uuid()}
                            imgSrc={pet.imageUrl}
                            name={pet.name}
                            age={pet.age}
                            gender={pet.gender}
                            breed={pet.breed}
                            size={pet.size}
                            type={pet.type}
                            shelterName={pet.shelter.shelterName}
                            shelterCity={pet.shelter.city}
                        />
                    ))}
                </article>
            </section>
            <section className="Bulletin-Section-Container EventsReportContainer">
                <article className="Events">
                    <GenSectionTitle title="Events" hr />
                    <nav className="EventsNav">
                        <button
                            onClick={() => setEventsActiveTab("upcoming")}
                            className={`Event-Tab ${eventsActiveTab === "upcoming" ? "active" : ""}`}
                        >
                            UPCOMING
                        </button>
                        <button
                            onClick={() => setEventsActiveTab("previous")}
                            className={`Event-Tab ${eventsActiveTab === "previous" ? "active" : ""}`}
                        >
                            PREVIOUS
                        </button>
                    </nav>
                    {eventsActiveTab === "upcoming" && <section className="EventsList UpcomingEvents">
                        {upcomingEvents}
                    </section>}
                    {eventsActiveTab === "previous" && <section className="EventsList PrevEvents">
                        {previousEvents}
                        <button className="BtnOlder">Show older events →</button>
                    </section>}
                </article>

                <article className="Reports">
                    <GenSectionTitle title="Donation Reports" moreText="SEE ALL →" moreUrl="/" hr />
                    <section className="ReportsList">
                        <article className="ReportItem">
                            <p className="Date">03/07/2025</p>
                            <p className="Title">February 2025 Financial Summary Report</p>
                            <div className="Tag Tag-Financial">Financial Summary Report</div>
                        </article>

                        <article className="ReportItem">
                            <p className="Date">03/05/2025</p>
                            <p className="Title">February 2025 Donation Breakdown Report</p>
                            <div className="Tag Tag-Donation">Donation Breakdown Report</div>
                        </article>

                        <article className="ReportItem">
                            <p className="Date">02/20/2025</p>
                            <p className="Title">Hearts for Paws: Valentine’s Adoption Event Report</p>
                            <div className="Tag Tag-Event">Event Report</div>
                        </article>

                        <article className="ReportItem">
                            <p className="Date">02/07/2025</p>
                            <p className="Title">January 2025 Donation Breakdown Report</p>
                            <div className="Tag Tag-Donation">Donation Breakdown Report</div>
                        </article>

                        <article className="ReportItem">
                            <p className="Date">02/05/2025</p>
                            <p className="Title">January 2025 Financial Summary Report</p>
                            <div className="Tag Tag-Financial">Financial Summary Report</div>
                        </article>

                        <article className="ReportItem">
                            <p className="Date">01/13/2025</p>
                            <p className="Title">New Year’s Rescue Mission Report</p>
                            <div className="Tag Tag-Event">Event Report</div>
                        </article>

                        <article className="ReportItem">
                            <p className="Date">12/08/2024</p>
                            <p className="Title">Paws & Claus 2024: Christmas Drive Donation Report</p>
                            <div className="Tag Tag-Event">Event Report</div>
                        </article>
                    </section>
                </article>
            </section>

            <Footer />
        </div>
    )
}


const upcomingEvents = [
    <ArticleCard
        key={uuid()}
        className="EventCard"
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
        className="EventCard"
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
        className="EventCard"
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

const previousEvents = [
    <ArticleCard
        key={uuid()}
        className="EventCard"
        imgSrc={PrevEvent1}
        imgAlt='Hearts for Paws Valentine’s Adoption Event'
        title='Hearts for Paws: Valentine’s Adoption Event'
        subtitle={[
            "📍 SM Mall of Asia, Pasay",
            <br key={uuid()} />,
            "🗓️ February 13, 2025 | 🕐 10:00 AM – 5:00 PM"
        ]}
        paragraph='A heartwarming event where dozens of shelter pets found their forever homes! Couples and families adopted pets, spreading love this Valentine’s season.'
        divider
        buttonName='See Adopted Pets →'
        url='/'
    />,
    <ArticleCard
        key={uuid()}
        className="EventCard"
        imgSrc={PrevEvent2}
        imgAlt='New Year’s Rescue Mission'
        title='New Year’s Rescue Mission'
        subtitle={[
            "📍 Manila City Animal Control",
            <br key={uuid()} />,
            "🗓️ January 6, 2025 | 🕐 9:00 AM – 3:00 PM"
        ]}
        paragraph='Volunteers joined efforts to rescue, treat, and shelter stray animals affected by New Year’s fireworks. Dozens of injured pets received urgent medical care and new homes.'
        divider
        buttonName='See Rescue Stories →'
        url='/'
    />,
    <ArticleCard
        key={uuid()}
        className="EventCard"
        imgSrc={PrevEvent3}
        imgAlt='Paws & Claus 2024'
        title='Paws & Claus 2024: Christmas Drive Donation Report'
        subtitle={[
            "📍 Multiple Locations",
            <br key={uuid()} />,
            "🗓️ December 1, 2024 | 🕐 All Day"
        ]}
        paragraph='Thanks to generous donors, we provided food, toys, and medical aid to hundreds of shelter animals this Christmas. See how your contributions made a difference!'
        divider
        buttonName='View Donation Report →'
        url='/'
    />,
    <ArticleCard
        key={uuid()}
        className="EventCard"
        imgSrc={PrevEvent4}
        imgAlt='Pet Safety Awareness Workshop'
        title='Pet Safety Awareness Workshop'
        subtitle={[
            "📍 UP Town Center, Quezon City",
            <br key={uuid()} />,
            "🗓️ November 18, 2024 | 🕐 2:00 PM – 5:00 PM"
        ]}
        paragraph='Pet experts and veterinarians shared tips on keeping pets safe, from disaster preparedness to home safety measures. Attendees received free pet first-aid kits!'
        divider
        buttonName='View Safety Tips →'
        url='/'
    />,
    <ArticleCard
        key={uuid()}
        className="EventCard"
        imgSrc={PrevEvent5}
        imgAlt='Fill the Bowls: Food Drive Impact Report'
        title='Fill the Bowls: Food Drive Impact Report'
        subtitle={[
            "📍 Multiple Shelters",
            <br key={uuid()} />,
            "🗓️ October 22, 2024 | 🕐 All Day"
        ]}
        paragraph='Thanks to your support, we distributed thousands of kilos of pet food to shelters in need. Read about the impact and see how you can continue to help!'
        divider
        buttonName='View Impact Report →'
        url='/'
    />,
];