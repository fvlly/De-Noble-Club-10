import { useRef } from "react";
import {Drawer,DrawerBody,DrawerOverlay,DrawerContent,DrawerCloseButton,Box,Icon,useDisclosure,Button} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Links from "./Links";


const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={{ base: "flex", md: "none" }}>
      <Button bgColor={'gray.700'} ref={btnRef} onClick={onOpen} >
        <Icon as={GiHamburgerMenu}  w={6} h={6}  />
      </Button>
      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.800">
          <DrawerCloseButton color={'gray.300'}>
            <Icon as={AiOutlineClose} w={6} h={6} />
          </DrawerCloseButton>
          <DrawerBody display={'flex'} flexDirection='column' justifyContent='center' fontSize={'24px'}  >
            <Links direction='column' handleClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};



export default Hamburger;
