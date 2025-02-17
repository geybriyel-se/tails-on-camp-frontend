import brandName from '../assets/brand-name-landscape.svg'
import '../styles/BrandNameLandscape.css'

export default function BrandNameLandscape() {
    return (
        <div className='BrandNameLandscape'>
            <img src={brandName} alt="ToC logo" />
        </div>
    )
}

