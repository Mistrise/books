import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Heading, Text, Box} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Ой, что то пошло не так!</Heading>
                <Text>{isRouteErrorResponse(error) ? 'Страница не найдена(((' : 'Произошла неожиданная ошибка'}</Text>
            </Box>
        </>
    )
}

export default ErrorPage