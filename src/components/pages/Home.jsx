import { useEffect, useState } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

import VisionCard from "../VisionCard";
import ProjectCard from "../ProjectCard";
import LinkButton from "../LinkButton";
import Hero from "../Hero";

const Home = () => {
  return (
    <Box as="section" bgColor="gray.900" color="white">
      <Hero />
      <Container maxW={["90vw", "90vw", "90vw", "75vw"]} color="white">
        <Box
          py={"4"}
          display={["base", "flex", "flex"]}
          margin="auto"
          gap={2}
          justifyContent={"space-between"}
        >
          {/* Our Vision */}
          <VisionCard
            title={"Vision"}
            message="To be the foremost Organization, promoting even development of EbiraLand."
          />

          {/* Our mission */}
          <VisionCard
            title={"Mission"}
            message="To create awareness and initiate programmes for the promotion of
              peace, economic, social, cultural, agricultural and educational
              development of the community."
          />
        </Box>

        <Box
          display={["block", "flex", "flex"]}
          minH="150px"
          my={[4, 6]}
          pl="4"
          bgColor="gray.800"
          color={"gray.200"}
        >
          <Box width={["100%", "60%", "50%"]} py={[4, 6]}>
            <Heading fontSize={["18px", "24px"]}>
              You can make a difference
            </Heading>
            <Text py={[4, 6]}>Your support helps more than you know</Text>
            <LinkButton
              text="Donate Now"
              to="/awareness"
              px={[2, 4]}
              py={[2.5]}
              w="140px"
              rounded={10}
              bgColor="red.500"
              color="white"
            />
          </Box>
          <Box
            bgImage={"../closeup-eye.webp"}
            bgPosition="center"
            bgSize={"cover"}
            w={["0px", "40%", "50%"]}
          ></Box>
        </Box>

        {/* Our projects */}
        <Box py={4}>
          <Heading> Recent projects</Heading>
          <Box
            py={"4"}
            display={"flex"}
            gap="6"
            justifyContent={["space-between"]}
            flexDirection={["column", "column", "row"]}
            alignItems={["flex-start"]}
          >
            <ProjectCard
              description={"Summer School"}
              src="../summerschool/summerschool-1.webp"
              intro="Yearly programme to improve education"
            />
            <ProjectCard
              description={"Sensitization"}
              src="../community/community-3.webp"
              intro="Community enlightenment on relevant issues"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
