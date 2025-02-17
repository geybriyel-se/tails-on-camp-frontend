import brandName from '../assets/brand-name.svg'
import '../styles/BrandName.css'

export default function BrandName() {
    return (
        <div className='BrandName'>
            <img src={brandName} className="Brand" alt="ToC logo" />
        </div>
    )
}