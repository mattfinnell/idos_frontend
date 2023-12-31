import { Button, Stack, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";

import { User } from "firebase/auth";
import LoginModal from "./LoginModal";

type SignInButtonProps = { user: User | null };
const SignInButton: FC<SignInButtonProps> = ({ user }) => {
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
        {user?.email ?? "Login / Sign Up"}
      </Button>
      <LoginModal
        isOpen={isOpen}
        onClose={onClose}
        onSuccess={() => {
          onClose();
        }}
      />
    </Stack>
  );
};

export default SignInButton;
