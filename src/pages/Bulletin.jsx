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

export default function Bulletin() {
    const newPets = ALL_PETS.slice(0, 4);

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

            <Footer />
        </div>
    )
}