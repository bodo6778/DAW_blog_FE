import { Box, Image, Text } from "@chakra-ui/react";

interface OwnProps {
  text: string;
  imageSrc: string;
}

const ArticleBox: React.FC<OwnProps> = ({ text, imageSrc }) => {
  return (
    <Box
      borderWidth="4px"
      borderRadius={40}
      borderColor="blackAlpha.800"
      w="48%"
    >
      <Image src={imageSrc} mx="auto" />
      <Text fontSize={20} fontWeight="bold" textAlign={"center"}>
        Learning to say no.
      </Text>
      <Box p="4">
        <Text fontSize={16}>{text}</Text>
      </Box>
    </Box>
  );
};

export default ArticleBox;
