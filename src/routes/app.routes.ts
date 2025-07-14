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

    courseIndicator: "/courseIndicator/list",
    registerCourseIndicator: "/courseIndicator/register",

    courseComplementaryActivities:
      "/courseComplementaryActivitiesIndicator/list",
    registerCourseComplementaryActivitiesIndicator:
      "/courseComplementaryActivitiesIndicator/register",

    courseCompletionWorkIndicator: "/courseCompletionWorkIndicator/list",
    registerCourseCompletionWorkIndicator:
      "/courseCompletionWorkIndicator/register",

    courseCoordinationIndicator: "/courseCoordinationIndicator/list",
    registerCourseCoordinationIndicator:
      "/courseCoordinationIndicator/register",

    courseExtensionActivitiesIndicator:
      "/courseExtensionActivitiesIndicator/list",
    registerCourseExtensionActivitiesIndicator:
      "/courseExtensionActivitiesIndicator/register",

    courseInternshipIndicator: "/courseInternshipIndicator/list",
    registerCourseInternshipIndicator: "/courseInternshipIndicator/register",

    studentEgressIndicator: "/studentEgressIndicator/list",
    registerStudentEgressIndicator: "/studentEgressIndicator/register",

    studentIngressIndicator: "/studentIngressIndicator/list",
    registerStudentIngressIndicator: "/studentIngressIndicator/register",
  },
  public: {
    login: "/login",
    forgotPassword: "/forgot-password",
    recoverPassword: "/recover-password",
  },
} as const;
