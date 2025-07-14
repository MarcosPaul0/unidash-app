import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface CourseCoordinationIndicatorTableProps {
  coordinationIndicators: StudentsApiResponse["students"];
}
