import { Button, Container, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <Container height="100vh" maxW="container.lg" centerContent paddingY={2}>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => router.push("/")}>Home</Button>
        <Button onClick={() => router.push("/login")}>Login</Button>
      </Stack>
      {children}
      <DarkModeSwitch />
    </Container>
  );
};

export default Layout;
