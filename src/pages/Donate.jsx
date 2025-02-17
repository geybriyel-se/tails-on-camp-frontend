import Navbar from "../components/Navbar";
import OneColumn from "../components/page-sections/OneColumn";
import PageBanner from "../components/PageBanner";
import '../styles/Donate.css'
import DogPeeking from '../assets/dog-peeking.svg'
import TwoColumns from "../components/page-sections/TwoColumns";
import { v4 as uuid } from 'uuid'
import Chart from '../assets/chart.svg'
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import LogoMaya from '../assets/logo-maya.svg'
import LogoGcash from '../assets/logo-gcash.svg'
import LogoBdo from '../assets/logo-bdo.svg'
import LogoBpi from '../assets/logo-bpi.svg'
import LogoMetrobank from '../assets/logo-metrobank.svg'
import LogoPaypal from '../assets/logo-paypal.svg'
import { Backdrop } from "@mui/material";
import QrMaya from '../assets/qr-maya.png'
import QrGcash from '../assets/qr-gcash.png'
import QrBdo from '../assets/qr-bdo.png'
import QrBpi from '../assets/qr-bpi.png'
import QrMetrobank from '../assets/qr-metrobank.png'
import QrPaypal from '../assets/qr-paypal.png'
import { useState } from "react";
import BannerBtn from "../components/BannerBtn";

const bannerStyles = {
    background: "linear-gradient(#5BC0EB, 65%, #FFFFFF)",
}

const leftColumn = [
    <p key={uuid()} className="ItemNumber">
        01
        <span className="ItemDescription"> ONE-TIME DONATION</span>
    </p>,
    <p key={uuid()} className="ItemNumber">
        02
        <span className="ItemDescription"> MONTHLY GIVING</span>
    </p>,
    <p key={uuid()} className="ItemNumber">
        03
        <span className="ItemDescription"> IN-KIND DONATIONS</span>
    </p>,
]

const rightColumn = [
    <img key={uuid()} src={Chart} alt="Pie chart" className="PieChart" />
]


const channels = [
    {
        key: uuid(),
        name: "GCASH",
        logo: LogoGcash,
        QR: QrGcash,
    },
    {
        key: uuid(),
        name: "Maya",
        logo: LogoMaya,
        QR: QrMaya,
    },
    {
        key: uuid(),
        name: "PayPal",
        logo: LogoPaypal,
        QR: QrPaypal,
    },
    {
        key: uuid(),
        name: "BPI",
        logo: LogoBpi,
        QR: QrBpi,
    },
    {
        key: uuid(),
        name: "BDO",
        logo: LogoBdo,
        QR: QrBdo,
    },
    {
        key: uuid(),
        name: "Unionbank",
        logo: LogoMetrobank,
        QR: QrMetrobank,
    },
]

export default function Donate() {


    const [openOverlay, setOpenOverlay] = useState(false);
    const [overlayID, setOverlayID] = useState(channels[0].key)

    function handleOpen(id) {
        setOverlayID(id)
        setOpenOverlay(true);
    }

    const handleClose = () => {
        setOpenOverlay(false);
    };

    return (
        <div className="Donate">
            <Navbar />
            <PageBanner
                title="MAKE A DONATION"
                description="Your generosity makes a difference! Every donation helps provide food, shelter, and medical care for rescue animals in need."
                cssStyles={bannerStyles}
            />

            <OneColumn
                className="WhyDonate"
                title={"Why Donate?"}
                paragraph={"Every day, countless animals are abandoned, neglected, or left without care. At Tails on Camp, we work tirelessly to rescue, rehabilitate, and find loving homes for these animals. Your donation ensures they receive proper food, medical attention, and a safe place to stay until they find their forever families."}
                imgSrc={DogPeeking}
                imgAlt="Dog peeking"
            />

            <TwoColumns
                className={"WaysAndPie"}
                titleL={"Ways to Donate"}
                childrenL={leftColumn}

                titleR={"Where Your Money Goes"}
                childrenR={rightColumn}
            />

            <OneColumn
                className="DonationChannelsBanner"
                title={"OFFICIAL DONATION CHANNELS"}
                subtitle={[
                    "For one-time donations, click on the logo of your preferred channel below to view the QR code. ",
                    <br />,
                    "For monthly or in-kind donations, select an option below."
                ]}
                paragraph={[
                    <BannerBtn name={"MONTHLY DONATION"} key={uuid()} url={""} />,
                    <BannerBtn name={"IN-KIND DONATION"} key={uuid()} url={""} />
                ]}
            />

            <Gallery
                cards={channels.map(channel => (
                    <div className="LogoContainer" key={channel.key} onClick={() => handleOpen(channel.key)}>
                        <img className="ChannelLogo"
                            src={channel.logo}
                            alt={`${channel.name} logo`}


                        />
                    </div>
                ))}
                className={"ChannelsGallery"}
                title="ONE-TIME DONATION"
            />

            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={openOverlay}
                onClick={handleClose}
            >
                {
                    <img
                        src={channels
                            .filter(c => c.key === overlayID)
                            .at(0)
                            ?.QR || "Not found"}
                        alt="QR Code"
                        className="ChannelQRCode"
                    />
                }
            </Backdrop>

            <OneColumn title={"Every contribution, big or small, changes lives. Thank you for your kindness! 🐶🐱💖"} className="EndBanner"/>
            <Footer />
        </div>
    )
}

