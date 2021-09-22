import { AuthLogin, AuthRegister } from "./index";

console.log("AuthLogin", AuthLogin);

export const authRouter = [
  {
    path: "/login",
    component: <AuthLogin />,
    private: false,
  },
  {
    path: "/register",
    component: <AuthRegister />,
    private: false,
  },
];
