import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  lighter: "#9CFFD5",
  light: "#57E8A6",
  main: "#04D377",
  dark: "#03A35B",
  darker: "#027847",
  contrastText: "#FFF",
};

const SECONDARY = {
  lighter: "#E2D6FF",
  light: "#AC8EFF",
  main: "#815BE8",
  dark: "#593DB5",
  darker: "#3A297E",
  contrastText: "#FFF",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: "#FFF",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      success: SUCCESS,
    },
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
