import { green, grey } from "@mui/material/colors";
import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme,
    primary: "#222222",
    secondary: "#080b10",
    surface: "#080b10",
    background: "#080b10",
    accent: green[500],
    grey: grey[200]
  },
};
