import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";

export default function Bulletin() {

    return (
        <div className="Bulletin">
            <Navbar />
            <PageBanner
                title="Bulletin"
                description="This is a description"
                background="#5BC0EB"
            />
        </div>
    )
}