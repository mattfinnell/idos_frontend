import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import VideoForm from "./VideoForm";

const meta = {
  title: "Application/VideoForm",
  component: VideoForm,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    // routes: RouteType,
    // user: User | null,
  },
} satisfies Meta<typeof VideoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {
    routes: [],
    user: null,
  },
};
