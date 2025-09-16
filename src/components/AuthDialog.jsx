import { Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AuthForm from "./AuthForm";
import LogoOnly from "./LogoOnly";

export default function AuthDialog({ dialogState, onClose }) {

    return (
        <>
            <Dialog
                open={dialogState}
                onClose={onClose}
                maxWidth="sm"
                fullWidth
                sx={{
                    "& .MuiDialog-paper": {
                        padding: "10px 20px",
                        borderRadius: "12px",
                        backgroundColor: "#F1F8FD",
                        minHeight: "70%"
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        // alignItems: "center",
                        fontSize: "1.2rem",
                        padding: "16px 24px 0 24px"
                    }}
                >
                    {/* Tails on Camp */}
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <LogoOnly />
                <AuthForm />
            </Dialog>
        </>
    );
}