import { Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import HealthCheck from "../HealthCheck/HealthCheck";

type HomeProps = {};
const Home: FC<HomeProps> = () => {
  return (
    <VStack>
      <Heading>Home</Heading>
      <HealthCheck />
    </VStack>
  );
};

export default Home;
