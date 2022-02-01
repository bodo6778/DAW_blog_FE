import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../components/Layout";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const handleInputNameChange = (e) => setName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleInputPasswordChange = (e) => setPassword(e.target.value);

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    router.push("/login");
  };

  return (
    <Layout>
      <Box marginY="auto">
        <Stack spacing={2} align="center">
          <Text fontSize="32" color="ButtonText">
            Create an account:
          </Text>
          <FormControl isInvalid={isError} onSubmit={submitForm}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="name"
              value={name}
              onChange={handleInputNameChange}
            />
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

export default Register;
