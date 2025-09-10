import { StudentsApiResponse } from "@unidash/api/responses/studentApiResponse.interface";

export interface StudentIngressIndicatorTableProps {
  ingressIndicators: StudentsApiResponse["students"];
}
