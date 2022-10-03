import { Link as RouterLink } from "react-router-dom";
import { Flex,Link,Box } from "@chakra-ui/react";

import Hamburger from "./Hamburger";
import Links from "./Links";

const Header = () => {
    return (
          <Flex
            align="center" justify={['space-around','space-between']}
            position="fixed"  top={0}   zIndex={2}
            minH="10vh" w={"full"}  px={['40px']}
            bgColor={"gray.900"} color="red.300"
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
            <Box  display={{ base: "none", md: "block" }}><Links direction={'row'} /></Box>
            <Box display={{ base: "block", md: "none" }}><Hamburger direction='column' spacing='20' /></Box> 
          </Flex>
    
     );
}

export default Header