import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const Membership = () => {
  const handleDownload = () => {
    // using Java Script method to get PDF file
    fetch("membershipForm.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "membershipForm.pdf";
        document.body.append(alink)
        alink.click();
      });
    });
  };

  return (
    <Box as="section" minH="100vh" pt="110px" bgColor={"gray.900"}>
      <Container
        maxW={["90vw", "90vw", "90vw", "75vw"]}
        lineHeight={[1.2, 1.5]}
        color="white"
      >
        <Heading color='red.300'>DeNoble Club10 Membership</Heading>
        <Text py={[4,4,6]}>Interested in becoming a member of the club?</Text>
        <Text py={[4, 4, 6]}>
          Kindly download the form below, fill the appropriate fields and send a
          scanned copy to:
          <Text as="span" px='4' fontSize={['18px','20px','22px']} fontWeight="bold" color="red.700" py={[4, 4, 6]}>
            denobleclub10@gmail.com
          </Text>
        </Text>
        <Button onClick={handleDownload} colorScheme="red">
          Download Membership Form
        </Button>
      </Container>
    </Box>
  );
};

export default Membership;
