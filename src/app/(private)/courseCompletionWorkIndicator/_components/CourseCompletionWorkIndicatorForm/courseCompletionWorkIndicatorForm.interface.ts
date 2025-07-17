import { Semester } from "@unidash/interfaces/apiResponses/courseCoordinationIndicatorApiResponse.interface";

export interface CourseCompletionWorkIndicatorFormProps {
  title: string;
}

export interface CourseCompletionWorkIndicatorFormData {
  year: number;
  semester: Semester;
  enrollmentNumber: number;
  defensesNumber: number;
  abandonmentsNumber: number;
}
