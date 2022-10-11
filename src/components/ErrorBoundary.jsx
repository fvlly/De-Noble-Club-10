import { Button, Center, Heading, Text } from "@chakra-ui/react"

function ErrorFallback({error, resetErrorBoundary}) {
    return (
    
        <Center role={'alert'} bgColor='gray.700' color='gray.100'>
            <Heading py={[4,6]}>Something went wrong</Heading>
            <Text>{error.message}</Text>
            <Box py={[4,6]}>
            <Button onClick={resetErrorBoundary}>Try again</Button>
            </Box>
        </Center>
    )
  }

  export default ErrorFallback