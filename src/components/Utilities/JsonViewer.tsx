import { Text } from "@chakra-ui/react";
import { FC } from "react";

// Pulled from here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
const getCircularReplacer = () => {
  const ancestors: any[] = [];
  return function (key: any, value: any) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
    // @ts-ignore
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return "[Circular]";
    }
    ancestors.push(value);
    return value;
  };
};

type JsonViewerProps = { data: object };
const JsonViewer: FC<JsonViewerProps> = ({ data }) => {
  return (
    <Text align="left">
      <pre>{JSON.stringify(data, getCircularReplacer(), 2)}</pre>
    </Text>
  );
};

export default JsonViewer;
