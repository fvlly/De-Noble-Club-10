import { Box, Input, Button, Center, Flex, Text, Container } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Box as="footer" bgColor='gray.800'>
      <Container maxW={["90vw","90vw", "75vw"]} lineHeight={[1.2, 1.5]}>
      <Flex direction={['column','column','row']} justify='space-between'  py={[4,6]}  bgColor='gray.800' color={'white'}  >
            <Box lineHeight={[2]} fontSize={["18px", "20px", "22px"]} >
            <Text pb={4} fontWeight='bold' >De Noble Club 10</Text>
            <Text>Partner with us</Text>
            <Text>Work with us</Text>
            <Text>Volunteer</Text>
            </Box>
            <Box lineHeight={[2]} fontSize={["18px", "20px", "22px"]}>
               <Text>Kogi central Senatorial District </Text>
               <Text pb={6}>Okene,Kogi,Nigeria</Text>
               <Text><Text as={'span'}fontWeight='bold'>Phone:</Text> +234 803 456 756</Text> 
               <Text><Text as={'span'} fontWeight='bold'>Email:</Text> denobleclub10@gmail.com</Text> 
            </Box>
            
            <Box pb={4} flexBasis='40%' lineHeight={[2]} fontSize={["18px", "20px", "22px"]}>
                <Text pb={4}>Subscribe and get our Newsletter, we will never share your email</Text>
                <form>
                <Flex>
                    <Input />
                    <Button colorScheme={'red'} type='submit'>Subscribe</Button>
                </Flex>
                </form>
            </Box>
        </Flex>
      </Container>
      <Center py={4} backgroundColor="red.700" as="footer">
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
