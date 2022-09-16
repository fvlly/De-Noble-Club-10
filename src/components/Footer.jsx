import { Center, Flex, Text } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
        <Center py={4} backgroundColor="red.900" as="footer">
      <Flex fontWeight="bold" color="white" align='center'>
        <Text  >
          De Noble Club 10 
        </Text>
        <AiOutlineCopyrightCircle />
        {`${new Date().getFullYear()}`}
      </Flex>
    </Center>
    </footer>
  );
};

export default Footer;
