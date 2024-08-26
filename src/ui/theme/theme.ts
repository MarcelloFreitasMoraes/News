import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

let theme = createTheme({
  palette: {
    primary: {
      main: "#d19c47",
      dark:"#000",
    },
    secondary: {
      main: "#fff",
      light: "#ddd",
    }, 
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      color: "#000",
      fontSize: "1.5rem",
      fontWeight: 900,
    },
    h4: {
      color: "#000",
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h5: {
      color: "#000",
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      color: "#373737",
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h5: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
    },
    body1: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
