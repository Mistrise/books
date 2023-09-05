import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

const SearchInput = () => {

    const ref = useRef<HTMLInputElement>(null);
    // const setSearchText = useGameQueryStore(s => s.setSearchText)
    const navigate = useNavigate()


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                // setSearchText(ref.current.value)
                navigate('/')
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder="Поиск книг" variant="filled" />
            </InputGroup>
        </form>
    )
}

export default SearchInput