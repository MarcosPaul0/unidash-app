const TEACHER_ROLE = {
  teacher: "teacher",
  internshipManager: "internshipManager",
  courseCompletionWorkManager: "courseCompletionWorkManager",
  complementaryActivitiesManager: "complementaryActivitiesManager",
  extensionActivitiesManager: "extensionActivitiesManager",
} as const;

export type TeacherRole = (typeof TEACHER_ROLE)[keyof typeof TEACHER_ROLE];

const TEACHER_STATUS = {
  active: "active",
  inactive: "inactive",
} as const;

export type TeacherStatus =
  (typeof TEACHER_STATUS)[keyof typeof TEACHER_STATUS];

export interface TeacherApiResponse {
  teacher: {
    id: string;
    name: string;
    status: TeacherStatus;
    teacherRole: TeacherRole;
    createdAt: string;
  };
}

export interface TeachersApiResponse {
  teachers: TeacherApiResponse["teacher"][];
}
