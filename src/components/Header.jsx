import { Link as RouterLink } from "react-router-dom";
import { Flex,Link,Box } from "@chakra-ui/react";

import Hamburger from "./Hamburger";
import Links from "./Links";


const Header = () => {

  return (
    
      <Flex
        position="fixed"
        zIndex={2}
        w={"full"}
        top={0}
        bgColor={"gray.700"}
        color="red.300"
        minH="10vh"
        px={20}
        align="center"
        justify="space-between"
        sx={{
          a: {
            _hover: {
              color: "white",
              textDecoration: "none",
            },
          },
        }}
      >
        <Link as={RouterLink} to="/">
          De Noble Club10
        </Link>
        <Box display={['none','none','block']}><Links direction={'row'} /></Box>
        <Box display={['block','base','none']}><Hamburger direction='column' spacing='20' /></Box> 
      </Flex>
    
  );
}

export default Header