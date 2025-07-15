import { StudentsApiResponse } from "@unidash/interfaces/apiResponses/studentApiResponse.interface";

export interface StudentIngressIndicatorTableProps {
  ingressIndicators: StudentsApiResponse["students"];
}
