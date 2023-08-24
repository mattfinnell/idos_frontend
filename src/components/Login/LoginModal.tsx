import {
  Box,
  Button,
  Center,
  Checkbox,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Field, Formik } from "formik";
import { FC, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import {
  auth,
  facebookAuthProvider,
  firebaseErrors,
  googleAuthProvider,
} from "../../config/firebase";

type SocialSignInProps = {} & LoginModalProps;
const SocialSignIn: FC<SocialSignInProps> = ({
  onSuccess = () => {},
  onFailure = () => {},
}) => {
  const loginWithSocialSignIn = async (provider: AuthProvider) => {
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        console.log(userCredential.user);
        onSuccess();
      })
      .catch((error) => {
        console.log(error.status, error.message);
        onFailure();
      });
  };

  return (
    <VStack spacing={4} align="flex-start">
      <Button
        w={"full"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
        colorScheme="black"
        onClick={() => loginWithSocialSignIn(googleAuthProvider)}
      >
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>

      <Button
        w={"full"}
        variant={"outline"}
        colorScheme={"facebook"}
        leftIcon={<FaFacebook />}
        onClick={() => loginWithSocialSignIn(facebookAuthProvider)}
      >
        <Center>
          <Text>Sign in with Facebook</Text>
        </Center>
      </Button>
    </VStack>
  );
};

type EmailAndPasswordSignInProps = {} & LoginModalProps;
const EmailAndPasswordSignIn: FC<EmailAndPasswordSignInProps> = ({
  onSuccess = () => {},
  onFailure = () => {},
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  type FormikValueType = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  // TODO : This onSubmit handler looks like trash
  const onSubmitHandler = async (formValues: FormikValueType) => {
    setIsLoading(true);
    await createUserWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError("");
        onSuccess();
      })
      .catch((error) => {
        if (error.message.includes(firebaseErrors.emailAlreadyInUse)) {
          signInWithEmailAndPassword(
            auth,
            formValues.email,
            formValues.password,
          )
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
              setError("");
              onSuccess();
            })
            .catch((error) => {
              setError(error.message);
              onFailure();
            });
        } else {
          setError(error.message);
          onFailure();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Formik
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("No Password Provided")
          .min(8, "Password must be more than 8 characters long")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      onSubmit={onSubmitHandler}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.email && touched.email}>
              <Field
                placeholder="email"
                as={Input}
                id="email"
                name="email"
                type="email"
                variant="filled"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <Field
                placeholder="password"
                as={Input}
                id="password"
                name="password"
                type="password"
                variant="filled"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Field
              as={Checkbox}
              id="rememberMe"
              name="rememberMe"
              colorScheme="purple"
            >
              Remember me?
            </Field>
            <Box
              as={Collapse}
              in={error !== ""}
              animateOpacity
              width="100%"
              color="white"
              bg="red.300"
              rounded="md"
            >
              <Center>
                <Text>{error}</Text>
              </Center>
            </Box>
            <Button type="submit" colorScheme="purple" width="full">
              {isLoading ? <Spinner /> : "Login / Sign Up"}
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

type SignOutProps = {} & LoginModalProps;
const SignOut: FC<SignOutProps> = ({ onSuccess = () => {} }) => {
  const handleSignOut = () => auth.signOut().then(() => onSuccess());

  return (
    <Stack spacing={4}>
      <Center>
        <Heading lineHeight={1.1} fontSize={{ base: "1xl", md: "2xl" }}>
          Wish To Sign Out?
        </Heading>
      </Center>
      <Button
        bg={"red.400"}
        color={"white"}
        _hover={{
          bg: "red.500",
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </Stack>
  );
};

type LoginModalProps = {
  onSuccess?: () => void;
  onFailure?: () => void;
};
const LoginModal: FC<LoginModalProps> = ({
  onSuccess = () => {},
  onFailure = () => {},
}) => {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="75vh">
      <Box bg="white" p={4} rounded="md" w={64}>
        {auth.currentUser ? (
          <SignOut onSuccess={onSuccess} onFailure={onFailure} />
        ) : (
          <VStack>
            <SocialSignIn onSuccess={onSuccess} onFailure={onFailure} />
            <Divider />
            <EmailAndPasswordSignIn
              onSuccess={onSuccess}
              onFailure={onFailure}
            />
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default LoginModal;
