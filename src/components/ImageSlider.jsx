import { Box, Icon,Flex } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {BsDot} from 'react-icons/bs'
import { communityImages } from "../images";

const ImageSlider = ({ images }) => {

 const [currentIndex,setCurrentIndex] = useState(0)
  
  return (
    <Box>
    <Box
      cursor={'pointer'}
      pos="relative" w={"400px"} h="400px"
      border={"1px solid"} rounded={10}
      bgImg={images[currentIndex].src} bgPos="center" bgSize={"cover"}
    >
      <Icon
        onClick={()=>previousSlide()}
        as={AiFillCaretLeft}
        pos="absolute" top={"50%"} transform="translate(0, -50%)"
        w={8} h={8}
      />
      <Icon
        onClick={()=>nextSlide()}
        as={AiFillCaretRight}
        pos="absolute" top={"50%"} transform="translate(0, -50%)" right={"1.5"}
        w={8} h={8}
      />
       <Flex gap={4} justify='center' pos='absolute' transform="translate(60%)"  bottom='-40px' >{images.map((image,slideIndex) =>{
            const currentSlide = currentIndex === slideIndex
        return(
            <Icon as={BsDot} key={slideIndex} onClick={()=>selectSlide(slideIndex)} w='8' h='8' color={currentSlide ? 'red.300':'gray.300'}  />
        )
    })}
    </Flex>
    </Box>
   
    </Box>
  );

  function previousSlide() {
    const isFirstSlide = currentIndex=== 0
    const newIndex = isFirstSlide ? communityImages.length-1 : currentIndex -1
    setCurrentIndex(newIndex)
  }
  function nextSlide() {
    const isLastSlide = currentIndex=== communityImages.length-1
    const newIndex = isLastSlide ? 0 : currentIndex +1
    setCurrentIndex(newIndex)

  }

  function selectSlide(index) {
    setCurrentIndex(index)
  }
};

export default ImageSlider;
