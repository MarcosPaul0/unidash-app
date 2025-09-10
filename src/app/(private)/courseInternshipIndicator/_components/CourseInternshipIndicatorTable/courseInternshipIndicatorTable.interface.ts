import { StudentsApiResponse } from "@unidash/api/responses/studentApiResponse.interface";

export interface CourseInternshipIndicatorTableProps {
  internshipIndicators: StudentsApiResponse["students"];
}
