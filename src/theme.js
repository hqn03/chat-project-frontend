import { createTheme } from "@mui/material";

const globalTheme = createTheme({
  palette: {
    primary: {
      light: "#669FFF",
      main: "#0055ff",
      dark: "#004CCC",
    },
    text: {
      primary: "#080707",
      secondary: "#747881",
    },
    background: {
      main: "#CCDFFF",
      link: "#e0f0ff",
      reaction_user: "#f4f4f5",
      reaction_you: "#EBF5FF",
      input: "#e9eaed",
      app: "#fffff",
      bars: "#fffff",
    },
    border: "#dbdde1",
    error: {
      main: "#ff3742",
    },
    success: {
      main: "#20E070",
    },
    grey: {
      50: "#fffff",
      100: "#f4f4f5",
      200: "#e9eaed",
      300: "#dbdde1",
      400: "#b4b7bb",
      500: "#747881",
      600: "#4c525c",
      700: "#272a30",
      800: "#1c1e22",
      900: "#17191c",
      950: "#080707",
    },
  },
});

const theme = createTheme({
  palette: globalTheme.palette,
  spacing: 4,
  typography: {
    fontFamily: ["Poppins"],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: globalTheme.palette.grey[400],
            borderRadius: "6px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          caretColor: globalTheme.palette.primary.main,
          ".MuiSvgIcon-root": {
            color: globalTheme.palette.text.secondary,
          },
          "&:hover .MuiSvgIcon-root": {
            color: globalTheme.palette.text.primary,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: globalTheme.palette.text.secondary,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export default theme;
