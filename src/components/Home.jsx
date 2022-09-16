import React from "react";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

import VisionCard from "./VisionCard";
import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <Box as="section" pt={"110px"} bgColor="gray.900">
      <Container maxW={"90vw"} color="white">
        <Box
          minH={"100vh"}
          bgColor="gray.900"
          bgBlendMode={"luminosity"}
          backgroundImage="../club10-homebg.jpg"
          backgroundPosition={"center"}
          bgSize="cover"
          opacity=".7"
        >
          <Box pt={["30px", "60px", "130px"]}
            width={["60%", "80%",'40%']}
            margin={["auto","auto","4"]}>
          <Heading
            as="h1"
            
          >
            Creating Awareness within the Ebira Community, since 1976.
          </Heading>
          <Text>The responsibilty of one is the responsibilty of all</Text>
          </Box>
        </Box>

        <Box py={[4, 6]}>
          
          <Box
            py={"4"}
            display={["base", "base", "flex"]}
            gap={2}
            justifyContent={"space-between"}
          >
            
        {/* Our Vision */}
            <VisionCard title={"Vision"} message="To be the foremost Organization, promoting even development of EbiraLand." />
                 
        {/* Our mission */}

        <VisionCard title={"Mission"} message="To create awareness and initiate programmes for the promotion of
              peace, economic, social, cultural, agricultural and educational
              development of the community." />
          </Box>
        </Box>

        <Box display={['block','block','flex']} minH='150px' my={[4,6]} pl='4' bgColor='gray.800' color={'gray.200'}>
           <Box width={'50%'} py={[4]}>
           <Heading>You can make a difference</Heading>
            <Text py={[4]}>Your support helps more than you know</Text>
            <Button colorScheme={'orange'}>Donate now</Button>
           </Box>
           <Box bgImage={'../closeup-eye.jpg'} bgPosition='center' bgSize={'cover'} w={['0px','0px','50%']} >
           </Box>
        </Box>
        
        {/* Our projects */}
        <Box py={4}>
          <Heading textAlign={"center"}> Our projects</Heading>
          <Box
            py={"4"}
            display={["base", "base", "flex"]}
            gap={2}
            justifyContent={"space-between"}
          >
            <ProjectCard description={"Summer School"} />
            <ProjectCard description={"Sensitization"} />
            <ProjectCard description={"Boreholes"} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
