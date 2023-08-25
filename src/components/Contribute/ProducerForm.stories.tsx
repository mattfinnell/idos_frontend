import type { Meta, StoryObj } from "@storybook/react";
import ProducerForm from "./ProducerForm";

const meta = {
  title: "Application/ProducerForm",
  component: ProducerForm,
  decorators: [],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ProducerForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {},
};
