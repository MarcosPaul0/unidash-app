import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface CourseExtensionActivitiesIndicatorTableProps {
  extensionActivityIndicators: StudentsApiResponse["students"];
}
