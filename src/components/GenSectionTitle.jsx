import { useNavigate } from 'react-router-dom'
import '../styles/GenSectionTitle.css'


export default function GenSectionTitle({ title, moreText = "", moreUrl = "", hr = false }) {
    const navigate = useNavigate();

    return (
        <section className="GenSectionTitle">
            <div className="Texts">
                <p className="Title">{title}</p>
                {moreText && <p className="More" onClick={() => navigate(moreUrl)}>{moreText}</p>}
            </div>
            {hr && <hr />}
        </section>
    )
}