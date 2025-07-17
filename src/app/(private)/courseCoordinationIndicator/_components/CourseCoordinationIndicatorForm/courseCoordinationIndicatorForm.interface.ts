import { Semester } from "@unidash/interfaces/apiResponses/courseCoordinationIndicatorApiResponse.interface";

export interface CourseCoordinationIndicatorFormProps {
  title: string;
}

export interface CourseCoordinationIndicatorFormData {
  year: number;
  semester: Semester;
  servicesRequestsBySystem: number;
  servicesRequestsByEmail: number;
  resolutionActions: number;
  administrativeDecisionActions: number;
  meetingsByBoardOfDirectors: number;
  meetingsByUndergraduateChamber: number;
  meetingsByCourseCouncil: number;
}
