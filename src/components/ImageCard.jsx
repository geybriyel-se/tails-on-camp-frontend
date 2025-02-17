import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import '../styles/ImageCard.css'

export default function ImageCard({
    imgSrc = "",
    title = "",
    subtitle = "",
    paragraph = "",
    url = "",
    icon = <InfoIcon sx={{ color: "#b7b7b7", fontSize: "1.4em" }} />,
    className = "",
}) {
    const navigate = useNavigate();

    return (
        <article className={`ImageCard ${className}`}>
            <div className="ImageContainer">
                <img src={imgSrc} alt={`Image for ${title}`} className="Image" />
            </div>
            <div className="CaptionContainer">
                <div className="CaptionTexts">
                    {title && <h2 className="SectionTitle">{title}</h2>}
                    {subtitle && <h3 className="SectionSubtitle">{subtitle}</h3>}
                    {paragraph && <p className="SectionParagraph">{paragraph}</p>}
                </div>
                {url && (
                    <div className="CaptionIcon">
                        <IconButton onClick={() => navigate(url)} sx={{ fontSize: "clamp(1rem, 1vw, 1.5rem)" }}>
                            {icon}
                        </IconButton>
                    </div>
                )}
            </div>
        </article>
    );
}