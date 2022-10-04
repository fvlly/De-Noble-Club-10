import { useEffect, useState } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

import { bgImages } from "../../images";
import VisionCard from "../VisionCard";
import ProjectCard from "../ProjectCard";
import LinkButton from "../LinkButton";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // change image after 5sec
    const interval = setInterval(() => {
      const currentImageIndex =
        imageIndex === bgImages.length - 1 ? 0 : imageIndex + 1;
      setImageIndex(currentImageIndex);
    }, 5000);

    // clear interval
    return () => {
      clearInterval(interval);
    };
  }, [imageIndex]);

  return (
    <Box as="section" bgColor="gray.900" color="white">
      <Box
        pos="relative"
        isolation="isolate"
        display={"flex"}
        justifyContent={["center", "center", "flex-start"]}
        alignItems={"center"}
        minH={"100vh"}
        bgBlendMode={"luminosity"}
        transition="ease-in-out .7"
        backgroundImage={bgImages[imageIndex].src}
        backgroundPosition={"right"}
        bgSize="cover"
        _after={{
          position: "absolute",
          zIndex: "-1",
          content: '""',
          inset: 0,
          backgroundColor: "gray.900",
          opacity: ".85",
        }}
      >
        <Box px={[4, 8]}>
          <Heading as="h1" fontSize={["20px",'24px', "35px", "60px"]} lineHeight={[2]}>
            Promoting peace and prosperity,
          </Heading>
          <Heading fontSize={["18px", "28px", "40px"]}>
            within the{" "}
            <Text
              as="span"
              color="red.300"
              fontWeight="extrabold"
              fontSize={["22px",'32px', "40px", "65px"]}
            >
              Ebira community,
            </Text>{" "}
          
          </Heading>
          <Text py={4} fontSize={["16px", "20px", "24px"]}>
            The responsibilty of one is the responsibilty of all
          </Text>
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
          <Heading> Recent projects</Heading>
          <Box
            py={"4"}
            display={"flex"}
            justifyContent={["space-between"]}
            flexDirection={["column", "column", "row"]}
            alignItems={["flex-start"]}
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
