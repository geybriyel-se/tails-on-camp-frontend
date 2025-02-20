import { useState, useEffect } from "react"
import '../styles/Carousel.css'
import { v4 as uuid } from 'uuid'

export default function Carousel({ title, subtitle, articles, className = "" }) {
    function getNumVisible() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        return 3;
    }

    const [numVisible, setNumVisible] = useState(getNumVisible());
    const [startIndex, setStartIndex] = useState(0);
    const [visibleArticles, setVisibleArticles] = useState(() =>
        articles.slice(0, numVisible)
    );

    const numIndicators = (articles.length - numVisible) + 1;
    const [disablePrevBtn, setDisablePrevBtn] = useState(true);
    const [disableNextBtn, setDisableNextBtn] = useState(numVisible >= articles.length);

    // Update numVisible on screen resize
    useEffect(() => {
        function handleResize() {
            const newNumVisible = getNumVisible();
            setNumVisible(newNumVisible);
            setStartIndex(0);
            setVisibleArticles(articles.slice(0, newNumVisible));
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [articles]);

    const indicators = Array.from({ length: numIndicators }, (_, i) => (
        i === startIndex ?
            <span
                className="Indicator ActiveIndicator"
                key={uuid()}
                style={{ cursor: "default" }}
            >●</span> :
            <span
                className="Indicator"
                key={uuid()}
                onClick={() => goToArticle(i)}
                style={{ cursor: "pointer" }}
            >●</span>
    ));

    function goToArticle(i) {
        setStartIndex(i);
        setVisibleArticles(() =>
            articles.slice(i, i + numVisible))
    }

    function showNext() {
        const newStartIndex = startIndex + 1;
        const maxIndex = articles.length - numVisible;

        if (newStartIndex > maxIndex) return;

        setStartIndex(newStartIndex);
        setVisibleArticles(articles.slice(newStartIndex, newStartIndex + numVisible));

        setDisableNextBtn(newStartIndex === maxIndex);
        setDisablePrevBtn(false);
    }

    function showPrev() {
        const newStartIndex = startIndex - 1;

        if (newStartIndex < 0) return;

        setStartIndex(newStartIndex);
        setVisibleArticles(articles.slice(newStartIndex, newStartIndex + numVisible));

        setDisablePrevBtn(newStartIndex === 0);
        setDisableNextBtn(false);
    }

    return (
        <section className={`Carousel ${className}`}>
            {title && <h1 className="SectionTitle">{title}</h1>}
            {subtitle && <h2 className="SectionSubtitle">{subtitle}</h2>}
            <div className="CardContainer">
                <button className="NavBtn PrevBtn" onClick={showPrev} disabled={disablePrevBtn}>&lt;</button>
                {
                    visibleArticles.map((article, i) => (
                        <div
                            key={uuid()}
                            className={`CarouselItem ${window.innerWidth < 768 ? "" : i === 1 ? "ActiveItem" : "SideItem"}`}
                        >
                            {article}
                        </div>
                    ))
                }
                <button className="NavBtn NextBtn" onClick={showNext} disabled={disableNextBtn}>&gt;</button>
            </div>
            <div className="IndicatorContainer">
                {indicators}
            </div>
        </section>
    )
}