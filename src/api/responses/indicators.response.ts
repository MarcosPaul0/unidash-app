import { Semester } from "../dtos/courseStudentsData.dto";

export type SemestersIndicators = {
  hasDataInFirstSemester: boolean;
  hasDataInSecondSemester: boolean;
  data: { type: string; firstSemester: number; secondSemester: number }[];
};

export type SemestersIndicatorByYear = Record<string, SemestersIndicators>;

export interface CourseIndicatorsResponse {
  departures: SemestersIndicatorByYear;
  registrationLocks: SemestersIndicatorByYear;
  students: {
    year: number;
    entrants: number;
    actives: number;
    locks: number;
    canceled: number;
    vacancies: number;
    subscribers: number;
  }[];
}

export interface CourseCoordinationIndicatorsResponse {
  meetings: {
    year: number;
    meetingsByBoardOfDirectors: number;
    meetingsByUndergraduateChamber: number;
    meetingsByCourseCouncil: number;
  }[];
  services: {
    year: number;
    servicesRequestsBySystem: number;
    servicesRequestsByEmail: number;
  }[];
  actions: {
    year: number;
    resolutionActions: number;
    administrativeDecisionActions: number;
  }[];
  period: number[];
}

export interface WorkStatus {
  semester: Semester;
  enrollments: number;
  defenses: number;
  abandonments: number;
}

export interface OrientationsByTeacher {
  approved: number;
  failed: number;
  teacher: string;
}

export interface CourseWorkCompletionIndicatorsStatus {
  worksStatus: Record<string, WorkStatus[]>;
  orientationsByTeacher: Record<string, OrientationsByTeacher[]>;
}
