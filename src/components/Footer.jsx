import { Box,Input,Button,Center, Flex, Text } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
            <Flex direction={['column','column','row']} justify='center' px={[12,8]} py={[4,6]} gap={2} bgColor='gray.800' color={'white'}  >
            <Box w='400px' >
            <Text pb={4} fontWeight='extrabold' fontSize={'20px'}>De Noble Club 10</Text>
            <Text>Partner with us</Text>
            <Text>Work with us</Text>
            <Text>Volunteer</Text>
            </Box>
            <Box w='400px'>
               <Text>Kogi central Senatorial District </Text>
               <Text pb={6}>Okene,Kogi,Nigeria</Text>
               <Text><Text as={'span'}fontWeight='bold'>Phone:</Text> +234 803 456 756</Text> 
               <Text><Text as={'span'} fontWeight='bold'>Email:</Text> Club10@xyz.com</Text> 
            </Box>
            
            <Box pb={4} w='300px'>
                <Text py={4}>Subscribe and get our Newsletter, we will never share your email</Text>
                <form>
                <Flex>
                    <Input />
                    <Button colorScheme={'red'} type='submit'>Subscribe</Button>
                </Flex>
                </form>
            </Box>
        </Flex>

        <Center py={4} backgroundColor="red.500" as="footer">
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
