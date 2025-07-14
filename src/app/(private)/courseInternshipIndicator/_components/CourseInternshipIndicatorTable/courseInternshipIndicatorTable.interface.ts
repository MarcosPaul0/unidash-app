import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface CourseInternshipIndicatorTableProps {
  internshipIndicators: StudentsApiResponse["students"];
}
