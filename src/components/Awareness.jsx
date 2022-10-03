import {
  VStack,
  Container,
  Box,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";

const Awareness = () => {
  return (
    <Box as="section" minH={"95vh"} pt="110px" bgColor={"gray.900"}>
      <Container maxW={["90vw", "75vw"]} lineHeight={[1.2, 1.5]} color="white">
        <Heading py={[4, 6]} color="red.300">
          Awareness
        </Heading>
        <Text lineHeight={[2]} fontSize={["18px", "20px", "22px"]}>
          Unfortunately we can't take online payments at the moment,However, if
          you still wish to support our work , direct transfer to our bank is
          possible please refer to the bank details below to make your
          donations. We appreciate your support and efforts towards the cause.
        </Text>
        <Box py={[2,4,6]}>
          <VStack spacing={4} align="flex-start">
            <Text>Bank Name : Zenith Bank</Text>
            <Text>Account Name : De Noble Club 10, KOGI CENTRAL</Text>
            <Text>Account Number : 1222370883</Text>
            <Text>SORT CODE : 057080413</Text>
            <Divider />
            <Text lineHeight={[2]} fontSize={["18px", "20px", "22px"]}>
              Should you require further clarifications, please do not hesitate
              to call any of the undersigned on the following telephone numbers{" "}
              <Text
                as="span"
                fontWeight={"bold"}
                fontSize="20px"
                color="red.300"
              >
                07030922792 or 0902914020{" "}
              </Text>
            </Text>
            <Text>Email: denobleclub10@gmail.com</Text>
            <Text>Phone: +234 70 4453 12</Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Awareness;
