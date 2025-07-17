export const CONCLUSION_TIME = {
  webBrowsing: "webBrowsing",
  softwareInstallation: "softwareInstallation",
  programsAndLanguages: "programsAndLanguages",
  spreadsheets: "spreadsheets",
  osInstallation: "osInstallation",
} as const;

export type ConclusionTime =
  (typeof CONCLUSION_TIME)[keyof typeof CONCLUSION_TIME];

export interface CourseInternshipIndicatorApiResponse {
  courseInternshipIndicator: {
    id: string;
    courseDataId: string;
    advisorId: string;
    studentId: string;
    city: string;
    enterpriseCnpj: string;
    operation: string;
    conclusionTime: ConclusionTime;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CourseInternshipIndicatorsApiResponse {
  courseInternshipIndicators: CourseInternshipIndicatorApiResponse["courseInternshipIndicator"][];
}
