import Color from "color";

const primary = "green";

const primaryLight = Color("red").lighten(1.1).rgb().string();

export const useTheme = () => ({
  primary: primary,
  primaryLight,
});
