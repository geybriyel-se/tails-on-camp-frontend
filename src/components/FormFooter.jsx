import '../styles/FormFooter.css'

export default function FormFooter({ texts, links = null, clickFuncs = null, toggles = null }) {

    return (
        <footer className="FormFooter">
            <p>{texts[0]}
                 {links !== null && <a href={links[0].src}>{links[0].text}</a>}           
            </p>
            <a onClick={clickFuncs[0]} href="#">
                {toggles[0].condition ? toggles[0].true : toggles[0].false}
            </a>
        </footer>
    )
}



