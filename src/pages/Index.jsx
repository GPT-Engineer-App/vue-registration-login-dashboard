import React, { useState } from "react";
import { ChakraProvider, Box, VStack, FormControl, FormLabel, Input, Button, Heading, Text, Divider } from "@chakra-ui/react";
import { FaUserCircle, FaLock, FaEnvelope, FaHome, FaSignInAlt, FaUserPlus, FaGoogle, FaLinkedin, FaGithub, FaSave } from "react-icons/fa";

const Index = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };
  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <Heading size="lg">Register</Heading>
          <FormControl id="emailRegister">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="johndoe@example.com" />
          </FormControl>
          <FormControl id="passwordRegister">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid">
            Register with Email
          </Button>
          <Button leftIcon={<FaGoogle />} colorScheme="red" variant="solid">
            Register with Google
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid">
            Register with LinkedIn
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
            Register with GitHub
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
          <Button variant="link" colorScheme="blue" size="sm" onClick={() => (window.location.href = "/forgot-password")}>
            Forgot Password?
          </Button>
          <Button leftIcon={<FaGoogle />} colorScheme="red" variant="solid">
            Login with Google
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid">
            Login with LinkedIn
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
            Login with GitHub
          </Button>

          <Divider my={6} />

          <Heading size="lg">Dashboard</Heading>
          <Text>Welcome, [User Name]!</Text>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="md">User Details</Heading>
            {profilePicture && (
              <Box mt={4}>
                <img src={URL.createObjectURL(profilePicture)} alt="Profile Picture" />
              </Box>
            )}
            <Text>
              <FaEnvelope /> Email: [User Email]
            </Text>
          </Box>

          <Heading size="md">Update Profile</Heading>
          <FormControl id="profilePictureUpdate">
            <FormLabel>Profile Picture</FormLabel>
            <Input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </FormControl>
          <FormControl id="nameUpdate">
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="John Doe" />
          </FormControl>
          <FormControl id="addressUpdate">
            <FormLabel>Address</FormLabel>
            <Input type="text" placeholder="123 Main St" />
          </FormControl>
          <Button leftIcon={<FaSave />} colorScheme="blue" variant="solid">
            Save Changes
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
