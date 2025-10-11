import { Semester } from "../dtos/courseStudentsData.dto";

export interface CourseTeacherWorkloadDataResponse {
  courseTeacherWorkloadData: {
    id: string;
    year: number;
    semester: Semester;
    teacherName: string;
    workloadInHours: string;
    createdAt: string;
  }[];
  totalItems: number;
  totalPages: number;
}
