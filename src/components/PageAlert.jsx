import '../styles/PageAlert.css'
import { Alert } from '@mui/material'


export default function PageAlert({ variant, severity, text }) {
    return <Alert className="PageAlert" variant={variant} severity={severity}>
        {text}
    </Alert>
}