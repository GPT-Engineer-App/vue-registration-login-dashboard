import React from "react";
import { ChakraProvider, Box, VStack, FormControl, FormLabel, Input, Button, Heading } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <Heading size="lg">Forgot Password</Heading>
          <FormControl id="emailForgot">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="johndoe@example.com" />
          </FormControl>
          <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="solid">
            Reset Password
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ForgotPassword;
