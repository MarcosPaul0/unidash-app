import { CoursesApiResponse } from "@unidash/interfaces/apiResponses/courseApiResponse.interface";

export interface CoursesTableProps {
  courses: CoursesApiResponse["courses"];
}
