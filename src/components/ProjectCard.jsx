import {Text,Box,Center,Button} from '@chakra-ui/react'

const ProjectCard = ({description}) => {
  return (
    <Box minW={'300px'}  position={'relative'} border='1px solid'>
        <Box minH={'150px'} borderBottom='1px dotted'>Image</Box>
        <Box pos={'absolute'} top='40%' left={'50%'}>Icon</Box>
        <Center>
            <Text fontWeight={'bold'}>{description}</Text>
        </Center>
    <Button w={'full'}>Learn More</Button>
    </Box>
  )
}

export default ProjectCard