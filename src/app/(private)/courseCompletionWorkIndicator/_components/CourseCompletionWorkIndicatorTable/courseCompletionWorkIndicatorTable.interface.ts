import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface CourseCompletionWorkIndicatorTableProps {
  completionWorkIndicators: StudentsApiResponse["students"];
}
