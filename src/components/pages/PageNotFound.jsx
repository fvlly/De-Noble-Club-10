import { Box, Flex, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Flex as="section" bgColor="gray.900" minH='100vh' justify='center' align='center'>
      <Box color='gray.100'>
        <Heading color='red.600' py='4'>Oops! You seem to be lost.</Heading>
        <Text>Here are some helpful links:</Text>
        <Stack direction={['column','column','row']} spacing='2' divider={<StackDivider borderColor='gray.200' />} color='gray.100' >
        <Link to="/">Home</Link >
        <Link to="/about">About</Link>
        <Link to="/awareness">Awareness</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default PageNotFound;
