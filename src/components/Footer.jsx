import {
  Box,
  Input,
  Button,
  Center,
  Flex,
  Text,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Box as="footer" bgColor="gray.800">
      <Container maxW={["90vw", "90vw", "90vw", "75vw"]}>
        <SimpleGrid
          minChildWidth='270px' spacing='20px'
          bgColor="gray.800" py={[4,6]}
          color={"white"}
        >
          <Box lineHeight={[1.3]} fontSize={["16px", "18px", "18px", "22px"]}>
            <Text pb={[2,3]} fontWeight="bold" color='red.300'>
              De Noble Club 10
            </Text>
            <Text>Partner with us</Text>
            <Text>Work with us</Text>
            <Text>Volunteer</Text>
          </Box>
          <Box lineHeight={[1.3]} fontSize={["16px", "18px", "18px", "22px"]}>
            <Text>Kogi central Senatorial District </Text>
            <Text py={[2,3]}>Okene, Kogi, Nigeria</Text>
            <Text>
              <Text as={"span"} >
                Phone: +234 803 456 756

              </Text>{" "}
            </Text>
            <Text>
              <Text as={"span"} >
                Email: denobleclub10@gmail.com

              </Text>
            </Text>
          </Box>

          <Box
            pb={4}
            flexBasis="40%"
            lineHeight={[2]}
            fontSize={["16px", "18px", "18px", "22px"]}
          >
            <Text pb={4}>
              Subscribe and get our Newsletter, we will never share your email
            </Text>
            <form>
              <Flex>
                <Input />
                <Button colorScheme={"red"} type="submit">
                  Subscribe
                </Button>
              </Flex>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
      <Center py={4} backgroundColor="red.700">
        <Flex fontWeight="bold" color="white" align="center">
          <Text>De Noble Club 10</Text>
          <AiOutlineCopyrightCircle />
          {`${new Date().getFullYear()}`}
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
