import { Box, Icon,Flex } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { communityImages } from "../images";

const ImageSlider = ({ images }) => {

 const [currentIndex,setCurrentIndex] = useState(0)
  
  return (
    <Box>
    <Box
      cursor={'pointer'}
      pos="relative" w={['300px',"350px","450px",]} h="400px"
      border={"1px solid"} rounded={10}
      bgImg={images[currentIndex].src} bgPos="center" bgSize={"cover"}
    >
        {/* previous Button */}
      <Icon
        onClick={()=>previousSlide()}
        as={AiFillCaretLeft}
        pos="absolute" top={"50%"} transform="translate(0, -50%)"
        w={8} h={8}
      />
      {/* Next Button */}
      <Icon
        onClick={()=>nextSlide()}
        as={AiFillCaretRight}
        pos="absolute" top={"50%"} transform="translate(0, -50%)" right={"1.5"}
        w={8} h={8}
      />
       <Flex  justify='space-between' w={'100%'}
              pos='absolute' transform="translate(0)"  bottom='-20px' >
          {images.map((image,slideIndex) => {
            const currentSlide = currentIndex === slideIndex
            return(
              <Box  key={slideIndex} onClick={()=>selectSlide(slideIndex)}
                   w={[10]} h={[1]}  rounded={10} 
                   bgColor={currentSlide ? 'red.300':'gray.300'}  />
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
