import { FC } from "react";
import Confetti from "../Confetti/Confetti";
import ContributeWrapper from "../Contribute/Contribute";
import Multistep from "../Contribute/Reference";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";

export type RouteType = {
  label: string;
  subLabel?: string;
  children?: Array<RouteType>;
  path: string;
  component: FC<any>;
  authRequired?: boolean;
};

export const routes: Array<RouteType> = [
  {
    label: "IDOS",
    path: "/",
    component: Home,
  },
  {
    label: "Search",
    path: "/search",
    component: Search,
  },
  {
    label: "Contribute",
    path: "/contribute",
    component: ContributeWrapper,
    authRequired: false,
  },
  {
    label: "Profile",
    path: "/profile",
    component: Profile,
    authRequired: true,
  },
  {
    label: "Confetti",
    path: "/confetti",
    component: Confetti,
    authRequired: true,
  },
  {
    label: "Reference",
    path: "/reference",
    component: Multistep,
    authRequired: true,
  },
].map((route) => ({ ...route, hidden: route.authRequired === true }));
