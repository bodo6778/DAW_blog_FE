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
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../components/Layout";

const Login: React.FC = () => {
  const router = useRouter();

  const [email, setInputEmail] = useState("");
  const [password, setInputPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputEmailChange = (e) => setInputEmail(e.target.value);
  const handleInputPasswordChange = (e) => setInputPassword(e.target.value);

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    router.push("/");
  };

  return (
    <Layout>
      <Box marginY="auto">
        <Stack spacing={2} align="center">
          <Text fontSize="32" color="ButtonText">
            Welcome back!
          </Text>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleInputEmailChange}
            />

            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
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
