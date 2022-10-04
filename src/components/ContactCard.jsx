import { Box, Center, Flex,Icon,Text } from "@chakra-ui/react"


const ContactCard = ({icon,heading,content}) => {
  return (
    <Flex gap={[2,4]} align='center'>
        <Center minW={'50px'} h='50px' rounded={'full'} bgColor={'gray.600'}>
        <Icon w={6} h={6} as={icon} color='red.300' />
        </Center>
        <Box alignSelf={'flex-start'}>
            <Text fontWeight={'bold'} fontSize={['18px','22px']}>{heading}</Text>
            <Text py={[4]}>{content}</Text>
        </Box>
    </Flex>
    )
}

export default ContactCard