import { VStack,Container,Box,Text,Heading, Divider } from "@chakra-ui/react";

const Awareness = () => {
    return (
        <Box as="section" minH={"95vh"} pt="110px" bgColor={"gray.900"}>
          <Container maxW={["90vw",'75vw']} lineHeight={[1.2, 1.5]} color="white">
            <Heading py={[4, 6]} color='red.300'>Awareness</Heading>
            <Text>
              Unfortunately we can't take online payments at the moment,However, if you still wish to support our work , direct transfer to our bank is possible
             please refer to the bank details below to make your donations.
            </Text>
            <Box py={2}>
              <VStack spacing={4} align='flex-start'>
                <Text>Bank Name : Zenith Bank</Text>
                <Text>Account Name : De Noble Club 10</Text>
                <Text>Account Number : 0000 0000 00</Text>
                <Divider />
                <Text>
                    With regards to International tranfers, we haven't the means necessary at the time, do bare with us, for additional infomation and confiramtion of donations please Contact
                </Text>
                <Text>Email: xyz@gmil.com</Text>
                <Text>Phone: +234 70 4453 12</Text>
              </VStack>
            </Box>
          </Container>
        </Box>
      );
    };
    
    

export default Awareness