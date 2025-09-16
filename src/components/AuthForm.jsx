import { useState } from "react";
import { DialogContent, TextField, Button, Typography, Box } from "@mui/material";

export default function AuthForm({ mode: initialMode = "register", onToggle, onSubmit }) {
    const [mode, setMode] = useState(initialMode);

    const toggleMode = () => {
        const newMode = mode === "login" ? "register" : "login";
        setMode(newMode);
        if (onToggle) onToggle(newMode);
    };

    const btnStyles = {
        color: "#1E1E1E",
        backgroundColor: "#EB865B",
        margin: "1.25em auto",
        borderRadius: "25px",
    }

    return (
        <DialogContent
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                padding: "0px 80px",

            }}
        >
            <Typography variant="h5" sx={{ textAlign: "center", lineHeight: 1, mt: 2, fontWeight: "700", }}>
                {mode === "login" ? "Welcome back" : "Create a new account"}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1, }}>
                {mode === "login" ? "Enter your credentials to login" : "Join now, and make a difference"}
            </Typography>

            {mode === "register" && (
                <TextField label="Email" type="email" fullWidth size="medium" />
            )}
            <TextField label="Username" fullWidth size="medium" />
            <TextField label="Password" type="password" fullWidth size="medium" />
            {mode === "register" && (
                <TextField label="Confirm Password" type="password" fullWidth size="medium" />
            )}

            <Button variant="contained" sx={btnStyles} onClick={onSubmit} fullWidth size="medium" >
                {mode === "login" ? "Login" : "Sign up"}
            </Button>

            <Typography variant="body2" sx={{ mt: 2 }}>
                {mode === "login" ? (
                    <>
                        <Box component="span" sx={{ color: "#4D4D4D" }}>
                            Don&apos;t have an account?{" "}
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                color: "#3898C9", fontWeight: "bold", cursor: "pointer",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                            onClick={toggleMode}
                        >
                            Sign up to start adopting!
                        </Box>
                    </>
                ) : (
                    <>
                        <Box component="span" sx={{ color: "#4D4D4D" }}>
                            Already have an account?{" "}
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                color: "primary.main", fontWeight: "bold", cursor: "pointer",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                            onClick={toggleMode}

                        >
                            Login to continue
                        </Box>
                    </>
                )}
            </Typography>
        </DialogContent>
    );
};
