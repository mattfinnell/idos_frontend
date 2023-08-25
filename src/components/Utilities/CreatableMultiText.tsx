import {
  CreatableSelect,
  CreatableSelectComponent,
  MultiValue,
} from "chakra-react-select";
import React, { FC, KeyboardEventHandler } from "react";

import { Option } from "../../datatypes";

const components = {
  DropdownIndicator: null,
};

const createOption = (label: string) =>
  ({
    label,
    value: label,
  }) as Option<string>;

type CreatableMultiTextProps = {
  id: string;
  placeholder?: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
} & CreatableSelectComponent;

const CreatableMultiText: FC<CreatableMultiTextProps> = ({
  id,
  setFieldValue,
  placeholder = "",
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState<readonly Option<string>[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
      case ",":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        setFieldValue(id, value);
        event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      components={components}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={(newValue: MultiValue<Option<string>>) => setValue(newValue)}
      onInputChange={(newValue) => {
        setInputValue(newValue);
        setFieldValue(
          id,
          value.map((option: Option<string>) => option.value),
        );
      }}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default CreatableMultiText;
