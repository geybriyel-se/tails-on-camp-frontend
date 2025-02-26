import '../styles/Home.css'
import BannerBtn from "../components/BannerBtn";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import HeroBackground from '../assets/hero-background.svg'
import TwoColumns from '../components/page-sections/TwoColumns';
import Footer from '../components/Footer';
import ThreeColumns from '../components/page-sections/ThreeColumns';
import CatsImage from '../assets/cats-image.svg'
import DogInBox from '../assets/dog-in-box.svg'
import TextCard from '../components/TextCard';
import AdoptIcon from '../assets/adopt.svg'
import DonateIcon from '../assets/donate.svg'
import VolunteerIcon from '../assets/volunteer.svg'
import Carousel from '../components/Carousel';
import { v4 as uuid } from 'uuid'
import ArticleCard from '../components/ArticleCard';
import ArticleImage1 from '../assets/article-image-1.svg'
import ArticleImage2 from '../assets/article-image-2.svg'
import ArticleImage3 from '../assets/article-image-3.svg'
import ArticleImage4 from '../assets/article-image-4.svg'
import ArticleImage5 from '../assets/article-image-5.svg'
import BtnOutlined from '../components/BtnOutlined';

export default function Home() {

    const bannerStyles = {
        backgroundImage: `url(${HeroBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <div className="Home">
            <Navbar />
            <PageBanner
                title={["Share Your Home,", <br key="LineBreak" />, "Change a Life!"]}
                description={[
                    "At Tails on Camp, we believe every stray deserves a loving home. Our mission is to provide rescue, rehabilitation, and rehoming for animals in need. From medical care to foster programs, we work tirelessly to give these animals a second chance at life."
                ]}
                cssStyles={bannerStyles}
            >
                <BannerBtn name="ADOPT NOW!" url="/adopt" />
            </PageBanner>

            <ThreeColumns
                title={"There are different ways you can help!"}
                column1={
                    <TextCard
                        imgSrc={AdoptIcon}
                        title={"ADOPT"}
                        text={"Give a rescue pet a forever home! Adoption changes lives—both yours and theirs—by providing love, care, and companionship."}
                        indicator={">"}
                        url={"/adopt"}
                    />
                }
                column2={
                    <TextCard
                        imgSrc={DonateIcon}
                        title={"DONATE"}
                        text={"Every contribution helps! Your donations provide food, medical care, and shelter to animals in need, ensuring they get a second chance at life."}
                        indicator={">"}
                        url={"/donate"}
                    />
                }
                column3={
                    <TextCard
                        imgSrc={VolunteerIcon}
                        title={"VOLUNTEER"}
                        text={"Join our mission by lending a hand! Whether it’s walking dogs, socializing cats, or helping at events, your time makes a huge impact."}
                        indicator={">"}
                        url={"/volunteer"}
                    />
                }

            />

            <TwoColumns
                className='AboutSection'
                childrenL={[
                    <img src={CatsImage} alt='A bunch of kittens' key={uuid()} className='ImgKittens' />,
                ]}
                titleR='Tails on Camp: A Safe Haven for Strays'
                childrenR={[
                    "At Tails on Camp, we believe every stray deserves a loving home. Our mission is to provide rescue, rehabilitation, and rehoming for animals in need. From medical care to foster programs, we work tirelessly to give these animals a second chance at life.",
                    <br className="LineBreak" key={uuid()}/>,
                    <br className="LineBreak" key={uuid()}/>,
                    "With the help of volunteers and supporters, we provide a safe space where strays can heal, thrive, and find loving homes.",
                    <BtnOutlined name={"LEARN MORE"} url={""} className={"BtnAbout"} key={uuid()} />
                ]}
            >

            </TwoColumns>

            <TwoColumns
                className='DogWithBanner'
                titleL='Your Title Goes Here'
                childrenL={[
                    <p key={uuid()}>Ad aliquam quas, assumenda dolore  suscipit quo adipisci sunt tempora. Non laboriosam veritatis nihil, omnis laudantium architecto sunt  deserunt cupiditate dignissimos, ipsam modi, recusandae vitae! illum eaque asperiores ratione, expedita.</p>
                ]}
                childrenR={[
                    <img src={DogInBox} className='DogBoxImg' alt='Dog in a box' key={uuid()} />
                ]}
            />

            <Carousel
                title={"LATEST FROM TAILS ON CAMP"}
                articles={carouselArticles}
            />


            <Footer />
        </div>
    )
}

const carouselArticles = [
    <ArticleCard
        key={uuid()}
        title={"Toby just got adopted!"}
        subtitle={[
            "July 06, 2023",
            <br key={uuid()} />,
            "Hooray! Congratulations to Toby for finding their perfect match! They have been adopted and will be cherished by their new family.",
        ]}
        paragraph={"Toby is just one of the 123 pets that we have helped find their forever homes, and we couldn't be more proud of the love and happiness they bring. Discover the other amazing pets who have found their forever families."}
        imgSrc={ArticleImage1}
        btnName={"Learn More"}
    />,

    <ArticleCard
        key={uuid()}
        title={"Here comes Sofie!"}
        subtitle={[
            "May 12, 2023",
            <br key={uuid()} />,
            "Welcome, Sofie! Wagging tails and loving hearts await you! We're excited to help you find a loving family who will cherish you.",
        ]}
        paragraph={"Along with Sofie, our shelter is home to 12 delightful pets who are excitedly waiting for their chance to add warmth to their new families. Uncover the remarkable narratives of our other furry friends."}
        imgSrc={ArticleImage2}
        btnName={"Learn More"}
    />,

    <ArticleCard
        key={uuid()}
        title={"Something else"}
        subtitle={[
            "June 29, 2023",
            <br key={uuid()} />,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed diam lectus. Mauris ullamcorper odio magna, non congue ex gravida.",
        ]}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in bibendum elit. Nunc fringilla sed turpis id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus lectus vel odio consectetur, in."}
        imgSrc={ArticleImage3}
        btnName={"Learn More"}
    />,

    <ArticleCard
        key={uuid()}
        title={"Your support is endless!"}
        subtitle={[
            "May 12, 2023",
            <br key={uuid()} />,
            "Thanks to you, we are able to continuously provide care to our beloved tails on camp!",
        ]}
        paragraph={"Tails on Camp have received a total of Php 54,321 this month, all thanks to your generous donations and endless support. We make sure that every cent that you have given is spent on nurturing the stray that are in our care. Click below to see the full report."}
        imgSrc={ArticleImage4}
        btnName={"Learn More"}
    />,

    <ArticleCard
        key={uuid()}
        title={"Youth in Action!"}
        subtitle={[
            "January 20, 2024",
            <br key={uuid()} />,
            "A group of passionate young volunteers joined us for a day of care, love, and dedication to our rescues. Their energy and kindness made a huge impact!"
        ]}
        paragraph={"These amazing volunteers helped with feeding, grooming, and socializing our rescues, giving them the attention and affection they deserve. Every helping hand brings us closer to finding loving homes for these animals."}
        imgSrc={ArticleImage5}
        btnName={"Learn More"}
    />,
]