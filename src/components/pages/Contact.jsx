import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Box,Container,Heading,Text,Textarea,Input,FormLabel,FormControl, Button} from '@chakra-ui/react'
import {GoLocation} from 'react-icons/go'
import {AiFillPhone,AiOutlineMail} from 'react-icons/ai'

import ContactCard from '../ContactCard'

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY)
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Box as="section" minH={"95vh"} pt="110px" bgColor={"gray.900"}>
    <Container maxW={["90vw","75vw","90vw",'75vw']} lineHeight={[1.2, 1.5]} color="white">
    <Heading py={[4, 6]} color='red.300'>Contact Us</Heading>
    <Box display='flex' flexDirection={['column','column','row']} gap={[4,10]} >
        <Box  width={['full','full','70%','50%']} >
            <Heading as={'h3'} py='6'>Leave  a message</Heading>
            <form ref={form} onSubmit={sendEmail}>
               <FormControl>
               <FormLabel>Name</FormLabel>
                <Input name='user_name' required />
               </FormControl>
               <FormControl>
               <FormLabel>Email</FormLabel>
                <Input name='user_email' required />
               </FormControl>
               <FormControl>
               <FormLabel>Subject</FormLabel>
                <Input required />
               </FormControl>
               <FormControl>
               <FormLabel>Message</FormLabel>
                <Textarea name='message' required />
               </FormControl>
               <Button my={6} type='submit' colorScheme={'red'}>Send Message</Button>
            </form>
        </Box>
        <Box pb={4}>
            <Heading as='h3' py={4}>Contact Details</Heading>
            <ContactCard heading='Our Location' content={" Afims Hotels Ltd,\nOro,Ovehira Lagos Highway, \nOkene, Kogi, Nigeria."} icon={GoLocation } />
            <ContactCard heading='Call Us' content="+2348065472020, +2348036133399" icon={AiFillPhone } />
            <ContactCard heading='Our Email' content="denobleclub10kogi@gmail.com" icon={AiOutlineMail } />
        </Box>
    </Box>
        </Container>
    </Box>
    )
}

export default Contact