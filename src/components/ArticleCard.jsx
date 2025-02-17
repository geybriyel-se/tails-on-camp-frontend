import '../styles/ArticleCard.css'
import BtnOutlined from './BtnOutlined'


export default function ArticleCard({ imgSrc, title, subtitle, paragraph, btnName = "" }) {
    return (
        <article className="ArticleCard">
            <img src={imgSrc} alt="Card icon" className="CardIcon" />
            <h2 className="CardTitle">{title}</h2>
            <hr className='Divider'/>
            <h3 className="CardSubtitle">{subtitle}</h3>
            <p className="CardParagraph">{paragraph}</p>
            {btnName !== "" && <BtnOutlined name={btnName} />}
        </article>
    )
}