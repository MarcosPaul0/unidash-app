export const APP_ROUTES = {
  private: {
    dashboard: "/dashboard",
    course: "/course/list",
    editCourse: "/course/edit",
    registerCourse: "/course/register",
    student: "/student/list",
    editStudent: "/student/edit",
    registerStudent: "/student/register",
    teacher: "/teacher/list",
    editTeacher: "/teacher/edit",
    registerTeacher: "/teacher/register",
  },
  public: {
    login: "/login",
    forgotPassword: "/forgot-password",
    recoverPassword: "/recover-password",
  },
} as const;
