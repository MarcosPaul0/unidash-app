export const STUDENT_STATUS = {
  active: "active",
  inactive: "inactive",
} as const;

export type StudentStatus =
  (typeof STUDENT_STATUS)[keyof typeof STUDENT_STATUS];

export interface StudentApiResponse {
  teacher: {
    id: string;
    name: string;
    status: StudentStatus;
    courseId: string;
    createdAt: string;
  };
}

export interface StudentsApiResponse {
  students: StudentApiResponse["teacher"][];
}
