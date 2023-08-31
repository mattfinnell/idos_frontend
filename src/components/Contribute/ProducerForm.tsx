import {
  Button,
  Flex,
  FormControl,
  Input,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Field, Formik } from "formik";
import { FC } from "react";
import * as yup from "yup";
import CreatableMultiText from "../Utilities/CreatableMultiText";

import { useMutation } from "@tanstack/react-query";
import apiCalls, { CreateProducerRequestType } from "../../api/apiCalls";
import { Option } from "../../datatypes";
import CollapsableMutationError from "../Utilities/CollapsableMutationError";
import { activities } from "./contributeEnums";

const validationSchema = yup.object().shape({
  name: yup.string().required("required"),
  activityTypes: yup.array().min(1, "Select at least one"),
});

type FormikValueType = {
  name: "";
  activityTypes: [];
  staff: [];
};

const initialValues: FormikValueType = {
  name: "",
  activityTypes: [],
  staff: [],
};

const activityOptions: Array<Option<string>> = activities.map(
  (activity: string) => ({
    label: activity,
    value: activity.replaceAll(" ", ""),
  }),
);

const producerFormDataMapper = (
  formData: FormikValueType,
): CreateProducerRequestType => ({
  ...formData,
  sport_type: formData.activityTypes,
});

type ProducerFormProps = {};
const ProducerForm: FC<ProducerFormProps> = () => {
  const mutation = useMutation({
    mutationFn: (data: FormikValueType) =>
      apiCalls.createProducer(producerFormDataMapper(data)),
  });

  return (
    <Flex bg="white" align="center" justify="center" p={8}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (data: FormikValueType) => mutation.mutate(data)}
      >
        {({ handleSubmit, setFieldValue, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} minWidth="400px">
              <FormControl borderColor={errors.name ? "red.400" : undefined}>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Producer Name"
                />
              </FormControl>
              <FormControl
                background={
                  (errors.activityTypes ?? "").length > 0 ? "pink" : undefined
                }
              >
                <Field
                  as={Select}
                  isMulti
                  id="sport_types"
                  name="sport_types"
                  placeholder="Activites Covered"
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
                  placeholder="Staff Members (optional)"
                  setFieldValue={setFieldValue}
                  id="staff"
                  name="staff"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isDisabled={mutation.isLoading}
              >
                {mutation.isLoading ? <Spinner /> : "Submit"}
              </Button>
              <CollapsableMutationError mutation={mutation} />
            </VStack>
          </form>
        )}
      </Formik>
    </Flex>
  );
};

export default ProducerForm;
