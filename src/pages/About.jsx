import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";

export default function About() {

    return (
        <div className="About">
            <Navbar />
            <PageBanner
                title="About Us"
                description="Adoption is just a step away from giving them the love and care they deserve! We, at Tails on Camp, make sure that this step is easy, rewarding, and filled with support."
                background="#5BC0EB"
            />
        </div>
    )
}