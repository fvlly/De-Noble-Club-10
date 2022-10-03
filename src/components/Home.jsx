import { useEffect, useState } from "react";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

import { bgImages } from "../images";
import VisionCard from "./VisionCard";
import ProjectCard from "./ProjectCard";
import LinkButton from "./LinkButton";

const Home = () => {
  const [imageIndex,setImageIndex] = useState(0)

  useEffect(()=>{
    // change image after 5sec
    const interval = setInterval(()=>{
      const currentImageIndex = imageIndex === bgImages.length -1 ? 0 : imageIndex + 1
      setImageIndex(currentImageIndex)

    },5000)

    // clear interval
    return () => {
      clearInterval(interval)
    }

  },[imageIndex])

  return (
    <Box as="section" bgColor="gray.900">
      <Box
        display={'flex'}
        justifyContent='center' alignItems={'center'}
        minH={"100vh"}
        color="white"
        bgColor="gray.900"
        bgBlendMode={"luminosity"}
        transition="ease-in-out .7"
        backgroundImage={bgImages[imageIndex].src}
        backgroundPosition={'right'}
        bgSize="cover"
        opacity=".7"
       >
        <Box px={2}>
          <Heading as="h1" lineHeight={2}>
            Creating Awareness within the Ebira Community, since 1976.
          </Heading>
          <Text>The responsibilty of one is the responsibilty of all</Text>
        </Box>
      </Box>
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
          <Box width={["100%", "60%", "50%"]} py={[4]}>
            <Heading fontSize={["18px", "24px"]}>
              You can make a difference
            </Heading>
            <Text py={[4]}>Your support helps more than you know</Text>
            <LinkButton
              text="Donate Now"
              to="/awareness"
              px={[2, 4]}
              py={[2.5]}
              rounded={10}
              bgColor="red.500"
              color="white"
            />
          </Box>
          <Box
            bgImage={"../closeup-eye.jpg"}
            bgPosition="center"
            bgSize={"cover"}
            w={["0px", "40%", "50%"]}
          ></Box>
        </Box>

        {/* Our projects */}
        <Box py={4}>
          <Heading textAlign={['left','center']}> Recent projects</Heading>
          <Box
            py={"4"}
            display={"flex"}  gap={2}
            flexDirection={["column", "column", "row"]}
            alignItems={['flex-start',"center"]} justifyContent={["center", "space-evenly"]}
          >
            <ProjectCard
              description={"Summer School"}
              src="../summerschool/summerschool-1.jpg"
              intro="Yearly programme to improve education"
            />
            <ProjectCard
              description={"Sensitization"}
              src="../community/community-1.jpg"
              intro="Community briefing on elections and safety"
            />
            <ProjectCard
              description={"Boreholes"}
              intro="Borehole  in Obeira market area, to alleivate water scarcity"
            />
          </Box>

          <Box textAlign={"center"} my={4}>
            <LinkButton
              text="View All"
              to="/projects"
              px={[8]}
              py={[2.5]}
              rounded={10}
              bgColor="red.500"
              color="white"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

// const [windowWidth,setWindowWidth] = useState(window.innerWidth)

// const imageSrcIndex = () =>{
//   if(windowWidth <= 640) {
//     return 0
//   }else if (windowWidth >640 && windowWidth <=1190) {
//     return 1
//   }else{
//     return 2
//   }
// }

//change imagesize based on viewport
// console.log(windowWidth);
// const resizeWindowWidth = () => {
//   setWindowWidth(window.innerWidth)
// }

// window.addEventListener('resize',resizeWindowWidth)
// window.removeEventListener('resize',resizeWindowWidth)
