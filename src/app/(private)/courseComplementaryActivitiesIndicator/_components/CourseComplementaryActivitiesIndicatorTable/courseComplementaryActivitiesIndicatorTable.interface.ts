import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface CourseComplementaryActivitiesIndicatorTableProps {
  complementaryActivityIndicators: StudentsApiResponse["students"];
}
