import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html,body": {
        scrollBehavior: "smooth",
      },
    },
  },

  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
  config: {
    cssVarPrefix: "nonD",
  },
  components: {
    Accordion:{
      //add a default color
      defaultProps: {
        colorScheme: 'red', // default is gray
      },
    }
  }
});
