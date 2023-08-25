import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Field, Formik } from "formik";
import { FC } from "react";
import * as yup from "yup";
import CreatableMultiText from "../Utilities/CreatableMultiText";
import { ActivityEnum } from "./contributeEnums";

import { Option } from "../../datatypes";

type FormikValueType = {
  name: string;
  activityTypes: Array<any>;
  staff: Array<string>;
};

const validationSchema = yup.object();
const initialValues: FormikValueType = {
  name: "",
  activityTypes: [],
  staff: [],
};

const activityOptions: Array<Option<string>> = Object.keys(ActivityEnum).map(
  (activity: string) =>
    ({
      value: activity,
      label: activity,
    }) as Option<string>,
);

type ProducerFormProps = {};
const ProducerForm: FC<ProducerFormProps> = () => {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="50vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({
            handleSubmit,
            setFieldValue,
            setValues,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    placeholder="Producer Title"
                  />
                </FormControl>
                <FormControl>
                  <Field
                    as={Select}
                    isMulti
                    id="sport_types"
                    name="sport_types"
                    placeholder={"Activites Covered"}
                    options={activityOptions}
                    onChange={(newValue: Array<Option<string>>) => {
                      setFieldValue(
                        "activityTypes",
                        newValue.map(
                          (valueLabel: Option<string>) => valueLabel.value,
                        ),
                      );
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Field
                    as={CreatableMultiText}
                    placeholder="Staff Members"
                    setFieldValue={setFieldValue}
                    id="staff"
                    name="staff"
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Done
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default ProducerForm;
