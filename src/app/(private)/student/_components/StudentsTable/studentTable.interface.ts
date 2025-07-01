import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface StudentTableProps {
  students: StudentsApiResponse["students"];
}
