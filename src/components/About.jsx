import { Text, Heading, Box, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Box as="section" minH={"95vh"} pt="110px" bgColor={"gray.900"}>
      <Container maxW={["90vw",'75vw']} lineHeight={[1.2, 1.5]} color="white">
        <Heading py={[4, 6]} color='red.300'>About Us</Heading>
        <Text>
          De Noble Club 10, was established in 1976 by 10 students of Ebira LGA
          came together for social Interaction. Initally Known as Club 10
          Okengwe, it was registered with the then Kwara State Ministry og
          Information and Social Development.
        </Text>
        <Text py={2}>
          Following the 1983/84 reorganization of the Club with the aim of
          national level registration, it was changed to De Club 10 Nigeria. We
          are a non-governmental organization which sets out to promote peace,
          unity and camaderie amongst Nigerians from all walks of life.
          Furthermore, we aim to foster and promote among other things, public
          awareness, encourage intellectual development, help meet the
          educational needs o f the people, initiate all available human and
          material resources for the promotion of economic, cultural, social and
          agricultural development of the society.
        </Text>
        <Heading  pt={10} color='red.300'>Mission</Heading>
        <Text py='2'>
          To create awareness and initiate programmes for the promotion of
          peace, economic, social, cultural, agricultural and educational
          development of the community.
        </Text>
        <Heading color='red.300'>Vision</Heading>
        <Text>
        To be the foremost Organization, promoting even development of EbiraLand.
        </Text>
      </Container>
    </Box>
  );
};

export default About;
