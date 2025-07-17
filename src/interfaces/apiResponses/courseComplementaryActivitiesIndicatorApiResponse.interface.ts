import { Semester } from "./courseCoordinationIndicatorApiResponse.interface";

export interface CourseComplementaryActivitiesTeachingIndicatorApiResponse {
  courseComplementaryActivitiesTeachingIndicator: {
    year: number;
    semester: Semester;
    subjectMonitoring: number;
    sponsorshipOfNewStudents: number;
    providingTraining: number;
    coursesInTheArea: number;
    coursesOutOfTheArea: number;
    electivesDisciplines: number;
    complementaryCoursesInTheArea: number;
    preparationForTest: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseComplementaryActivitiesSearchIndicatorApiResponse {
  courseComplementaryActivitiesSearchIndicator: {
    year: number;
    semester: Semester;
    scientificInitiation: number;
    developmentInitiation: number;
    publishedArticles: number;
    fullPublishedArticles: number;
    publishedAbstracts: number;
    presentationOfWork: number;
    participationInEvents: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseComplementaryActivitiesExtensionIndicatorApiResponse {
  courseComplementaryActivitiesExtensionIndicator: {
    year: number;
    semester: Semester;
    culturalActivities: number;
    sportsCompetitions: number;
    awardsAtEvents: number;
    studentRepresentation: number;
    participationInCollegiateBodies: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseComplementaryActivitiesIndicatorApiResponse {
  courseComplementaryActivitiesIndicators: {
    courseComplementaryActivitiesTeachingIndicators: CourseComplementaryActivitiesTeachingIndicatorApiResponse["courseComplementaryActivitiesTeachingIndicator"][];
    courseComplementaryActivitiesSearchIndicator: CourseComplementaryActivitiesSearchIndicatorApiResponse["courseComplementaryActivitiesSearchIndicator"][];
    courseComplementaryActivitiesExtensionIndicator: CourseComplementaryActivitiesExtensionIndicatorApiResponse["courseComplementaryActivitiesExtensionIndicator"][];
  };
}
