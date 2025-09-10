import { Semester } from "@unidash/api/responses/courseCoordinationIndicatorApiResponse.interface";
import { ConclusionTime } from "@unidash/api/responses/courseInternshipIndicatorApiResponse.interface";

export interface CourseInternshipIndicatorFormProps {
  title: string;
}

export interface CourseInternshipIndicatorFormData {
  year: number;
  semester: Semester;
  student: string;
  teacher: string;
  operation: string;
  city: string;
  enterpriseCnpj: string;
  conclusionTime: ConclusionTime;
}
