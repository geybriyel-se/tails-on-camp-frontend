import { useState } from "react";
import { v4 as uuid } from "uuid";
import '../styles/SpotlightCarousel.css'

// TO-DO:
// Make this reusable

export default function SpotlightCarousel({ articles, className = "" }) {
    const totalArticles = articles.length;
    const [activeIndex, setActiveIndex] = useState(0);

    function showNext() {
        if (activeIndex < totalArticles - 1) {
            setActiveIndex(activeIndex + 1);
        }
    }

    function showPrev() {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    }


    return (
        <div className={`SpotlightCarousel ${className}`}>
            <button className="NavBtn PrevBtn" onClick={showPrev} disabled={activeIndex === 0}>
                &lt;
            </button>

            <div className="SpotlightImageContainer">
                {articles.map((article, index) => {
                    let className = "SpotlightImage";
                    if (index === activeIndex) {
                        className += " active";
                    } else if (index === activeIndex - 1) {
                        className += " prev";
                    }

                    return (
                        <div key={article.id} className={className}>
                            <img src={article.imgSrc} alt={article.name} />
                        </div>
                    );
                })}
            </div>


            <div className="CardCaption">
                {articles.map((article, index) => (
                    <div
                        key={uuid()}
                        className="CarouselItem"
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                            opacity: index === activeIndex ? 1 : 0.5,
                        }}
                    >
                        <h2>{article.name}</h2>
                        <p><span>Challenge:</span> {article.challenge}</p>
                        <p><span>Our Response:</span> {article.response}</p>
                        <p><span>Outcome:</span> {article.outcome}</p>
                    </div>
                ))}
            </div>

            <button className="NavBtn NextBtn" onClick={showNext} disabled={activeIndex === totalArticles - 1}>
                &gt;
            </button>
        </div>
    );
}