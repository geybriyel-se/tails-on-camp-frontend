import { CottageOutlined, EmailOutlined } from '@mui/icons-material'
import '../styles/ProfileSidebar.css'

export default function ProfileSidebar({ className = "", imgSrc, name, age, gender, breed, size, type, shelterName, shelterCity, onClick }) {
    return (
        <aside className={`ProfileSidebar ${className}`}>
            <figure className="Picture">
                <img src={imgSrc} alt={`Image of ${name}`} />
            </figure>
            <article className="QuickInfo">
                <h2 className="PetName">{name}</h2>
                <p className="Shelter">{`📍 ${shelterName}, ${shelterCity}`}</p>
                <div className="Buttons">
                    <button className='BtnSidebar Btn-Adopt' onClick={onClick}><CottageOutlined /> Adopt</button>
                    <button className='BtnSidebar Btn-Mail'><EmailOutlined /></button>
                </div>
            </article>
            <hr className='Divider'/>
            <section className="More">
                <div className="LineDetail">
                    <p className='LineKey'>Type</p>
                    <p>{type}</p>
                </div>
                <div className="LineDetail">
                    <p className='LineKey'>Breed</p>
                    <p>{breed}</p>
                </div>
                <div className="LineDetail">
                    <p className='LineKey'>Age</p>
                    <p>{age} years old</p>
                </div>
                <div className="LineDetail">
                    <p className='LineKey'>Gender</p>
                    <p>{gender}</p>
                </div>
                <div className="LineDetail">
                    <p className='LineKey'>Size</p>
                    <p>{size}</p>
                </div>
            </section>
        </aside>
    )
}