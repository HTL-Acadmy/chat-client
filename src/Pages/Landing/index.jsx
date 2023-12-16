import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function ComponentPage() {

    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"100vh"}
        >

            <Link to="/chat">
                <Button
                    colorScheme={"teal"}
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid"
                >
                    Chat
                </Button>
            </Link>
        </Box>
    )

}