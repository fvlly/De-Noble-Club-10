import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@chakra-ui/react'

const LinkButton = ({text,to,bgColor,color,px,py,rounded}) => {
  return (
        <Link as={RouterLink} to={to}
         px={px} py={py} rounded={rounded}
        bgColor={bgColor} color={color}
        _hover={{textDecoration:'none',transform:'scale(1.1)'}}
        >
            {text}
        </Link>
    )
}

export default LinkButton