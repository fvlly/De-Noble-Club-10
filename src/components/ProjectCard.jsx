import {Text,Box,Center,Button,Image} from '@chakra-ui/react'

const ProjectCard = ({description,src,intro}) => {
  return (
    <Box w={['300px','400px']} minH={'400px'}  position={'relative'} rounded={12} border='1px solid' mb={4}>
        <Box p='4' rounded={10}>
        <Image h={'200px'} w="100%" src={src} />

          </Box>        
        <Box py={1} px='4'>
            <Text fontWeight={'bold'} fontSize="20px">{description}</Text>
            <Text py={2} fontSize="18px">{intro}</Text>
        </Box>
    </Box>
  )
}

export default ProjectCard