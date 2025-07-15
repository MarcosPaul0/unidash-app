export const EDUCATION_LEVEL = {
  technicalEducationInTheField: "technicalEducationInTheField",
  technicalEducationOutsideTheField: "technicalEducationOutsideTheField",
  higherEducationInTheField: "higherEducationInTheField",
  higherEducationOutsideTheField: "higherEducationOutsideTheField",
  notHave: "notHave",
} as const;

export type EducationLevel =
  (typeof EDUCATION_LEVEL)[keyof typeof EDUCATION_LEVEL];

export const ENGLISH_LEVEL = {
  fluent: "fluent",
  intermediary: "intermediary",
  low: "low",
} as const;

export type EnglishLevel =
  (typeof EDUCATION_LEVEL)[keyof typeof EDUCATION_LEVEL];

export const PROFESSIONAL_EXPECTATION = {
  consolidationLaborLaws: "consolidationLaborLaws",
  legalEntity: "legalEntity",
  academicArea: "academicArea",
  publicCompany: "publicCompany",
  doNotKnow: "doNotKnow",
} as const;

export type ProfessionalExpectation =
  (typeof EDUCATION_LEVEL)[keyof typeof EDUCATION_LEVEL];

export const AFFINITY_LEVEL = {
  little: "little",
  medium: "medium",
  high: "high",
} as const;

export type AffinityLevel =
  (typeof AFFINITY_LEVEL)[keyof typeof AFFINITY_LEVEL];

export const DISCIPLINE = {
  math: "math",
  portuguese: "portuguese",
  history: "history",
  biology: "biology",
  chemical: "chemical",
  physical: "physical",
  geography: "geography",
  english: "english",
  technology: "technology",
} as const;

export type Discipline = (typeof DISCIPLINE)[keyof typeof DISCIPLINE];

export const HABIT = {
  teamSports: "teamSports",
  individualSports: "individualSports",
  videoGames: "videoGames",
  reading: "reading",
  socialMedia: "socialMedia",
  traveling: "traveling",
  playingInstrument: "playingInstrument",
} as const;

export type Habit = (typeof HABIT)[keyof typeof HABIT];

export interface AffinityByDiscipline {
  discipline: Discipline;
  affinityLevel: AffinityLevel;
}

export const UNIVERSITY_CHOOSING_REASONS = {
  reputation: "reputation",
  closePeople: "closePeople",
  publicEducation: "publicEducation",
  professionalReasons: "professionalReasons",
  financialReasons: "financialReasons",
  notFirstChoice: "notFirstChoice",
  other: "other",
} as const;

export type UniversityChoosingReasons =
  (typeof UNIVERSITY_CHOOSING_REASONS)[keyof typeof UNIVERSITY_CHOOSING_REASONS];

export const COURSE_CHOOSING_REASONS = {
  reputation: "reputation",
  closePeople: "closePeople",
  publicEducation: "publicEducation",
  professionalReasons: "professionalReasons",
  financialReasons: "financialReasons",
  notFirstChoice: "notFirstChoice",
  other: "other",
} as const;

export type CourseChoosingReasons =
  (typeof COURSE_CHOOSING_REASONS)[keyof typeof COURSE_CHOOSING_REASONS];

export const DOMAIN_TECHNOLOGY = {
  webBrowsing: "webBrowsing",
  softwareInstallation: "softwareInstallation",
  programsAndLanguages: "programsAndLanguages",
  spreadsheets: "spreadsheets",
  osInstallation: "osInstallation",
} as const;

export type DomainTechnology =
  (typeof COURSE_CHOOSING_REASONS)[keyof typeof COURSE_CHOOSING_REASONS];

export interface IngressIndicatorApiResponse {
  indicator: {
    educationLevel: EducationLevel;
    englishLevel: EnglishLevel;
    professionalExpectation: ProfessionalExpectation;
    nightOption: boolean;
    differenceBetweenRelatedCourses: boolean;
    analyzedCoursePedagogicalProject: boolean;
    affinityByDiscipline: AffinityByDiscipline[];
    universityChoosingReasons: UniversityChoosingReasons[];
    courseChoosingReasons: CourseChoosingReasons[];
    domainTechnologies: DomainTechnology[];
  };
}
