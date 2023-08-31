import type { Meta, StoryObj } from "@storybook/react";
import { axiosReactQueryMutationFactory } from "../../mocks/data";
import CollapsableMutationError from "./CollapsableMutationError";

const meta = {
  title: "Application/CollapsableMutationError",
  component: CollapsableMutationError,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CollapsableMutationError>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {
    mutation: axiosReactQueryMutationFactory.build(),
  },
};

export const FieldWithNoErrors: Story = {
  args: {
    mutation: axiosReactQueryMutationFactory.build(
      {},
      { transient: { errors: { foo: [] as Array<string> } } },
    ),
  },
};

export const FieldWithASingleError: Story = {
  args: {
    mutation: axiosReactQueryMutationFactory.build(
      {},
      { transient: { errors: { foo: ["Error String"] as Array<string> } } },
    ),
  },
};

export const FieldWithManyErrors: Story = {
  args: {
    mutation: axiosReactQueryMutationFactory.build(
      {},
      {
        transient: {
          errors: { foo: ["Error One", "Error Two", "Error Three"] },
        },
      },
    ),
  },
};

export const ManyFieldsWithManyErrors: Story = {
  args: {
    mutation: axiosReactQueryMutationFactory.build(
      {},
      {
        transient: {
          errors: {
            foo: ["Error One", "Error Two"],
            bar: ["Thing", "Stuff", "Items"],
            baz: ["I just have one Error"],
          },
        },
      },
    ),
  },
};
