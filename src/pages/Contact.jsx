import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";

export default function Contact() {

    return (
        <div className="Contact">
            <Navbar />
            <PageBanner
                title="Contact Us"
                description="This is a description"
                background="#5BC0EB"
            />
        </div>
    )
}