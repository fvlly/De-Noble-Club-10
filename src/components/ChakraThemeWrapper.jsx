import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@chakra-ui/react"

const ChakraThemeWrapper = ({children}) => {
  return (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
    )
}

export default ChakraThemeWrapper