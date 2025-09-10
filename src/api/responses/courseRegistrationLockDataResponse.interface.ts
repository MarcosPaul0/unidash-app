import { Semester } from "../dtos/courseStudentsData.dto";

export interface CourseRegistrationLockDataResponse {
  courseRegistrationLockData: {
    id: string;
    year: number;
    semester: Semester;
    difficultyInDiscipline: number;
    workload: number;
    teacherMethodology: number;
    incompatibilityWithWork: number;
    lossOfInterest: number;
    other: number;
  }[];
}
