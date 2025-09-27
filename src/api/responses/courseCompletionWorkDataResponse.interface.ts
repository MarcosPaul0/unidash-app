import { Semester } from "../dtos/courseStudentsData.dto";

export interface CourseCompletionWorkDataResponse {
  courseCompletionWorkData: {
    id: string;
    year: number;
    semester: Semester;
    enrollments: number;
    defenses: number;
    abandonments: number;
    createdAt: string;
  }[];
  totalItems: number;
  totalPages: number;
}
