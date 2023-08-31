import {
  Box,
  CloseButton,
  Collapse,
  Flex,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { FC, useState } from "react";

type FieldErrorsProps = { fieldName: string; errors: Array<string> };
const FieldErrors: FC<FieldErrorsProps> = ({ fieldName, errors }) => {
  if (errors.length === 0) {
    return null;
  } else if (errors.length === 1) {
    return (
      <Text>
        Field <Text as="i">{fieldName}</Text> has the following error...{" "}
        <Text as="i">{errors[0]}</Text>.
      </Text>
    );
  }

  return (
    <Box>
      <Text>
        Field <Text as="i">{fieldName}</Text> has the following errors...
      </Text>
      <UnorderedList>
        {errors.map((error, index) => (
          <ListItem key={index}>
            <Text as="i">{error}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

type MutationErrorProps = {
  mutation: UseMutationResult<AxiosResponse<any, any>, unknown, any, unknown>;
};
const CollapsableMutationError: FC<MutationErrorProps> = ({ mutation }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const errors = mutation?.data?.data?.errors ?? {};
  const errorKeys = Object.keys(errors);

  return (
    <Collapse
      in={errorKeys.length > 0 && errors[errorKeys[0]].length > 0 && isOpen}
      animateOpacity
    >
      <Box p="8px" color="white" mt="4" bg="red.300" rounded="md" shadow="md">
        <Flex>
          <Spacer />
          <CloseButton onClick={() => setIsOpen(false)} />
        </Flex>
        <Box padding="0 24px 16px 24px">
          {Object.entries(errors).map(([key, value], index) => (
            <VStack spacing="24px">
              <FieldErrors
                key={index}
                fieldName={key ?? ""}
                errors={(value ?? []) as Array<string>}
              />
            </VStack>
          ))}
        </Box>
      </Box>
    </Collapse>
  );
};

export default CollapsableMutationError;

export { FieldErrors };
