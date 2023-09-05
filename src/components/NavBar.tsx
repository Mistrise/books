import {HStack} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import {Link} from "react-router-dom";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
      <HStack padding='10px'>
        <Link to='/'>
          <SearchInput/>
        </Link>
        <ColorModeSwitch />
      </HStack>
  )
}

export default NavBar