import {Flex,Text,Box} from "@chakra-ui/react"

const VisionCard = ({title,message}) => {
  return (
    <Box  p={[4]} color='white' w={['300px','450px','600px']} minH={'300px'} border='1px solid' borderColor={'red.300'} >
        <Text py={[4,5]} fontSize='2xl' fontWeight={'bold'}>{title}</Text>
        <Text>{message}</Text>
    </Box>
  )
}

export default VisionCard