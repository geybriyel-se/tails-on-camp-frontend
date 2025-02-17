import '../styles/Register.css'
import { Snackbar } from '@mui/material'
import RegisterForm from '../components/RegisterForm'
import Themes from '../constants/Themes'
import BrandNameLandscape from '../components/BrandNameLandscape'



const shelterAddress = [
    { label: 'Lot/Block/House/Bldg No', name: 'addressNum', type: 'text' },
    { label: 'Street', name: 'street', type: 'text' },
    { label: 'Subdivision/Village', name: 'subdivision', type: 'text' },
    { label: 'Barangay', name: 'barangay', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'Province', name: 'province', type: 'text' },
    { label: 'Country', name: 'country', type: 'text' },
    { label: 'Zipcode', name: 'zipcode', type: 'text' },
]

const shelterInfo = [
    { label: 'Shelter Name', name: 'shelterName', type: 'text' },
    { label: 'Contact Number', name: 'contactNum', type: 'text' },
    { label: 'Shelter Email', name: 'email', type: 'email' },
    { label: 'Website', name: 'website', type: 'url' },
]

const userFields = [
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Username', name: 'username', type: 'text' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
]


const formSections = {
    userInfo: userFields,
    shelterInfo: shelterInfo,
    shelterAddress: shelterAddress,
};


export default function Register({ theme, toggleThemeFunc, snackbar, closeFunc }) {

    return (
        <main className="Register" style={{ backgroundColor: theme ? Themes.SHELTER.BACKGROUND_COLOR : Themes.DEFAULT.BACKGROUND_COLOR }}>
            <Snackbar
                message={theme ? "You are now registering as a shelter owner" : "You are now registering as an adopter"}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbar}
                onClose={closeFunc}
                autoHideDuration={5000}
            />
            <BrandNameLandscape />
            <RegisterForm toggleThemeFunc={toggleThemeFunc} theme={theme} sections={formSections} />
        </main>
    )
}