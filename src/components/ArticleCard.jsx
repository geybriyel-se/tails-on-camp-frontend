import '../styles/ArticleCard.css'
import BtnOutlined from './BtnOutlined'


export default function ArticleCard({ imgSrc, title, subtitle, paragraph, btnName = "", divider = false }) {
    return (
        <article className="ArticleCard">
            {imgSrc && <img src={imgSrc} alt="Card icon" className="CardIcon" />}
            {title && <h2 className="CardTitle">{title}</h2>}
            {divider && <hr className='Divider'/>}
            {subtitle && <h3 className="CardSubtitle">{subtitle}</h3>}
            {paragraph&& <p className="CardParagraph">{paragraph}</p>}
            {btnName !== "" && <BtnOutlined name={btnName} />}
        </article>
    )
}