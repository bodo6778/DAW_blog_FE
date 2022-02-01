import { Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <Container
      margin="0"
      height="100vh"
      maxW="100vw"
      bgGradient="linear-gradient(0deg, rgba(209,209,209,1) 0%, rgba(236,236,236,1) 35%, rgba(250,250,250,1) 100%)"
      paddingY={4}
    >
      <Container
        height="100%"
        maxW="container.lg"
        centerContent
        paddingY={4}
        paddingX={6}
        borderWidth="4px"
        borderRadius={40}
        borderColor="blackAlpha.800"
        backgroundColor="white"
      >
        <Flex justifyContent="space-between" width="100%">
          <Text fontSize={20} fontWeight="bold">
            Blogger.
          </Text>
          <Stack direction="row" spacing={4}>
            <Button
              _focus={{
                outline: "none",
              }}
              color="black"
              fontSize={20}
              variant="link"
              onClick={() => router.push("/")}
            >
              Home
            </Button>
            <Button
              _focus={{
                outline: "none",
              }}
              color="black"
              fontSize={20}
              variant="link"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              _focus={{
                outline: "none",
              }}
              color="black"
              fontSize={20}
              variant="link"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </Stack>
        </Flex>

        {children}
        <DarkModeSwitch />
      </Container>
    </Container>
  );
};

export default Layout;
