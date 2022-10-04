import {Text,Box,Image} from '@chakra-ui/react'
import LinkButton from "./LinkButton";


const ProjectCard = ({description,src,intro}) => {
  return (
    <Box w={['300px','400px','450px','600px']} minH={'400px'}  position={'relative'} rounded={12} border='1px solid' mb={4}>
        <Box p='4' rounded={10}>
        <Image h={'200px'} w="100%" src={src} loading='lazy' />

          </Box>        
        <Box py={1} px='4'>
            <Text fontWeight={'bold'} fontSize="20px">{description}</Text>
            <Text py={2} fontSize="18px">{intro}</Text>
        </Box>
        <Box px={4} my={4}>
            <LinkButton
              text="View More"
              to="/projects"
              px={[8]}
              py={[2.5]}
              rounded={10}
              bgColor="red.500"
              color="white"
            />
          </Box>
    </Box>
  )
}

export default ProjectCard