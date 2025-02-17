import { createTheme } from "@mui/material/styles";
import "@fontsource/darker-grotesque";

const theme = createTheme({
    typography: {
        fontFamily: '"Trebuchet MS", sans-serif',
        h1: { fontWeight: 800 },
        h2: { fontWeight: 700 }, 
        body1: { fontWeight: 400 }, 
        body2: { fontWeight: 300 }, 
        button: { fontWeight: 500 }, 
    },
    components: {
        MuiOutlinedInput: {     // for outlined text input
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    borderRadius: "25px",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1E1E1E",
                    },
                },
            },
        },
        MuiFilledInput: {       // for filled text input
            styleOverrides: {
                root: {
                    backgroundColor: "#F0F0F0", // Default background
                    borderRadius: "20px",
                    border: "2px solid transparent",
                    "&:hover": { backgroundColor: "#E0E0E0" }, // Hover effect
                    "&.Mui-focused": { backgroundColor: "#ffffff", border: "2px solid #1E1E1E" } // Focus effect
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: "#1E1E1E",
                    },
                },
            },
        },
        palette: {
            primary: {
              light: '#80d3f5',
              main: '#5BC0EB',
              dark: '#1d82a0',
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff7a6f',
              main: '#ff4d2d',
              dark: '#b32000',
              contrastText: '#fff',
            },
            error: {
              light: '#f8b8b8', // Light red shade
              main: '#f44336', // Red (for error state)
              dark: '#b22a00', // Darker red shade
              contrastText: '#fff', // Text color on error
            },
            warning: {
              light: '#ffb74d', // Light orange shade
              main: '#ff9800', // Orange (for warning state)
              dark: '#e65100', // Darker orange shade
              contrastText: '#fff', // Text color on warning
            },
            info: {
              light: '#64b5f6', // Light blue shade
              main: '#2196f3', // Blue (for informational state)
              dark: '#1976d2', // Darker blue shade
              contrastText: '#fff', // Text color on info
            },
            success: {
              light: '#81c784', // Light green shade
              main: '#4caf50', // Green (for success state)
              dark: '#388e3c', // Darker green shade
              contrastText: '#fff', // Text color on success
            },
            divider: '#e0e0e0', // Divider color (light gray)
          },
    },
});

export default theme;