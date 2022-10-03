import {Flex,Text,Box} from "@chakra-ui/react"

const VisionCard = ({title,message}) => {
  return (
    <Box  p={[4]} color='white'  minH={'300px'} border='1px solid' borderColor={'red.300'} >
        <Text py={[4,5]} fontSize='2xl' fontWeight={'bold'}>{title}</Text>
        <Text>{message}</Text>
    </Box>
  )
}

export default VisionCard