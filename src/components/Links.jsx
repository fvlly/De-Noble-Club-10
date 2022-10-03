import { Stack,Link,Center} from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'
const Links = ({direction,handleClick}) => {
  return (
        <Stack direction={direction} spacing={8} color='red.300'  sx={{
            a: {
              _hover: {
                color: "white",
                textDecoration: "none",
              },
            },
          }}>
            <Center>
                <Link as={RouterLink} to='/About' onClick={handleClick} >About</Link>
            </Center>
            <Center>
                <Link as={RouterLink} to='/awareness' onClick={handleClick} >Awareness</Link>
            </Center>
            <Center>
                <Link as={RouterLink} to='/projects' onClick={handleClick} >Projects</Link>
            </Center>
            <Center>
                <Link as={RouterLink} to='/contact' onClick={handleClick} >Contact</Link>
            </Center>
        </Stack>
    )
}

export default Links