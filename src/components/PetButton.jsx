import '../styles/PetButton.css'

export default function PetButton({ name, imgSrc, imgAlt, className, isActive, onClick }) {

    return (
        <button
            className={`PetButton ${className} ${isActive ? "BtnActive" : ""}`}
            onClick={onClick}
        >
            <img src={imgSrc} alt={imgAlt} />
            <p>{name}</p>
        </button>
    )
}