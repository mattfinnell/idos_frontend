import type { Meta, StoryObj } from "@storybook/react";
import { FieldErrors } from "./CollapsableMutationError";

const meta = {
  title: "Application/FieldErrors",
  component: FieldErrors,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FieldErrors>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: { fieldName: "foo", errors: [] },
};

export const SingleError: Story = {
  args: { fieldName: "foo", errors: ["lorem ipsum"] },
};

export const ManyErrors: Story = {
  args: { fieldName: "foo", errors: ["lorem ipsum", "sit dolor", "amet"] },
};

export const WithActualError: Story = {
  args: { fieldName: "name", errors: ['"asdf" already exists.'] },
};

export const ManyErrorsWithActualError: Story = {
  args: {
    fieldName: "foo",
    errors: ['"asdf" already exists.', "sit dolor", "amet"],
  },
};
