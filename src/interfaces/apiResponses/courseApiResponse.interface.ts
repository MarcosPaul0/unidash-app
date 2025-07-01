const COURSE_STATUS = {
  active: "active",
  inactive: "inactive",
} as const;

export type CourseStatus = (typeof COURSE_STATUS)[keyof typeof COURSE_STATUS];

export interface CourseApiResponse {
  course: {
    id: string;
    name: string;
    status: CourseStatus;
    createdAt: string;
  };
}

export interface CoursesApiResponse {
  courses: CourseApiResponse["course"][];
}
