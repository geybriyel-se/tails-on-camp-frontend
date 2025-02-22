import '../styles/ArticleCard.css'
import BtnOutlined from './BtnOutlined'

export default function ArticleCard({
    className = "",
    imgSrc = "",
    imgAlt = "Card image",
    title = "",
    subtitle = "",
    paragraph = "",
    buttonName = "",
    url = "",
    divider = false,
    highlight = "",
    isLandscape = false
}) {
    return (
        <article className={`${isLandscape ? "LandscapeCard" : "ArticleCard"} ${className}`}>
            {highlight && <section className="Highlight">{highlight}</section>}

            {imgSrc &&
                <section className="Image">
                    <img src={imgSrc} alt={imgAlt} />
                </section>
            }

            <section className="Details">
                {title && <h2 className="CardTitle">{title}</h2>}
                {divider && <hr className="Divider" />}
                {subtitle && <h3 className="CardSubtitle">{subtitle}</h3>}
                {paragraph && <p className="CardParagraph">{paragraph}</p>}

                {buttonName &&
                    <section className="CTA">
                        <BtnOutlined name={buttonName} url={url} />
                    </section>
                }
            </section>
        </article>
    )
}