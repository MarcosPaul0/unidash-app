import { Semester } from "@unidash/interfaces/apiResponses/courseCoordinationIndicatorApiResponse.interface";
import { ConclusionTime } from "@unidash/interfaces/apiResponses/courseInternshipIndicatorApiResponse.interface";

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
