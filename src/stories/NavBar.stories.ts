import type { Meta, StoryObj } from "@storybook/react";
import { User } from "firebase/auth";
import { Factory } from "fishery";
import { withRouter } from "storybook-addon-react-router-v6";
import { Bar, Baz, Foo } from "../components/Mocks/DumbComponents";
import NavBar from "../components/Navigation/NavBar";

const meta = {
  title: "Application/Navbar",
  component: NavBar,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    // routes: RouteType,
    // user: User | null,
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const userFactory = Factory.define<User>(() => ({}) as User);
const userWithEmail = userFactory.build({ email: "foo@gmail.com" });
const routes = [
  {
    label: "IDOS",
    path: "/",
    component: Foo,
  },
  {
    label: "Search",
    path: "/search",
    component: Bar,
  },
  {
    label: "Contribute",
    path: "/contribute",
    component: Baz,
  },
  {
    label: "Login Required",
    path: "/contribute",
    component: Baz,
    authRequired: true,
  },
].map((route) => ({ ...route, hidden: route.authRequired === true }));

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {
    routes: [],
    user: null,
  },
};

export const LoggedIn: Story = {
  args: {
    routes: [],
    user: userWithEmail,
  },
};

export const PopulatedNav: Story = {
  args: {
    routes,
    user: null,
  },
};

export const LoggedInWithPopulatedNav: Story = {
  args: {
    routes,
    user: userWithEmail,
  },
};
