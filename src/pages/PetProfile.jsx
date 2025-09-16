import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileSidebar from "../components/ProfileSidebar";
import '../styles/PetProfile.css'
import OneColumn from "../components/page-sections/OneColumn";
import TwoColumns from "../components/page-sections/TwoColumns";
import { useState } from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { makeCards } from "./Adopt";
import AuthDialog from "../components/AuthDialog";


export default function PetProfile() {
    // for rendering corresponding page based on id
    const params = useParams();
    const petId = parseInt(params.id);
    const petObj = getPetById(petId);

    // for setting active tab in Health | Shelter Section
    const [activeTab, setActiveTab] = useState("Health");

    // for showing other pets from same shelter, aside from current pet
    const otherPets = getPetsByShelterId(petObj.shelter.shelterId, petObj.id);
    const petsByShelter = makeCards(otherPets);

    // for login/register modal after clicking Adopt btn
    const [openOverlay, setOpenOverlay] = useState(false);
    // const [overlayID, setOverlayID] = useState(channels[0].key)
    // const [overlayID, setOverlayID] = useState(1)

    const handleOpen = () => {
        // setOverlayID(id)
        setOpenOverlay(true);
    }

    const handleClose = () => {
        setOpenOverlay(false);
    };


    return (
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
                    onClick={handleOpen}
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
                                                    <input type="radio" name="vaccination" value="1" id="vacc-complete" checked />
                                                    <label htmlFor="vacc-complete">Complete</label>
                                                </div>
                                                <div className="CheckboxItem">
                                                    <input type="radio" name="vaccination" value="5" id="vacc-incomplete" />
                                                    <label htmlFor="vacc-incomplete">Incomplete</label>
                                                </div>
                                                <div className="CheckboxItem">
                                                    <input type="radio" name="vaccination" value="3" id="vacc-ongoing" />
                                                    <label htmlFor="vacc-ongoing">Ongoing</label>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="CheckboxSection">
                                            <p className="SectionTitle">Spayed/Neutered:</p>
                                            <section className="Options">
                                                <div className="CheckboxItem">
                                                    <input type="radio" name="spayed" value="1" id="spay-complete" checked disabled />
                                                    <label htmlFor="spay-complete">Complete</label>
                                                </div>
                                                <div className="CheckboxItem">
                                                    <input type="radio" name="spayed" value="5" id="spay-incomplete" disabled />
                                                    <label htmlFor="spay-incomplete">Incomplete</label>
                                                </div>
                                                <div className="CheckboxItem">
                                                    <input type="radio" name="spayed" value="3" id="spay-ongoing" disabled />
                                                    <label htmlFor="spay-ongoing">Ongoing</label>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="CheckboxSection">
                                            <p className="SectionTitle">Dewormed:</p>
                                            <section className="Options">
                                                <div className="CheckboxItem">
                                                    <input type="radio" name="deworm" value="1" id="deworm-yes" checked disabled />
                                                    <label htmlFor="deworm-yes">Yes</label>
                                                </div>
                                                <div className="CheckboxItem">
                                                    <input type="radio" name="deworm" value="0" id="deworm-no" disabled />
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

                    {otherPets.length !== 0 &&
                        <section className="SameShelter">
                            <h2 className="SectionTitle">From the same shelter</h2>
                            <Gallery cards={petsByShelter} className="ProfileGallery" />
                        </section>
                    }
                </section>
                <AuthDialog dialogState={openOverlay} onClose={handleClose} />
            </article>
            <Footer />
        </main>
    )

}


function getPetByIdFromAPI({ id }) {
    const sampleDetail = {
        id: 54,
        name: "Max",
        type: "Dog",
        breed: "Labrador Retriever",
        age: 4,
        gender: "Male",
        size: "Large",
        description: "A loyal and energetic Lab who enjoys fetch and long walks.",
        imageUrl: "https://images.unsplash.com/photo-1506242395783-cec2bda110e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        availability: 1,
        shelter: {
            shelterId: 2,
            shelterName: "Paw Haven Animal Shelter",
            lotBlockHouseBldgNo: "Lot 12 Block 5",
            street: "Mabini Street",
            subdivisionVillage: "Greenfields Subdivision",
            barangay: "Barangay San Roque",
            city: "Quezon City",
            province: "Metro Manila",
            country: "Philippines",
            zipcode: "1105",
            contactNumber: "+63 917 123 4567",
            email: "info@pawhavenph.org",
            website: "https://www.pawhavenph.org",
            createdAt: 1738977529.534852000,
            updatedAt: null
        },
        adopter: null,
        createdAt: 1738978597.487828000
    }

    return sampleDetail;
}

function getPetById(id) {
    const pet = allPets.find(pet => pet.id === id);
    console.log("RETRIEVED", pet)
    return pet;
}

function getPetsByShelterId(shelterId, petId) {
    const petsFromShelter = allPets.filter(pet => pet.shelter.shelterId === shelterId && pet.id !== petId);
    console.log("retrieved pets", petsFromShelter);
    return petsFromShelter;
}

// sample response "body" from api for all pets: 
const allPets = [{
    id: 52,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    gender: "Male",
    size: "Large",
    description: "A friendly and playful Golden Retriever who loves outdoor activities and cuddles.",
    imageUrl: "https://images.unsplash.com/photo-1588022274642-f238f77ec193?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 0,
    shelter: {
        "shelterId": 1,
        "shelterName": "Luna's Haven",
        "lotBlockHouseBldgNo": "Block 19, Lot 7",
        "street": "Shaw Boulevard",
        "subdivisionVillage": "Hillside Residences",
        "barangay": "Barangay Wack-Wack",
        "city": "Mandaluyong City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1555",
        "contactNumber": "+63 920 112 3344",
        "email": "info@lunashaven.ph",
        "website": "https://www.lunashaven.org",
        "createdAt": 1714434699.510878000,
        "updatedAt": null
    },
    "adopter": {
        "userId": 1,
        "email": "test@gmail.com",
        "username": "testuser",
        "password": "$2a$10$v62wThgfYaKKuqUVt/1JQuHxPdUXtANwJ1cnnOpxbZqtOItQyu17O",
        "firstName": null,
        "lastName": null,
        "address": null,
        "phoneNumber": null,
        "createdAt": 1713911581.148137000,
        "updatedAt": null,
        "role": "USER",
        "enabled": true,
        "authorities": [
            {
                "authority": "USER"
            }
        ],
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true
    },
    "createdAt": 1738977249.154602000
},
{
    id: 53,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: 2,
    gender: "Female",
    size: "Medium",
    description: "A graceful and affectionate Siamese cat with striking blue eyes.",
    imageUrl: "https://images.unsplash.com/photo-1562256500-5d49a9903824?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 1,
        "shelterName": "Luna's Haven",
        "lotBlockHouseBldgNo": "Block 19, Lot 7",
        "street": "Shaw Boulevard",
        "subdivisionVillage": "Hillside Residences",
        "barangay": "Barangay Wack-Wack",
        "city": "Mandaluyong City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1555",
        "contactNumber": "+63 920 112 3344",
        "email": "info@lunashaven.ph",
        "website": "https://www.lunashaven.org",
        "createdAt": 1714434699.510878000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738978430.588513000
},
{
    id: 54,
    name: "Max",
    type: "Dog",
    breed: "Labrador Retriever",
    age: 4,
    gender: "Male",
    size: "Large",
    description: "A loyal and energetic Lab who enjoys fetch and long walks.",
    imageUrl: "https://images.unsplash.com/photo-1506242395783-cec2bda110e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 2,
        "shelterName": "Paw Haven Animal Shelter",
        "lotBlockHouseBldgNo": "Lot 12 Block 5",
        "street": "Mabini Street",
        "subdivisionVillage": "Greenfields Subdivision",
        "barangay": "Barangay San Roque",
        "city": "Quezon City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1105",
        "contactNumber": "+63 917 123 4567",
        "email": "info@pawhavenph.org",
        "website": "https://www.pawhavenph.org",
        "createdAt": 1738977529.534852000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738978597.487828000
},
{
    id: 55,
    name: "Whiskers",
    type: "Cat",
    breed: "Maine Coon",
    age: 5,
    gender: "Male",
    size: "Large",
    description: "A fluffy and friendly Maine Coon who loves to be around people.",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 0,
    shelter: {
        "shelterId": 3,
        "shelterName": "Hope for Strays",
        "lotBlockHouseBldgNo": "House 18",
        "street": "Rizal Avenue",
        "subdivisionVillage": "Sunshine Village",
        "barangay": "Barangay Kalayaan",
        "city": "Cebu City",
        "province": "Cebu",
        "country": "Philippines",
        "zipcode": "6000",
        "contactNumber": "+63 922 345 6789",
        "email": "contact@hopeforstrays.com",
        "website": "https://www.hopeforstrays.com",
        "createdAt": 1738977548.814753000,
        "updatedAt": null
    },
    "adopter": {
        "userId": 1,
        "email": "test@gmail.com",
        "username": "testuser",
        "password": "$2a$10$v62wThgfYaKKuqUVt/1JQuHxPdUXtANwJ1cnnOpxbZqtOItQyu17O",
        "firstName": null,
        "lastName": null,
        "address": null,
        "phoneNumber": null,
        "createdAt": 1713911581.148137000,
        "updatedAt": null,
        "role": "USER",
        "enabled": true,
        "authorities": [
            {
                "authority": "USER"
            }
        ],
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true
    },
    "createdAt": 1738978746.381983000
},
{
    id: 56,
    name: "Bella",
    type: "Dog",
    breed: "Beagle",
    age: 3,
    gender: "Female",
    size: "Medium",
    description: "A curious and playful Beagle who loves sniffing around and exploring.",
    imageUrl: "https://images.unsplash.com/photo-1608113239923-a0bf3a1e873f?q=80&w=2489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 4,
        "shelterName": "Furry Friends Haven",
        "lotBlockHouseBldgNo": "Lot 20",
        "street": "Bonifacio Drive",
        "subdivisionVillage": "Rosewood Heights",
        "barangay": "Barangay Talon",
        "city": "Davao City",
        "province": "Davao del Sur",
        "country": "Philippines",
        "zipcode": "8000",
        "contactNumber": "+63 935 678 9012",
        "email": "support@furryfriendshaven.ph",
        "website": "https://www.furryfriendshaven.ph",
        "createdAt": 1738977559.210962000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738978891.053326000
},
{
    id: 57,
    name: "Shadow",
    type: "Cat",
    breed: "Bombay Cat",
    age: 1,
    gender: "Male",
    size: "Small",
    description: "A mysterious black cat with a sweet and loving personality.",
    imageUrl: "https://images.unsplash.com/photo-1597366431550-7b151ed08c75?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 5,
        "shelterName": "Paws & Claws Rescue Center",
        "lotBlockHouseBldgNo": "Building 3, Unit 10",
        "street": "Katipunan Avenue",
        "subdivisionVillage": "Blue Ridge Village",
        "barangay": "Barangay Loyola Heights",
        "city": "Quezon City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1108",
        "contactNumber": "+63 918 234 5678",
        "email": "hello@pawsandclawsph.org",
        "website": "https://www.pawsandclawsph.org",
        "createdAt": 1738977576.903007000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738979208.778504000
},
{
    id: 58,
    name: "Rocky",
    type: "Dog",
    breed: "German Shepherd",
    age: 6,
    gender: "Male",
    size: "Large",
    description: "A smart and protective German Shepherd who is great with families.",
    imageUrl: "https://images.unsplash.com/photo-1589070621558-a4e98580c9ca?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 2,
    shelter: {
        "shelterId": 6,
        "shelterName": "Safe Haven Animal Rescue",
        "lotBlockHouseBldgNo": "Unit 5, Block 15",
        "street": "Osmeña Highway",
        "subdivisionVillage": "Horizon Estates",
        "barangay": "Barangay Poblacion",
        "city": "Makati City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1200",
        "contactNumber": "+63 927 567 8901",
        "email": "info@safehavenrescue.ph",
        "website": "https://www.safehavenrescue.ph",
        "createdAt": 1738977594.530190000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738979298.924553000
},
{
    id: 59,
    name: "Mittens",
    type: "Cat",
    breed: "Tabby",
    age: 3,
    gender: "Female",
    size: "Medium",
    description: "A playful and affectionate tabby cat with adorable white paws.",
    imageUrl: "https://images.unsplash.com/photo-1589872267076-a0859175685b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 7,
        "shelterName": "Metro Paws Animal Shelter",
        "lotBlockHouseBldgNo": "Lot 25 Block 8",
        "street": "Taft Avenue",
        "subdivisionVillage": "Bayview Residences",
        "barangay": "Barangay 76",
        "city": "Pasay City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1300",
        "contactNumber": "+63 917 654 3210",
        "email": "contact@metropawsph.org",
        "website": "https://www.metropawsph.org",
        "createdAt": 1738977621.566385000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738979374.953887000
},
{
    id: 60,
    name: "Daisy",
    type: "Dog",
    breed: "Poodle",
    age: 2,
    gender: "Female",
    size: "Small",
    description: "An intelligent and well-groomed Poodle who loves to perform tricks.",
    imageUrl: "https://images.unsplash.com/photo-1598412039650-72e33730511a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 8,
        "shelterName": "Manila Pet Haven",
        "lotBlockHouseBldgNo": "Unit 12, Tower B",
        "street": "España Boulevard",
        "subdivisionVillage": "University Belt",
        "barangay": "Barangay 403",
        "city": "Manila",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1008",
        "contactNumber": "+63 919 876 5432",
        "email": "support@manilapethaven.com",
        "website": "https://www.manilapethaven.com",
        "createdAt": 1738977636.386557000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738979549.251033000
},
{
    id: 61,
    name: "Oliver",
    type: "Cat",
    breed: "British Shorthair",
    age: 4,
    gender: "Male",
    size: "Medium",
    description: "A chubby and cuddly British Shorthair with a calm personality.",
    imageUrl: "https://images.unsplash.com/photo-1629624466945-3999c586a130?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 1,
        "shelterName": "Luna's Haven",
        "lotBlockHouseBldgNo": "Block 19, Lot 7",
        "street": "Shaw Boulevard",
        "subdivisionVillage": "Hillside Residences",
        "barangay": "Barangay Wack-Wack",
        "city": "Mandaluyong City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1555",
        "contactNumber": "+63 920 112 3344",
        "email": "info@lunashaven.ph",
        "website": "https://www.lunashaven.org",
        "createdAt": 1714434699.510878000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738979624.247452000
},
{
    id: 62,
    name: "Charlie",
    type: "Dog",
    breed: "Cocker Spaniel",
    age: 5,
    gender: "Male",
    size: "Medium",
    description: "A cheerful and affectionate Cocker Spaniel with floppy ears.",
    imageUrl: "https://images.unsplash.com/photo-1602886525304-4e9044f09157?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 2,
        "shelterName": "Paw Haven Animal Shelter",
        "lotBlockHouseBldgNo": "Lot 12 Block 5",
        "street": "Mabini Street",
        "subdivisionVillage": "Greenfields Subdivision",
        "barangay": "Barangay San Roque",
        "city": "Quezon City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1105",
        "contactNumber": "+63 917 123 4567",
        "email": "info@pawhavenph.org",
        "website": "https://www.pawhavenph.org",
        "createdAt": 1738977529.534852000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738979773.134695000
},
{
    id: 63,
    name: "Simba",
    type: "Cat",
    breed: "Bengal",
    age: 2,
    gender: "Male",
    size: "Medium",
    description: "An energetic and adventurous Bengal cat with beautiful markings.",
    imageUrl: "https://images.unsplash.com/photo-1598463166228-c0f90d180918?q=80&w=2625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 2,
    shelter: {
        "shelterId": 3,
        "shelterName": "Hope for Strays",
        "lotBlockHouseBldgNo": "House 18",
        "street": "Rizal Avenue",
        "subdivisionVillage": "Sunshine Village",
        "barangay": "Barangay Kalayaan",
        "city": "Cebu City",
        "province": "Cebu",
        "country": "Philippines",
        "zipcode": "6000",
        "contactNumber": "+63 922 345 6789",
        "email": "contact@hopeforstrays.com",
        "website": "https://www.hopeforstrays.com",
        "createdAt": 1738977548.814753000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738979822.964638000
},
{
    id: 64,
    name: "Coco",
    type: "Dog",
    breed: "Chihuahua",
    age: 1,
    gender: "Female",
    size: "Small",
    description: "A tiny but brave Chihuahua who loves being carried around.",
    imageUrl: "https://images.unsplash.com/photo-1579462435531-6c9580b64879?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 4,
        "shelterName": "Furry Friends Haven",
        "lotBlockHouseBldgNo": "Lot 20",
        "street": "Bonifacio Drive",
        "subdivisionVillage": "Rosewood Heights",
        "barangay": "Barangay Talon",
        "city": "Davao City",
        "province": "Davao del Sur",
        "country": "Philippines",
        "zipcode": "8000",
        "contactNumber": "+63 935 678 9012",
        "email": "support@furryfriendshaven.ph",
        "website": "https://www.furryfriendshaven.ph",
        "createdAt": 1738977559.210962000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738980134.774613000
},
{
    id: 65,
    name: "Tiger",
    type: "Cat",
    breed: "Orange Tabby",
    age: 4,
    gender: "Male",
    size: "Medium",
    description: "A confident and independent tabby cat with a love for sunbathing.",
    imageUrl: "https://images.unsplash.com/photo-1625192494307-71c4c508f2c5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 0,
    shelter: {
        "shelterId": 5,
        "shelterName": "Paws & Claws Rescue Center",
        "lotBlockHouseBldgNo": "Building 3, Unit 10",
        "street": "Katipunan Avenue",
        "subdivisionVillage": "Blue Ridge Village",
        "barangay": "Barangay Loyola Heights",
        "city": "Quezon City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1108",
        "contactNumber": "+63 918 234 5678",
        "email": "hello@pawsandclawsph.org",
        "website": "https://www.pawsandclawsph.org",
        "createdAt": 1738977576.903007000,
        "updatedAt": null
    },
    "adopter": {
        "userId": 3,
        "email": "mogumigo@gmail.com",
        "username": "migo123",
        "password": "$2a$10$/fb.BN6GSXe2GBMjl2UytuE6tv9SY1qS4ChEjOyHpZ4Air4EGnLr2",
        "firstName": null,
        "lastName": null,
        "address": null,
        "phoneNumber": null,
        "createdAt": 1722880973.822051000,
        "updatedAt": null,
        "role": "USER",
        "enabled": true,
        "authorities": [
            {
                "authority": "USER"
            }
        ],
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true
    },
    "createdAt": 1738980236.588622000
},
{
    id: 66,
    name: "Lucky",
    type: "Dog",
    breed: "Dalmatian",
    age: 3,
    gender: "Male",
    size: "Large",
    description: "A playful and energetic Dalmatian with a love for running.",
    imageUrl: "https://images.unsplash.com/photo-1625481725710-8600f21f38f2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 6,
        "shelterName": "Safe Haven Animal Rescue",
        "lotBlockHouseBldgNo": "Unit 5, Block 15",
        "street": "Osmeña Highway",
        "subdivisionVillage": "Horizon Estates",
        "barangay": "Barangay Poblacion",
        "city": "Makati City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1200",
        "contactNumber": "+63 927 567 8901",
        "email": "info@safehavenrescue.ph",
        "website": "https://www.safehavenrescue.ph",
        "createdAt": 1738977594.530190000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738980342.585558000
},
{
    id: 67,
    name: "Bunbun",
    type: "Rabbit",
    breed: "Unknown",
    age: 2,
    gender: "Female",
    size: "Small",
    description: "A fluffy rabbit with light brown fur and floppy ears. Very friendly and enjoys cuddles.",
    imageUrl: "https://images.unsplash.com/photo-1629898453304-e19fdc3351f5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 3,
        "shelterName": "Hope for Strays",
        "lotBlockHouseBldgNo": "House 18",
        "street": "Rizal Avenue",
        "subdivisionVillage": "Sunshine Village",
        "barangay": "Barangay Kalayaan",
        "city": "Cebu City",
        "province": "Cebu",
        "country": "Philippines",
        "zipcode": "6000",
        "contactNumber": "+63 922 345 6789",
        "email": "contact@hopeforstrays.com",
        "website": "https://www.hopeforstrays.com",
        "createdAt": 1738977548.814753000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738980696.647361000
},
{
    id: 68,
    name: "Snowball",
    type: "Rabbit",
    breed: "Unknown",
    age: 1,
    gender: "Male",
    size: "Small",
    description: "A small white rabbit with an energetic personality. Loves to explore and hop around.",
    imageUrl: "https://images.unsplash.com/photo-1617398881039-4c977f633b0e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 5,
        "shelterName": "Paws & Claws Rescue Center",
        "lotBlockHouseBldgNo": "Building 3, Unit 10",
        "street": "Katipunan Avenue",
        "subdivisionVillage": "Blue Ridge Village",
        "barangay": "Barangay Loyola Heights",
        "city": "Quezon City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1108",
        "contactNumber": "+63 918 234 5678",
        "email": "hello@pawsandclawsph.org",
        "website": "https://www.pawsandclawsph.org",
        "createdAt": 1738977576.903007000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738980777.295928000
},
{
    id: 69,
    name: "Shelly",
    type: "Turtle",
    breed: "Unknown",
    age: 5,
    gender: "Female",
    size: "Medium",
    description: "A calm and easygoing turtle that enjoys basking under the light and swimming in its tank.",
    imageUrl: "https://images.unsplash.com/photo-1604984938695-709c41f45cf1?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 2,
        "shelterName": "Paw Haven Animal Shelter",
        "lotBlockHouseBldgNo": "Lot 12 Block 5",
        "street": "Mabini Street",
        "subdivisionVillage": "Greenfields Subdivision",
        "barangay": "Barangay San Roque",
        "city": "Quezon City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1105",
        "contactNumber": "+63 917 123 4567",
        "email": "info@pawhavenph.org",
        "website": "https://www.pawhavenph.org",
        "createdAt": 1738977529.534852000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738980969.228065000
},
{
    id: 70,
    name: "Nibbles",
    type: "Hamster",
    breed: "Unknown",
    age: 1,
    gender: "Male",
    size: "Small",
    description: "A tiny hamster with golden fur and an adventurous spirit. Loves running on its wheel.",
    imageUrl: "https://images.unsplash.com/photo-1587599140470-acf5dc34e4cb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 6,
        "shelterName": "Safe Haven Animal Rescue",
        "lotBlockHouseBldgNo": "Unit 5, Block 15",
        "street": "Osmeña Highway",
        "subdivisionVillage": "Horizon Estates",
        "barangay": "Barangay Poblacion",
        "city": "Makati City",
        "province": "Metro Manila",
        "country": "Philippines",
        "zipcode": "1200",
        "contactNumber": "+63 927 567 8901",
        "email": "info@safehavenrescue.ph",
        "website": "https://www.safehavenrescue.ph",
        "createdAt": 1738977594.530190000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738981174.372343000
},
{
    id: 71,
    name: "Sunny",
    type: "Bird",
    breed: "Lovebird",
    age: 3,
    gender: "Male",
    size: "Small",
    description: "A colorful Lovebird that enjoys chirping and socializing. Energetic and affectionate.",
    imageUrl: "https://images.unsplash.com/photo-1617374595976-072d1530e429?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availability: 1,
    shelter: {
        "shelterId": 4,
        "shelterName": "Furry Friends Haven",
        "lotBlockHouseBldgNo": "Lot 20",
        "street": "Bonifacio Drive",
        "subdivisionVillage": "Rosewood Heights",
        "barangay": "Barangay Talon",
        "city": "Davao City",
        "province": "Davao del Sur",
        "country": "Philippines",
        "zipcode": "8000",
        "contactNumber": "+63 935 678 9012",
        "email": "support@furryfriendshaven.ph",
        "website": "https://www.furryfriendshaven.ph",
        "createdAt": 1738977559.210962000,
        "updatedAt": null
    },
    "adopter": null,
    "createdAt": 1738981292.949541000
}]