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

    indicator: "/indicator",

    courseIndicator: "/indicator/courseIndicator",
    registerCourseIndicator: "/indicator/courseIndicator/register",

    courseComplementaryActivitiesExtensionIndicator:
      "/indicator/courseComplementaryActivitiesExtensionIndicator",
    registerCourseComplementaryActivitiesExtensionIndicator:
      "/indicator/courseComplementaryActivitiesExtensionIndicator/register",

    courseComplementaryActivitiesSearchIndicator:
      "/indicator/courseComplementaryActivitiesSearchIndicator",
    registerCourseComplementaryActivitiesSearchIndicator:
      "/indicator/courseComplementaryActivitiesSearchIndicator/register",

    courseComplementaryActivitiesTeachingIndicator:
      "/indicator/courseComplementaryActivitiesTeachingIndicator",
    registerCourseComplementaryActivitiesTeachingIndicator:
      "/indicator/courseComplementaryActivitiesTeachingIndicator/register",

    courseCompletionWorkIndicator: "/indicator/courseCompletionWorkIndicator",
    registerCourseCompletionWorkIndicator:
      "/indicator/courseCompletionWorkIndicator/register",

    courseCoordinationIndicator: "/indicator/courseCoordinationIndicator",
    registerCourseCoordinationIndicator:
      "/indicator/courseCoordinationIndicator/register",

    courseExtensionActivitiesIndicator:
      "/indicator/courseExtensionActivitiesIndicator",
    registerCourseExtensionActivitiesIndicator:
      "/indicator/courseExtensionActivitiesIndicator/register",

    courseInternshipIndicator: "/indicator/courseInternshipIndicator",
    registerCourseInternshipIndicator:
      "/indicator/courseInternshipIndicator/register",

    studentEgressIndicator: "/indicator/studentEgressIndicator",
    registerStudentEgressIndicator:
      "/indicator/studentEgressIndicator/register",

    studentIngressIndicator: "/indicator/studentIngressIndicator",
    registerStudentIngressIndicator:
      "/indicator/studentIngressIndicator/register",
  },
  public: {
    login: "/login",
    forgotPassword: "/forgot-password",
    recoverPassword: "/recover-password",
  },
} as const;
