import {
  Box,
  Flex,
  Heading,
  Container,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { communityImages, summerSchoolImages } from "../images";
import ImageSlider from "./ImageSlider";

const Projects = () => {
  return (
    <Box
      as="section"
      minH={"95vh"}
      pt="110px"
      bgColor={"gray.900"}
      color="white"
    >
      <Container maxW={["95vw", "90vw", "75vw"]}>
        <Heading py={[4, 6]} color="red.300">
          Our Projects
        </Heading>

        {/* summer school */}
        <Flex direction={['column','column','column','row']}
          gap={10}
        >
          <ImageSlider images={communityImages} />
          <Box textAlign={"left"} pt="30px">
            <Heading pb={4}>Summer School</Heading>
            <Text lineHeight={[2]} fontSize={["18px", "20px", "22px"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea
              commodo consequat.
            </Text>
          </Box>
        </Flex>

        {/* sanitization */}
        <Flex direction={['column','column','column','row-reverse']}
          
          gap={10}
          my={12}
        >
          <ImageSlider images={summerSchoolImages} />
          <Box pt="30px">
            <Heading pb={4}>Sanitisation</Heading>
            <Text lineHeight={[2]} fontSize={["18px", "20px", "22px"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea
              commodo consequat.
            </Text>
          </Box>
        </Flex>
        <Heading as="h3" py={[4]} fontSize="22px" color="red.300">
          Other Projects
        </Heading>
        <Accordion pb={6} allowToggle colorScheme={"red"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Traffic Stands
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Radio Programme
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Projects;
