import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, ReactElement, ReactNode } from "react";
import { FcAbout, FcCollaboration, FcDonate, FcManager } from "react-icons/fc";
import { MdOutlineAudiotrack } from "react-icons/md";
import { useAuthentication } from "../../contexts/AuthContext";
import SignInButton from "../Login/SignInButton";
import VideoForm from "./VideoForm";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  form?: ReactNode;
}

const Card = ({ heading, description, icon, form }: CardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      onClick={onOpen}
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex bg="gray.100" align="center" justify="center">
              <Box bg="white" p={4} rounded="md">
                {form}
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

type ContributeProps = {};
const Contribute: FC<ContributeProps> = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Contribute
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Feel as though there are some Edits left out from the archives? Been
          able to find that one obscure track used in a legendary part? Here's
          where you can share your findings to the rest of the community
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Video"}
            icon={<Icon as={MdOutlineAudiotrack} w={10} h={10} />}
            description={"Add a video from the archives from to the list"}
            form={<VideoForm />}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
};

type SignInPageProps = {};
const SignInPage: FC<SignInPageProps> = () => {
  return (
    <VStack>
      <Text fontSize="4xl">First Sign In to add some edits and knowledge</Text>
      <SignInButton user={null} />
    </VStack>
  );
};

type ContributeWrapperProps = {};
const ContributeWrapper: FC<ContributeWrapperProps> = () => {
  const user = useAuthentication();

  return user ? <Contribute /> : <SignInPage />;
};

export default ContributeWrapper;
