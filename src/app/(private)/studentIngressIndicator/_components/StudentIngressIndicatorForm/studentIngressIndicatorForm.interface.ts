import {
  AffinityLevel,
  CourseChoosingReasons,
  Discipline,
  DomainTechnology,
  EducationLevel,
  EnglishLevel,
  Habit,
  ProfessionalExpectation,
  UniversityChoosingReasons,
} from "@unidash/api/responses/studentIngressIndicatorApiResponse.interface";

export interface StudentIngressIndicatorFormProps {
  title: string;
}

export interface StudentIngressIndicatorFormData {
  educationLevel: EducationLevel;
  englishLevel: EnglishLevel;
  professionalExpectation: ProfessionalExpectation;
  nightOption: boolean;
  differenceBetweenRelatedCourses: boolean;
  analyzedCoursePedagogicalProject: boolean;
  affinityByDiscipline: Record<Discipline, AffinityLevel>;
  habits: Habit[];
  universityChoosingReasons: UniversityChoosingReasons[];
  courseChoosingReasons: CourseChoosingReasons[];
  domainTechnologies: DomainTechnology[];
}
