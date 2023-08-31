import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import mockedProducersCalls from "../../mocks/mockedProducersCalls";
import ProducerForm from "./ProducerForm";

const queryClient = new QueryClient();

const meta = {
  title: "Application/ProducerForm",
  component: ProducerForm,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    msw: {
      handlers: [mockedProducersCalls],
    },
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ProducerForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {},
};
