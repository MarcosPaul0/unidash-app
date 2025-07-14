import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface CourseIndicatorTableProps {
  courseIndicators: StudentsApiResponse["students"];
}
