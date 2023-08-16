import { FC } from "react";
import HealthCheck from "../HealthCheck/HealthCheck";
import Home from "../Home/Home";
import Search from "../Search/Search";

export type RouteType = {
  label: string;
  subLabel?: string;
  children?: Array<RouteType>;
  path: string;
  component: FC<any>;
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
];
