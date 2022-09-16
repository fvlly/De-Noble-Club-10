import { Stack,Link,Center} from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'
const Links = ({direction}) => {
  return (
        <Stack direction={direction} spacing={8} color='red.300'>
            <Center>
                <Link as={RouterLink} to='/About' >About</Link>
            </Center>
            <Center>
                <Link as={RouterLink} to='/awareness' >Awareness</Link>
            </Center>
            <Center>
                <Link as={RouterLink} to='/projects' >Projects</Link>
            </Center>
            <Center>
                <Link as={RouterLink} to='/contact' >Contact</Link>
            </Center>
        </Stack>
    )
}

export default Links