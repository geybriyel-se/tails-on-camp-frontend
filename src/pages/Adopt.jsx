import Navbar from "../components/Navbar";
import '../styles/Adopt.css';
import PetButton from "../components/PetButton";
import paw from '../assets/paw.svg'
import dog from '../assets/dog.svg'
import cat from '../assets/cat.svg'
import rabbit from '../assets/rabbit.svg'
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import PetCard from "../components/PetCard";
import axios from "axios";

export default function Adopt() {
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getDataFromAPI();
                setPetArr(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchData();
    }, [])

    const [petArr, setPetArr] = useState([]);
    

    const cards = makeCards(petArr);

    const [activeBtn, setActiveBtn] = useState("ALL");
    function handleClick(button) {
        setActiveBtn(button);
    }

    const bannerStyles = {
        background: "linear-gradient(#5BC0EB, 65%, #FFFFFF)",
    }

    return (
        <main className="Adopt">
            <Navbar />
            <PageBanner
                title={"MEET THE TAILS ON CAMP"}
                description={"Discover your new best friend in our pet gallery! Here, you’ll find loving animals of all shapes and sizes, each waiting for a forever home."}
                cssStyles={bannerStyles}
            >
            </PageBanner>

            <nav className="PetButtonsContainer">
                <PetButton
                    name="ALL"
                    imgSrc={paw}
                    className="PetButtonAll"
                    imgAlt="Paw icon"
                    isActive={activeBtn === "ALL" ? true : false}
                    onClick={() => handleClick("ALL")}
                />
                <PetButton
                    name="DOGS"
                    imgSrc={dog}
                    className="PetButtonDogs"
                    imgAlt="Dog icon"
                    isActive={activeBtn === "DOGS" ? true : false}
                    onClick={() => handleClick("DOGS")}
                />
                <PetButton
                    name="CATS"
                    imgSrc={cat}
                    className="PetButtonCats"
                    imgAlt="Cat icon"
                    isActive={activeBtn === "CATS" ? true : false}
                    onClick={() => handleClick("CATS")}
                />
                <PetButton
                    name="OTHERS"
                    imgSrc={rabbit}
                    className="PetButtonOthers"
                    imgAlt="Rabbit icon"
                    isActive={activeBtn === "OTHERS" ? true : false}
                    onClick={() => handleClick("OTHERS")}
                />
            </nav>
            <Gallery cards={cards} />
            <Footer />
        </main>
    )
}

// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

async function getDataFromAPI() {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        // url: `${apiBaseUrl}/pets/all`,
        url: `http://localhost:8080/api/v1/pets/all`,
        headers: {
            'Content-Type': 'application/json'
        },
    };

    try {
        const response = await axios.request(config);
        return response.data.body;
    } catch (error) {
        console.log("ERROR!!!!", error);
        throw error;
    }

}

export function makeCards(arr) {
    return arr.map((obj) => (
        <PetCard
            key={obj.id}
            name={obj.name}
            age={obj.age}
            size={obj.size}
            gender={obj.gender}
            img={obj.imageUrl}
            id={obj.id}
        />
    ));
}