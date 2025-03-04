import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import '../styles/PetProfile.css'
import OneColumn from "../components/page-sections/OneColumn";
import TwoColumns from "../components/page-sections/TwoColumns";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { makeCards } from "./Adopt";
import axios from "axios";
import Loading from "../components/page-sections/Loading";


export default function PetProfile() {
    // for rendering corresponding page based on id
    const params = useParams();
    const petId = parseInt(params.id);

    const [isLoading, setIsLoading] = useState(true);
    const [petObj, setPetObj] = useState();
    const [petsFromShelter, setPetsFromShelter] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const petData = await getPetByIdFromAPI(petId);
                const allPets = await getPetsByShelterFromAPI(petData.shelter.shelterId);
                setPetObj(petData);
                setPetsFromShelter(allPets.filter(pet => pet.id !== petData.id));
            } catch (error) {
                console.error("Error fetching data from API:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [petId]);

    // for setting active tab in Health | Shelter Section
    const [activeTab, setActiveTab] = useState("Health");

    return (
        <>
            {isLoading ? <Loading /> :
                <main className="PetProfile">
                    <Navbar />
                    <article className="Content">
                        <ProfileSidebar
                            imgSrc={petObj.imageUrl}
                            name={petObj.name}
                            age={petObj.age}
                            gender={petObj.gender}
                            breed={petObj.breed}
                            size={petObj.size}
                            type={petObj.type}
                            shelterName={petObj.shelter.shelterName}
                            shelterCity={petObj.shelter.city}
                        />
                        <section className="MorePetInfo">
                            <OneColumn
                                title="📖 My Story"
                                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat sapiente, reiciendis voluptas iste sequi nostrum necessitatibus doloremque id doloribus quibusdam. Non architecto fugit facere aspernatur, consectetur quibusdam consequatur tempore! Nemo labore totam quidem expedita quisquam architecto nostrum. Nihil, ipsum qui repellat veritatis at sint quisquam, magnam quasi omnis doloremque maxime voluptate alias iste."
                                className="MyStory"
                            />

                            {/* make this more generic, reusable */}
                            <section className="TabContainer">
                                <nav className={`PetDetailsNav`}>
                                    <button
                                        className={`Btn-Tab HealthNav ${activeTab === "Health" ? "tabActive" : ""}`}
                                        onClick={() => setActiveTab("Health")}
                                    >
                                        🩺 Health and Medical
                                    </button>
                                    <button
                                        className={`Btn-Tab ShelterNav ${activeTab === "Shelter" ? "tabActive" : ""}`}
                                        onClick={() => setActiveTab("Shelter")}
                                    >
                                        🏠 Shelter Information
                                    </button>
                                </nav>
                                <section className={`TabInfo HealthTab ${activeTab === "Health" ? "groupActive" : ""}`}>
                                    <TwoColumns
                                        childrenL={
                                            <section className="LeftColumn">
                                                <div className="CheckboxSection">
                                                    <p className="SectionTitle">Vaccinations:</p>
                                                    <section className="Options">
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="vaccination" value="1" id="vacc-complete" checked readOnly />
                                                            <label htmlFor="vacc-complete">Complete</label>
                                                        </div>
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="vaccination" value="5" id="vacc-incomplete" readOnly />
                                                            <label htmlFor="vacc-incomplete">Incomplete</label>
                                                        </div>
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="vaccination" value="3" id="vacc-ongoing" readOnly />
                                                            <label htmlFor="vacc-ongoing">Ongoing</label>
                                                        </div>
                                                    </section>
                                                </div>
                                                <div className="CheckboxSection">
                                                    <p className="SectionTitle">Spayed/Neutered:</p>
                                                    <section className="Options">
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="spayed" value="1" id="spay-complete" checked readOnly />
                                                            <label htmlFor="spay-complete">Complete</label>
                                                        </div>
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="spayed" value="5" id="spay-incomplete" readOnly />
                                                            <label htmlFor="spay-incomplete">Incomplete</label>
                                                        </div>
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="spayed" value="3" id="spay-ongoing" readOnly />
                                                            <label htmlFor="spay-ongoing">Ongoing</label>
                                                        </div>
                                                    </section>
                                                </div>
                                                <div className="CheckboxSection">
                                                    <p className="SectionTitle">Dewormed:</p>
                                                    <section className="Options">
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="deworm" value="1" id="deworm-yes" checked readOnly />
                                                            <label htmlFor="deworm-yes">Yes</label>
                                                        </div>
                                                        <div className="CheckboxItem">
                                                            <input type="radio" name="deworm" value="0" id="deworm-no" readOnly />
                                                            <label htmlFor="deworm-no">No</label>
                                                        </div>
                                                    </section>
                                                </div>
                                            </section>
                                        }
                                        childrenR={
                                            <div className="RightColumn">
                                                <div className="Medical">
                                                    <p className="SectionTitle">Medical Condition</p>
                                                    <ul>
                                                        <li>Mange (galis) - Under treatment, improving</li>
                                                        <li>Old leg injury - Slight limp but can walk and run fine</li>
                                                    </ul>
                                                </div>
                                                <div className="SpecialCare">
                                                    <p className="SectionTitle">Special Care Needed</p>
                                                    <ul>
                                                        <li>Regular medicated baths for skin recovery</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        }
                                    />


                                </section>
                                <section className={`TabInfo ShelterTab ${activeTab === "Shelter" ? "groupActive" : ""}`}>
                                    <h2 className="SectionTitle">{petObj.shelter.shelterName}</h2>
                                    <p className="Address">{`📍 ${petObj.shelter.lotBlockHouseBldgNo}, ${petObj.shelter.street}, ${petObj.shelter.subdivisionVillage}, ${petObj.shelter.barangay}, ${petObj.shelter.city}, ${petObj.shelter.province}, ${petObj.shelter.country} ${petObj.shelter.zipcode}`}</p>
                                    <section className="ContactDetails">
                                        <p>📞 {petObj.shelter.contactNumber}</p>
                                        <p>✉️ {petObj.shelter.email}</p>
                                        <p>🌐 {petObj.shelter.website}</p>
                                    </section>
                                </section>
                            </section>

                            {petsFromShelter.length !== 0 &&
                                <section className="SameShelter">
                                    <h2 className="SectionTitle">From the same shelter</h2>
                                    <Gallery cards={makeCards(petsFromShelter)} className="ProfileGallery" />
                                </section>
                            }
                        </section>

                    </article>
                    <Footer />
                </main>
            }
        </>
    )

}


async function getPetByIdFromAPI(id) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:8080/api/v1/pets/id/${id}`,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data.body;
    } catch (error) {
        console.log("Error occured", error);
    }
}

// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
async function getPetsByShelterFromAPI(id) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        // url: `${apiBaseUrl}/pets/shelter/${id}`,
        url: `http://localhost:8080/api/v1/pets/shelter/${id}`,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data.body;
    } catch (error) {
        console.log("Error occured", error);
    }
}
