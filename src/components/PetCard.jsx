import '../styles/PetCard.css'
import male from '../assets/male.svg'
import female from '../assets/female.svg'

export default function PetCard({ name, img, gender, age, size }) {

    return (
        <div className="PetCard">
            <img src={img} className='Image' />
            <div className="CardCaption">
                <div className="TextInfo">
                    <p className="PetDetails Name">{name}</p>
                    <p className="PetDetails Age">{age} year{age !== 1 && "s"} old</p>
                    <p className="PetDetails Size">Size: {size}</p>
                </div>
                <figure className="Gender">
                    {gender === "Male" ?
                        <img src={male} />
                        :
                        <img src={female} />
                    }
                </figure>
            </div>
        </div>
    )
}