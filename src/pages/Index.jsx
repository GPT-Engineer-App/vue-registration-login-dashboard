import React from "react";
import { ChakraProvider, Box, VStack, FormControl, FormLabel, Input, Button, Heading, Text, Divider } from "@chakra-ui/react";
import { FaUserCircle, FaLock, FaEnvelope, FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <Heading size="lg">Register</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="John Doe" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="johndoe@example.com" />
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" placeholder="123 Main St" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid">
            Register
          </Button>

          <Divider my={6} />

          <Heading size="lg">Login</Heading>
          <FormControl id="emailLogin">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="johndoe@example.com" />
          </FormControl>
          <FormControl id="passwordLogin">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} colorScheme="blue" variant="solid">
            Login
          </Button>

          <Divider my={6} />

          <Heading size="lg">Dashboard</Heading>
          <Text>Welcome, [User Name]!</Text>
          {/* User details would be displayed here after login */}
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="md">User Details</Heading>
            <Text>
              <FaUserCircle /> Name: [User Name]
            </Text>
            <Text>
              <FaEnvelope /> Email: [User Email]
            </Text>
            <Text>
              <FaHome /> Address: [User Address]
            </Text>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
