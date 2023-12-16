import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
export default function NotFound() {
    return (
        <Stack
            h={'100vh'}
            textAlign="center"
            // bg={'red'}
            py={10} px={6}>
            <Box
                m={'auto'}
            >
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Page Not Found
                </Text>
                <Text color={'gray.500'} mb={6}>
                    {"The page you're looking for does not seem to exist"}
                </Text>

                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid"
                    onClick={() => history.back()}
                >
                    Go Back
                </Button>

            </Box>
        </Stack>
    );
}