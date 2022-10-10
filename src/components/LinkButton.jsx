import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const LinkButton = ({ text, to, bgColor, color, w, h, px, py, rounded }) => {
  return (
    <Link
      display="flex"
      justifyContent={'center'}
      alignItems='center'
      as={RouterLink}
      to={to}
      px={px}
      py={py}
      rounded={rounded}
      w={w}
      h={h}
      border="3px solid"
      borderColor={bgColor}
      outline="3px solid white"
      bgColor={bgColor}
      color={color}
      transition="outlineOffset 250ms ease"
      _hover={{
        textDecoration: "none",
        outlineOffset: "-5px",
      }}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
