import { Semester } from "../dtos/courseStudentsData.dto";

export interface CourseCoordinationDataResponse {
  courseCoordinationData: {
    id: string;
    year: number;
    semester: Semester;
    servicesRequestsBySystem: number;
    servicesRequestsByEmail: number;
    resolutionActions: number;
    administrativeDecisionActions: number;
    meetingsByBoardOfDirectors: number;
    meetingsByUndergraduateChamber: number;
    meetingsByCourseCouncil: number;
    academicActionPlans: number;
    administrativeActionPlans: number;
    createdAt: string;
  }[];
  totalItems: number;
  totalPages: number;
}
