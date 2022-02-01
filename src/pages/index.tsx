import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ArticleBox from "../components/ArticleBox";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Index: React.FC = () => {
  return (
    <Layout>
      <Flex maxH="40%">
        <Hero />
      </Flex>
      <Text fontSize={20} fontStyle={"italic"} color={"blackAlpha.600"} mb={4}>
        Featured articles
      </Text>
      <Flex
        justifyContent={"space-between"}
        px={4}
        pb={4}
        maxHeight="50%"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        <ArticleBox
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione rem voluptates, delectus obcaecati est ea aperiam ut perferendis eligendi expedita exercitationem. Omnis reiciendis necessitatibus sunt quae tempora, soluta dignissimos explicabo?"
          imageSrc="https://doodleipsum.com/300x300/hand-drawn?i=e1a9036395474ff1cf5bd6a01a014da7"
        />
        <ArticleBox
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione rem voluptates, delectus obcaecati est ea aperiam ut perferendis eligendi expedita exercitationem. Omnis reiciendis necessitatibus sunt quae tempora, soluta dignissimos explicabo?"
          imageSrc="https://doodleipsum.com/300x300/hand-drawn?i=e1a9036395474ff1cf5bd6a01a014da7"
        />
      </Flex>
    </Layout>
  );
};

export default Index;
