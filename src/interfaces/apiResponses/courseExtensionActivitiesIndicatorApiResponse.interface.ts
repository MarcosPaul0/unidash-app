import { Semester } from "./courseCoordinationIndicatorApiResponse.interface";

export interface CourseExtensionActivitiesIndicatorApiResponse {
  courseExtensionActivitiesIndicator: {
    year: number;
    semester: Semester;
    specialProjects: number;
    participationInCompetitions: number;
    entrepreneurshipAndInnovation: number;
    eventOrganization: number;
    externalInternship: number;
    cultureAndExtensionProjects: number;
    semiannualProjects: number;
    workNonGovernmentalOrganization: number;
    juniorCompanies: number;
    provisionOfServicesWithSelfEmployedWorkers: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseExtensionActivitiesIndicatorsApiResponse {
  courseExtensionActivitiesIndicators: CourseExtensionActivitiesIndicatorApiResponse["courseExtensionActivitiesIndicator"][];
}
