import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rajdhani";
import "@fontsource/urbanist";
const theme = extendTheme({
  fonts: {
    heading: `'urbanist', sans-serif`,
    body: `'rajdhani', sans-serif`,
  },
});

export default theme;
