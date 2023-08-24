import {
  Button,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { FC, useState } from "react";
import * as Yup from "yup";
import JsonViewer from "../Utilities/JsonViewer";
import { ActivityEnum, VideoEnum } from "./contributeEnums";

const inputSpacing = 2;

type VideoFormProps = {};
const VideoForm: FC<VideoFormProps> = () => {
  type FormikVideoType = {
    name: string;
    year_released?: number;
    link: string;
    length?: number;
    type: VideoEnum | undefined;
    activity: ActivityEnum | undefined;
  };

  const initialValues: FormikVideoType = {
    name: "",
    year_released: undefined,
    link: "",
    length: undefined,
    type: undefined,
    activity: undefined,
  };
  const [data, setData] = useState<FormikVideoType | undefined>();
  const doSomething = (inputs: FormikVideoType) => {
    setData(inputs);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={doSomething}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Required"),
        year_released: Yup.number().required("Required"),
        link: Yup.string().required("Required"),
      })}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack>
            <Grid templateColumns="repeat(4, 1fr)" gap={inputSpacing}>
              <GridItem colSpan={3}>
                <FormControl>
                  <Field
                    placeholder="Name of Video"
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <Field
                    placeholder="Year"
                    as={Input}
                    id="year_released"
                    name="year_released"
                    type="number"
                  />
                  <FormErrorMessage>{errors.year_released}</FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(4, 1fr)" gap={inputSpacing}>
              <GridItem colSpan={3}>
                <FormControl>
                  <Field
                    placeholder="Producer"
                    as={Input}
                    id="producer"
                    name="producer"
                    type="text"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <Field
                    placeholder="length"
                    as={Input}
                    id="length"
                    name="length"
                    type="text"
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <FormControl as={GridItem} colSpan={[3, 2]}>
              <InputGroup>
                <InputLeftAddon
                  bg="gray.50"
                  _dark={{
                    bg: "gray.800",
                  }}
                  color="gray.500"
                  rounded="md"
                >
                  http://
                </InputLeftAddon>
                <Input
                  type="text"
                  id="link"
                  name="link"
                  placeholder="www.link-to-vid.com"
                  focusBorderColor="brand.400"
                  rounded="md"
                />
              </InputGroup>
              <FormErrorMessage>{errors.link}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Select
                id="video_type"
                name="video_type"
                autoComplete="video_type"
                placeholder="Video Type"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                {Object.keys(VideoEnum).map((video_type) => (
                  <option>{video_type}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                id="activity_type"
                name="activity_type"
                autoComplete="activity_type"
                placeholder="Activity Type"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                {Object.keys(ActivityEnum).map((video_type) => (
                  <option>{video_type}</option>
                ))}
              </Select>
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Add Riders and Songs
            </Button>
            {data ? <JsonViewer data={data} /> : null}
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default VideoForm;
