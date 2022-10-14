import { Text, Box, Image } from "@chakra-ui/react";
import LinkButton from "./LinkButton";

const ProjectCard = ({ description, src, intro }) => {
  return (
    <Box
      w={["full", "full", "full", "45%"]}
      minH={"500px"}
      position={"relative"}
      rounded={10}
      outline="2px solid gray"
      mb={4}
     
    >
      <Box
        display="flex"
        justifyContent="center"
        px={[2, 4]}
        py={[4, 6]}
        h="350px"
        bgColor="gray.900"
      >
        <Image rounded={8} h="300px" src={src} loading="lazy" />
      </Box>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={["flex-start", "center"]}
        maxW="355px"
        margin={"auto"}
        py={1}
        px={[4, 6]}
      >
        <Text fontWeight={"bold"} fontSize="20px" alignSelf={["baseline"]}>
          {description}
        </Text>
        <Text py={2} fontSize="18px">
          {intro}
        </Text>
        <Box my={4} w="full">
          <LinkButton
            text="View More"
            to="/projects"
            w={["full"]}
            px={[8]}
            py={[2.5]}
            rounded={10}
            bgColor="red.500"
            color="white"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
