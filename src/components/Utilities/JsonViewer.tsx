import { Text } from "@chakra-ui/react";
import { FC } from "react";

type JsonViewerProps = { data: object };
const JsonViewer: FC<JsonViewerProps> = ({ data }) => {
  return (
    <Text align="left">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Text>
  );
};

export default JsonViewer;
