import { ConclusionTime } from "../dtos/courseInternshipData.dto";
import { Semester } from "../dtos/courseStudentsData.dto";

export interface CourseInternshipDataResponse {
  courseInternshipData: {
    id: string;
    year: number;
    semester: Semester;
    studentMatriculation: string;
    enterpriseCnpj: string;
    role: string;
    conclusionTime: ConclusionTime;
    cityId: string;
    cityName: string;
    advisorId: string;
    advisorName: string;
    createdAt: string;
  }[];
}
