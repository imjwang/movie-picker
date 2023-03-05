import "@fontsource/public-sans";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

const colors = {
  palette: {
    primary: {
      50: "#b3dbff",
      100: "#9ec3e6",
      200: "#8aaccd",
      300: "#7596b5",
      400: "#62809e",
      500: "#4f6b87",
      600: "#3c5671",
      700: "#2a425b",
      800: "#183047",
      900: "#051e33",
    },
    info: {
      50: "#fecfff",
      100: "#f2c0f3",
      200: "#e7b1e8",
      300: "#dba2dc",
      400: "#d094d1",
      500: "#c485c6",
      600: "#b977ba",
      700: "#ae69af",
      800: "#a25aa4",
      900: "#974c99",
    },
    neutral: {
      50: "#dde8b9",
      100: "#c4cea4",
      200: "#abb590",
      300: "#949c7d",
      400: "#7d846a",
      500: "#676d57",
      600: "#515745",
      700: "#3d4134",
      800: "#2a2d24",
      900: "#181a14",
    },
    danger: {
      50: "#ffd3e8",
      100: "#fed0e2",
      200: "#fccddd",
      300: "#facad7",
      400: "#f8c8d1",
      500: "#f5c5cc",
      600: "#f3c3c6",
      700: "#f0c0c1",
      800: "#ecbebc",
      900: "#e9bcb7",
    },
    success: {
      50: "#58a4b0",
      100: "#3aa3bc",
      200: "#00a0c9",
      300: "#009dd7",
      400: "#0098e4",
      500: "#0091ee",
      600: "#3388f4",
      700: "#637df6",
      800: "#8b6ef1",
      900: "#ae5ae6",
    },
    warning: {
      50: "#fce1ca",
      100: "#f8d3b3",
      200: "#f4c49d",
      300: "#efb688",
      400: "#eaa873",
      500: "#e5995e",
      600: "#df8b4a",
      700: "#d97c35",
      800: "#d36d1f",
      900: "#cc5d00",
    },
  },
};

const theme = extendTheme({
  colorSchemes: {
    light: colors,
    dark: colors,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <CssVarsProvider theme={theme}>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}
