import React from "react";
import { Image, Text } from "@chakra-ui/react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <Text fontSize={48} fontWeight="bold" marginTop="128px">
        Unclutter
        <br />
        your mind.
      </Text>
      <Image src="https://doodleipsum.com/500x500/flat?i=042c8576c15db0c6506f27e0736510a5" />{" "}
    </>
  );
};

export default Hero;
