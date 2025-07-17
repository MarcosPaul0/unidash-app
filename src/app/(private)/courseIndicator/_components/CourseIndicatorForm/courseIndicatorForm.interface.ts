import { Semester } from "@unidash/interfaces/apiResponses/courseCoordinationIndicatorApiResponse.interface";

export interface CourseIndicatorFormProps {
  title: string;
}

export interface CourseIndicatorFormData {
  year: number;
  semester: Semester;
  numberOfIncomingStudents: number;
  numberOfActiveStudents: number;
  completedDepartureOfStudents: number;
  dropOutDepartureOfStudents: number;
  transferDepartureOfStudents: number;
  droppingOutDepartureOfStudents: number;
  maximumTermDepartureOfStudents: number;
  removedDepartureOfStudents: number;
  newExamDepartureOfStudents: number;
  difficultyInDisciplineRegistrationLock: number;
  workloadRegistrationLock: number;
  teacherMethodologyRegistrationLock: number;
  incompatibilityWithWorkRegistrationLock: number;
  lossOfInterestRegistrationLock: number;
  otherRegistrationLock: number;
}
