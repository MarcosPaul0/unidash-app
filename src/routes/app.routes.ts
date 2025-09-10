export const APP_ROUTES = {
  private: {
    dashboard: "/dashboard",

    courses: "/course/list",
    editCourse: "/course/edit/",
    registerCourse: "/course/register",
    courseTeachers: "/course/teachers/",

    student: "/student/list/",
    editStudent: "/student/edit/",
    registerStudent: "/student/register",

    teachers: "/teacher/list",
    editTeacher: "/teacher/edit/",
    registerTeacher: "/teacher/register",

    courseStudentsData: "/courseStudentsData/list/",
    registerCourseStudentsData: "/courseStudentsData/register",

    courseRegistrationLockData: "/courseRegistrationLockData/list/",
    registerCourseRegistrationLockData: "/courseRegistrationLockData/register",

    courseCoordinationData: "/courseCoordinationData/list/",
    registerCourseCoordinationData: "/courseCoordinationData/register",

    courseDepartureData: "/courseDepartureData/list/",
    registerCourseDepartureData: "/courseDepartureData/register",

    courseCompletionWorkData: "/courseCompletionWorkData/list/",
    registerCourseCompletionWorkData: "/courseCompletionWorkData/register",

    teacherSupervisedCompletionWorkData:
      "/teacherSupervisedCompletionWorkData/list/",
    registerTeacherSupervisedCompletionWorkData:
      "/teacherSupervisedCompletionWorkData/register",

    teacherResearchAndExtensionProjectsData:
      "/teacherResearchAndExtensionProjectsData/list/",
    registerTeacherResearchAndExtensionProjectsData:
      "/teacherResearchAndExtensionProjectsData/register",

    teacherTechnicalScientificProductionsData:
      "/teacherTechnicalScientificProductionsData/list/",
    registerTeacherTechnicalScientificProductionsData:
      "/teacherTechnicalScientificProductionsData/register",

    courseTeachingComplementaryActivitiesData:
      "/courseTeachingComplementaryActivitiesData/list/",
    registerCourseTeachingComplementaryActivitiesData:
      "/courseTeachingComplementaryActivitiesData/register",

    courseSearchComplementaryActivitiesData:
      "/courseSearchComplementaryActivitiesData/list/",
    registerCourseSearchComplementaryActivitiesData:
      "/courseSearchComplementaryActivitiesData/register",

    courseExtensionComplementaryActivitiesData:
      "/courseExtensionComplementaryActivitiesData/list/",
    registerCourseExtensionComplementaryActivitiesData:
      "/courseExtensionComplementaryActivitiesData/register",

    courseExtensionActivitiesData: "/courseExtensionActivitiesData/list/",
    registerCourseExtensionActivitiesData:
      "/courseExtensionActivitiesData/register",

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
