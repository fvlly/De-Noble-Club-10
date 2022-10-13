import { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { bgImages } from "../images";

const Hero = () => {
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
        <Heading
          as="h1"
          fontSize={["20px", "24px", "35px", "60px"]}
          lineHeight={[2]}
        >
          Promoting peace and ,
        </Heading>
        <Text fontSize={["18px", "28px", "40px"]}>
          prosperity within the{" "}
          {/* {" Philantrophy,Educating and Sensitizing"} */}
        </Text>
        <Text
          as="span"
          color="red.300"
          fontWeight="extrabold"
          fontSize={["22px", "32px", "40px", "65px"]}
        >
          Ebira community.
        </Text>
        <Text py={4} fontSize={["16px", "20px", "24px"]}>
            Fostering growth and responsiblity
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
