export const UNIDASH_API_ROUTES = {
  auth: {
    login: "/sessions",
    refresh: "/token/refresh",
    validateSession: "/validate-token",
  },
  teacher: {
    getById: "/teachers/",
    getBySession: "/teachers/me",
    register: "/teachers",
    getAll: "/teachers",
    getAllOutsideOfCourse: "/teachers/outside-of-course/",
    delete: "/teachers/",
    updateForAdmin: "/teachers/by-admin/",
  },
  teacherCourse: {
    getAllByCourse: "/teacher-courses/by-course/",
    set: "/teacher-courses",
    delete: "/teacher-courses/",
  },
  student: {
    getById: "/students/",
    getBySession: "/students/me",
    getByCourse: "/students/by-course/",
    register: "/students",
    update: "/students/",
    delete: "/students/",
  },
  admin: {
    getBySession: "/admin/me",
  },
  course: {
    getAll: "/courses",
    getById: "/courses/",
    register: "/courses",
    update: "/courses/",
    delete: "/courses/",
  },
  courseStudentsData: {
    getAll: "/course-students-data/",
    register: "/course-students-data",
    delete: "/course-students-data/",
  },
  courseActiveStudentsData: {
    getAll: "/course-active-students-data/",
    register: "/course-active-students-data",
    delete: "/course-active-students-data/",
  },
  courseDepartureData: {
    getAll: "/course-departure-data/",
    register: "/course-departure-data",
    delete: "/course-departure-data/",
  },
  courseInternshipData: {
    getAll: "/course-internship-data/",
    register: "/course-internship-data",
    delete: "/course-internship-data/",
  },
  courseRegistrationLockData: {
    getAll: "/course-registration-lock-data/",
    register: "/course-registration-lock-data",
    delete: "/course-registration-lock-data/",
  },
  courseCoordinationData: {
    getAll: "/course-coordination-data/",
    register: "/course-coordination-data",
    delete: "/course-coordination-data/",
  },
  courseCompletionWorkData: {
    getAll: "/course-completion-work-data/",
    register: "/course-completion-work-data",
    delete: "/course-completion-work-data/",
  },
  courseTeachingComplementaryActivitiesData: {
    getAll: "/course-teaching-complementary-activities-data/",
    register: "/course-teaching-complementary-activities-data",
    delete: "/course-teaching-complementary-activities-data/",
  },
  courseSearchComplementaryActivitiesData: {
    getAll: "/course-search-complementary-activities-data/",
    register: "/course-search-complementary-activities-data",
    delete: "/course-search-complementary-activities-data/",
  },
  courseExtensionComplementaryActivitiesData: {
    getAll: "/course-extension-complementary-activities-data/",
    register: "/course-extension-complementary-activities-data",
    delete: "/course-extension-complementary-activities-data/",
  },
  courseExtensionActivitiesData: {
    getAll: "/course-extension-activities-data/",
    register: "/course-extension-activities-data",
    delete: "/course-extension-activities-data/",
  },
  courseTeacherWorkloadData: {
    getAll: "/course-teacher-workload-data/",
    register: "/course-teacher-workload-data",
    delete: "/course-teacher-workload-data/",
  },
  teacherSupervisedCompletionWorkData: {
    getAll: "/teacher-supervised-completion-work-data/",
    getAllForTeacher: "/teacher-supervised-completion-work-data/for-teacher/",
    register: "/teacher-supervised-completion-work-data",
    registerForTeacher: "/teacher-supervised-completion-work-data/by-teacher",
    delete: "/teacher-supervised-completion-work-data/",
  },
  teacherTechnicalScientificProductionsData: {
    getAll: "/teacher-technical-scientific-productions-data/",
    getAllForTeacher:
      "/teacher-technical-scientific-productions-data-for-teacher",
    register: "/teacher-technical-scientific-productions-data",
    registerForTeacher:
      "/teacher-technical-scientific-productions-data/by-teacher",
    delete: "/teacher-technical-scientific-productions-data/",
  },
  teacherResearchAndExtensionProjectsData: {
    getAll: "/teacher-research-and-extension-projects-data/",
    getAllForTeacher:
      "/teacher-research-and-extension-projects-data-for-teacher",
    register: "/teacher-research-and-extension-projects-data",
    registerForTeacher:
      "/teacher-research-and-extension-projects-data/by-teacher",
    delete: "/teacher-research-and-extension-projects-data/",
  },
  studentIncomingData: {
    getAll: "/student-incoming-data/",
    register: "/student-incoming-data",
    delete: "/student-incoming-data/",
    checkResponded: "/student-incoming-check-responded",
  },
  indicators: {
    getCoordinationIndicators: "/course-coordination-indicators/",
    getCourseIndicators: "/course-indicators/",
    getCompletionWorkIndicators: "/course-completion-work-indicators/",
    getActivitiesIndicators: "/course-activities-indicators/",
    getInternshipIndicators: "/course-internship-indicators/",
    getTeacherProductionsIndicators: "/course-teachers-productions-indicators/",
    getStudentIncomingIndicators: "/course-student-incoming-indicators/",
  },
  city: {
    getAll: "/cities",
  },
} as const;
