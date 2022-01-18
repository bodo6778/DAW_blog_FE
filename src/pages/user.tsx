import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const User = () => (
  <Container height="100vh">
    <Main></Main>

    <DarkModeSwitch />
    <Footer></Footer>
  </Container>
);

export default User;
