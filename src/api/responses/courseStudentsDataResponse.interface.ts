import { Semester } from "../dtos/courseStudentsData.dto";

export interface CourseStudentsDataResponse {
  courseStudentsData: {
    id: string;
    year: number;
    semester: Semester;
    entrants: number;
    actives: number;
    subscribers: number;
    vacancies: number;
    createdAt: string;
  }[];
  totalItems: number;
  totalPages: number;
}
