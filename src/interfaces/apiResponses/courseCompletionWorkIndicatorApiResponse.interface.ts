import { Semester } from "./courseCoordinationIndicatorApiResponse.interface";

export interface CourseCompletionWorkIndicatorApiResponse {
  courseCompletionWorkIndicator: {
    year: number;
    semester: Semester;
    enrollments: number;
    defenses: number;
    abandonments: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseCompletionWorkIndicatorsApiResponse {
  courseCompletionWorkIndicators: CourseCompletionWorkIndicatorApiResponse["courseCompletionWorkIndicator"][];
}
