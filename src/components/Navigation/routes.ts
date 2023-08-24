import { FC } from "react";
import Confetti from "../Confetti/Confetti";
import HealthCheck from "../HealthCheck/HealthCheck";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";

export type RouteType = {
  label: string;
  subLabel?: string;
  children?: Array<RouteType>;
  path: string;
  component: FC<any>;
  hidden?: boolean;
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
    label: "Health Check",
    path: "/health_check",
    component: HealthCheck,
  },
  {
    label: "Profile",
    path: "/profile",
    component: Profile,
  },
  {
    label: "Confetti",
    path: "/confetti",
    component: Confetti,
    hidden: true,
  },
].map((route) => ({ ...route, hidden: route.hidden === true }));
