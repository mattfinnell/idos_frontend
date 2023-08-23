import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import LoginGate from "../Login/LoginGate";

type SignInButtonWithModalProps = {};
const SignInButtonWithModal: FC<SignInButtonWithModalProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Button
        as={"a"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        href={"#"}
        onClick={onOpen}
        _hover={{
          bg: "pink.300",
        }}
      >
        Login / Sign Up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login / Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginGate onSuccess={onClose} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default SignInButtonWithModal;