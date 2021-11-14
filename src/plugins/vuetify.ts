// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.css";

// Vuetify
// ThemeDefinition is not exported in vuetify yet ?!
import { createVuetify } from "vuetify";

const myCustomLightTheme: any = {
  dark: false,
  colors: {
    background: "#ccc",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: "dark",
      // themes: {
      //   myCustomLightTheme,
      // }
    },
  }
);
