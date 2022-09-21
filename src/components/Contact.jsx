import {Box,Container,Heading,Text,Textarea,Input,FormLabel,FormControl, Button} from '@chakra-ui/react'
import {GoLocation} from 'react-icons/go'
import {AiFillPhone,AiOutlineMail} from 'react-icons/ai'

import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <Box as="section" minH={"95vh"} pt="110px" bgColor={"gray.900"}>
    <Container maxW={["90vw","75vw"]} lineHeight={[1.2, 1.5]} color="white">
    <Heading py={[4, 6]} color='red.300'>Contact Us</Heading>
    <Box display='flex' flexDirection={['column','column','row']} gap={[4,10]} >
        <Box  width={['full','full','50%']} >
            <Heading as={'h3'} py='6'>Leave  a message</Heading>
            <form>
               <FormControl>
               <FormLabel>Name</FormLabel>
                <Input />
               </FormControl>
               <FormControl>
               <FormLabel>Email</FormLabel>
                <Input />
               </FormControl>
               <FormControl>
               <FormLabel>Subject</FormLabel>
                <Input />
               </FormControl>
               <FormControl>
               <FormLabel>Message</FormLabel>
                <Textarea />
               </FormControl>
               <Button my={6} type='submit' colorScheme={'red'}>Send Message</Button>
            </form>
        </Box>
        <Box>
            <Heading as='h3' py={6}>Contact Details</Heading>
            <ContactCard heading='Our Location' content="Kogi Central Senatorial District,<br /> Okene,Kogi,Nigeria" icon={GoLocation } />
            <ContactCard heading='Call Us' content="+234 335 456 12" icon={AiFillPhone } />
            <ContactCard heading='Our Email' content="nobleclub10@xyz.com" icon={AiOutlineMail } />
        </Box>
    </Box>
        </Container>
    </Box>
    )
}

export default Contact