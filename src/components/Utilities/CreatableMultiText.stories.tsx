import type { Meta, StoryObj } from "@storybook/react";
import CreatableMultiText from "./CreatableMultiText";

const meta = {
  title: "Application/CreatableMultiText",
  component: CreatableMultiText,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CreatableMultiText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {
    placeholder: "Placeholder Text",
    id: "foo",
    setFieldValue: (fieldName: string, newValue) => {},
  },
};
