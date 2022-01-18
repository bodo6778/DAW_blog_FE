import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../components/Layout";

const Login: React.FC = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputEmailChange = (e) => setInputEmail(e.target.value);
  const handleInputPasswordChange = (e) => setInputPassword(e.target.value);

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log({ inputEmail, inputPassword });
  };

  return (
    <Layout>
      <Box marginY="auto">
        <Stack spacing={2} align="center">
          <Text fontSize="32" color="ButtonText">
            Welcome!
          </Text>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={inputEmail}
              onChange={handleInputEmailChange}
            />

            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={inputPassword}
              onChange={handleInputPasswordChange}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit" onClick={submitForm}>
            Log In
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Login;
