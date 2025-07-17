import { Semester } from "@unidash/interfaces/apiResponses/courseCoordinationIndicatorApiResponse.interface";

export interface CourseComplementaryActivitiesSearchIndicatorFormProps {
  title: string;
  handleNextStep: () => void;
}

export interface CourseComplementaryActivitiesSearchIndicatorFormData {
  year: number;
  semester: Semester;
  scientificInitiation: number;
  developmentInitiation: number;
  publishedArticles: number;
  fullPublishedArticles: number;
  publishedAbstracts: number;
  presentationOfWork: number;
  participationInEvents: number;
}
