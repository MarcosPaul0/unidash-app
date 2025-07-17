export const SEMESTER = {
  firstSemester: "firstSemester",
  secondSemester: "secondSemester",
} as const;

export type Semester = (typeof SEMESTER)[keyof typeof SEMESTER];

export interface CourseCoordinationIndicatorApiResponse {
  courseCoordinationIndicator: {
    year: number;
    semester: Semester;
    servicesRequestsBySystem: number;
    servicesRequestsByEmail: number;
    meetingsByBoardOfDirectors: number;
    meetingsByUndergraduateChamber: number;
    meetingsByCourseCouncil: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseCoordinationIndicatorsApiResponse {
  courseCoordinationIndicators: CourseCoordinationIndicatorApiResponse["courseCoordinationIndicator"][];
}
