import { Semester } from "@unidash/interfaces/apiResponses/courseCoordinationIndicatorApiResponse.interface";

export interface CourseExtensionActivitiesIndicatorFormProps {
  title: string;
}

export interface CourseExtensionActivitiesIndicatorFormData {
  year: number;
  semester: Semester;
  specialProjects: number;
  participationInCompetitions: number;
  entrepreneurshipAndInnovation: number;
  eventOrganization: number;
  cultureAndExtensionProjects: number;
  semiannualProjects: number;
  externalInternship: number;
  workNonGovernmentalOrganization: number;
  juniorCompanies: number;
  provisionOfServicesWithSelfEmployedWorkers: number;
}
