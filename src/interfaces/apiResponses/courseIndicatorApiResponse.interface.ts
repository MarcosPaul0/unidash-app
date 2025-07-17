import { Semester } from "./courseCoordinationIndicatorApiResponse.interface";

export interface CourseIndicatorApiResponse {
  courseIndicator: {
    year: number;
    semester: Semester;
    activeDepartureOfStudents: number;
    completedDepartureOfStudents: number;
    maximumTermDepartureOfStudents: number;
    dropOutDepartureOfStudents: number;
    transferDepartureOfStudents: number;
    droppingOutDepartureOfStudents: number;
    removedDepartureOfStudents: number;
    newExamDepartureOfStudents: number;
    difficultyInDisciplineRegistrationLock: number;
    workloadRegistrationLock: number;
    teacherMethodologyRegistrationLock: number;
    incompatibilityWithWorkRegistrationLock: number;
    lossOfInterestRegistrationLock: number;
    otherRegistrationLock: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseIndicatorsApiResponse {
  courseIndicators: CourseIndicatorApiResponse["courseIndicator"][];
}
