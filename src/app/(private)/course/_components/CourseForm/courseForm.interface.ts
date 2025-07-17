import { CourseStatus } from "@unidash/interfaces/apiResponses/courseApiResponse.interface";

export interface CourseFormProps {
  title: string;
}

export interface CourseFormData {
  name: string;
  status: CourseStatus;
}
