import { AuthLogin } from "./index";

export const authRouter = [
  {
    path: "/login",
    component: <AuthLogin />,
    private: false,
  },
  {
    path: "/register",
    component: () => {},
    private: false,
  },
];
