import { TeachersApiResponse } from "@unidash/interfaces/apiResponses/teacherApiResponse.interface";

export interface TeachersTableProps {
  teachers: TeachersApiResponse["teachers"];
}
