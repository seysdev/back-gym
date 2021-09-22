import { UserTeacher, UserStudent } from "./index";

export const userRouter = [
  {
    path: "/teacher",
    component: <UserTeacher />,
    private: false,
  },
  {
    path: "/student",
    component: <UserStudent />,
    private: false,
  },
];
